import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const cardStyle = {
  maxWidth: "580px",
  textAlign: "center",
  fontFamily: "arial",
};

const cardStyle2 = {
  width: "400px",
  margin: "0 auto 12px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: "12px",
  transition: "transform 0.6s ease",
  position: "relative",
};

const mediaStyle = {
  width: "100%",
  objectFit: 'contain',
  transition: "transform 0.3s ease-in-out",
};

const smallMediaStyle = {
  height: "100%",
  width: "100%",
  objectFit: 'contain',
};

const productContainerStyle = {
  margin: "-2px -2px", 
};

export default function MostrarProductos(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleClick = (itemId, e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setZoomPosition({ x, y });
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };

  const resetZoom = () => {
    setZoomPosition({ x: 0, y: 0 });
  };

  const getTransformOrigin = () => {
    return selectedItem ? `${zoomPosition.x}px ${zoomPosition.y}px` : 'center';
  };

  return (
    <Grid container spacing={1} justifyContent="flex-start">
      {props.items.map(item => (
        <Grid item key={item.id}>
          <Box
            style={productContainerStyle}
            onClick={(e) => handleClick(item.id, e)}
          >
            <Card sx={item.isSmallScreen ? cardStyle2 : cardStyle}>
              <div>
              <CardMedia
  component="img"
  image={item.imageurl}
  alt="product image"
  sx={{
   ...item.isSmallScreen? smallMediaStyle : mediaStyle,
    transform: selectedItem === item.id? 'scale(2.6)' : 'scale(1)',
    transformOrigin: getTransformOrigin(),
    cursor: selectedItem ? `url('../../../assets/remove.svg'), auto` : `url('../../../assets/plus.svg'), auto`,
  }}
  onAnimationEnd={resetZoom}
/>
              </div>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}