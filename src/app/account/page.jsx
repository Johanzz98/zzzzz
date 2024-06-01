"use client";
import React, { useState } from 'react';
import { Box, Typography, Divider} from '@mui/material';
import Perfil from './Perfil';
import AccountData from './AccountData';
import FullNameNodal from '@/components/accountProfile/FullNameNodal';
import Navbar from '@/components/Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from '@/components/Footer/Footer';
import InfoFinal from '@/components/InfoFinal';
import FooterDown from '@/components/Footer/FooterDown';
import ShoppingCart from '@/components/Cart/ShoppingCart';
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import "./App.css"
import { useTheme } from '@mui/material/styles';


const RedDivider = () => {
  return (
    <Divider
      orientation="vertical"
      sx={{
        backgroundColor: '#e0e0e0',
        height: '100%',
      }}
    />
  );
};

const Relleno = {
  fontFamily: "Helvetica, sans-serif",
  fontSize: "12px",
  fontWeight: "500",
  fontOpticalSizing: 'auto',
  textDecoration: "none",
  color: 'black',
  '&:hover': { color: 'grey' },
  cursor: 'pointer',
  paddingTop: '14px',
  paddingRight: '24px',
  textDecoration: 'underline'
};

const VerDivider = () => {
  return (
    <Divider
      orientation="horizontal"
      sx={{
        backgroundColor: '#e0e0e0',
        height: '1px',
        width: '600%',
        margin: '10px 0',
      }}
    />
  );
};

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
    <ReduxProvider store={store()}>
      <AuthProvider>
   
          <Box sx={{ mt: 6 }}>
            <Navbar />
            <Box sx={{
    position: 'absolute',
    top: '1',
    left: '0',
    width: '100%', // Ancho del cuadro
    height: '263px', // Altura del cuadro
    bgcolor: 'white', // Color de fondo
    zIndex: '1', // Asegura que el cuadro esté sobre los demás elementos
  }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '130vh', backgroundColor: "white" }}>
      
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <VerDivider />
        <Perfil />
      </Box>

      <RedDivider />

      <Box sx={{ flex: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '15%' }}>
        <AccountData openModal={handleOpenModal} />
        <FullNameNodal open={openModal} handleClose={handleCloseModal} />
      </Box>

      <RedDivider />

      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <Box sx={{ marginBottom: '-14px', display: 'flex', marginLeft: 'auto', position: 'relative', zIndex: '2' }}>
        <Typography sx={{ ...Relleno, color: 'black' }} onClick={handleOpenModal}>Cerrar Sesión</Typography>
      </Box>
      <img
        src={`../../assets/Foto.png`}
        alt="logo"
        style={{
          width: "460px",
          height: "100%",
          marginTop: '4%',
          position: 'relative',
        }}
      />
    </Box>
  </Box>
   



   
              <Footer />
              <FooterDown/>
            </Box>
          
        </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
