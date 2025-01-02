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
import snippetsReducer from "./snippets/slice";
import projectsReducer from "./projects/slice";

const persistFileStorageReducer = persistReducer(
  {
    key: "fileStorage",
    storage,
    whitelist: ["current", "data"],
  },
  fileStorageReducer
);

const persistProjectsReducer = persistReducer(
  {
    key: "projects",
    storage,
    whitelist: ["filters", "projects"],
  },
  projectsReducer
);

export const store = configureStore({
  reducer: {
    fileStorage: persistFileStorageReducer,
    snippets: snippetsReducer,
    projects: persistProjectsReducer,
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
