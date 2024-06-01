import React from 'react';
import Box from '@mui/material/Box';
import BannerProduct from './BannerProduct'; 
import { productData, productDataSm } from './BanneriItem'; 

function Banner() {
 return (
    <Box>
      <BannerProduct productData={productData} productDataSm={productDataSm} />
      
    </Box>
    
 );
}

export default Banner;
