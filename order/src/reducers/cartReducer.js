import {
  ADD_TO_CART,
  CART_LIST,
  COMPLETE_ALL_CART,
  COMPLETE_CART,
  DECREASE_QTY,
  EMPTY_CART,
  INCREASE_QTY,
  REMOVE_FROM_CART,
} from '../types/cartType.js';

export const cartReducer = (
  state = {
    cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    cartComplete: JSON.parse(localStorage.getItem('cartComplete') || '[]'),
  },
  action
) => {
  switch (action.type) {
    case CART_LIST:
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.id === item.id);
      if (existItem) {
        state.cartItems.map(x => {
          if (x.id === item.id) {
            x.qty++;
          }
          return { ...state };
        });
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
      return { ...state };

    case INCREASE_QTY:
      state.cartItems[action.payload].qty++;
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    case DECREASE_QTY:
      let qty = state.cartItems[action.payload].qty;
      if (qty > 1) {
        state.cartItems[action.payload].qty--;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.id !== action.payload),
      };

    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };

    case COMPLETE_CART:
      return {
        ...state,
        cartItems: state.cartItems.map(cart =>
          cart.id === action.payload
            ? { ...cart, complete: !cart.complete }
            : cart
        ),
      };

    case COMPLETE_ALL_CART:
      const checkAll = state.cartItems.every(x => x.complete);
      return {
        ...state,
        cartItems: state.cartItems.map(cart => ({
          ...cart,
          complete: !checkAll,
        })),
      };

    default:
      return state;
  }
};
