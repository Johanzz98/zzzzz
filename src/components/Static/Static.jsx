import React from 'react';
import Box from '@mui/material/Box';
import StaticProduct from './StaticProduct'; // Asegúrate de importar el componente correctamente
import { productData, productDataSm } from './StaticItem'; // Asegúrate de importar los datos de los productos correctamente

function Static() {
 return (
    <Box >
      <StaticProduct productData={productData}  productDataSm={productDataSm} />
      
    </Box>
    
 );
}

export default Static;
