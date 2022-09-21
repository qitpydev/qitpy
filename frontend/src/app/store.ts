import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;