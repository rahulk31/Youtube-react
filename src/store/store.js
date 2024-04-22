import { configureStore } from "@reduxjs/toolkit";
import videoDataReducer from "./videoDataSlice";

const store = configureStore({
  reducer: {
    videosData: videoDataReducer,
  },
});

export default store;
