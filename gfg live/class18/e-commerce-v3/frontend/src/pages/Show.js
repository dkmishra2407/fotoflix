import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../lib/apis';
import CircularProgress from '@mui/material/CircularProgress';
import ShowProduct from '../components/ShowProduct/ShowProduct';

const Show = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async() => {
            try {
                const data = await fetchProductById(productId);
                setProduct(data);
            }
            catch (e) {
                console.log('something went wrong while fetching product by id');
            } 
       })()
    }, []);

    if (!product) {
        return <CircularProgress/>
    }
    
    return (
        <div>
            <h1>Show page</h1>
            {
                product
                &&
                <ShowProduct
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                />
            }
        </div>
    )
}

export default Show;



//IIFE : immedietly invoked function expression

// (function () {
    
// })()