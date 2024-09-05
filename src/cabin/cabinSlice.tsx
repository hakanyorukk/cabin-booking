import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cabin: [],
};

const cabinSlice = createSlice({
  name: "cabins",
  initialState,
  reducers: {},
});

//export const {} = cabinSlice.actions;

export default cabinSlice.reducer;
