import React, { useContext, useState } from "react";
import { CartContex } from "../../context/CartContex";
import Button from "@mui/material/Button";
import CartMenu from "../CartMenu/CartMenu";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContex);

  const precioTotal = getTotalPrice();

  const [showForm, setShowForm] = useState(false);

  const [orderId, setOrderId] = useState(null);

  const vaciarCarrito = () => {
    Swal.fire({
      title: "¿Seguro desea eliminar estos productos?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `No elminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito vaciado exitosamente", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("El carrito no se vació", "", "info");
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h1>Gracias por su compra!</h1>
        <h3>Su comprobante es: {orderId}</h3>
        <Link to="/"> Seguir comprando </Link>
      </div>
    );
  }

  return (
    <div>
      {" "}
      {!showForm ? (
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
                  onClick={() => setShowForm(true)}
                >
                  Checkout
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
