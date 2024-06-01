import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import useMediaQuery from '@mui/material/useMediaQuery';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// Datos para pantallas grandes
export const dataLarge = [
 {
    id: 1,
    title: "Hola amiguitos",
    price: "$990",
    imgPath: "https://vanscl.vtexassets.com/assets/vtex.file-manager-graphql/images/0d80c65f-be52-4a0b-bb0f-066f9a0e1d40___e29317715f7857dca06cf7b3ccd58e5d.png",
 },

 {
  id: 2,
  title: "Hola amiguitos",
  price: "$990",
  imgPath: "https://vanscl.vtexassets.com/assets/vtex.file-manager-graphql/images/575f56d8-07b5-4dae-a3db-14d28e5724d3___ed226d708775849df7bdea57a5448e12.jpg",
},

 // Más datos aquí
];

// Datos para pantallas pequeñas
export const dataSmall = [
 {
    id: 1,
    title: "Hola amiguitos",
    price: "$990",
    imgPath: "https://i.pinimg.com/564x/87/25/04/872504880ae7854331cb95f0de4d9172.jpg",
 },
 {
  id: 2,
  title: "Hola amiguitos",
  price: "$990",
  imgPath: "https://i.pinimg.com/originals/b9/35/ba/b935baf16bf29aaae738e2a89e9badab.jpg",
},

 // Más datos aquí
];

function Carousel() {
 const theme = useTheme();
 const [activeStep, setActiveStep] = React.useState(0);
 const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
 const maxSteps = isSmallScreen ? dataSmall.length : dataLarge.length;
 const data = isSmallScreen ? dataSmall : dataLarge;

 const productContainerStyle = {
   marginTop: isSmallScreen ? "-50px" : "-1px", 
 };

 const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
 };

 const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
 };

 const handleStepChange = (step) => {
    setActiveStep(step);
 };

 return (
  <div style={productContainerStyle}>
    <Box sx={{ width: "100%", height: "100%" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step) => (
          <div key={step.id}>
            {Math.abs(activeStep - step.id) <= 2 ? (
              <Box
                sx={{
                 width: "100%",
                 height: "100%",
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 marginTop: "60px",
                
                }}
              >
                <Box
                 component="img"
                 sx={{
                    width: "100%",
                    maxHeight: "100%",
                    objectFit: 'cover',
                    overflow: 'hidden',
                 }}
                 src={step.imgPath}
                 alt={step.title}
                />
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        variant=""
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              position: 'absolute',
              top: '50%',
              right: theme.spacing(2),
              transform: 'translateY(-50%)',
              color: 'primary.main',
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="large"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              position: 'absolute',
              top: '50%',
              left: theme.spacing(2),
              transform: 'translateY(-50%)',
              color: 'primary.main',
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
    </div>
 );
}

export default Carousel;
