import { createSlice } from "@reduxjs/toolkit";

const titleStore = createSlice({
  name: "title",
  initialState: {
    title: "기존 타이틀!!",
  },
  reducers: {
    titleChange: (state, action) => {
      state.title = action.payload;
    },
  },
});

export default titleStore;
