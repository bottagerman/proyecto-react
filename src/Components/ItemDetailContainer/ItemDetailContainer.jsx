import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContex } from "../../context/CartContex";
import { useState, useEffect } from "react";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Swal from 'sweetalert2';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContex);

  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  let quantity = getQuantityById(id);


  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductoSeleccionado({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let producto = {
      ...productoSeleccionado,
      quantity: cantidad,
    };

    agregarAlCarrito(producto);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado exitosamente',
      width: "28em", 
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <div>
      <ItemDetail producto= {productoSeleccionado} onAdd ={onAdd} quantity = {quantity} />
    </div>
  );
};

export default ItemDetailContainer;
