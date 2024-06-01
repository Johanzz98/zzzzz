import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Checkbox, Menu, MenuItem, Divider, Stack, Link } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = ({ sortByPriceLowToHigh, sortByPriceHighToLow, sortByAToZ, sortByZToA, toggleFilters }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [orderByChecked, setOrderByChecked] = useState(false); // Estado para la checkbox
    const [anchorEl, setAnchorEl] = useState(null); // Estado para el elemento ancla del menú

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenuClick = (event) => {
        setIsMenuOpen(!isMenuOpen);
        setAnchorEl(event.currentTarget);
    };

    const handleOptionSelect = (option) => {
        setIsMenuOpen(false);
        setSelectedOption(option);
        setOrderByChecked(true); // Marcar la checkbox al seleccionar una opción
        switch (option) {
            case "Precio Más Bajo":
                sortByPriceLowToHigh();
                break;
            case "Precio Más Alto":
                sortByPriceHighToLow();
                break;
            case "A-Z":
                sortByAToZ();
                break;
            case "Z-A":
                sortByZToA();
                break;
            default:
                break;
        }
    };

    const handleToggleFilters = () => {
        toggleFilters();
        setMostrarFiltros(!mostrarFiltros);
    };

    return (
        <Box sx={{ marginTop: '200px' }}>
            <AppBar position="relative" sx={{ marginTop: '12px', boxShadow: { xs: 1, sm: 0 }, backgroundColor: 'inherit' }}>
                <Toolbar
                    sx={{
                        height: '48px',
                        boxShadow: { xs: 1, sm: 0 },
                        backgroundColor: 'inherit',
                        justifyContent: { xs: 'space-between', sm: 'flex-end' }
                    }}
                >
                    {!isSmallScreen && (
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "Helvetica,sans-serif",
                                fontOpticalSizing: 'auto',
                                fontSize: '1.2rem',
                                fontWeight: 1000,
                                fontStyle: 'normal',
                                marginBottom: '12px',
                                color: "#111",
                                marginBottom: '4px',
                                textTransform: "capitalize",
                                flexGrow: 1,
                            }}
                        >
                            Todo Parrella
                        </Typography>
                    )}
                    <Typography variant="h6" sx={{
                        margin: '0 24px',
                        fontFamily: "Helvetica,sans-serif",
                        fontOpticalSizing: 'auto',
                        fontSize: '.75rem',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        textAlign: 'center',
                        color: "#111",
                        marginBottom: '4px',
                        textTransform: "capitalize",
                    }}>Ropa </Typography>
                    <Divider
                        orientation="vertical"
                        sx={{
                            margin: '12px 30px',
                            backgroundColor: 'black',
                            display: { xs: 'block', sm: 'none' }
                        }}
                    />
                    <Stack direction="row" spacing={1}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleToggleFilters}
                            sx={{ borderRadius: 0 }}
                        >
                             {isSmallScreen && (
                <TuneIcon />
            )}
                            <Typography sx={{
                                marginRight:'24px',
                                fontFamily: "Helvetica,sans-serif",
                                fontOpticalSizing: 'auto',
                                fontSize: '.75rem',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                textAlign: 'center',
                                color: "green",
                                marginBottom: '4px',
                                textTransform: "capitalize",
                            }}>
                                {isSmallScreen ? 'Filtrar ' : mostrarFiltros ? 'Mostrar Filtros' : 'Ocultar Filtros '}
                            </Typography>
                            {!isSmallScreen && (
    <Box sx={{ marginRight: '12px' }}>
        <TuneIcon />
    </Box>
)}

                                <Divider
                                    orientation="vertical"
                                    sx={{
                                        height: '58px',
                                        backgroundColor: 'black',
                                        display: { xs: 'block', sm: 'none' }
                                    }}
                                />
                        </IconButton>

                        <IconButton
            color="inherit"
            aria-label="ordenar"
            onClick={handleMenuClick}
            sx={{ borderRadius: 0 }}
        >
            <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{
                marginLeft: '10px',
                marginRight: '20px',
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: 'auto',
                fontSize: '.75rem',
                fontWeight: 600,
                fontStyle: 'normal',
                textAlign: 'center',
                color: "#111",
                textTransform: "capitalize",
            }}>
                {(!isSmallScreen && selectedOption) ? `Ordenar por ${selectedOption}` : 'Ordenar por'}
            </Typography>
            </Box>
            {isMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>

       
    

                        <Menu
                            anchorEl={anchorEl}
                            open={isMenuOpen}
                            onClose={() => setIsMenuOpen(false)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={() => handleOptionSelect("Precio Más Alto")}>
                                {isSmallScreen && <Checkbox checked={selectedOption === "Precio Más Alto"} sx={{
                    '& .MuiSvgIcon-root': { // Modifica el estilo del icono del checkbox
                       color:"#111"// Cambia el color del icono según el color de texto principal del tema
                    },
                  
                }}
            />}
                                <Typography
                                    sx={{
                                        fontFamily: "Helvetica, sans-serif",
                                        fontOpticalSizing: 'auto',
                                        fontSize: '.75rem',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        fontStyle: 'normal',
                                        
                                        color: "#111",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Precio Más Alto
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("Precio Más Bajo")}>
                                {isSmallScreen && <Checkbox checked={selectedOption === "Precio Más Bajo"}   sx={{
                    '& .MuiSvgIcon-root': { // Modifica el estilo del icono del checkbox
                       color:"#111"// Cambia el color del icono según el color de texto principal del tema
                    },
                  
                }}
            />}
                                <Typography
                                    sx={{
                                        fontFamily: "Helvetica, sans-serif",
                                        fontOpticalSizing: 'auto',
                                        fontSize: '.75rem',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        fontStyle: 'normal',
                                        
                                        color: "#111",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Precio Más Bajo
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("A-Z")}>
                                {isSmallScreen && <Checkbox checked={selectedOption === "A-Z"} sx={{
                    '& .MuiSvgIcon-root': { // Modifica el estilo del icono del checkbox
                       color:"#111"// Cambia el color del icono según el color de texto principal del tema
                    },
                  
                }}
            />}
                                <Typography
                                    sx={{
                                        fontFamily: "Helvetica, sans-serif",
                                        fontOpticalSizing: 'auto',
                                        fontSize: '.75rem',
                                        fontWeight: 600,
                                        fontStyle: 'normal',
                                        textAlign: 'center',
                                        color: "#111",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    A-Z
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleOptionSelect("Z-A")}>
                                {isSmallScreen && <Checkbox checked={selectedOption === "Z-A"}sx={{
                    '& .MuiSvgIcon-root': { // Modifica el estilo del icono del checkbox
                       color:"#111"// Cambia el color del icono según el color de texto principal del tema
                    },
                  
                }}
            />}
                                <Typography
                                    sx={{
                                        fontFamily: "Helvetica, sans-serif",
                                        fontOpticalSizing: 'auto',
                                        fontSize: '.75rem',
                                        fontWeight: 600,
                                        fontStyle: 'normal',
                                        textAlign: 'center',
                                        color: "#111",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Z-A
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
