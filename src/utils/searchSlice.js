import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // {"ip":["iphone","iphone 11","iphone 13","iphone 15 pro"]}
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
/**
 *
 *
  [i,ip,iph,iphon,iphone]
  Time complexity to search in array = 0(n)

      {
      i:
      ip:
      iph:
      ipho:
      iphon:
      iphone:
      }

  Time complexity to search in object / map /hashmap = 0(1)

  so better use an object than array for cache

  but new Map() is even more better
 */
