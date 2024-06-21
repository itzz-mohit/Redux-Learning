import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addAsync = createAsyncThunk("", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
});

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
    oddCounter: (state) => {
      if (state.countValue % 2 !== 0) {
        state.countValue += 1;
      }
    },
    addAmount: (state) => {
      state.countValue += 2;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsync.fulfilled, (state, action) => {
      state.countValue += action.payload;
    });
  },
});

export const {
  increaseCounter,
  decreaseCounter,
  oddCounter,
  addAmount,
  extraReducers,
} = countSlice.actions;
export default countSlice.reducer;
