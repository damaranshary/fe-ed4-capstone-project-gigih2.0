import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksDataProps } from "../../types/types";

export const funFactsSlice = createSlice({
    name: "funFacts",
    initialState: {
        value: [] as BooksDataProps[]
    },
    reducers: {
        setFunFactsData: (state, action: PayloadAction<BooksDataProps[]>) => {
            state.value = action.payload;
        }
    }
}) 

export const {setFunFactsData} = funFactsSlice.actions;

export default funFactsSlice.reducer;

