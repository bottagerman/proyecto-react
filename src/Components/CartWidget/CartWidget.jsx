import { BsFillCartPlusFill } from "react-icons/bs";
import styles from "./CartWidget.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContex } from "../../context/CartContex";


const CartWidget = () => {

  const {cart} = useContext (CartContex); 

  return (
    <Link to={"/cart"}>
      <div style={{
        position: "relative",
        color: "black",
        

      }}>
        <BsFillCartPlusFill size={35} /></div>
      <div className= {styles.cartCounter} >
      <span>
       
      </span>
      </div>
    </Link>
  );
};

export default CartWidget;
