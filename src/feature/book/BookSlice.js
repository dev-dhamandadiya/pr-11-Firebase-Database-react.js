import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import axiosInstance from "../../api/axiosInstance";

// CREATE BOOK
export const createBook = createAsyncThunk(
  "book/createBook",
  async (book, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/books.json",
        book
      );

      return {
        ...book,
        id: response.data.name,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// GET ALL BOOKS
export const getAllBooks = createAsyncThunk(
  "book/getAllBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "/books.json"
      );

      if (!response.data) return [];

      const data = Object.keys(response.data).map(
        (key) => ({
          ...response.data[key],
          id: key,
        })
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// UPDATE BOOK
export const updateBook = createAsyncThunk(
  "book/updateBook",
  async ({ id, book }, { rejectWithValue }) => {
    try {
      await axiosInstance.put(
        `/books/${id}.json`,
        book
      );

      return {
        ...book,
        id,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// DELETE BOOK
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(
        `/books/${id}.json`
      );

      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const bookSlice = createSlice({
  name: "book",

  initialState: {
    books: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // CREATE
      .addCase(createBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // READ
      .addCase(getAllBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateBook.fulfilled, (state, action) => {
        state.books = state.books.map((book) =>
          book.id === action.payload.id
            ? action.payload
            : book
        );
      })

      // DELETE
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.id !== action.payload
        );
      });
  },
});

export default bookSlice.reducer;