import React from 'react';
import Box from '@mui/material/Box';
import LastBannerProduct from './LastBannerProduct'; 
import { productData,productDataSm } from './LastBannerItem'; 


function LastBanner() {
  return (
    <Box >
      <LastBannerProduct productData={productData} productDataSm={productDataSm}  />
    </Box>
  );
}

export default LastBanner;
