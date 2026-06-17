import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialstate: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialstate,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }

  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;