import createReducer from 'app/lib/createReducer';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from '../actions/types';

const initialState = {
  cart: [],
};

export const cartReducer = createReducer(initialState, {
  [ADD_TO_CART](state, action) {
    const itemInCart = state.cart.find(item => item.id === action.payload.id);
    if (itemInCart) {
      itemInCart.quantity = action.payload.quantity;
      itemInCart.price = itemInCart.quantity * action.payload.price;
      return { ...state };
    } else {
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: 1, price: action.payload.price },
        ],
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
});
