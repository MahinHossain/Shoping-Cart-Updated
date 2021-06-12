import axios from "axios";
import * as Types from "./Types";
export const getvalue = () => async (dispatch) => {
  let data = [];
  let isloading = false;
  await axios.get("https://fakestoreapi.com/products").then((res) => {
    data = res.data;
    isloading = true;
    dispatch({ type: Types.GET_TASKS, payload: { data, isloading } });
  });
};
export const getsingledetails = (id) => async (dispatch) => {
  let data = [];
  let isloading = false;
  await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    data = res.data;
    console.log(`data`, data);
    isloading = true;
    dispatch({ type: Types.DETAILS_PROFUCT, payload: data });
  });
};
export const cartItemAc = (cartItem) => (dispatch) => {
  dispatch({ type: Types.CART_ITEM, payload: cartItem });
};
export const removeselectProducrs = () => (dispatch) => {
  dispatch({ type: Types.removes, payload: "" });
};
export const functionaTest = (item) => (dispatch) => {
  dispatch({ type: Types.funtionTest, payload: item });
};
