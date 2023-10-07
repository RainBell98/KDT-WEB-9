import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import loginSlice from './login';

const store = configureStore({
  reducer: { count: counterSlice, login: loginSlice },
});

export default store;
