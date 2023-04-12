import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export type PlanType = {
  type: 'Mobile' | 'Basic' | 'Standard' | 'Premium' | '';
  resolution: string;
  price: string;
  numberOfDevice: number;
  usableDevices: string[];
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
  plan: {
    type: '',
    resolution: '',
    price: '',
    numberOfDevice: null!,
    usableDevices: [],
  },
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
    fetchPlan: (state, action: PayloadAction<PlanType>) => {
      state.plan = action.payload;
    },
    checkPlan: (state) => {
      if (state.plan.type) state.planExist = true;
      else state.planExist = false;
    },
  },
});

export const { loginAcct, logout, setMail, fetchPlan, checkPlan } =
  userSlice.actions;

export default userSlice.reducer;
