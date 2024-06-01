import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/material';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Aquí puedes ajustar el número de WhatsApp al que deseas redirigir
    window.open('https://api.whatsapp.com/send/?phone=56937552580&text&type=phone_number&app_absent=0', '_blank');
};

return (
  <Box
    style={{
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      zIndex: '999',
      cursor: 'pointer',
      padding: '10px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'opacity 0.3s ease',
    }}
    onClick={handleWhatsAppClick}
  >
    <WhatsAppIcon style={{ fontSize: 42, color: '#fff' }} />
  </Box>
);
};

const PageWithWhatsAppButton = () => {
  // Contenido de tu página aquí

  return (
    <div>
      {/* Agrega el botón de WhatsApp */}
      <WhatsAppButton />

      {/* Aquí colocas el resto del contenido de tu página */}
    </div>
  );
};

export default PageWithWhatsAppButton;
