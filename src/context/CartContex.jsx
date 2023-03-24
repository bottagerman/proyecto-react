import { createContext } from "react";

export const CartContex = createContext();

const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  let data = {
    cart:cart,
    setCart: setCart,

  };

  return <CartContex.Provider value={data}>
    {children}
    </CartContex.Provider>;
};

export default CartContexProvider;
