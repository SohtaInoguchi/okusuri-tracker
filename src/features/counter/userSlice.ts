import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';
console.log("in userslice");
export interface UserLoginState {
  isLoginSuccessful: boolean,
  userEmail: string,
  password: string
}

const initialState: UserLoginState = {
  isLoginSuccessful: false,
  userEmail: '',
  password: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    handleUserEmailLogin: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    handelUserPasswordLogin: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoginSuccess: (state) => {
      state.isLoginSuccessful = true;
    },
  },
});

export const { handleUserEmailLogin, handelUserPasswordLogin, setLoginSuccess } = loginSlice.actions;
export default loginSlice.reducer;
