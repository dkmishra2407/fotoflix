import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import CartContext from '../../store/cart-context';

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
      <figure>
          <img width="350px" src={props.image} alt="This is a watch"/>
          <h3>{props.title}</h3>
          <h3>$ {props.price }</h3>
          <p>{props.description && props.description.substring(0,100) }</p>
          <Button onClick={addToCartHandler} variant="outlined" size="small">Add To Cart</Button>
      </figure>    
    )
}

export default ShowProduct;