import { configureStore } from "@reduxjs/toolkit";
import cabinReducer from "./cabin/cabinSlice";

const store = configureStore({
  reducer: {
    cabin: cabinReducer,
  },
});

export default store;
