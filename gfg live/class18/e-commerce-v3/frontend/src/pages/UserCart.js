import React,{useContext} from 'react';
import CartContext from '../store/cart-context';
import { Box } from '@mui/material';
import CartItem from '../components/CartItem/CartItem';

const UserCart = () => {

  const { cart } = useContext(CartContext);

  if (cart.length===0) {
    return <p>Cart is empty!</p>
  }

  return (
    <Box>
      {
          cart.map((item) => {
            return <CartItem
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
        })
      }
    </Box>
  )
}

export default UserCart;