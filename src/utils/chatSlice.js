import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      /**
       * state.messages.splice(OFFSET_LIVE_CHAT, 1);
       * this will not explode / bloat the page as after this
       * OFFSET_LIVE_CHAT numbers it will start deleteing
       * and the count will never increase
       */
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
