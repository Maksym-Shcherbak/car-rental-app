import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsRentalAPI } from "../../../carsRentalAPI/carsRentalAPI";

export const getAllAdverts = createAsyncThunk(
  "cars/getAll",
  async (credentials, thunkAPI) => {
    const { limit, currentPage: page } = credentials;
    try {
      const rentalAPI = new carsRentalAPI();
      const data = await rentalAPI.getAllCars(page, limit);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
