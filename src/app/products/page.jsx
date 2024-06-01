"use client";
import "./app.css";

import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline, Grid, createTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import Drawers from '@/components/product/drawers';
import FilterPanel from '@/components/product/FilterPanel';
import CardList from '@/components/product/CardList';
import { store } from "@/services/store";
import { Provider } from "react-redux";
import Header from "@/components/product/Header";
import Navbar from "@/components/Navbar/Navbar";
import { AuthProvider } from "@/context/AuthProvider";

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

const Page = () => {
 const isSmallScreen = useMediaQuery('(max-width:800px)');
 const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XS']; 

 return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
      <Provider store={store()}>
        <Navbar/>
       
        <CardList/>
        
        {/* <Grid container spacing={3}>
          FilterPanel en la posición izquierda 
          <Grid item xs={12} sm={3}>
            {!isSmallScreen && <FilterPanel sizes={sizes} />}
          </Grid>
          {/* Products al lado de FilterPanel en el medio 
          <Grid item xs={12} sm={9}>
            <CardList />
          </Grid>
        </Grid>
        */}
        
      </Provider>
      </AuthProvider>
    </ThemeProvider>
 );
};

export default Page;
