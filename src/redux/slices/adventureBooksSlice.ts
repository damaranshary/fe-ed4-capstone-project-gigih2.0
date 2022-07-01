import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksDataProps } from "../../types/types";

export const adventureBooksSlice = createSlice({
    name: "adventureBooks",
    initialState: {
        value: [] as BooksDataProps[]
    },
    reducers: {
        setAdventureBooksData: (state, action: PayloadAction<BooksDataProps[]>) => {
            state.value = action.payload;
        }
    }
})

export const { setAdventureBooksData } = adventureBooksSlice.actions;

export default adventureBooksSlice.reducer;


