import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from "@mui/material";


const cardStyle = {
    maxWidth: "600px",
    margin: "0 auto 32px",
    textAlign: "center",
    fontFamily: "arial",
    borderRadius: " 12px",
    transition: "transform 0.6s ease",
    position: "relative", // Añadido
  };
  
  const cardStyle2 = {
    width: "400px",
    margin: "0 auto 12px",
    textAlign: "center",
    fontFamily: "arial",
    borderRadius: "12px",
    transition: "transform 0.6s ease",
    position: "relative", // Añadido
  };
  
  const mediaStyle = {
    width: "100%",
    objectFit: 'contain',
  };
  const smallMediaStyle = {
    margin: "0 auto 12px",
    width: "92%",
    border:'none',
    objectFit: 'contain',
     position: "relative", // Añadido
    alignItems: 'center', 
    boxShadow: 'none',
    textAlign: "center",
  };  

const MobileProduct = (props) => {
  const isSmallScreen = useMediaQuery('(max-width:800px)');

  return (
    <Box className={isSmallScreen ? "" : "large-item"}>
      <Card>
        <div style={{  
          display: 'flex',
          justifyContent: 'center', // Centrar horizontalmente
          alignItems: 'center', // Centrar verticalmente
       
        }}>
          <CardMedia
            component="img"
            image={props.item.imageurl}
            alt="product image"
            sx={isSmallScreen? smallMediaStyle : mediaStyle}
          />
         
        </div>
      </Card>
    </Box>
  );
}

export default MobileProduct;
