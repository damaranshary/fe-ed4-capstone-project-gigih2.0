import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksDataProps } from "../../types/types";

export const natureBooksSlice = createSlice({
    name: "natureBooks",
    initialState: {
        value: [] as BooksDataProps[],
        jsonData: {
            json: ['/data/book/N001.json', '/data/book/N002.json', '/data/book/N003.json', '/data/book/N004.json', '/data/book/N005.json', '/data/book/N006.json'] as string[],
            id: ['N001', 'N002', 'N003', 'N004', 'N005', 'N006'] as string[]
        }
    },
    reducers: {
        setNatureBooksData: (state, action: PayloadAction<BooksDataProps[]>) => {
            state.value = action.payload;
        }
    }
})

export const { setNatureBooksData } = natureBooksSlice.actions;

export default natureBooksSlice.reducer;

