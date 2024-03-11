import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getMakes } from "./filtersOperations";

const filtersInitialState = {
  makes: [],
  make: null,
  query: {
    maxRentalPrice: "",
  },
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setMake(state, action) {
      state.make = action.payload;
    },

    setMaxRentalPrice(state, action) {
      state.query.maxRentalPrice = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getMakes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.makes = payload;
      })
      .addMatcher(isAnyOf(getMakes.pending), handlePending)
      .addMatcher(isAnyOf(getMakes.rejected), handleRejected),
});

export const filtersReducer = filtersSlice.reducer;

export const { setMake, setMaxRentalPrice } = filtersSlice.actions;
