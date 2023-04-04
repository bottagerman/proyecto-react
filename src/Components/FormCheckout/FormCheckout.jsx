import * as React from "react";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    let total = getTotalPrice();

    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((productos) => {
      let refDoc = doc(db, "productos", productos.id);
      updateDoc(refDoc, { stock: productos.stock - productos.quantity });
      return productos
    });
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 5, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit = {handleSubmit}
    >
      <div style={{border:"2px solid black", marginTop:"25px"}}>

        <h3 style={{margin:"25px"}}>Complete el formulario para finalizar la compra:</h3>

        <TextField
          required
          id="outlined-required"
          label="Nombre y apellido"
          value={userData.nombre}
          onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <TextField
          required
          id="outlined-number"
          label="Telefono"
          type="number"
          value={userData.telefono}
          onChange={(e) =>
            setUserData({ ...userData, telefono: e.target.value })
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ mt: 5, ml: "20px" }}
        >
          Comprar
        </Button>
      </div>
    </Box>
  );
};

export default FormCheckout;
