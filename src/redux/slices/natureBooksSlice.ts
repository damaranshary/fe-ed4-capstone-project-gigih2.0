import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksDataProps } from "../../types/types";

export const natureBooksSlice = createSlice({
    name: "natureBooks",
    initialState: {
        value: [] as BooksDataProps[]
    },
    reducers: {
        setNatureBooksData: (state, action: PayloadAction<BooksDataProps[]>) => {
            state.value = action.payload;
        }
    }
})

export const { setNatureBooksData } = natureBooksSlice.actions;

export default natureBooksSlice.reducer;

