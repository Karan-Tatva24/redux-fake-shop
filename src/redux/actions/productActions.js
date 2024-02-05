import { ActionTypes } from "../contants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECT_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECT_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECT_PRODUCT,
  };
};
