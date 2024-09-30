import React from 'react';
import Product from "../Product/Product";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


const ProductList = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            {
                    props.products.map(function (product) {
                        return (
                            <Grid  key={product._id} item xs={12} md={6} lg={4}>
                                    <Product
                                        id={product._id}
                                        title={product.title}
                                        price={product.price}
                                        description={product.description}
                                        image={product.image}
                                    />
                            </Grid>
                        )
                        })
                }
            </Grid>
        </Box>
    )
}

export default ProductList