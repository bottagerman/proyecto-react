import { createContext, useState } from "react";

export const CartContex = createContext();

const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);

    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };
  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const clearCart = ( ) => {
    setCart ([])
  }

  const getTotalQuantity = () =>{

    const total = cart.reduce((acc, elemento)=>{
      return acc + elemento.quantity 
    }, 0 )
    return total
  }

  const getTotalPrice = () =>{
    
    let precioTotal = cart.reduce((acc, elemento) =>{
      return acc + (elemento.quantity * elemento.price)
    }, 0 )

    return precioTotal
  }

  let data = {
    cart,
    agregarAlCarrito,
    clearCart, 
    getTotalQuantity,
    getTotalPrice
  };

  return <CartContex.Provider value={data}>{children}</CartContex.Provider>;
};

export default CartContexProvider;
