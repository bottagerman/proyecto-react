import "./ItemListContainer.css";
import { productos } from "../../productsMock.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "productos");
    let consulta = undefined;

    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }
    consulta.then((res) => {
      res.docs.map((productos) => {
        return {
          ...productos.data(),
          id: productos.id,
        };
      });
      setItems(productos);
    });
  }, [categoryName]);
  console.log(productos.category)
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
