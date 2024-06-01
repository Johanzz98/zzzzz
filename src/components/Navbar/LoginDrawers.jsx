import React, { useState, useEffect } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import axios from '@/api/axios';
import { useSelector } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import AbcIcon from '@mui/icons-material/Abc';



const AUTH_ME = '/auth/me';

const helloName = {
  fontSize: "18px",
  fontWeight: "1000",
  
  flexGrow:2,
  color: "#111",
  marginLeft:'36px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
}

const cuadros = {
  display: 'flex',
  marginBottom:'-4px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'left',


}

const cuadrosRellenos = {
  backgroundColor:'white',
  border: '1px solid #e0e0e0',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  flexDirection: 'column', 
  position: "relative",
  display: "block",
  width: "92%",
  padding: '18px',
  margin:'12px',
  

}

const detalles = {
  fontFamily: "Helvetica,sans-serif",
  fontSize: "12px",
  fontWeight: "550",
  fontOpticalSizing: 'auto',
  textDecoration: "none",
  color: 'black',
  '&:hover': { color: 'grey' },
  cursor: 'pointer',

  flexGrow: 1,
}

const Title = {
  fontSize: "14px",
  fontWeight: "800",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  
}

const Relleno = {
  fontFamily: "Helvetica,sans-serif",
  fontSize: "12px",
  fontWeight: "500",
  fontOpticalSizing: 'auto',
  textDecoration: "none",
  color: 'black',
  '&:hover': { color: 'grey' },
  cursor: 'pointer',
  paddingTop:'4px',
  paddingRight: '24px',
  paddingBottom:'4px'
 

}



const LoginDrawers = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const token = useSelector((state) => state.auth.token); // Obtener el token del estado de Redux

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
    obtenerMiData(); // Llamar a obtenerMiData cuando se abre el Drawer
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const obtenerMiData = async () => {
    try {
      if (!token) {
        console.error('Token no disponible en el estado de Redux');
        return; // Salir de la función si el token no está disponible en el estado de Redux
      }

      console.log("Token utilizado para la solicitud:", token); // Agregar esta línea para ver el token utilizado

      const response = await axios.get(AUTH_ME, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Actualizar el estado fullName y email con los valores obtenidos de la respuesta
      setFullName(response.data.data.person.fullName);
      setEmail(response.data.data.email);

    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Error de autorización: Token no válido');
        // Manejar el error de autorización, por ejemplo, redireccionar a la página de inicio de sesión
      } else {
        console.error('Error al obtener los datos del usuario:', error);
      }
    }
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
        <AccountBoxIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{ style: { width: 375 } }} // Modificar el ancho aquí
      >
        <Box p={2} textAlign="center" role="presentation" sx={{ backgroundColor: "#eeeeee" }}>
          <Box display="flex" alignItems="center" justifyContent="space-between" >

            <Box >
              <Typography sx={helloName}>
                Hola {fullName}
              </Typography>
            </Box>

            <IconButton onClick={handleDrawerClose} style={{ color: 'black' }} >
              <ClearIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between', // Para distribuir los elementos a lo largo del contenedor
              textAlign: 'left',
              paddingBottom:'12px'
            }}
          >
            <img
              src={`../../assets/adi.svg`}
              alt="logo"
              style={{
               width:'30%',
                marginLeft: "24px",
                marginTop: '12px',
              }}
            />
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '36px' }}>
  <Typography sx={{...helloName, fontSize:'16px',marginTop:'12px'}}>
    ¡BIENVENIDO!
  </Typography>
  <Typography sx={{ ...detalles, marginLeft: '34px' }}>
  
    Parrella Clubs
  </Typography>
</Box>
            {/*} <img
              src={`../../assets/certificed.png`}
              alt="certificed"
              style={{
                height: "100px",
                marginLeft:"24px",
                marginTop:'12px',
              }}
            />
            */}
          </Box>
         
          <Box sx={cuadros}>
            <Typography sx={detalles} >
              IR A TU CUENTA
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <ArrowRightAltOutlinedIcon style={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Box sx={cuadros}>
            <Typography sx={detalles} >
              PEDIDOS
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <ArrowRightAltOutlinedIcon style={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Box sx={cuadros}>
            <Typography sx={detalles} >
              FAVORITOS
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <ArrowRightAltOutlinedIcon style={{ color: 'black' }} />
            </IconButton>
          </Box>


        </Box>
        <Box  textAlign="center" role="presentation" sx={{ backgroundColor: "#f5f5f5", border: '1px solid #e0e0e0', paddingTop: '24px' }}>
        <Box sx={cuadrosRellenos}>
  <Typography sx={Title}>
    ¡Encuentra nuestro mejores productos!
  </Typography>
  <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Agregar un contenedor para distribuir horizontalmente */}
    <Typography sx={Relleno}>
      Albion Online es un MMORPG no lineal en el que escribes tu propia historia
    </Typography>
    <IconButton onClick={handleDrawerClose} style={{ marginLeft: 'auto', bottom:14, }}> {/* Mover el ícono a la derecha */}
    <ArrowRightAltOutlinedIcon style={{ color: 'black' }} />
    </IconButton>
  </Box>
</Box>


        <Box sx={cuadrosRellenos}>
          <Typography sx={Title}>
            ¡Subscribete a Parrella Clubs!
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Agregar un contenedor para distribuir horizontalmente */}
          <Typography sx={Relleno}>
            Recibe alertas sobre lanzamientos, promociones y ofertas para miembros
          </Typography>
           <IconButton onClick={handleDrawerClose} style={{ marginLeft: 'auto', }}> {/* Mover el ícono a la derecha */}
    <ArrowRightAltOutlinedIcon style={{ color: 'black' }} />
    </IconButton>
        </Box>
        </Box>
        
        <Box sx={cuadrosRellenos}>
          <Typography sx={Title}>
          ❄️Temporada de Invierno ❄️
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Agregar un contenedor para distribuir horizontalmente */}
          <Typography sx={Relleno}>
            Albion Online es un MMORPG no lineal en el que escribes tu propia historia
             
          </Typography>
          <IconButton onClick={handleDrawerClose} style={{ marginLeft: 'auto', }}> {/* Mover el ícono a la derecha */}
    <ArrowRightAltOutlinedIcon style={{ color: 'black' }} />
    </IconButton>
        </Box>
        </Box>
        
        <Box sx={cuadrosRellenos}>
          <Typography sx={Title}>
            ¡EUPHORIA!
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Agregar un contenedor para distribuir horizontalmente */}
          <Typography sx={Relleno}>
            Albion Online es un MMORPG no lineal en el que escribes tu propia historia
             
          </Typography>
          <IconButton onClick={handleDrawerClose} style={{ marginLeft: 'auto', }}> {/* Mover el ícono a la derecha */}
    <ArrowRightAltOutlinedIcon style={{ color: 'black' }} />
    </IconButton>
        </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Para distribuir los elementos a lo largo del contenedor
            textAlign: 'left',
          }}
        >
          <img
            src={`../../assets/Foto.png`}
            alt="logo"
            style={{
              
              width:"358px"
            }}
          />
        </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default LoginDrawers;
