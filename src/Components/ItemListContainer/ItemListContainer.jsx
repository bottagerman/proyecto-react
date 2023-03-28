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
    const itemsCollection = categoryName ? query(collection(db, "productos"), where("category", "==", categoryName)):collection(db, "productos")
    getDocs(itemsCollection).then((res) => {
      const data = res.docs.map((productos) => {
        return {
          ...productos.data(),
          id: productos.id,
        };
      });
      setItems(data);
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
