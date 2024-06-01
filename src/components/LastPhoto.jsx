import React from 'react';
import { Box, CardContent, Grid, Hidden, Typography } from '@mui/material';

const setMidIz = {
  fontFamily: "Nunito Sans, sans-serif",
  fontOpticalSizing: 'auto',
  fontWeight: 600,
  textAlign: "center",
  fontSize: "24px",
  fontStyle: 'normal',
  fontVariationSettings: '"wdth" 125, "YTLC" 540',
  marginTop:'8px'
};

export default function LastPhoto() {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {/* Para pantallas extra pequeñas y pequeñas, ocupa 6 columnas */}
      <Hidden mdDown>
      <Grid item xs={12} sm={4}>
        <Box>
          <CardContent>
            <img
            src= "../../assets/frans.jpg"
              
              loading="lazy"
              alt="Image 1"
              style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
            />
            

          </CardContent>
        </Box>
      </Grid>
      {/* Para pantallas medianas o mayores, muestra este elemento */}
      
      

        {/* Segunda imagen */}
        <Grid item xs={12} sm={4}>
          <CardContent>
            <img
              src="https://i.pinimg.com/564x/0f/62/04/0f62046004c2efecd1aec5757c0e43f8.jpg"
              loading="lazy"
              alt="Image 2"
              style={{ width: '100%', height: '600px', objectFit: 'contain' }}
            />
          </CardContent>
        </Grid>

        {/* Tercera imagen */}
        <Grid item xs={12} sm={4}>
          <CardContent>
            <img
          
              srcSet="https://i.pinimg.com/564x/17/59/7c/17597c853770adab40fe91d790ff0219.jpg"
              loading="lazy"
              alt="Image 3"
              style={{ width: '100%', height: '600px', objectFit: 'fill' }}
            />
          </CardContent>
        </Grid>
      </Hidden>
      {/* Para el resto de pantallas, muestra este elemento */}
      <Hidden smUp>
        <Grid item xs={12} sm={6}>

        <Box>
          <CardContent>
            <img
              
              srcSet="https://i.pinimg.com/564x/ec/22/20/ec222045c284341b560d6a1a740c2266.jpg"
              
              loading="lazy"
              alt="Image 1"
              style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
            />
            

          </CardContent>
        </Box>
          <Box>
            <CardContent>
              <img
              
                srcSet="https://i.pinimg.com/564x/9c/45/9b/9c459b4e11dee487885c2ae182fb8f4b.jpg"
                loading="lazy"
                alt="Image 2"
                style={{ width: '100%', height: '600px', objectFit: 'contain' }} // Asegura que la imagen se ajuste al contenedor
              />
           
            </CardContent>
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  );
}
