import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
const counter = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
    //   console.log(counterIndex);
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      console.log(counterIndex);
      state[counterIndex].value--;
    },
  },
});
export default counter.reducer;
export const { increment, decrement } = counter.actions;