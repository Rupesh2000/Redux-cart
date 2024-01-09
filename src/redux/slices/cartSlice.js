import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // you should now add this information received from payload and add it to your state
      // console.log(action.payload);
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // remove this value of payload from your state
      // filter out all the records to remove this payload from the array
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
