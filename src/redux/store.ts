import { configureStore } from "@reduxjs/toolkit";
import funFactDataSlice from "./slices/funFactDataSlice";
import legendsDataSlice from "./slices/legendsDataSlice";

export const store = configureStore({
    reducer: {
        funFactData : funFactDataSlice,
        legendsData : legendsDataSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;