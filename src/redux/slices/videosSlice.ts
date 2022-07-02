import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoDataProps } from "../../types/types";

export const videosSlice = createSlice({
    name: "video",
    initialState: {
        value: [] as VideoDataProps[],
        jsonData: {
            json: ['/data/video/YT001.json', '/data/video/YT002.json', '/data/video/YT003.json', '/data/video/YT004.json', '/data/video/YT005.json', '/data/video/YT006.json', '/data/video/YT007.json', '/data/video/YT008.json', '/data/video/YT009.json'] as string[],
            id: ['YT001', 'YT002', 'YT003', 'YT004', 'YT005', 'YT006', 'YT007', 'YT008', 'YT009'] as string[]
        }
    },
    reducers: {
        setVideosData: (state, action: PayloadAction<VideoDataProps[]>) => {
            state.value = action.payload;
        }
    }
})

export const { setVideosData } = videosSlice.actions;

export default videosSlice.reducer;

