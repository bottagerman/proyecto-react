import { Difference } from "@mui/icons-material";
import { dialogClasses } from "@mui/material";
import React, { useContext } from "react";
import { CartContex } from "../../context/CartContex";


const Cart = () => {

const {cart, clearCart} = useContext (CartContex)

  return (
    <div style={{width: "100%", display: "flex", justifyContent:"space-evenly", marginTop: "20px"}}>
      {cart.map((elemento) => {
        return <div key= {elemento.id} style={{border: "2px solid brown", borderRadius: "4px", textAlign: "center", padding: "10px"}}>
          <h2>
            {elemento.title}
          </h2>
          <img src={elemento.img} alt={elemento.title} style={{width:"200px", padding:" 10px", height:" 200px", borderRadius: "5px"}}/>
          <h3>
            ${elemento.price}
          </h3>
          <h3>
          Cantidad: {elemento.quantity}
          </h3>
       


        </div>
        
      
      } )}

      <button onClick= {clearCart} > vaciar carrito </button>
    </div>
  );
};

export default Cart;
