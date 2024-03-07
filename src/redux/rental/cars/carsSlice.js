import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllAdverts } from "./carsOperations";

const advertsInitialState = {
  adverts: [],
  page: 1,
  limit: 12,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: advertsInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = payload;
      })
      .addMatcher(isAnyOf(getAllAdverts.pending), handlePending)
      .addMatcher(isAnyOf(getAllAdverts.rejected), handleRejected),
});

export const advertsReducer = advertsSlice.reducer;
