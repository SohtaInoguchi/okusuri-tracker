import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

export interface UserLoginState {
  userEmail: string,
  password: string
}

const initialState: UserLoginState = {
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
  },
});

export const { handleUserEmailLogin, handelUserPasswordLogin } = loginSlice.actions;
export default loginSlice.reducer;
