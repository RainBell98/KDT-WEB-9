import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 10 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    calc(state, action) {
      const { plus, minus } = action.payload;
      state.counter = state.counter + plus + minus;
      console.log(action.payload);
    },
  },
});
export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
