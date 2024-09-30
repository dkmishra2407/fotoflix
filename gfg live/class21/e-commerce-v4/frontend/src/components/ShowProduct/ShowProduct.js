import React,{Fragment, useContext} from 'react';
import Button from '@mui/material/Button';
import CartContext from '../../store/cart-context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ShowProduct = (props) => {

    const { addToCart } = useContext(CartContext);

    const addToCartHandler = () => {
        const newItem = {
            id: props.id,
            title: props.title,
            price: props.price,
            image: props.image,
            qty: 1
        }
        addToCart(newItem);
    }

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item sm={12} xs={12} md={6}>
                    <Card sx={{ maxWidth: 345}}>
                        <CardMedia
                        sx={{ height: 250 }}
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
                            <Button onClick={addToCartHandler} variant="outlined" size="small">Add To Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={12} xs={12} md={6}>
                    <Typography variant="h4">Leave a review</Typography>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default ShowProduct;