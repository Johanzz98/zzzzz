import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Slide from '@mui/material/Slide';

const style = {
 position: 'absolute',
 top: '20px',
 left: '5px',
 width: '90%',
 height: '30px',
 border: '2px',
 borderRadius: 10,
 boxShadow: 4,
 p: 4,
 backgroundColor: '#f0f0f0', 
 alignItems: 'center', 
 borderRadius: '30px', 
 padding: '6px', 
 margin: '0 20px', 
};

const inputStyle = {
 marginLeft: 14, 
 flex: 1,
 width: '90%',
 fontSize: '0.9rem',
 maxHeight: '0.9rem',
};

const styleBox = {
 backgroundColor: 'white',
 height: '70px',
};

// Estilo adicional para mover el ícono de búsqueda hacia arriba
const searchContainerStyle = {
 display: 'flex',
 alignItems: 'center', // Asegura que el ícono esté centrado verticalmente
 // Ajusta este valor para mover el ícono hacia arriba o hacia abajo
};

export default function SearchModal(props) {
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
  
 return (
    <div>
      <IconButton onClick={handleOpen}><SearchIcon style={{ color: 'black' }}/></IconButton>
      <Modal open={open} onClose={handleClose}>
        <div>
          <Box sx={styleBox}>
            <Slide direction="left" in={open} inEnter sx={style}>
              <Box>
                {/* Aplica el estilo adicional al contenedor */}
                <Box sx={searchContainerStyle}>
                 <InputBase
                    placeholder="Search..."
                    inputProps={{ 'Roboto': 'search' }}
                    style={inputStyle}
                 />
                 <SearchIcon style={{ color: 'black' }} />
                </Box>
              </Box>
            </Slide>
          </Box>
        </div>
      </Modal>
    </div>
 );
}
