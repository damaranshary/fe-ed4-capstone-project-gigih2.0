import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoDataProps } from "../../types/types";

export const videosSlice = createSlice({
    name: "video",
    initialState: {
        value: [] as VideoDataProps[]
    },
    reducers: {
        setVideosData: (state, action: PayloadAction<VideoDataProps[]>) => {
            state.value = action.payload;
        }
    }
})

export const { setVideosData } = videosSlice.actions;

export default videosSlice.reducer;

