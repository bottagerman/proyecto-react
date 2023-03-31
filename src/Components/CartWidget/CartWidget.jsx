import { BsFillCartPlusFill } from "react-icons/bs";
import styles from "./CartWidget.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContex } from "../../context/CartContex";
import Badge from '@mui/material/Badge';



const CartWidget = () => {

  const {cart} = useContext (CartContex); 

  return (
    <Link to={"/cart"}>
      <div style={{
        position: "relative",
        color: "black",

      }}>
        <Badge badgeContent = {cart.lenght} color = "error" showZero> 
        <BsFillCartPlusFill size={35} />
        </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;
