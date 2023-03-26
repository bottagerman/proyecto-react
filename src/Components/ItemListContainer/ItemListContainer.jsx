import "./ItemListContainer.css";
import { productos } from "../../productsMock.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  const productosFiltrados = productos.filter(
    (element) => element.category === categoryName
  );

  useEffect(() => {
/*     const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : productos);
    });
    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      }); */
      const itemsCollection = collection(db, "productos");
      getDocs(itemsCollection)
      .then( res => console.log(res) )
  }, [categoryName]);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
