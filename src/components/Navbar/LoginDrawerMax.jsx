import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LoginDrawerMax = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={handleDrawerOpen} // Abre el Drawer al hacer clic en el botón
      >
        <AccountBoxIcon />
        
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen} // Estado de apertura controlado por isDrawerOpen
        onClose={handleDrawerClose} // Cierra el Drawer al hacer clic fuera de él
        variant="temporary" // Cambia la variante a "temporary" para que se cierre automáticamente al hacer clic fuera de él
        ModalProps={{
          keepMounted: true, // Mejora el rendimiento en pantallas móviles
        }}
      >
        <Box p={2} textAlign="center" role="presentation">
          <IconButton onClick={handleDrawerClose}> {/* Cierra el Drawer al hacer clic en el IconButton */}
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Johan Cordova
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default LoginDrawerMax;
