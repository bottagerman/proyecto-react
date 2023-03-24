import { createContext, useState } from "react";

export const CartContex = createContext();

const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCart ([...cart, producto])
    }

  let data = {
    cart:cart,
    agregarAlCarrito:agregarAlCarrito,
};


  return <CartContex.Provider value={data}>
    {children}
    </CartContex.Provider>;
};

export default CartContexProvider;
