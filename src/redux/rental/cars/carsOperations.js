import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsRentalAPI } from "../../../carsRentalAPI/carsRentalAPI";

export const getAllAdverts = createAsyncThunk(
  "cars/getAll",
  async (credentials, thunkAPI) => {
    try {
      const { limit, currentPage: page, make } = credentials;
      const rentalAPI = new carsRentalAPI();
      const data = await rentalAPI.getAllCars(page, limit, make);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTotalAdverts = createAsyncThunk(
  "cars/getTotal",
  async (credentials, thunkAPI) => {
    try {
      const { make } = credentials;
      const rentalAPI = new carsRentalAPI();
      const data = await rentalAPI.getTotalAdverts(make);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
