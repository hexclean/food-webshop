import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import categoriesSlice from "./categories-slice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

export default store;
