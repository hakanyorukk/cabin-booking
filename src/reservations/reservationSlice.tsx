import { createSlice, PayloadAction } from "@reduxjs/toolkit";

declare type Reservation = {
  cabinId: number;
  startDate: string;
  endDate: string;
  email: string;
  name: string;
  guestNumber: number;
  totalNights: number;
  totalPrice: number;
};

interface ReservationState {
  reservations: Reservation[];
  dateRange: { start: Date | undefined; end: Date | undefined };
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
    deleteReservation: (state, action: PayloadAction<number>) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation?.cabinId !== action.payload
      );
    },
  },
});

export const { createReservation, setDateRange, deleteReservation } =
  reservationSlice.actions;
export default reservationSlice.reducer;
