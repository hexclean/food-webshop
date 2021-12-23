import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products.json";

const productsSlice = createSlice({
  name: "products",
  initialState: { productList: products },
  reducers: {
    filteringProducts(state, action) {
      const categoryId = action.payload;
      const filteredProducts = products.filter(
        item => item.categoryId === categoryId
      );
      state.productList = filteredProducts;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
