import { createSlice } from "@reduxjs/toolkit";
import categories from "../data/categories.json";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { categoryList: categories, selectedCategoryId: 6 },
  reducers: {
    changeSelectedCategory(state, action) {
      const categoryId = action.payload;
      state.selectedCategoryId = categoryId;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
