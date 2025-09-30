import { configureStore } from "@reduxjs/toolkit";
import searchFilterSortReducer from "./searchFilterSortSlice";

export const store = configureStore({
  reducer: {
    searchFilterSort: searchFilterSortReducer,
  },
});

// Types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
