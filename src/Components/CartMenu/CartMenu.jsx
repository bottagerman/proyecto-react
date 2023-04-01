import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CartContex } from "../../context/CartContex";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";

const CartMenu = ({ elemento }) => {

  const {deleteProductById } = useContext(CartContex);

  return (
    <div>
      <Card sx={{ display: "flex", m: 5, width: " 60vw" }}>
        <CardMedia
          sx={{ width: 120, height: "auto", mt: "7px", mr: "10px" }}
          image={elemento.img}
          title={elemento.title}
        />
        <CardContent sx={{ display: " flex", alignItems: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            {elemento.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ ml: "30px", fontSize:" 20px", textAling:"center"}}
          >
            ${elemento.price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: "30px", fontSize:"15px", textAling:"center" }}
          >
            {elemento.quantity}
          </Typography>
        </CardContent>
        <CardActions style={{cursor: "pointer"}}>
          <DeleteIcon onClick={() => deleteProductById(elemento.id) }/>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartMenu;
