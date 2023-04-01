import React, { useContext } from "react";
import { CartContex } from "../../context/CartContex";
import Button from "@mui/material/Button";
import CartMenu from "../CartMenu/CartMenu";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContex);

  const precioTotal = getTotalPrice ( )

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <CartMenu elemento={elemento} />
          </div>
        );
      })}
      <div style={{ display: "block" }}>
        <h2> total carrito: ${precioTotal}</h2>
        <div>
          <Button
            onClick={clearCart}
            variant="contained"
            color="warning"
            sx={{ mt: 20 }}
          >
            Vaciar Carrito
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 20, ml: "20px" }}
          >
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
