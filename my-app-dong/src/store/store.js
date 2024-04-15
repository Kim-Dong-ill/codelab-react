import { configureStore } from "@reduxjs/toolkit";
import titleStore from "./titleStore";

const store = configureStore({
  reducer: {
    title: titleStore.reducer,
  },
});

export default store;
