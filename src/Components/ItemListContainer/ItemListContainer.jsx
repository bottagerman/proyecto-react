import "./ItemListContainer.css"
import {productos} from "../../productsMock.js"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const {categoryName} = useParams ();
  const [items, setItems] = useState ([]);

  const productosFiltrados = productos.filter( (element) => element.category === categoryName)

  useEffect( () =>{
    const productList = new Promise((resolve, reject) => {
      resolve (categoryName ? productosFiltrados : productos)
    })
    productList 
    .then ((res)=>{setItems(res)})
    .catch ((error)=>{console.log(error)})
  }, [categoryName])
  console.log(items)

  return(
    <div>
      <ItemList items={items}/>
    </div>
  );
}


export default ItemListContainer;
