import { createSlice } from "@reduxjs/toolkit";
import categories from "../data/categories.json";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { categoryList: categories },
  reducers: {},
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
