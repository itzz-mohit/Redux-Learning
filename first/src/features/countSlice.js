import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    countValue: 0,
  },
  reducers: {
    increaseCounter: (state) => {
      state.countValue += 1;
    },
    decreaseCounter: (state) => {
      state.countValue -= 1;
    },
  },
});

export const { increaseCounter, decreaseCounter } = countSlice.actions;
export default countSlice.reducer;
