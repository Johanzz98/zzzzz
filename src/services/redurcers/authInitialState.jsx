import { TYPES } from "@/actions/ShoppingActions";

export const authInitialState = {
  token: null,
  isAuthenticated: false,
};

export function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case TYPES.SET_TOKEN: {
      const { token } = action.payload;
      return {
       ...state,
        token,
        isAuthenticated:!!token,
      };
    }
    case TYPES.LOGOUT: {
        localStorage.removeItem('token'); // Elimina el token de localStorage
        sessionStorage.removeItem('token'); // Elimina el token de sessionStorage
        return {
         ...state,
          isAuthenticated: false,
          token: null,
        };
    }

    case TYPES.SESS_TOKEN: {
      const { token } = action.payload;
      return {
       ...state,
        token,
        isAuthenticated:!!token,
      };
    }

    default:
      return state;
  }
}

// Asegúrate de inicializar el estado de autenticación solo cuando sea necesario, por ejemplo, al montar el componente principal o en algún otro lugar donde tengas acceso al objeto window.
if (typeof window !== 'undefined' && !window.__INITIAL_STATE__) {
  window.__INITIAL_STATE__ = true;
  const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token') || null;
  authInitialState.token = storedToken;
  authInitialState.isAuthenticated = !!storedToken;
}