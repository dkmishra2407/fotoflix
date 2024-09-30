import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Product(props) {
  return (
    <Card sx={{ maxWidth: 345, margin:'5px auto' }}>
      <CardMedia
        sx={{ height: 180 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.title.substring(0,40)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.description.substring(0,150)}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                $ {props.price}
            </Typography>
      </CardContent>
        <CardActions>
            <Button to={`/products/${props.id}`} component={Link} variant="outlined" size="small">Buy Now</Button>
        </CardActions>
    </Card>
  );
}

export default Product;
