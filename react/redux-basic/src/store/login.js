import { createSlice, configureStore } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: { isLogin: false },
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export const loginAction = loginSlice.actions;
export default loginSlice.reducer;
