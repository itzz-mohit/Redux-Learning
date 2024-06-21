import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Features/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
