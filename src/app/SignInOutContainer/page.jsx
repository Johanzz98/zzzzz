/* @jsxRuntime classic */
"use client";
import React, { useState } from 'react';
import { Box, Button, Card, CardMedia, Paper, ThemeProvider } from '@mui/material';
import SignUp from '../signup/page';
import Login from '../login/page';
import "./App.css"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Navbar from '@/components/Navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from "@/services/store"
import FooterDown from '@/components/Footer/FooterDown';
import Footer from '@/components/Footer/Footer';
import ShoppingCart from '@/components/Cart/ShoppingCart';
import { AuthProvider } from '@/context/AuthProvider';


const paperStyle = {
  display: 'flex',
  alignItems: 'center',
  width: 720,
  boxShadow: "none",
  borderRadius: 35,
  margin: 'auto',
};

const SmallSpaperStyle = {
  display: 'flex',
  alignItems: 'center',
  boxShadow: "none",
  borderRadius: 35,
  margin: '8px',
};

const Bst = {
  position: 'absolute',
  top: '63%', /* Centra verticalmente */
  left: '47.6%', /* Centra horizontalmente */
  transform: 'translate(-50%, -50%)', 
  borderRadius: '22px',
  overflow: 'hidden',
  width: 150,
  color: 'white',
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 1000,
  fontSize: "22px",
};

const SmallBst = {
  position: 'absolute',
  top: '55%', /* Centra verticalmente */
  left: '24%', /* Centra horizontalmente */
  transform: 'translate(-50%, -50%)', 
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: '22px',
  overflow: 'hidden',
  width: 150,
  color: 'red',
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 1000,
  fontSize: "18px",
};
const SmallBstLogin = {
  position: 'absolute',
  top: '55%', /* Centra verticalmente */
  left: '25%', /* Centra horizontalmente */
  transform: 'translate(-50%, -50%)', 
  borderRadius: '22px',
  overflow: 'hidden',
 
  color: 'white',
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 1000,
  fontSize: "22px",
};

const Bst1 = {
  position: 'absolute',
  top: '73%', /* Centra verticalmente */
  left: '47.1%', /* Centra horizontalmente */
  transform: 'translate(-50%, -50%)', 
  color: 'white',
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 1000,
  fontSize: "20px",
};


const Bst1Selected = {
  ...Bst1,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: '22px',
  color: '#e53935',
  top: '73%', /* Centra verticalmente */
  left: '46.8%', /* Centra horizontalmente */
  transform: 'translate(-50%, -50%)', 
  width: 170,
 
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 1000,
  fontSize: "18px",
  
};

const BstSelected = {
  ...Bst,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: '22px',
  color: '#e53935',
  top: '63%', /* Centra verticalmente */
  left: '47.5%', /* Centra horizontalmente */
  transform: 'translate(-50%, -50%)', 
  width: 150,
  color: 'red',
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 1000,
  fontSize: "18px",
  
};


const SmallBst2 = {
  position: 'absolute',
  borderRadius: '22px',
  top: '65%', /* Centra verticalmente */
  left: '25%', /* Centra horizontalmente */
  transform: 'translate(-50%, -50%)', 
  width:150,
  color: 'red',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 1000,
  fontSize: "18px",
  
};

const SmallBst3 = {
  position: 'absolute',
  top: '65%', /* Centra verticalmente */
  left: '22%', /* Centra horizontalmente */
  transform: 'translate(-50%, -50%)', 
  color: 'white',
  
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 1000,
  fontSize: "22px",
};

const phot = {
  position: 'relative',
  height: "571px"
};

const photo2 = {
  height: "600px",
  
  position: 'relative',
  objectFit: 'cover',
  objectPosition: "36% 40%",
};

const SignInOutContainer = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <Provider store={store()}>
      <Box sx={{ mt: 6 }}>
        <Navbar palette={{
          primary: {
            main: '#fafafa',
          },
          secondary: {
            main: '#212121',
          },
        }} />
        <div style={{ display: 'none' }}>
          <ShoppingCart />
        </div>
        <Box
          sx={{
            background: 'linear-gradient(32deg, #FF8E53 40%, #e53935 90%)',
            height: '124vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          
          <Box
            sx={{
              display: "block",
              margin: '40px 0 20px'
            }}
          >
            <img
              src={`../../assets/logoNike.png`}
              alt="Nike Logo"
              style={{
                display: "block",
                margin: "0 auto",
                height: "100px",
                position: 'relative',
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper style={isSmallScreen ? SmallSpaperStyle : paperStyle}>
              <div >
                <Box display="flex" alignItems="center">
                  <Card sx={{ borderRadius: 6 }}>
                    <CardMedia
                      component="img"
                      image="https://images.squarespace-cdn.com/content/v1/650df948ec12d32713be27b2/4a61f7f8-4e92-4c61-95c2-5fa30a2bdc43/taylor-smith-dUpeWUph7oE-unsplash.jpg?format=1500w"
                      alt="Nike Shoes"
                      style={isSmallScreen ? photo2 : phot}
                    />
                    <Button
                      onClick={() => handleChange(0)}
                      style= {value === 0 ? (isSmallScreen ? SmallBst : BstSelected) : ( isSmallScreen ?  SmallBstLogin: Bst)}
                    >
                      Login
                    </Button>
                    <Button
  onClick={() => handleChange(1)}
  style={value === 1 ? (isSmallScreen ? SmallBst2 : Bst1Selected) : (isSmallScreen ? SmallBst3 : Bst1)}
>
  Register
</Button>
                  </Card>
                  {value === 1 ? <SignUp /> : <Login handleChange={handleChange}/>}
                </Box>
              </div>
            </Paper>
          </Box>
        
        </Box>
        <Footer />
        <FooterDown />
        
        </Box>
      </Provider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default SignInOutContainer;