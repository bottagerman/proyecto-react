import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContex } from "../../context/CartContex";
import { useState, useEffect } from "react";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito } = useContext(CartContex);

  const [productoSeleccionado, setProductoSeleccionado] = useState({});

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
  };

  return (
    <div>
      <ItemDetail producto= {productoSeleccionado} onAdd ={onAdd} />

    </div>
  );
};

export default ItemDetailContainer;
