import { configureStore } from "@reduxjs/toolkit";
import natureBooksSlice from "./slices/natureBooksSlice";
import legendsDataSlice from "./slices/adventureBooksSlice";

export const store = configureStore({
    reducer: {
        natureBooks : natureBooksSlice,
        adventureBooks : legendsDataSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;