import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContex } from "../../context/CartContex";
import { productos } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {agregarAlCarrito} = useContext (CartContex)

  const productoSeleccionado = productos.find(

    (element) => element.id === Number(id)
  );

  const onAdd = (cantidad) => {

    let producto = {
      ...productoSeleccionado,
      quantity: cantidad

    }

    agregarAlCarrito(producto)


  };
  return (
    <div>
      <h1>{productoSeleccionado.title}</h1>
      <img src={productoSeleccionado.img} alt={productoSeleccionado.title} />
      <ItemCount stock={productoSeleccionado.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
