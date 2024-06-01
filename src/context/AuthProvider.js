// AuthProvider.js
import { authInitialState, authReducer } from '@/services/redurcers/authInitialState';
import React, { createContext, useContext, useReducer } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
