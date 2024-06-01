import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';



const BannerProduct = ({ productData, productDataSm }) => {
 const theme = useTheme();
 const isSmScreen = useMediaQuery(theme.breakpoints.down('sm')); 
 const productDataToDisplay = isSmScreen ? productDataSm : productData;

 return (
    <Box>
      {productDataToDisplay.map((product) => (
        <Box key={product.id} sx={{width: "100%", height: "100%"}}>
          <CardMedia 
            component="img"
            height="auto"
            image={product.imageurl}
            alt={product.name}
          />
        </Box>
      ))}
    </Box>
 );
};

export default BannerProduct;
