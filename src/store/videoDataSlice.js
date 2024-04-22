import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
  name: "VideoData",
  initialState: {
    videosData: [],
  },
  reducers: {
    updateData(state, action) {
      state.videosData = action.payload;
    },
  },
});

export const { updateData } = videoDataSlice.actions;
export default videoDataSlice.reducer;
