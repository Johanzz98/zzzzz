import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import MobileProduct from "./MobileProduct";
import { productData, responsive } from "./MobileItem";
import "./carousel.css";
import { Button, Grid, Paper } from '@mui/material';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';


const Titulo = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  
  width:'46%'
};
const NombreProducto = {
  fontSize: "20px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  width:'60%'
};

const detalles = {
  fontSize: "14px",
  fontWeight: "200",
  color: "grey",
  display: 'flex',

  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
  
};
const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: '14px',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  textTransform: 'none',
  fontSize: "18px",

};
const priceStyle = {
  color: "red",
  fontSize: "16px",  
  margin:'2px',

  justifyContent: 'flex-start',
  fontFamily: "Helvetica, sans-serif",
};
const getDescription= {
  fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  marginLeft:'24px',
 
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
};

const horizontal ={
  display: 'flex',
  alignItems: 'center',
  margin:'12px auto 0',
  width:'100%',
 height:'30px',

  backgroundColor: 'white',
  
 }
function Mobile() {
  const product = productData.map((item, index) => (
    <MobileProduct
      item={item}
      key={index}
    />
  ));

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = [...new Set(productData.map(product => product.talla).flat())];

  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '18px' }}>
  <Typography sx={Titulo}>Parrella Clubs</Typography>
  <Typography sx={NombreProducto}>Parrella Polerón Neon PO Yellow Smoke</Typography>
  <Typography sx={detalles}>Polerón para Mujeres</Typography>
  <Typography sx={priceStyle}>$59.990</Typography>
</Box>

      <Box>
        <Carousel responsive={responsive}>
          {product}
        </Carousel>
      </Box>

      <Box sx={{ alignItems: 'center', justifyContent:"center", marginLeft: '20px',paddingTop:'12px', }}>
        <Typography sx={{...NombreProducto}}>
          Selecciona Tu talla
        </Typography>
      </Box>

      {/* Grid de tallas */}
      <Grid container spacing={2} justifyContent="center" sx={{ paddingBottom:'12px',paddingTop:'12px',  }}>
        {sizes.map((size, index) => (
          <Grid item xs={5} sm={2} md={1} key={index}>
            <Paper
              elevation={3}
              style={{
                textAlign: 'center',
                padding: '5px',
                
                boxShadow: 'none',
                borderRadius: '7px',
                border: selectedSize === size ? '1px solid #111' : '1px solid #eeeeee'
              }}
              onClick={() => setSelectedSize(selectedSize === size ? null : size)}
            >
              <Typography sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '4px',
                fontSize: "14px",
                fontWeight: "500",
                color: "black",
                cursor:"pointer",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: 'auto'
              }}>
                {size}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Botón "Señala tu talla" o "Agregar al Carrito" */}
      <Box sx={{ display: 'flex', flexDirection: 'column', display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', }}>
        <Button
          variant="contained"
          sx={{...buttonStyle, backgroundColor: 'black',
          color: 'white',
          borderRadius: '16px',
          fontFamily: "Helvetica, sans-serif",
          width: '95%',
          borderShadow:'none',
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
            
          },
          '&:active': {
            boxShadow: 'none',
           
          }
        }}
          onClick={() => {
            if (selectedSize) {
              // Agregar al carrito
            }
          }}
        >
          {selectedSize ? "Agregar al Carrito" : "Señala tu talla"}
        </Button>
        <Button 
  variant="contained"
  sx={{
    ...buttonStyle,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '16px',
    width: '80%',
    height:'20%',
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
      
    },
    '&:active': {
      boxShadow: 'none',
     
    }
  }}
>
          Favorito ♡
        </Button>
      </Box>

  
        <Box sx={horizontal}>
        <DeliveryDiningOutlinedIcon sx={{marginLeft:'16px',color:'black'}}/>
        <Typography sx={getDescription}>Delivery Coordinado (por estos momentos)</Typography>
        </Box>
        <Box sx={horizontal}>
        <LocalMallOutlinedIcon sx={{marginLeft:'16px',color:'black'}}/>
        <Typography sx={getDescription}>Entrega a coordinación</Typography>
        </Box>
        <Box sx={horizontal}>
        <BrandingWatermarkOutlinedIcon sx={{marginLeft:'16px',color:'black'}}/>
        <Typography sx={getDescription}> Efectivo o Transferencias</Typography>
        </Box>
      
       
       
      
    </>
  );
}

export default Mobile;
