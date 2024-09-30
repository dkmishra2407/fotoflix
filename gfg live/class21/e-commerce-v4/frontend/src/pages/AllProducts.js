import React, {useState, useEffect} from 'react';
import { Typography } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { fetchAllProducts } from '../lib/apis';
import ProductList from '../components/ProductList/ProductList';

const AllProducts = () => {
    
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    (
      async () => {
        try {
          const products = await fetchAllProducts();
          setProducts(() => {
            return products;
          })
        }
        catch (err) {
          
        }
      }
    )()
  }, []);

    
  return (
    <div>
      <Typography variant="h3" sx={{ marginBottom: '1rem', display:'flex', alignItems:'center' }}><LocalMallIcon sx={{ fontSize:'100%'} } /> Shopping Cart</Typography>
        <ProductList products={ products } />
      </div>
  )
}

export default AllProducts