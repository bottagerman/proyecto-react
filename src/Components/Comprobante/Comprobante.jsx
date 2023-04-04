import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Comprobante = ({ orderId }) => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
    <Card sx={{ minWidth: 275, mt:"25px", border:" 2px solid black", borderRadius:"4px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Leather & Steel{" "}
        </Typography>
        <Typography variant="h5" component="div">
          Su compra fue realizada con exito!{" "}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Muchas gracias por confiar en nosotros
        </Typography>
        <Typography variant="body2">
          Su codigo de compra es: <br />
          {orderId}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/" style={{textDecoration:"none"}}>
          <Button variant="contained" color="primary">Seguir comprando</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
};

export default Comprobante;
