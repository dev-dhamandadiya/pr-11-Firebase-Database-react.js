import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../feature/book/BookSlice.js";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;