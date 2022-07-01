import { configureStore } from "@reduxjs/toolkit";
import natureBooksSlice from "./slices/natureBooksSlice";
import legendsDataSlice from "./slices/adventureBooksSlice";
import videosSlice from "./slices/videosSlice";

export const store = configureStore({
    reducer: {
        natureBooks : natureBooksSlice,
        adventureBooks : legendsDataSlice,
        videos: videosSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;