"use client";
import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import './transitions.css';
import MostrarProductos from './MostrarProductos';
import { productData } from './ImgDetails';

//icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import InstagramIcon from '@mui/icons-material/Instagram';

const NombreProducto = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#00000",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  paddingBottom: '24px',
  lineHeight: '24px',
};

const Titulo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0px 0px -1px',
  padding: '0 30px',
};

const ShowContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Show = {
  border: "none",
  outline: "0",
  marginTop: '-12px',
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  width: "20%",
  fontSize: "18px",
};

const zeldas = {
  border: "none",
  outline: "0",
  transition: "all 0.3s ease", 
  marginTop: '12px',
  color: 'white',
  backgroundColor: "white",
  display: 'flex', 
  padding:'16px 38px ',
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  boxShadow: 'none',
  textAlign: "center",
  cursor: "pointer",
  width: "100%",
  fontSize: "18px",
};

const detalles = {
  fontSize: "18px",
  fontWeight: "500",
  color: "black",
  display: 'flex',
  flexGrow: 0.3, 

  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',  
};

function Muestra() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(productData.slice(0, 4));
  const [showDescription, setShowDescription] = useState(false);
  const [showDetalles, setShowDetalles] = useState(false);
  const [showCuidados, setShowCuidados] = useState(false);
  const [showLook, setShowLook] = useState(false);
  const productWithIdThree = productData.find(product => product.id === 4);
  const [isHovered, setIsHovered] = useState(false);
  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
    setVisibleProducts(showAllProducts ? productData.slice(0, 4) : productData);
    if (showAllProducts) {
      scrollUp();
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <Box>
      <CSSTransition
        in={true}
        timeout={500}
        classNames="product-animation"
        unmountOnExit
      >
        <MostrarProductos items={visibleProducts} />
      </CSSTransition>

      <Box style={ShowContainer}>
        <Button style={Show} onClick={toggleShowAllProducts}>
          {showAllProducts ? 'Mostrar menos' : 'Mostrar más'}
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Divider sx={{
          width: '73%',
          bgcolor: '#eceff1',
          textAlign: "center", 
        }} />
      </Box>

      <Button sx={zeldas} onClick={() => setShowDescription(!showDescription)}>
        <Typography sx={{...detalles, marginLeft:'6px'}}>Descripción</Typography>
        {showDetalles ? <KeyboardArrowUpIcon style={{ color: 'black',marginLeft:'auto',marginRight:'14%' }} /> : <KeyboardArrowDownIcon style={{ color: 'black',marginLeft:'auto',marginRight:'14%' }} />}
      </Button>

      <CSSTransition
        in={showDescription}
        timeout={300}
        classNames="description"
        unmountOnExit
      >
        <Box sx={Titulo}>
          <Box sx={{ padding: '15px' }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center" >
              <Grid item xs={12} sm={4.2}>
                <Typography sx={NombreProducto}>
                  UNA CHAQUETA DEPORTIVA MUY LLAMATIVA HECHA PARCIALMENTE CON MATERIALES RECICLADOS.
                </Typography>
                <Typography>
                  Destaca en la calle con esta chaqueta deportiva. La chaqueta Firebird es un emblema de adidas que desde la década de los 80 ha causado sensación por su estilo auténtico. Confeccionada en un tejido de tricot reciclado brillante, esta chaqueta se mantiene fiel a sus raíces deportivas gracias a su cuello alto y las clásicas 3 Tiras en las mangas. Úsala con tus jeans o calzas favoritas para un look casual y descomplicado que no pasará desapercibido.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5.2}>
                {productWithIdThree && (
                  <img src={productWithIdThree.imageurl} alt={productWithIdThree.name} style={{ width: '360px', height: '369px',paddingLeft:'64px' }} />
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CSSTransition>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Divider sx={{
          width: '73%',
        
          bgcolor: '#eceff1',
          textAlign: "center", 
        }} />
      </Box>

      <Box>
       
      <Box>
  <Button sx={zeldas} onClick={() => setShowDetalles(!showDetalles)}>
    <Typography sx={{...detalles}}> Detalles</Typography>
    {showDetalles ? <KeyboardArrowUpIcon style={{ color: 'black',marginLeft:'auto',marginRight:'14%' }} /> : <KeyboardArrowDownIcon style={{ color: 'black',marginLeft:'auto',marginRight:'14%' }} />}
  </Button>
  {showDetalles && (
    <Box sx={{  display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",}}>
      <Box sx={{ flex: '0.5'}}>
        <Typography sx={{ fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  paddingBottom: '24px',
  lineHeight: '24px',}}>
          <ul>
          <li style={{ marginBottom: '5px' }}>Ajuste holgado</li>
          <li style={{ marginBottom: '5px' }}>Cierre frontal y cuello alto</li>
          <li style={{ marginBottom: '5px' }}>Tejido tricot 100% poliéster reciclado</li>
          <li style={{ marginBottom: '5px' }}>Bolsillos con cierre</li>
          </ul>
        </Typography>
      </Box>
      <Box sx={{ flex: '0.3', marginLeft: '10px' }}>
        <Typography sx={{ fontSize: "16px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  paddingBottom: '24px',
  lineHeight: '24px',}}>
            <ul style={{ marginRight: '24px', padding: '0' }}>
      <li style={{ marginBottom: '8px',marginTop:'-22px' }}>Puños y dobladillo acanalados</li>
      <li style={{ marginBottom: '8px' }}>Color del artículo: Bold Gold</li>
      <li style={{ marginBottom: '8px' }}>Número de artículo: IP0611</li>
    </ul>
        </Typography>
      </Box>
    </Box>
  )}
</Box>
<Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Divider sx={{
            width: '73%',
             
          bgcolor: '#eceff1',
          textAlign: "center", 
        }} />
      </Box>
   

      </Box>
      <Button sx={zeldas} onClick={() => setShowCuidados(!showCuidados)}>
    <Typography sx={detalles}>Cuidados</Typography>
    {showDetalles ? <KeyboardArrowUpIcon style={{ color: 'black',marginLeft:'auto',marginRight:'14%' }} /> : <KeyboardArrowDownIcon style={{ color: 'black',marginLeft:'auto',marginRight:'14%' }} />}
  </Button> 
  {showCuidados && (
  <Box sx={{  display: "flex",
  justifyContent: "center",
  alignItems: "center",}}>
    <Box sx={{flex:0.5}} >
    <Typography sx={{...NombreProducto,Display: "flex",
  justifyContent: "center",
  alignItems: "center",marginLeft:'70px' }}> INSTRUCCIONES DE LAVADO</Typography>
      <Typography sx={{ fontSize: "16px",
fontWeight: "500",
color: "#111",
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
fontFamily: "Helvetica,sans-serif",
fontOpticalSizing: 'auto',
paddingBottom: '24px',
lineHeight: '24px',}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <ul style={{ margin: 0, padding: 0 }}>
      <li style={{ marginBottom: '5px' }}>No usar blanqueador <img src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/B1.svg "  alt=""
    width="24"
    height="24"
    style={{ marginLeft: '5px', marginTop: '-5px', verticalAlign: 'middle' }} /></li>
      <li style={{ marginBottom: '5px' }}>No lavar en seco <img src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/E1.svg "  alt=""
    width="24"
    height="24"
    style={{ marginLeft: '5px', marginTop: '-5px', verticalAlign: 'middle' }}  /></li>
      <li style={{ marginBottom: '5px' }}>Lavado a máquina agua tibia <img src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/A5.svg"   alt=""
    width="24"
    height="24"
    style={{ marginLeft: '5px', marginTop: '-5px', verticalAlign: 'middle' }}/></li>


      <li style={{ marginBottom: '5px' }}>Secar a potencia baja <img src=" https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/C2.svg"  alt=""
    width="24"
    height="24"
    style={{ marginLeft: '5px', marginTop: '-5px', verticalAlign: 'middle'  }} /></li>
      <li style={{ marginBottom: '5px'}}>
  Retoque con plancha fría
  <img
    src="https://www.adidas.cl/glass/react/8878685/assets/img/washing-instructions/D2.svg"
    alt=""
    width="24"
    height="24"
    style={{ marginLeft: '5px', marginTop: '-5px', verticalAlign: 'middle' }}
  />
</li>
    </ul>
  </div>
</Typography>
      </Box>
      <Box sx={{ flex: '0.5'}}>
      <Typography sx={{...NombreProducto,Display: "flex",
  justifyContent: "center",
  alignItems: "center",width:'55%',}}> INFORMACIÓN ADICIONAL SOBRE EL CUIDADO</Typography>
      <Typography sx={{ fontSize: "16px",
fontWeight: "500",
color: "#111",
marginLeft:'-50%',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
fontFamily: "Helvetica,sans-serif",
fontOpticalSizing: 'auto',
paddingBottom: '24px',
lineHeight: '24px',}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>

    <ul style={{ margin: 0, padding: 0 }}>
      <li style={{ marginBottom: '5px' }}>Usar únicamente detergente suave</li>
      <li style={{ marginBottom: '5px' }}>Lavar con cierres ajustados</li>
      <li style={{ marginBottom: '5px' }}>Lavar y planchar al revés</li>


      <li style={{ marginBottom: '5px' }}>Lavar con colores similares </li>
  
    </ul>
  </div>
</Typography>
      </Box>
    </Box>

  )}

<Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Divider sx={{
           width: '73%',
             
          bgcolor: '#eceff1',
          textAlign: "center", 
        }} />
      </Box>

      <Button sx={zeldas} onClick={() => setShowLook(!showLook)}>
  <Typography sx={{ ...detalles, marginLeft: '12px' }}>Presume Tu Look</Typography>
  {showLook? (
    <KeyboardArrowUpIcon style={{ color: 'black', marginLeft: 'auto', marginRight: '14%' }} />
  ) : (
    <KeyboardArrowDownIcon style={{ color: 'black', marginLeft: 'auto', marginRight: '14%' }} />
  )}
</Button>
{showLook && (
  <>
<Box sx={{ textAlign: 'center', marginTop: '20px',width:'60%', marginLeft:'20%' }}>
         
    <Typography sx={{...detalles, cursor:'auto'}}> ¿Quieres aparecer en nuestra galería? simplemente menciona la cuenta de @ParrellaCl en tus fotos de instagram y puede ser elegida para que aparezca aquí.</Typography>
    </Box>
    <Grid container spacing={1}>
      {/* Producto de fondo */}
      <Grid item xs={12} sm={4} style={{  textAlign: 'center', marginTop: '20px',width:'60%', marginLeft:'35%',position: 'relative', zIndex: 1 }}>
        {productWithIdThree && (
          <img src={productWithIdThree.imageurl} alt={productWithIdThree.name} style={{ width: '360px', height: '369px' }} />
        )}
        <div style={{ position: 'absolute', top: 20, left: 38, zIndex: 1 }}>
          <InstagramIcon />
        </div>
        {/* Producto encima */}
        <div style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, border: '1px solid #eceff1' }}>
          {productWithIdThree && (
            <img src={productWithIdThree.imageurl} alt={productWithIdThree.name} style={{ width: '120px', height: '123px', border:'1px solid grey' }} />
          )}
        </div>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{...detalles,cursor:'pointer', textDecoration: 'underline',bgcolor: isHovered ? 'black' : 'white',
            color: isHovered ? 'white' : 'black', transition: 'background-color 0.3s ease, color 0.1s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Ver productos</Typography>
        </Box>
       
      </Grid>
   
    </Grid>
  
  </>
)}

<Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Divider sx={{
            width: '73%',
             
          bgcolor: '#eceff1',
          textAlign: "center", 
        }} />
      </Box>
</Box>

  );
}

export default Muestra;
