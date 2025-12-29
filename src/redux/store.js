import { configureStore } from "@reduxjs/toolkit";
import wildlifeReducer from "./wildlifeSlice";
import programReducer from "./programSlice";

export const store = configureStore({
  reducer: {
    wildlife: wildlifeReducer,
    programs: programReducer,
  },
});
