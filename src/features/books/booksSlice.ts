import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (query) => {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
        return response.data.docs;
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        items: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBooks.pending, (state) => {
            state.status = 'sto caricando...';
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'fatto';
            state.items = action.payload;
        })
        .addCase(fetchBooks.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

export default booksSlice.reducer;