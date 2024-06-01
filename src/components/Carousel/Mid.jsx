import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "./carousel.css"
import ProductMid from "./ProductMid";
import { productData } from "./MidItem";
import { useTheme } from '@mui/material/styles';

const setMid = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:'24px',
  textAlign: 'center',
  fontFamily: "Nunito Sans, sans-serif",
  fontOpticalSizing: 'auto',
  fontWeight: 1000,
  fontSize: "36px",
  fontStyle: 'normal',
  fontVariationSettings: '"wdth" 125, "YTLC" 540'
};

const setMidIz = {
    margin: "24px 20px",
    fontFamily: "Nunito Sans, sans-serif",
    fontOpticalSizing: 'auto',
    fontWeight: 1000,
    fontSize: "36px",
    fontStyle: 'normal',
    fontVariationSettings: '"wdth" 125, "YTLC" 540',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center", // Añade esta línea para centrar horizontalmente
  };
  

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px', 
    marginBottom: '20px', 
};

const buttonStyle= {
    outline: "0",
    padding: "8px 20px", 
    color: "white",
    backgroundColor: "#000",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px", 
};

function Mid() {
    const theme = useTheme();
    const isMdOrSmaller = theme.breakpoints.down('md');

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: isMdOrSmaller ? 2 : 3, // Muestra solo una imagen en pantallas md o menores
            slidesToSlide: 1
        }
    };

  
        const product = productData.map((item, index) => (
          <ProductMid
          key={index}
          item={item}
          />
            ));
      

    return (
        <> 
          <Box >    
                <Typography sx={setMid}> FEEL THE UNREAL</Typography>
            </Box>
            <Box sx={buttonContainerStyle}>
                <Button variant="contained" sx={buttonStyle}>
                    Comprar
                </Button>
                <Button variant="contained" sx={buttonStyle}> Ver más</Button>
            </Box>

            <Box>
                <Typography style={setMidIz}> Shadow Elite Nuevo </Typography>
            </Box>

            <Box >
                <Carousel responsive={responsive} infinite>
                    {product}
                </Carousel>
            </Box>
        </>
    );
}

export default Mid;
  