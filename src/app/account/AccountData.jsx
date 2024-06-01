import React, { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import axios from '@/api/axios';


const AUTH_ME = '/auth/me';

const cuadrosRellenos = {
  backgroundColor: 'white',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  textAlign: 'left',
  flexDirection: 'column',
  position: "relative",
  display: "flex",
  width: "92%",
  padding: '18px',
  margin: '12px',
}
const cuadrosRellenitos = {
  backgroundColor: 'white',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  textAlign: 'left',
  flexDirection: 'column',
  position: "relative",
  display: "flex",
 
    marginTop:'14px'
 
}

const detalles = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#111",
  display: 'flex',
  marginTop: '12px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica, sans-serif",
  fontOpticalSizing: 'auto',
  
  
};

const helloName = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  marginBottom:'12px'
};

const Detallitos = {
  fontSize: "20px",
  fontWeight: "1000",
  color: "#111",
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: "Helvetica,sans-serif",
  fontOpticalSizing: 'auto',
  
};

const alignedItems = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center', // Asegura que los items estén centrados verticalmente
}

const AccountData = ({ openModal }) => {
  const [isHoveredDetalle, setIsHoveredDetalle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPassword, setIsHoveredPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const token = useSelector((state) => state.auth.token); // Obtener el token del estado de Redux

  // Función para obtener datos del usuario
  const obtenerMiData = async () => {
    try {
      if (!token) {
        console.error('Token no disponible en el estado de Redux');
        return;
      }

      const response = await axios.get(AUTH_ME, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setFullName(response.data.data.person.fullName);
      setEmail(response.data.data.email);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  // Llamar a obtenerMiData cuando el componente se monte
  useEffect(() => {
    obtenerMiData();
  }, []); // Puedes agregar dependencias aquí si es necesario
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box textAlign="center" role="presentation" sx={{ backgroundColor: "white", }}>
      <Box sx={cuadrosRellenos}>
        <Typography sx={helloName}>
          Bienvenido/a
        </Typography>
        <Typography sx={helloName}>
        {fullName}
        </Typography>
        <Typography sx={helloName}>
          MIS DATOS
        </Typography>
        <Typography sx={detalles}>
          Modifica tus datos personales a continuación para que tu cuenta esté actualizadas
        </Typography>
      </Box>

      <Box sx={cuadrosRellenos}>
        <Typography sx={Detallitos}>
          Detalles
        </Typography>
        <Box sx={{ ...alignedItems, gap: '54px' }}>
        <Typography sx={detalles}>Nombre</Typography> {/* Aquí usamos fullName */}
  <Typography sx={detalles}>Apellido</Typography>
</Box>
<Box sx={{ ...alignedItems, gap: '64px' }}>
  <Typography sx={detalles}>{fullName}</Typography>
  <Typography sx={detalles}>Cordova</Typography>
</Box>
<Box sx={cuadrosRellenitos}>
        <Typography sx={detalles}>Correo electrónico:</Typography>
        <Typography sx={detalles}>{email}</Typography> {/* Aquí usamos email */}
         </Box>
        <Box sx={cuadrosRellenitos} >
        <Typography sx={detalles}>Contraseña</Typography>
        <Typography sx={detalles}>●●●●●●●●●</Typography>
        </Box>
        <Typography
          sx={{
            ...detalles,
            cursor: "pointer",
            textDecoration: 'underline',
            fontWeight: '700',
           marginTop:'24px',
            bgcolor: isHovered ? 'black' : 'white',
            color: isHovered ? 'white' : 'black',
            transition: 'background-color 0.3s ease, color 0.1s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={openModal}
        >
          Modificar Perfil
        </Typography>
      </Box>
    </Box>
  );
};

export default AccountData;
