import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllAdverts, getTotalAdverts } from "./carsOperations";

const advertsInitialState = {
  adverts: [],
  favoriteAdverts: [],
  page: 1,
  limit: 12,
  isLoading: false,
  error: null,
  isLoadMore: false,
  totalAdverts: null,
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
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    resetAdverts(state) {
      state.adverts = [];
    },
    addFavorite(state, action) {
      state.favoriteAdverts.push(action.payload);
    },
    removeFromFavorite(state, action) {
      const index = state.favoriteAdverts.findIndex(
        (favoriteAdvert) => favoriteAdvert.id === action.payload
      );
      state.favoriteAdverts.splice(index, 1);
    },
    setIsLoadMore(state, action) {
      state.isLoadMore = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...payload];
      })
      .addCase(getTotalAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.totalAdverts = payload.length;
      })
      .addMatcher(isAnyOf(getAllAdverts.pending), handlePending)
      .addMatcher(isAnyOf(getAllAdverts.rejected), handleRejected),
});

export const advertsReducer = advertsSlice.reducer;

export const {
  setPage,
  resetAdverts,
  addFavorite,
  removeFromFavorite,
  setIsLoadMore,
} = advertsSlice.actions;
