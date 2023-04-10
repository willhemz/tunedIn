import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InitialProps {
  loggedin: boolean;
  email: string;
}

const initialState: InitialProps = {
  loggedin: false,
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAcct: (state) => {
      state.loggedin = true;
    },
    logout: (state) => {
      state.loggedin = false;
    },
    setMail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { loginAcct, logout, setMail } = userSlice.actions;

export default userSlice.reducer;
