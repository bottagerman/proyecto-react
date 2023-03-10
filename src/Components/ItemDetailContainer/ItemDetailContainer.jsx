import React from 'react'
import {useParams} from "react-router-dom"
import { productos } from '../../productsMock'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
    const {id} = useParams()
    console.log(id)
    const productoSeleccionado = productos.find ((element)=>element.id === Number(id))
    console.log(productoSeleccionado)
    const onAdd = (cantidad) => {
        console.log(`Se agrego al carrito ${cantidad} de productos`)
    }
  return (
    <div>
        <h1>
            {productoSeleccionado.title}
        </h1>
        <img src={productoSeleccionado.img} alt={productoSeleccionado.title} />
        <ItemCount stock={productoSeleccionado.stock} onAdd = {onAdd}/>
    </div>
  )
}

export default ItemDetailContainer