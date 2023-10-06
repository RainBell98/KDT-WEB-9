import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import loginSlice from './login';

//createSlice(): 리듀서와 액션을 함께 생성하는 함수
// const initLogin = {
//   isLogin: false,
// };
// const loginSlice = createSlice({
//   name: 'login',
//   initialState: { isLogin: false },
//   reducers: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { counter: 10 },
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     calc(state, action) {
//       console.log(action.payload);
//     },
//   },
// });

const store = configureStore({
  reducer: { count: counterSlice, login: loginSlice },
});
// export const counterAction = counterSlice.actions;
// export const loginAction = loginSlice.actions;
export default store;
