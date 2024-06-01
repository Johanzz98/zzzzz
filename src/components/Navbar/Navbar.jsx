import NavListDrawers from "./NavListDrawers";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, styled } from "@mui/material";
import { useState, useEffect } from 'react';
import SearchContainer from "./SearchContainer";
import SearchModal from "./SearchModal";
import LoginDrawers from "./LoginDrawers";
import LoginDrawerMax from "./LoginDrawerMax"
import NextLink from 'next/link'; // Importa el componente NextLink
import { ThemeProvider, createTheme } from '@mui/material/styles';
/* Icons */
import InboxIcon from "@mui/icons-material/Inbox";
import MenuIcon from "@mui/icons-material/Menu";
import DraftsIcon from "@mui/icons-material/Drafts";
import SearchIcon from '@mui/icons-material/Search';
import CasesIcon from '@mui/icons-material/Cases';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CartDrawersMax from "./CartDrawers.jsx";
import CartDrawers from "./CartDrawersMax";
import { useAuth } from "@/context/AuthProvider";
import { useDispatch } from 'react-redux';
const theme = createTheme({
    palette: {
      primary: {
        main: '#fafafa', // Color de fondo del navbar
      },
      secondary: {
        main: '#212121', // Color del texto del navbar
      },
    },
  });
  

const navLinks = [
    {
        title: "Home",
        path: "/home",
        icon: <InboxIcon />
    },
    {
        title: "Login",
        path: "/login",
        icon: <DraftsIcon />
    },
    {
        title: "Register",
        path: "SignInOutContainer",
        icon: <MenuIcon />,
    }
];
/*titulo,imagen, price*/
const rightNavLinks = [
    {
        title: "Like",
        path: "#Like",
        icon: <FavoriteBorderIcon />,
    },
   
];

const SecondAppBar = styled(AppBar)(({ theme }) => ({

    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },

    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
   
    backgroundColor: '#f5f5f5',
}));

const FirstAppBar = styled(AppBar)(({ theme, showSecondAppBar }) => ({
    transition: theme.transitions.create(['top'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    top: showSecondAppBar ? '64px' : '0', // Ajustar la position de top basado en la visiblidad de SecondAppBar 
    [theme.breakpoints.down('sm')]: {
        top: 0, //Cuando se esconda secondAppBar, pegue en el top 
        marginTop: 0, // Y con esto quito todo tipo de margen
    },
   
}));


const imgPath = "https://nikeclprod.vtexassets.com/assets/vtex/assets-builder/nikeclprod.store/3.0.10/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { authState } = useAuth(); // Destructure authState from the context
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize state
    const dispatch = useDispatch();
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call the function to set the initial window width

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    
    // Suponiendo que auth.isAuthenticated es un booleano, lo usamos para inicializar nuestro estado local
    useEffect(() => {
        setIsAuthenticated(authState.isAuthenticated); // Correctly set isAuthenticated based on authState
      }, [authState.isAuthenticated])

    // Función modificada para manejar el cierre de sesión
    const handleLogout = () => {
        // Suponiendo que hay una manera de limpiar el estado de autenticación, por ejemplo, estableciéndolo en null o un objeto vacío
        dispatch({ type: 'LOGOUT' }); // Despacha una acción LOGOUT si es necesario
        window.location.reload();
    };
      

    // Función para obtener los enlaces de autenticación basados en el estado local
    const getAuthLinks = () => {
        if (isAuthenticated) {
            return [
                {
                    title: "Centro de Ayuda | ",
                    path: "#Like",
                    icon: <FavoriteBorderIcon />,
                },
                {
                    title: "Cerrar sesión",
                    icon: <CasesIcon />,
                    onClick: (event) => {
                        event.preventDefault(); // Prevén la acción predeterminada del evento
                        handleLogout(); // Llama a la función de cierre de sesión
                    },
                },
            ];
        } else {
            return [
                {
                    title: "Centro de Ayuda | ",
                    path: "#Like",
                    icon: <FavoriteBorderIcon />,
                },
                {
                    title: "Registrarse/Login",
                    path: "/SignInOutContainer",
                    icon: <CasesIcon />,
                    
                },
            ];
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <>
            
                <SecondAppBar>
                    <Toolbar>
                        <Box sx={{ display: { xs: "none", sm: "block" }, alignItems: 'center', marginLeft: 'auto', marginRight: '5rem', paddingBottom: '20px', }}>
                        {getAuthLinks(handleLogout).map((item, index) => (
        <Button
            color="inherit"
            key={index}
            component="a"
            href={item.path}
            sx={{
                fontSize: '0.8rem',
                ...(item && (item.title === "Cerrar sesión" || item.title === "Registrarse/Login" || item.title === "Centro de Ayuda | ") && { // Verifica si item está definido antes de acceder a sus propiedades
                    textDecoration: "none",
                    color: 'black',
                    transition: "color 0.06s ease",
                    "&:hover": { 
                        color: "#9e9e9e",
                        borderColor: 'none',
                        border: 'white',
                        backgroundColor: 'transparent',
                    }
                })
            }}
            onClick={item.onClick} // Agrega onClick aquí para el botón de "Cerrar sesión"
        >
            {item.title}
        </Button>
    ))}
                        </Box>
                    </Toolbar>
                </SecondAppBar>

                <FirstAppBar position="fixed" sx={{ top: '42px' }}> {/* Ajusta la posición para que esté debajo del segundo navbar */}
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            size="large"
                            onClick={() => setOpen(true)}
                            sx={{ display: { xs: "flex", sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ width: '60px', aspectRatio: 'auto 60 / 28.8', height: '28.8px', marginLeft: '42px', cursor: 'pointer' }}>
                            <NextLink href="/">
                                <img src={imgPath} alt="Swoosh Icon" />
                            </NextLink>
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        {windowWidth > 800 ? (
                            <SearchContainer >
                                <SearchIcon />
                            </SearchContainer>
                        ) : (
                            <SearchModal>
                                <SearchIcon />
                            </SearchModal>
                        )}
                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '0.9rem' }}>
                            {rightNavLinks.map((item, index) => (
                                <Box key={index} sx={{ marginRight: index === rightNavLinks.length - 1 ? '0' : '0.5rem' }}>
                                    <IconButton
                                        color="inherit"
                                        component="a"
                                        href={item.path}
                                    >
                                        {item.icon}
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                        {windowWidth > 600 ? (
                            <CartDrawers />
                        ) : (
                            <CartDrawersMax/>
                        )}
                        {isAuthenticated && (
                            windowWidth > 600 ? (
                                <LoginDrawers />
                            ) : (
                                <LoginDrawerMax />
                            )
                        )}
                    </Toolbar>
                </FirstAppBar>
                <Drawer
                    open={open}
                    anchor="left"
                    onClose={() => setOpen(false)}
                    sx={{ display: { xs: "flex", sm: "none" } }}
                >
                    <NavListDrawers navLinks={navLinks} />
                </Drawer>
            </>
        </ThemeProvider>
    );
}
