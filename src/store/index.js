import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import categoriesSlice from "./categories-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
