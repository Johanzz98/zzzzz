"use client";
import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Estilos definidos previamente...
const helloName = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  marginBottom:'24px'
};

const detalles = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
};

const cuadros = {
  display: 'flex',
  marginBottom: '-4px',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  
  backgroundColor:"white"
};

const cuadrosRellenos = {
  backgroundColor: 'white',
  justifyContent: 'flex-start',
  position: "relative",
  display: "flex",
  
  padding: '18px',
  margin: '12px',
  marginLeft: 'auto',
  border:'1px solid grey' , 
};

const Perfil = () => {
  const [isHoveredResumen, setIsHoveredResumen] = useState(false);
  const [isHoveredDireccion, setIsHoveredDireccion] = useState(false);
  const [isHoveredPreferencias, setIsHoveredPreferencias] = useState(false);
  const [isHoveredListaDeDesoes, setIsHoveredListaDeDesoes] = useState(false);

  return (
    <Box sx={{ backgroundColor:'white',width:'82%' }}>
     
     <Box sx={cuadros}>
        <Typography sx={helloName}>
          Resumen de cuenta
        </Typography>
      
      </Box>
      <Box  sx={{
           ...cuadrosRellenos,
            bgcolor: isHoveredResumen? 'black' : 'white',
            color: isHoveredResumen? 'white' : 'black',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHoveredResumen(true)}
          onMouseLeave={() => setIsHoveredResumen(false)}
        >
          <Typography sx={{...detalles, fontWeight:"600",color: isHoveredResumen? "white" : "black" }}>
            DATOS PERSONALES
          </Typography>
          <IconButton style={{ marginLeft: 'auto' }}>
            <KeyboardArrowRightIcon style={{ color: 'black' }} />
          </IconButton>
        </Box>
        <Box
          sx={{
           ...cuadrosRellenos,
            bgcolor: isHoveredDireccion? 'black' : 'white',
            color: isHoveredDireccion? 'white' : 'black',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHoveredDireccion(true)}
          onMouseLeave={() => setIsHoveredDireccion(false)}
        >
          <Typography sx={{...detalles, color: isHoveredDireccion? "white" : "black" }}>
            DIRECCIONES
          </Typography>
          <IconButton style={{ marginLeft: 'auto' }}>
            <KeyboardArrowRightIcon style={{ color: 'black' }} />
          </IconButton>
        </Box>

        <Box
          sx={{
           ...cuadrosRellenos,
            bgcolor: isHoveredPreferencias? 'black' : 'white',
            color: isHoveredPreferencias? 'white' : 'black',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHoveredPreferencias(true)}
          onMouseLeave={() => setIsHoveredPreferencias(false)}
        >
          <Typography sx={{...detalles, color: isHoveredPreferencias? "white" : "black" }}>
            PREFERENCIAS
          </Typography>
          <IconButton style={{ marginLeft: 'auto' }}>
            <KeyboardArrowRightIcon style={{ color: 'black' }} />
          </IconButton>
        </Box>

        <Box
          sx={{
           ...cuadrosRellenos,
            bgcolor: isHoveredListaDeDesoes? 'black' : 'white',
            color: isHoveredListaDeDesoes? 'white' : 'black',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHoveredListaDeDesoes(true)}
          onMouseLeave={() => setIsHoveredListaDeDesoes(false)}
        >
          <Typography sx={{...detalles, color: isHoveredListaDeDesoes? "white" : "black" }}>
            LISTA DE DESEOS
          </Typography>
          <IconButton style={{ marginLeft: 'auto' }}>
            <KeyboardArrowRightIcon style={{ color: 'black' }} />
          </IconButton>
        </Box>
      </Box>
    
   

  );
};

export default Perfil;
