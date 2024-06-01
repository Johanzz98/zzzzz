import React, { useEffect, useState } from "react";
import { Drawer, Box, Typography, IconButton, Paper, Link } from "@mui/material";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CasesIcon from '@mui/icons-material/Cases';
import CartItems from "../Cart/CartItems";
import { TYPES } from '@/actions/ShoppingActions';
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import Badge from '@mui/material/Badge';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
const titulo = {
 fontSize: '0.9375rem',
 color: '#111',
 width: '100%',
 textAlign: 'center',
 fontWeight: 700,

};

const totalStyle ={
  fontSize: "20px",
  fontWeight: "700",
  color: "#111",
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center', 
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
}


const detalleStyle ={
  fontSize: "13px",
  fontWeight: "500",
  color: "#757575",
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center', 
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  textDecoration: "none",
  '&:hover': { color: 'black' },
  cursor:'pointer',
  margin:"8px 0"
}

const Comprando={
  display: "block",
  fontFamily: "Helvetica,sans-serif",
  width: "210px",
  fontWeight: "400",
  fontSize: "13px",
  margin: "0 auto",
  color: "#757575",
  padding: 0,
  textDecoration: "none",
  '&:hover': { color: 'black' },
  cursor:'pointer',
  marginTop:'0.75rem'
};

const arrowIconStyle = {
  verticalAlign: 'middle', // Alinear verticalmente con el texto
  fontSize: "16px",
};

const SadStyle = {
  verticalAlign: 'middle', // Alinear verticalmente con el texto
  fontSize: "20px", // Ajustar tamaño de la carita
  marginTop: "-2px" // Ajustar margen inferior para mejorar la alineación vertical
};

const CartDrawers= () => {
 const dispatch = useDispatch();
 const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 const { cart, total } = useSelector((state) => state.cart);

 const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
 };

 const handleDrawerClose = () => {
    setIsDrawerOpen(false);
 };


 const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
    dispatch({ type:TYPES.TOTAL})
 };

 return (
    <> 

 
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={handleDrawerOpen}
      >
        <Badge badgeContent={cart.length} color="secondary">
        <CasesIcon /> 
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
      
      >
        <Box >
          <Box p={1} sx={{ backgroundColor: "#f5f5f5;" }}>
            <IconButton
              onClick={handleDrawerClose}
              style={{ position: 'absolute', top: -5, right:8 }}
            >
              <ClearIcon />
            </IconButton>
            <Box>
              <Typography variant="h3" sx={titulo}>MI COMPRA</Typography>
            </Box>
          </Box>
          <Box flexGrow={1} p={2}>
            {cart.map((item, index) => (
              <CartItems key={index} data={item} delFromCart={delFromCart} />
            ))}
          </Box>
        </Box>
       
  {total === 0 ? 
    <Box p={8}  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ProductionQuantityLimitsIcon sx={{ width: "54px", height: "54px", marginTop: '-4rem' }} />
      <Typography sx={{ fontFamily: "Helvetica,sans-serif", fontWeight: "400", textTransform: "none", letterSpacing: 0, margin:'32px' }}>Tu carrito está vacío  <SentimentVeryDissatisfiedIcon sx={SadStyle}/></Typography>
    </Box>
    :
    <>
   <Box sx={{ textAlign: 'center',padding: '16px', marginTop:'auto' }}>
      <Divider orientation="horizontal" sx={{ backgroundColor: '#000' }} flexItem />
      <Typography variant="body1" sx={detalleStyle}>Ver detalles +</Typography>
      <Typography variant="h3" sx={totalStyle}>
        <span>Total </span>
        <span>${total.toFixed(3)}</span>
      </Typography>
      {/* Agrega cualquier otra tipografía o elementos que desees mostrar */}
      
      <Box mt={2}>

        
      <Button
  variant="contained"
  href="#"
  fullWidth 
  sx={{ 
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '12px',
  }}
>
  Procesar Compra
</Button>
<Typography sx={Comprando} onClick={handleDrawerClose}>
  Seguir comprando <KeyboardArrowRightIcon sx={arrowIconStyle} />
</Typography>
       
           
      </Box>
      </Box>
    </>
  }


      </Drawer>
    </>
 );
};

export default CartDrawers;


