import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

type PlanType = {
  type: 'Mobile' | 'Basic' | 'Standard' | 'Premium' | '';
  price: string;
};

export interface InitialProps {
  loggedin: boolean;
  email: string;
  user: User;
  planExist: boolean;
  plan: PlanType;
}

const initialState: InitialProps = {
  loggedin: false,
  email: '',
  user: null!,
  planExist: false,
  plan: { type: '', price: '' },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAcct: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loggedin = true;
    },
    logout: (state) => {
      state.user = null!;
      state.loggedin = false;
    },
    setMail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { loginAcct, logout, setMail } = userSlice.actions;

export default userSlice.reducer;
