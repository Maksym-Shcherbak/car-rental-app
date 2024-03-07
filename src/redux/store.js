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

// import { devToolsEnhancer } from "@redux-devtools/extension";

const persistConfig = {
  key: "adverts",
  storage,
};

// const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    adverts: persistReducer(persistConfig, advertsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
