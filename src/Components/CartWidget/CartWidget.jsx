import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContex } from "../../context/CartContex";
import Badge from '@mui/material/Badge';



const CartWidget = () => {

  const {getTotalQuantity} = useContext (CartContex); 

  const total = getTotalQuantity ()

  return (
    <Link to={"/cart"}>
      <div style={{
        position: "relative",
        color: "black",

      }}>
        <Badge badgeContent = {total} color = "error" showZero> 
        <BsFillCartPlusFill size={35} />
        </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;
