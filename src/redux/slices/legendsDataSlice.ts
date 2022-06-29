import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksDataProps } from "../../types/types";

export const legendsSlice = createSlice({
    name: "legends",
    initialState: {
        value: [] as BooksDataProps[]
    },
    reducers: {
        setLegendsData: (state, action: PayloadAction<BooksDataProps[]>) => {
            state.value = action.payload;
        }
    }
}) 

export const {setLegendsData} = legendsSlice.actions;

export default legendsSlice.reducer;


