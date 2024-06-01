import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ShoppingReducers } from "../redurcers/ShoppingReducers";
import { authReducer } from "../redurcers/authInitialState";

export const store = () => {
    return configureStore({
        reducer: combineReducers({
            cart: ShoppingReducers,
            auth: authReducer // Asigna authReducer al estado de autenticación
        })
    });
};
