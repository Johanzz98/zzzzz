import { TYPES } from "@/actions/ShoppingActions";

const ShoppingInitialState = {

    cart: [],
    total:0,
};

export function ShoppingReducers(state = ShoppingInitialState, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {

            let itemInCart = state.cart.find((item) => item.id === action.payload.id)
        
          console.log(action.payload)
            return itemInCart
           ?
               {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity +1}
                        : item),

                } : {
                    
                        ...state,
                        cart: [...state.cart, { ...action.payload, quantity: 1 }],
                    
                    
                }
         
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1 ? {

                ...state,
                cart: state.cart.map((item) => item.id === action.payload ?
                    { ...item, quantity: item.quantity - 1 } : item),

            } : {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };


        }

        case TYPES.SET_CART_FROM_STORAGE: {

            console.log(action.payload)
            return {
                ...state,
                cart: action.payload, // Establece el carrito desde el almacenamiento local
            };
        }

        case TYPES.QUANTITY: {
            let quantityInCart = state.cart.findIndex((item) => item.id === action.payload.id);
            
        
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ?
                    { ...item, quantity: parseInt(action.payload.quantity) } : item),
            };
        }
        case TYPES.ADD_TALLA: {
            return {
               ...state,
               cart: state.cart.map((item) =>
                 item.id === action.payload.id ? { ...item, talla: action.payload.talla } : item
               ),
            };
           }
           
      case TYPES.TOTAL:{
        console.log("hola amiguito")

        let totalItem= 0;
        state.cart.map((item) => {
            totalItem+= item.quantity * item.price
        })
        console.log(totalItem)

         return{
            ...state,
            total: totalItem

         }


      }

        case TYPES.CLEAR_CART:
            return ShoppingInitialState;


        default:
            return state;
    }
}