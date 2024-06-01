import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Slide from '@mui/material/Slide';

const style = {
  position: 'absolute',
  top: '40px',
  left: '50px',
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
  marginLeft: 20, 
  flex: 1,
  width: '100%',
  fontSize: '0.9rem',
  maxHeight: '0.9rem',
};

const styleBox = {
  backgroundColor: '#eeeeee',
  height: '125px',
};

const inputStyleNav ={
  height: '30px',
  border: '2px',
  borderRadius: 10,
  boxShadow: 4,
  backgroundColor: '#f0f0f0', 
  alignItems: 'center', 
  borderRadius: '30px', 
  padding: '0 0 0 10px',  
  margin: '0 10px', 
  
};


export default function SearchContainer(props) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState(''); // Estado para el valor de búsqueda

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Actualizar el estado del valor de búsqueda
  };
  
  return (
    <div >
       <IconButton onClick={handleOpen} disableRipple >
        <InputBase
          placeholder=" Search..."
          inputProps={{ 'Roboto': 'search' }}
          value={searchValue}
          onChange={handleSearchChange}
          style={inputStyleNav}
          endAdornment={<SearchIcon style={{ color: 'black' }} />}
        />
      </IconButton>

      
    {/* 
      <Modal open={open} onClose={handleClose}>
        <Box sx={styleBox}>
          <Slide direction="left" in={open} inEnter sx={style}>
            <Box display="flex" alignItems="center">
              <InputBase
                placeholder="Search..."
                inputProps={{ 'Roboto': 'search' }}
                value={searchValue} 
                onChange={handleSearchChange} 
                style={inputStyle}
              />
              <SearchIcon style={{ color: 'black', marginLeft: 10 }} />
            </Box>
          </Slide>
        </Box>
      </Modal>
  */}
    </div>
  );
}
