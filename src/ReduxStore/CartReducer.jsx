import { createSlice } from "@reduxjs/toolkit";

// Here just given initial value empty array
const initialState = {
    cartValues: [],
    totalPrice: 0
}
// Here created reducer()   createSlice we use it for creating reducers methods
// This Slice by default it takes 3 parameters or (properties) :
// 1. name, 2. initialValue, 3. reducers means actions (whatever Changes)
const cartReducer = createSlice({
    name: 'cartReducer',
  initialState,
  reducers: {
    incrementCart: (state, action) => {
      const existingItemIndex = state.cartValues.findIndex(
        (item) => item.productName === action.payload.productName
      );
      if (existingItemIndex > -1) {
        // If the product is already in the cart, increment its quantity
        state.cartValues[existingItemIndex].quantity += 1;
      } else {
        // If the product is not in the cart, add it with quantity 1
        state.cartValues.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.productPrice; // Increment totalPrice
    },
    decrementCart: (state, action) => {
      const existingItemIndex = state.cartValues.findIndex(
        (item) => item.productName === action.payload.productName
      );
      if (existingItemIndex > -1) {
        const removedItem = state.cartValues[existingItemIndex];
        if (removedItem.quantity > 1) {
          // If quantity is greater than 1, decrement quantity
          removedItem.quantity -= 1;
        } else {
          // If quantity is 1 or less, remove the entire item
          state.cartValues.splice(existingItemIndex, 1);
        }
        // Decrement totalPrice by the productPrice * quantity
        state.totalPrice -= removedItem.productPrice * removedItem.quantity;
      }
    },
  },
});

export const {incrementCart,decrementCart} = cartReducer.actions;  //every Reducer should be exported
export default cartReducer.reducer;                  //Reducer main function also should be exported
