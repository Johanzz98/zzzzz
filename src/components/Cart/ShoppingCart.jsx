import React, { useReducer, useEffect} from 'react';
import { ShoppingInitialState, ShoppingReducers } from '@/services/redurcers/ShoppingReducers';
import ProductItem from './ProductItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CartItems from './CartItems';
import { TYPES } from '@/actions/ShoppingActions';
import  Button from '@mui/material/Button';

import {useSelector, useDispatch} from "react-redux"


const ShoppingCart = () => {
  const  dispatch = useDispatch();
  const { cart,total } = useSelector((state) => state.cart );


  useEffect(() => {
    const ShoppingCartLS = JSON.parse(localStorage.getItem('ShoppingCarrito')) ?? [];
    if (ShoppingCartLS.length > 0) {
      // Actualizar el carrito en el estado solo si hay elementos en el localStorage
      dispatch({ type: TYPES.SET_CART_FROM_STORAGE, payload: ShoppingCartLS });
      dispatch({ type:TYPES.TOTAL})
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ShoppingCarrito', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (id) => {
    dispatch({ type:TYPES.TOTAL})
    dispatch({type:TYPES.ADD_TO_CART, payload: id});
    
  };
  
  const delFromCart = (id, all= false) => {
    
      if(all){
        dispatch({type: TYPES.REMOVE_ALL_FROM_CART,payload:id})
      }else{
        dispatch({type: TYPES.REMOVE_ONE_FROM_CART,payload:id})
      }
      dispatch({ type:TYPES.TOTAL})
      
  };


  const clearCart = () => {
    dispatch({type:TYPES.CLEAR_CART})
    dispatch({ type:TYPES.TOTAL})
  };

  const addTalla= (id) => {
    dispatch({type:TYPES.ADD_TALLA, payload: id});
  };

  return (
    <Grid container spacing={2}>
     
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant="h3" >Carrito 211</Typography>
        <Paper>
          <Button variant="contained" color="secondary" onClick={clearCart}>Limpiar carrito</Button>
          {
            cart.map((item, index) => ( <CartItems key={index} data={item} delFromCart={delFromCart}/>))
          }
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ShoppingCart;
