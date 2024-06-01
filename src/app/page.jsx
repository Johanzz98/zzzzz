"use client";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter como Router
import Navbar from '@/components/Navbar/Navbar';
import Carousel from '@/components/Carousel/Carousel';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Mid from '@/components/Carousel/Mid';
import Static from '@/components/Static/Static';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import LastPhoto from '@/components/LastPhoto';
import LastBanner from '@/components/Banner/LastBanner';
import PenultimateCarousel from '@/components/Carousel/PenultimateCarousel';
import LastCarousel from '@/components/Carousel/LastCarousel';
import InfoFinal from '@/components/InfoFinal';
import FooterDown from '@/components/Footer/FooterDown';
import ShoppingCart from '@/components/Cart/ShoppingCart';
import { store } from "@/services/store";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import "./App.css";
import PageWithWhatsAppButton from '@/PageWithWhatsAppButton';
import Token from '@/services/redurcers/Token';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#212121',  
    },
  },
});

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store()}>
        <AuthProvider>
     
            <Box sx={{ mt: 6 }}>
              <Navbar />
              <PageWithWhatsAppButton/>
              <Carousel />
              <Mid />
              <Static />
              <Banner />
              <PenultimateCarousel />
              <LastPhoto/>
              <LastCarousel />
              <LastBanner/>
              {/* Envuelve ShoppingCart en un div invisible */}
              <div style={{ display: 'none' }}>
                <ShoppingCart/>
              </div>
            
              <InfoFinal/>
              <Footer />
              <FooterDown/>
            </Box>
          
        </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
