import { createSlice } from "@reduxjs/toolkit";

const videoCardsSlice = createSlice({
  name: "vCards",
  initialState: {
    videoCards: [],
  },
  reducers: {
    videoCardsData: (state, actions) => {
      state.videoCards = actions.payload;
    },
    emptyVideosData: (state) => {
      state.videoCards = [];
    },
  },
});

export const { videoCardsData, emptyVideosData } = videoCardsSlice.actions;

export default videoCardsSlice.reducer;
