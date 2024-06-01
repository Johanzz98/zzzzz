
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { TYPES } from '@/actions/ShoppingActions';
import { useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const styleBox = {
  
  margin:'12px 0',
  color: '#111',
  maxWidth: "360px",
  height: '100px',
  display: 'flex',
  alignItems: "center",
  position: 'relative', 
  
};

const SmallStylebox= {
  
  color: '#111',
  maxWidth: "360px",
  height: '100px',
  display: 'flex',
  alignItems: "center",
  position: 'relative', 
  
  marginBottom:'16px'
  
};


const cart = {
  width: '100px',
  height: '100px',
  objectFit: 'contain',
 
};

const Smallcart = {
  width: '100px',
  height: '100px',
  objectFit: 'contain',

 
  
};

const fontName = {
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  fontSize: '.75rem',
  fontWeight: 600,
  fontStyle: 'normal',
  marginBottom: '12px',
  color: "#111",
  marginBottom: '4px',
  textTransform: "capitalize",

};

const fontDescription = {
  fontSize: '12px',
  color: '#111',
  marginBottom: '4px',
  border: 'none',
  fontWeight: 400,
  textTransform: 'uppercase',
  fontFamily: " 'Helvetica', sans-serif",
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  
};

const column = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin:'0 12px 0'
};

const SmallColumn={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin:'6px 12px 24px',

 
}
const priceStyle = {
  margin: 0,
  fontFamily: "Inter,'Helvetica', sans-serif",
  fontOpticalSizing: 'auto',
  fontWeight: 540,
  fontSize: "14px",
  lineHeight: "1.6",
  color: '#111',
  letterSpacing: "0.0075em",
  
  marginTop: '1.2rem'
};

const SmallpriceStyle={
  margin: 0,
  fontFamily: "Inter,'Helvetica', sans-serif",
  fontOpticalSizing: 'auto',
  fontWeight: 540,
  fontSize: "14px",
  lineHeight: "1.6",
  color: '#111',
  letterSpacing: "0.0075em",
 
  marginBottom: '-4rem'

}

const CartItems = ({ data, delFromCart }) => {

  const theme = useTheme();
 const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { id, name, price, quantity, imageurl, description} = data;
  
  const dispatch = useDispatch();
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(quantity);

  useEffect(() => {
    setCantidadSeleccionada(quantity);
  }, [quantity]);


  const handleIncrement = () => {
    setCantidadSeleccionada(prevCantidad => prevCantidad + 1);
    dispatch({ type: TYPES.QUANTITY, payload: { id, quantity: cantidadSeleccionada + 1 } });
    dispatch({ type:TYPES.TOTAL})
  };
  
  const handleDecrement = () => {
    if (cantidadSeleccionada > 1) {
      setCantidadSeleccionada(prevCantidad => prevCantidad - 1);
      dispatch({ type: TYPES.QUANTITY, payload: { id, quantity: cantidadSeleccionada - 1 } });
      dispatch({ type:TYPES.TOTAL})
    }
  };


  return (
    <Box  style={isSmallScreen ? SmallStylebox : styleBox} > 
    <Grid >
      <Grid item xs={12} md={4.5}  >
        <img src={imageurl} alt={name} style={isSmallScreen ? Smallcart : cart} />
      </Grid>
      
      
      </Grid>
      <Box style={isSmallScreen ? SmallColumn: column} >
          <Typography sx={fontName}>
            {name}
          </Typography>
          <Typography  sx={fontDescription}>
            {description}
          </Typography>
          <Grid item xs={12} md={!isSmallScreen ? 1.5 : false} style={{ display: !isSmallScreen ? 'block' : 'none', visibility: !isSmallScreen ? 'visible' : 'hidden' }}>
  <Box sx={{ position:'relative',bottom:'2px'}}>
  <Typography sx={priceStyle}>${(price * cantidadSeleccionada).toFixed(3)}</Typography>
  </Box>
</Grid>

          {isSmallScreen && (
              <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #bdbdbd',position:'relative', top:'14px'}}>
              <IconButton onClick={handleDecrement} sx={{ width: '24px', height: '12px', }}><RemoveIcon sx={{ fontSize: '16px' }} /></IconButton>
              <Typography sx={{ padding: '2px 8px', fontSize: '14px' }}>{cantidadSeleccionada}</Typography>
              <IconButton onClick={handleIncrement} sx={{ width: '24px', height: '12px'}}><AddIcon sx={{ fontSize: '16px' }} /></IconButton>
            </Box>
            )}
          </Box>
       
        {!isSmallScreen && (
         <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '10px', border: '1px solid #bdbdbd',position: 'relative', top:'32px'  }}>
         <IconButton onClick={handleDecrement} sx={{ width: '24px', height: '32px', }}><RemoveIcon sx={{ fontSize: '16px' }} /></IconButton>
         <Typography sx={{ padding: '2px 8px', fontSize: '14px' }}>{cantidadSeleccionada}</Typography>
         <IconButton onClick={handleIncrement} sx={{ width: '24px', height: '32px'}}><AddIcon sx={{ fontSize: '16px' }} /></IconButton>
       </Box>
        )}
      <Box>
      <Box sx={{ position: 'static' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', top: 0, right: '2px' }}>
      <IconButton sx={{ width: '24px', height: '32px' }}>
 
 
  <DeleteOutlinedIcon variant="contained" color="secondary" onClick={() => delFromCart(id, true)} sx={{ fontSize: '24px', cursor:'pointer' }}/>
   
    </IconButton>
        </Box>
        </Box>
      
  
      </Box>
      {isSmallScreen && (
       <Typography  sx={SmallpriceStyle}>${(price * cantidadSeleccionada).toFixed(3)}</Typography>
      )}
      
    </Box>
 );
};

export default CartItems;