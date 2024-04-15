import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice";
import dataFachingSlice from "../features/DataFaching/dataFachingSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dataFachingSlice:dataFachingSlice
  },
});
export default store;