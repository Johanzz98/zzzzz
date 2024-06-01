import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Info = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '16px',
    fontWeight: '400px',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  };
  
const Info2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
  fontSize: '12px',
  fontWeight: '400px',
    
  };

const icono = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  backgroundColor: "#f5f5f5",
  backgroundImage: "url(https://nikeclprod.vtexassets.com/arquivos/icon-news-footer.png)",
  padding: "20px 0 20px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  paddingTop: "50px",
};

const fondo={

  backgroundColor: "#f5f5f5",
  padding: "50px ",
  marginTop: "50px",
 
};



const InfoFinal = () => {
  return (
    <Box style={fondo}>
    <Box style={icono}>

    </Box>
      <Typography style={Info}>
        Recibe las novedades de ...
      </Typography>
      <Typography style={Info2}>
        Suscríbete al Newsletter de novedades.
      </Typography>
    </Box>
  );
};

export default InfoFinal;
