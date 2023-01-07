/**
 * Main class of Redux store
 *
 * see more about what is React-redux
 * https://react-redux.js.org/
 */
import { configureStore } from '@reduxjs/toolkit';
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