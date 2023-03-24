import { Difference } from "@mui/icons-material";
import { dialogClasses } from "@mui/material";
import React, { useContext } from "react";
import { CartContex } from "../../context/CartContex";


const Cart = () => {

const {cart} = useContext (CartContex)

  return (
    <div>
      {cart.map((elemento) => {
        return <div key= {elemento.id}>
          <h2>
            {elemento.title}
          </h2>
          <h3>
            {elemento.price}
          </h3>

        </div>
        
      } )}
    </div>
  );
};

export default Cart;
