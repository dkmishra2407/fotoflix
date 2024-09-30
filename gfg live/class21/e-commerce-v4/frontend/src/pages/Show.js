import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../lib/apis';
import CircularProgress from '@mui/material/CircularProgress';
import ShowProduct from '../components/ShowProduct/ShowProduct';
import { Box } from '@mui/material';

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

    // if (!product) {
    //     return <CircularProgress/>
    // }
    
    return (
        <Box>
            {!product && <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress/>
            </Box> }
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
        </Box>
    )
}

export default Show;



//IIFE : immedietly invoked function expression

// (function () {
    
// })()