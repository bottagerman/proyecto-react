import React, { useContext } from "react";
import { CartContex } from "../../context/CartContex";
import Button from "@mui/material/Button";
import CartMenu from "../CartMenu/CartMenu";
import Swal from 'sweetalert2'


const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContex);

  const precioTotal = getTotalPrice();

  const vaciarCarrito = () => {
    Swal.fire({
      title: '¿Seguro desea eliminar estos productos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No elminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Carrito vaciado exitosamente', '', 'success')
        clearCart()
      } else if (result.isDenied) {
        Swal.fire('El carrito no se vació', '', 'info')
      }
    })
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <CartMenu elemento={elemento} />
          </div>
        );
      })}
      <div style={{ display: "block" }}>
        <h2> total carrito: ${precioTotal}</h2>

        {cart.length > 0 && (
          <div>
            <Button
              onClick={vaciarCarrito}
              variant="contained"
              color="warning"
              sx={{ mt: 20 }}
            >
              Vaciar Carrito
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 20, ml: "20px" }}
            >
              Comprar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
