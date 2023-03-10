import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to={"/cart"}>
      <BsFillCartPlusFill size={35} />
    </Link>
  );
};

export default CartWidget;
