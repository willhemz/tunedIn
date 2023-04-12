import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/User/Userslice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchFunc = typeof store.dispatch;
