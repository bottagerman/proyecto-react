import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="lista">
      <li>
        <a href="#">Cuero</a>
      </li>
      <li>
        <a href="#">Cuchillos</a>
      </li>
      <li>
        <a href="#">Motos</a>
      </li>
      <li>
        <a href="#">Contacto</a>
      </li>
      <a href="#"><CartWidget /></a>
    </ul>
  );
};

export default Navbar;
