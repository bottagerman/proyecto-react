import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className={styles.lista}>
      <Link to={"/"}> <h1 className={styles.logo}>Leather & Steel</h1></Link>
      <ul className={styles.containerList}>
        <Link to="category/cueros" className={styles.navbarItem}>Cuero</Link>
        <Link to="category/cuchillos" className={styles.navbarItem}>Cuchillos</Link>
        <Link to="category/motos" className={styles.navbarItem}>Motos</Link>
        <CartWidget />
      </ul>
    </div>
  );
};

export default Navbar;
