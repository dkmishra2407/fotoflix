import styles from "./Product.module.css";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Product = (props) => {    
    return <figure className={styles.product}>
        <img width="350px" src={props.image} alt="This is a watch"/>
        <h3>{props.title}</h3>
        <h3>$ {props.price }</h3>
        <p>{props.description && props.description.substring(0,100) }</p>
        <Button to={`/products/${props.id}`} component={Link} variant="outlined" size="small">Buy Now</Button>
    </figure>    
}

export default Product;