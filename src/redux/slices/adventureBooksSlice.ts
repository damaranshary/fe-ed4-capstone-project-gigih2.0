import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksDataProps } from "../../types/types";

export const adventureBooksSlice = createSlice({
    name: "adventureBooks",
    initialState: {
        value: [] as BooksDataProps[],
        jsonData: {
            json: ['/data/book/A001.json', '/data/book/A002.json', '/data/book/A003.json', '/data/book/A004.json', '/data/book/A005.json', '/data/book/A006.json', '/data/book/A007.json'] as string[],
            id: ['A001', 'A002', 'A003', 'A004', 'A005', 'A006'] as string[]
        }
    },
    reducers: {
        setAdventureBooksData: (state, action: PayloadAction<BooksDataProps[]>) => {
            state.value = action.payload;
        }
    }
})

export const { setAdventureBooksData } = adventureBooksSlice.actions;

export default adventureBooksSlice.reducer;


