import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products.json";

const productsSlice = createSlice({
  name: "products",
  initialState: { productList: products },
  reducers: {},
});

export const productsActions = productsSlice.actions;

export default productsSlice;
