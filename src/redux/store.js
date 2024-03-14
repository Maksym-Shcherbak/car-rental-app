// import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./rental/cars/carsSlice";
import { modalReducer } from "./modal/modalSlice";
import { filtersReducer } from "./filters/filtersSlice";

const persistConfig = {
  key: "adverts",
  storage,
  whitelist: ["favoriteAdverts"],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(persistConfig, advertsReducer),
    modal: modalReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
