import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservations/reservationSlice";

const store = configureStore({
  reducer: {
    reservations: reservationReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store;
