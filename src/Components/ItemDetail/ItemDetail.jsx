import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto, onAdd, quantity }) => {
  
 
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "40px" }}>
      <img
        style={{
          width: "35vw",
          height: "auto",
        }}
        src={producto.img}
        alt=""
      />
      <div
        style={{
          marginLeft: "40px",
        }}
      >
        <React.Fragment>
          <div style={{ border: "1px solid #74614E", borderRadius: "4px", paddingBottom:"15px" }}>
            <CardContent>
              <Typography sx={{ fontSize: 30 }} color="#74614E" gutterBottom>
                {producto.title}
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5, fontSize: 20 }} color="#74614E">
                Categoria: {producto.category}
                <br />
                Precio: ${producto.price}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 17 }}>
                {producto.description}.
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <ItemCount stock={producto.stock} onAdd={onAdd} initial = {quantity}/>
            </CardActions>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default ItemDetail;
