import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ClipLoader from "react-spinners/ClipLoader";
import { collection, getDocs, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "35vh auto",
  
};

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = categoryName
      ? query(
          collection(db, "productos"),
          where("category", "==", categoryName)
        )
      : collection(db, "productos");
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

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <ClipLoader color="rgb(128, 64, 0)" size={100} cssOverride={override} />
      )}
    </div>
  );
};

export default ItemListContainer;
