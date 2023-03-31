import React, { useContext } from "react";
import { CartContex } from "../../context/CartContex";
import CartMenu from "../CartMenu/CartMenu";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContex);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cart.map((elemento) => {
        return (
          <div>
            <CartMenu elemento={elemento} />
          </div>
        );
      })}
      <div tyle={{display:"flex"}}>
        <h1 >total carrito</h1>
        <h2> aca va el total</h2>
      </div>
    </div>
  );
};

export default Cart;
