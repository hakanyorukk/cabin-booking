import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Reservation = {
  cabinId: string;
  startDate: string;
  endDate: string;
  guestName: string;
};

interface ReservationState {
  reservations: Reservation[];
  dateRange: { start: Date | undefined; end: Date | undefined }; // Add dateRange to state
}

const initialState: ReservationState = {
  reservations: [],
  dateRange: { start: undefined, end: undefined },
};

const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    createReservation: (state, action: PayloadAction<Reservation>) => {
      state.reservations.push(action.payload);
    },
    setDateRange: (
      state,
      action: PayloadAction<{ start: Date | undefined; end: Date | undefined }>
    ) => {
      state.dateRange = action.payload;
    },
  },
});

//export const {} = cabinSlice.actions;

export const { createReservation, setDateRange } = reservationSlice.actions;
export default reservationSlice.reducer;
