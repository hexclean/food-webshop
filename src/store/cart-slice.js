import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    coupon: {
      activatedCoupon: false,
      value: 1,
      name: "mc",
    },
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalItemAmount: newItem.price,
          name: newItem.name,
          imageUrl: newItem.imageUrl,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalItemAmount += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id != id);
      } else {
        existingItem.quantity--;
      }
    },
    addCouponCode(state, action) {
      const coupon = action.payload.couponName;
      if (
        coupon === state.coupon.name &&
        state.coupon.activatedCoupon === false
      ) {
        state.coupon.activatedCoupon = true;
        state.totalAmount -= state.coupon.value;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
