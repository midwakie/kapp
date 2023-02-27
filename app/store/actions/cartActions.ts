import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from './types';

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const incrementQuantity = item => ({
  type: INCREMENT_QUANTITY,
  payload: item,
});

export const decrementQuantity = item => ({
  type: DECREMENT_QUANTITY,
  payload: item,
});
