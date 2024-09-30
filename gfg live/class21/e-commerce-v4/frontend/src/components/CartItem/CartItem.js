import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CartItem(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
        <Box boxShadow={1} sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={props.image}
            alt="Live from space album cover"
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {props.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            $ {props.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}


export default CartItem;