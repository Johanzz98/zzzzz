import React, { useState } from 'react';
import { Box, Grid, Grow, Hidden, Drawer, IconButton, Slide } from '@mui/material';
import ProductMid from '../Carousel/ProductMid';
import Header from './Header';
import FilterPanel from './FilterPanel';
import { productData } from "../Carousel/MidItem";
import MenuIcon from '@mui/icons-material/Menu';

function Products() {
    const [products, setProducts] = useState(productData);
    const [showFilters, setShowFilters] = useState(true);

    const sortByPriceLowToHigh = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };

    const sortByPriceHighToLow = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    const sortByAToZ = () => {
        const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
        setProducts(sortedProducts);
    };

    const sortByZToA = () => {
        const sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
        setProducts(sortedProducts);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const productCards = products.map((item, index) => (
        <Grow in={true} key={index}>
                <Box sx={{ margin:"0 12px " }}>
            <Grid item xs={12} sm={6} md={4}>
        
                <ProductMid item={item} />
               
            </Grid>
            </Box>
        </Grow>
    ));

    return (
        <>
            <Header 
                sortByPriceLowToHigh={sortByPriceLowToHigh} 
                sortByPriceHighToLow={sortByPriceHighToLow}
                sortByAToZ={sortByAToZ}
                sortByZToA={sortByZToA}
                toggleFilters={toggleFilters}
            />
            <Box sx={{ display: 'flex',}}>
                {/* Utilizar Slide solo en pantallas más grandes que SM */}
                <Hidden smDown>
                    <Slide direction="right" in={showFilters} mountOnEnter unmountOnExit timeout={500}>
                        <Grid item xs={12} sm={4}>
                           
                            <FilterPanel />
                          
                        </Grid>
                    </Slide>
                </Hidden>
                {/* Utilizar Drawer solo en pantallas SM */}
                <Hidden mdUp>
                    <Drawer
                        anchor="right"
                        open={showFilters}
                        onClose={() => setShowFilters(false)}
                    >
                        <FilterPanel />
                    </Drawer>
                </Hidden>
                <Box>
                    <Grid container spacing={1}>
                        {productCards}
                    </Grid>
                </Box>
            </Box>
            {/* Mostrar el botón de menú solo en pantallas SM */}
            <Hidden mdUp>
                <IconButton
                    color="inherit"
                    aria-label="open filters"
                    edge="end"
                    onClick={toggleFilters}
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
        </>
    );
}

export default Products;
