import React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const StaticProduct = ({ productData, productDataSm }) => {
 const theme = useTheme();
 const isSmScreen = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si la pantalla es de tamaño 'sm'
 const isXsScreen = useMediaQuery(theme.breakpoints.down('xs')); // Verifica si la pantalla es de tamaño 'xs'

 // Selecciona el conjunto de datos basado en el tamaño de la pantalla
 const productDataToDisplay = isSmScreen ? productDataSm : productData;

 // Ajusta el tamaño de las imágenes basado en el tamaño de la pantalla
 const imageSize = isXsScreen ? 120 : isSmScreen ? 248 : 496;

 return (
    <Box sx={{ width: 'auto', height: 'auto', padding: "19px" }}>
      <ImageList variant="woven" cols={isXsScreen ? 1 : isSmScreen ? 2 : 6} gap={12}>
        {productDataToDisplay.map((product) => (
          <ImageListItem key={product.id}>
            <img          
              srcSet={`${product.imageurl}?w=${imageSize}&fit=crop&auto=format&dpr=2 2x`}
              src={`${product.imageurl}?w=${imageSize}&fit=crop&auto=format`}
              alt={product.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
 );
};

export default StaticProduct;
