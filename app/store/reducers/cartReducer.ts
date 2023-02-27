import createReducer from 'app/lib/createReducer';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  LOG_OUT,
} from '../actions/types';

const initialState = {
  cart: [],
};

export const cartReducer = createReducer(initialState, {
  [ADD_TO_CART](state, action) {
    const itemInCart = state.cart.find(item => item.id === action.payload.id);
    if (itemInCart) {
      const newQuantity = itemInCart.quantity + action.payload.quantity;
      const newPrice =
        itemInCart.price + action.payload.price * action.payload.quantity;
      const updatedItem = {
        ...itemInCart,
        quantity: newQuantity,
        price: newPrice,
      };
      const updatedCart = state.cart.map(item =>
        item.id === itemInCart.id ? updatedItem : item,
      );
      return { ...state, cart: updatedCart };
    } else {
      const newItem = {
        ...action.payload,
        price: action.payload.price * action.payload.quantity,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  },
  [REMOVE_FROM_CART](state, action) {
    const removeFromCart = state.cart.filter(
      item => item.id !== action.payload.id,
    );
    return { ...state, cart: removeFromCart };
  },
  [INCREMENT_QUANTITY](state, action) {
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: ((item.quantity + 1) * item.price) / item.quantity,
            }
          : item,
      ),
    };
  },
  [DECREMENT_QUANTITY](state, action) {
    return {
      ...state,
      cart: state.cart
        .map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: ((item.quantity - 1) * item.price) / item.quantity,
              }
            : item,
        )
        .filter(item => item.quantity > 0),
    };
  },
  [LOG_OUT](state) {
    return { ...state, cart: [] };
  },
});
