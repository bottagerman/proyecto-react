import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

const CartMenu = ({ elemento }) => {
  return (
    <div>
      <Card sx={{ display: "flex", m: 5, width: " 60vw" }}>
        <CardMedia
          sx={{ width: 120, height: "auto", mt: "7px", mr: "10px" }}
          image={elemento.img}
          title={elemento.title}
        />
        <CardContent sx={{ display: " flex", alignItems: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {elemento.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: "20px" }}
          >
            {elemento.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: "20px" }}
          >
            {elemento.quantity}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: "20px", fontSize: "17px", height: "bold" }}
          >
            ${elemento.price}
          </Typography>
        </CardContent>
        <CardActions>
          <DeleteIcon />
        </CardActions>
      </Card>
    </div>
  );
};

export default CartMenu;
