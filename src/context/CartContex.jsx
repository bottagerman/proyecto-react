import { createContext, useState } from "react";

export const CartContex = createContext();

const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);

    if (existe) {
    } else {
      setCart([...cart, producto]);
    }
  };
  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  let data = {
    cart: cart,
    agregarAlCarrito: agregarAlCarrito,
  };

  return <CartContex.Provider value={data}>{children}</CartContex.Provider>;
};

export default CartContexProvider;
