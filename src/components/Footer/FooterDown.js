import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const general = {
 backgroundColor: 'black', // Fondo negro
 color: 'white', // Texto blanco
 textAlign: 'center', // Texto centrado
};

const FooterDown = () => {
 return (
    <Container style={general} maxWidth={false}>
      <Grid container justifyContent="center">
        <Grid item>
          <Box py={4}>
            <Typography variant="body2">
              © {new Date().getFullYear()} PARRELLA SpA. Todos los derechos reservados
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
 );
};

export default FooterDown;
