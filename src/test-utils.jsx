import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import wildlifeReducer from "./redux/wildlifeSlice";
import programReducer from "./redux/programSlice";
import blogReducer from "./redux/blogSlice";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        wildlife: wildlifeReducer,
        programs: programReducer,
        blogs: blogReducer,
      },
      preloadedState,
    }),
  } = {}
) {
  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}
