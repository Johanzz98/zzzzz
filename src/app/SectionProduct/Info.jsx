"use client";
import { Box, Button, Divider, Typography, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from "react-redux";
import { TYPES } from "@/actions/ShoppingActions";

const Titulo = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  marginBottom:'12px'
};

const NombreProducto = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  
};
const getDescription= {
  fontSize: "18px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  marginLeft:'12px',
 paddingTop:'8px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
};


const detalles = {
  fontSize: "14px",
  fontWeight: "200",
  color: "grey",
  display: 'flex',
  marginTop: '12px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
  
};

const priceStyle = {
  color: "red",
  fontSize: "16px",  
  margin:'2px',
  marginTop:'12px',
  justifyContent: 'flex-start',
  fontFamily: "Helvetica, sans-serif",
};
const buttonStyle = {
  border: "none",
  outline: "0",
  marginTop: '14px',
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  
  fontSize: "18px",
  marginBottom:'12px',
};
const horizontal ={
  display: 'flex',
  alignItems: 'center',
  margin:'8px auto 0'
 
}


const Info = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddingFavorite, setIsAddingFavorite] = useState(false); // Estado de carga para añadir a favoritos
  const [isRemovingFavorite, setIsRemovingFavorite] = useState(false); // Estado de carga para quitar de favoritos
  const [isHoveredStar, setIsHoveredStar] = useState(false);
  const handleFavoriteClick = () => {
    if (isFavorite) {
      setIsRemovingFavorite(true); // Iniciar carga para quitar de favoritos
      // Simular una solicitud asincrónica, como una llamada a una API
      setTimeout(() => {
        setIsFavorite(false);
        setIsRemovingFavorite(false); // Detener carga para quitar de favoritos
      }, 1000); // Tiempo simulado de respuesta
    } else {
      setIsAddingFavorite(true); // Iniciar carga para añadir a favoritos
      // Simular una solicitud asincrónica, como una llamada a una API
      setTimeout(() => {
        setIsFavorite(true);
        setIsAddingFavorite(false); // Detener carga para añadir a favoritos
      }, 1000); // Tiempo simulado de respuesta
    }
  };

  return (
    
    <Box style={{ position: 'fixed', marginRight:'24px', zIndex: '1000' }}>
      <Divider orientation="vertical" flexItem sx={{ position: 'absolute', top: 0, bottom: 0, left: -30,height:'2000%', borderLeft: '1px solid grey' }} />
        
    <Typography sx={Titulo}>Nombre del Producto</Typography>
      <Box>
      
    
      
  <Typography sx={NombreProducto}>Parrella Polerón Neon PO Yellow Smoke</Typography>
  <Typography sx={detalles}>Polerón para Mujeres</Typography>
 
        <Typography sx={priceStyle}>$59.990</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <Button variant="contained" sx={buttonStyle}>
    Agregar al Carrito
  </Button>
  <Button variant="contained" sx={buttonStyle}>
    Favorito ♡
  </Button>
</Box>

<Box sx={{ backgroundColor: '#f5f5f5',
  
  borderRadius: '12px'}}>
        <Box sx={horizontal}>
        <DeliveryDiningOutlinedIcon/>
        <Typography sx={getDescription}>Delivery Coordinado (por estos momentos)</Typography>
        </Box>
        <Box sx={horizontal}>
        <LocalMallOutlinedIcon/>
        <Typography sx={getDescription}>Entrega a coordinación</Typography>
        </Box>
        <Box sx={horizontal}>
        <BrandingWatermarkOutlinedIcon/>
        <Typography sx={getDescription}> Efectivo o Transferencias</Typography>
        </Box>
        </Box>
       
       
      </Box>
   
    </Box>
  );
};

export default Info;

