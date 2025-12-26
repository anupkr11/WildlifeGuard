import { configureStore } from "@reduxjs/toolkit";
import wildlifeReducer from "./wildlifeSlice";

export const store = configureStore({
  reducer: {
    wildlife: wildlifeReducer,
  },
});
