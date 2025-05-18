import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  form: formReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Configure the “serializableCheck” middleware, which by default
      // warns if you dispatch non-plain-JS values (e.g., functions, Promises) :contentReference[oaicite:0]{index=0}
      serializableCheck: {
        // Redux Persist emits these internal actions (FLUSH, REHYDRATE, etc.)
        // whose payloads may include non-serializable data.
        // We list them here so the serializability middleware skips them
        // and doesn’t log false errors when hydrating or persisting state. :contentReference[oaicite:1]{index=1}
        ignoredActions: [
          FLUSH, // flush queued state to storage
          REHYDRATE, // restore state from storage
          PAUSE, // pause persistence
          PERSIST, // initialize persistence
          PURGE, // clear persisted storage
          REGISTER, // register a reducer key for persistence
        ],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
