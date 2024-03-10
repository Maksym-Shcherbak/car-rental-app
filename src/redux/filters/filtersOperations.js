import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsRentalAPI } from "../../carsRentalAPI/carsRentalAPI";

export const getMakes = createAsyncThunk(
  "filters/getMakes",
  async (_, thunkAPI) => {
    try {
      const rentalAPI = new carsRentalAPI();
      const data = await rentalAPI.getMakes();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
