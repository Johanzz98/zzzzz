import * as React from "react";
import { useState } from "react"; // Importa useState
import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton,
  TextField,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Divider,
} from "@mui/material"; // Añade Collapse
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Hidden from "@mui/material/Hidden";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const socialMediaLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
};

const iconButtonStyle = {
  color: "grey",
  borderRadius: "20px",
  cursor: "pointer",
  border: "1px solid white ",
  backgroundColor: "transparent",
  margin: "0 14px",
};

const fonts = {
  fontSize: "12px",
  
  marginBottom: "4px",
  border: "none",
  fontWeight: 400,
  textTransform: "uppercase",
  fontFamily: " 'Helvetica', sans-serif",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  margin: "16px ",
};
const fontsMax = {
  fontSize: "12px",
  justifyContent: 'flex-start',

 
  fontWeight: 400,
  textTransform: "uppercase",
  fontFamily: " 'Helvetica', sans-serif",
 
  overflow: "hidden",
 
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  
};

const fonstDes = {
  fontSize: "12px",
  color: "grey",
  marginBottom: "4px",
  border: "none",
  fontWeight: 400,

  fontFamily: " 'Helvetica', sans-serif",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  margin: "16px ",
};


const LinkStyle = {
  fontSize: "16px",
  color:'white',
  margin: "14px  11px" ,
  border: "none",
  fontWeight: 300,

  fontFamily: " 'Roboto', sans-serif",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  justifyContent: "space-between",
};

const Footer = () => {
  const [openProductos, setOpenProductos] = useState(false); // Corrige la declaración de useState
  const [openProductos2, setOpenProductos2] = useState(false); // Corrige la declaración de useState
  const [openProductos3, setOpenProductos3] = useState(false); // Corrige la declaración de useState


  return (
    <Box
      sx={{
        bgcolor: "#111",
        color: "#7e7e7e",
        py: 3,
        borderTop: "1px solid",
        mt: "auto",
      }}
    >
      <Hidden mdDown>
        <Grid item xs={6} sm={3} md={2} mb={2}>
          <Grid container justifyContent="center">
            <IconButton
              aria-label="Facebook"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
              sx={{
                ...iconButtonStyle,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="inherit"
              component="a"
              href={socialMediaLinks.twitter}
              sx={{
                ...iconButtonStyle,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
              sx={{
                ...iconButtonStyle,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Box mb={4}>
          <form>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography variant="body1" color="White">
                  <strong>Sign up for our newsletter</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email address"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" type="submit" sx={{color:'white', borderColor:'white',height:'41px'}}>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Hidden>

      {/* Renderiza el contenido de Ayuda solo en pantallas grandes */}
      <Hidden mdDown>
        <Container>
          <Grid container justifyContent="space-between">
            <Box>
              <Typography variant="subtitle1" color="White" gutterBottom>
                Ayuda
              </Typography>
              <Box style={fontsMax}>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Centro de Ayuda
              </Link>
               
              <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Terminos y Condiciones
              </Link>
               <br/>
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1" color="white" gutterBottom>
                Acerca de nosotros
              </Typography>
              <Box style={fontsMax}>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                About Us
              </Link>
               <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Careers
              </Link>
               <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Deliverys Information
              </Link>
               <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Privacy Policy
              </Link>
               <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Terms of Service
              </Link>
               <br/>
              </Box>
            </Box>
           <Box>
              <Typography variant="subtitle1" color="White" gutterBottom>
                Cuenta
              </Typography>
              <Box style={fontsMax}>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Mi cuenta
              </Link>
               <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Guía de tallas
              </Link>
               <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Ver Carro
              </Link>
               <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                My Wishlist
              </Link>
               <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Retiro
              </Link>
               <br/>
               </Box>
            </Box>
          </Grid>
        </Container>
      </Hidden>

      {/*Mobile */}
      {/* Renderiza el contenido de Ayuda solo en pantallas pequeñas */}

      <Hidden mdUp>
      <Box style={LinkStyle}>
        
        <Link
        href="#"
        color="inherit"
        display="block"
        sx={{ textDecoration: "none",transition: "color 0.06s ease",  }}
      >
         Contactanos
        </Link>
        </Box>
        <Divider sx={{ borderColor: "white", margin: "0  16px" }} />
        <Box style={LinkStyle}>
        
        <Link
        href="#"
        color="inherit"
        display="block"
        sx={{ textDecoration: "none",transition: "color 0.06s ease",  }}
      >
        
        Hazte Miembro
        </Link>
       </Box>
        <Divider sx={{ borderColor: "white", margin: "0  16px" }} />
      </Hidden>

      <Hidden mdUp>
      
        <Box onClick={() => setOpenProductos(!openProductos)} >
          <Typography
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              margin: "12px",
            }}
          >
            <span>Ayuda</span>
            {openProductos ? (
              <ExpandLess sx={{ marginLeft: "auto" }} />
            ) : (
              <ExpandMore sx={{ marginLeft: "auto" }} />
            )}
          </Typography>
          </Box>
       
        <Box style={fonts}>
          <Collapse in={openProductos} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ color: "grey" }}>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Centro de Ayuda
              
              </Link>
              <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Terminos y Condiciones
              </Link>
              <br />
            </List>
          </Collapse>
          <Divider sx={{ borderColor: "white" }} />
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Box onClick={() => setOpenProductos2(!openProductos2)} >
          <Typography
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              margin: "12px",
            }}
          >
            <span>Acerca de nosotros </span>
            {openProductos ? (
              <ExpandLess sx={{ marginLeft: "auto" }} />
            ) : (
              <ExpandMore sx={{ marginLeft: "auto" }} />
            )}
          </Typography>
        </Box>
        <Box style={fonts}>
          <Collapse in={openProductos2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ color: "grey" }}>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
               About Us
              </Link>
              <br/>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
               Careers
              </Link>
              <br />
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
               Delivery Infomartion
              </Link>
              <br />
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
              Privacy Policy
              </Link>
              <br />
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
              Terms Of Service
              </Link>
              <br />
            </List>
          </Collapse>
          <Divider sx={{ borderColor: "white" }} />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box onClick={() => setOpenProductos3(!openProductos3)} >
          <Typography
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              margin: "12px",
            }}
          >
            <span>Cuenta </span>
            {openProductos3 ? (
              <ExpandLess sx={{ marginLeft: "auto" }} />
            ) : (
              <ExpandMore sx={{ marginLeft: "auto" }} />
            )}
          </Typography>
        </Box>
        <Box style={fonts}>
          <Collapse in={openProductos3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ color: "grey" }}>
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
                Mi Cuenta
              </Link>
              <br />
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
               Ver Carro
              </Link>
              <br />
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
               My Wishlist
              </Link>
              <br />  
              <Link
                href="#"
                color="inherit"
                display="block"
                sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
              >
               Retiro
              </Link>
              <br />
            </List>
          </Collapse>
          <Divider sx={{ borderColor: "white" }} />
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Grid item xs={6} sm={3} md={2} mb={2}>
          <Grid container justifyContent="center">
            <IconButton
              aria-label="Facebook"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
              sx={{
                ...iconButtonStyle,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="inherit"
              component="a"
              href={socialMediaLinks.twitter}
              sx={{
                ...iconButtonStyle,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
              sx={{
                ...iconButtonStyle,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Box mb={4}>
          <form>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography variant="body1" color="White">
                  <strong>Sign up for our newsletter</strong>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={2}>
                <TextField
                  fullWidth
                  label="Email address"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{ sx: { color: "white" } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" type="submit" sx={{color:'white', borderColor:'white',height:'40px'}}>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>

        <Box>
          <Link
            href="#"
            color="inherit"
            display="block"
            sx={{ textDecoration: "none",transition: "color 0.06s ease", "&:hover": { color: "#ffff" } }}
          >
            <LocationOnIcon
              sx={{
                fontSize: "16px",
                color: "white",
                fontWeight: 400,
                
                marginBottom:'-1px',
                fontFamily: " 'Helvetica', sans-serif",
              }}
            />{" "}
            Chile
          </Link>
          <Typography sx={fonstDes}>
            © 2024 Parrella Chile SpA. Todos los derechos reservados
          </Typography>
          <Box>
            <Link
              href="#"
              color="inherit"
              display="block"
              sx={{
                ...fonstDes,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              Términos de Uso
            </Link>

            <Link
              href="#"
              color="inherit"
              display="block"
              sx={{
                ...fonstDes,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              Términos de venta
            </Link>

            <Link
              href="#"
              color="inherit"
              display="block"
              sx={{
                ...fonstDes,
                textDecoration: "none",transition: "color 0.06s ease",
                "&:hover": { color: "#ffff" },
              }}
            >
              Politica de privacidad y cookies
            </Link>
          </Box>
        </Box>
      </Hidden>
    </Box>
  );
};

export default Footer;
