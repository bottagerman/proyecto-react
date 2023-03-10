
import "./Items.module.css"
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Items = ({element}) => {
  return (
    <Card sx={{ width: 250, height: 370 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {element.img}
        title={element.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {element.description + "."} {"Valor $" + element.price}
        </Typography>
      </CardContent>
      <CardActions>
       <Link to={`/itemDetail/${element.id}`}>
        <Button size="small" color="error">Ver detalle</Button>
       </Link>
      </CardActions>
    </Card>
  )
}

export default Items