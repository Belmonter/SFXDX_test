import { configureStore } from '@reduxjs/toolkit';
import {walletReducer} from "./walletSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
