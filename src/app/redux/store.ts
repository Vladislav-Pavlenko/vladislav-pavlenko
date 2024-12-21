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
import fileStorageReducer from "./fileStorage/slice";

const persistfileStorageReducer = persistReducer(
  {
    key: "fileStorage",
    storage,
    whitelist: ["current", "data"],
  },
  fileStorageReducer
);

export const store = configureStore({
  reducer: {
    fileStorage: persistfileStorageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
