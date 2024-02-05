import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECT_PRODUCT:
      return {};
    default:
      return state;
  }
};
