import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const styleBox = {
 padding: "1rem",
 margin: "1rem",
 boxShadow: '0 0 1rem #00000025',
 color: "blue",
};

const ProductItem = ({ data, addToCart }) => {
 let { id, name, price } = data;
 return (
    <Box style={styleBox}>
      <Typography variant="h4">
        {name}
      </Typography>
      <Typography variant="h5">
        ${price}.00
      </Typography>
      <Button variant="contained" color="primary" onClick={() => addToCart(id)}>
        Agregar
      </Button>
    </Box>
 );
}

export default ProductItem;
