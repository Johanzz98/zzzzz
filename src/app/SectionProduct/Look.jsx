import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import LookProduct from "./LookProduct";
import { productData, responsive } from "./LookItems";
import "./carouselInfo.css"
import { Divider } from '@mui/material';

const nombreProductoStyles = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#00000",
  display: 'flex',
  marginLeft:'8px',
  marginBottom:'18px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
 paddingTop:'12px',
  lineHeight: '24px',
};

function Look() {
  const product = productData.map((item, index) => (
    <LookProduct
      item={item}
      key={index}
    />
  ));

  return (
    <Box sx={{ paddingTop:'12px',}}>
      <Box sx={{marginTop:'24px'}}>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
            
            
          }}
        >
          <Divider sx={{
              width: '103%',
              height: 8,
                bgcolor: '#eeeeee',
               color:'red'
          }} />
        </Box>
        <Typography sx={nombreProductoStyles}>Completa Tu Look</Typography>
        <Carousel responsive={responsive} className="look-carousel">
          {product}
        </Carousel>
      </Box>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop:'24px',
            
          }}
        >
          <Divider sx={{
              width: '97%',
                bgcolor: '#f5f5f5',
                textAlign: "center", 
          }} />
        </Box>
      <Box>
        <Typography sx={nombreProductoStyles}>QUIZÁ TAMBIÉN TE GUSTE...</Typography>
        <Carousel responsive={responsive} className="look-carousel">
          {product}
        </Carousel>
      </Box>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop:'24px',
            
          }}
        >
          <Divider sx={{
              width: '97%',
                bgcolor: '#f5f5f5',
                textAlign: "center", 
          }} />
        </Box>
      <Box>
        <Typography sx={nombreProductoStyles}>OTROS TAMBIÉN COMPRARON</Typography>
        <Carousel responsive={responsive} className="look-carousel">
          {product}
        </Carousel>
      </Box>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop:'24px',
            
          }}
        >
          <Divider sx={{
              width: '97%',
                bgcolor: '#f5f5f5',
                textAlign: "center", 
          }} />
        </Box>
    </Box>
  )
}

export default Look;
