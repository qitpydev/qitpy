import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import screenWrapperReducer from './screenWrapperSlice'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    screenWrapper: screenWrapperReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;