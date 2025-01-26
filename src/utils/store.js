import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoCardsSlice from "./videoCardsSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videos: videoCardsSlice,
    chat: chatSlice,
  },
});

export default store;
