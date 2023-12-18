import { createSlice } from "@reduxjs/toolkit";
import { produce } from 'immer';

// Here just given initial value empty array
const initialState = {
    cartValues: [],
    totalPrice: 0,
    totalQuantity: 0
}
// Here created reducer()   createSlice we use it for creating reducers methods
// This Slice by default it takes 3 parameters or (properties) :
// 1. name, 2. initialValue, 3. reducers means actions (whatever Changes)
const cartReducer = createSlice({
name: 'cartReducer',
  initialState,
  reducers: {
    incrementCart: (state, action) => {
        const { productName, productPrice, quantity = 1 } = action.payload;
  
        const existingItemIndex = state.cartValues.findIndex(
          (item) => item.productName === productName
        );

        return produce(state, (draftState) => {
          if (existingItemIndex > -1) {
            draftState.cartValues[existingItemIndex].quantity += quantity;
          } else {
            draftState.cartValues.push({ productName, productPrice, quantity });
          }
          draftState.totalPrice = draftState.cartValues.reduce(
            (total, item) => total + item.productPrice * item.quantity,
            0
          );
          draftState.totalQuantity = draftState.cartValues.reduce(
            (total, item) => total + item.quantity,
            0
          );
        });
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
            // Decrement totalPrice by the productPrice
            state.totalPrice -= removedItem.productPrice;
          } else {
            // If quantity is 1 or less, remove the entire item
            state.totalPrice -= removedItem.productPrice;
            state.cartValues.splice(existingItemIndex, 1);
          }
          // Recalculate totalQuantity
          state.totalQuantity = state.cartValues.reduce(
            (total, item) => total + item.quantity,
            0
          );
          // Guard check to ensure totalPrice and totalQuantity are always positive
          state.totalPrice = Math.max(state.totalPrice, 0);
          state.totalQuantity = Math.max(state.totalQuantity, 0);
        }
      },
  },
});

export const {incrementCart,decrementCart} = cartReducer.actions;  //every Reducer should be exported
export default cartReducer.reducer;                                //Reducer main function also should be exported
