import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TYPES } from '@/actions/ShoppingActions'; // Importamos el objeto 'TYPES'

const Token = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (storedToken) {
      console.log('Token cargado:', storedToken);
      dispatch({ type: TYPES.SET_TOKEN, payload: { token: storedToken } }); // Usamos el tipo de acción 'SET_TOKEN' del objeto 'TYPES'
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);
    console.log('Token guardado:', token);
  }, [token]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    dispatch({ type: TYPES.LOGOUT }); // Usamos el tipo de acción 'LOGOUT' del objeto 'TYPES'
    // Puedes agregar aquí la lógica adicional, como redireccionar al usuario después del cierre de sesión
  };


  return null;
};

export default Token;
