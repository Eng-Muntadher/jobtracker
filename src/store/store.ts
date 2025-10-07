import { configureStore } from "@reduxjs/toolkit";
import searchFilterSortReducer from "./searchFilterSortSlice";
import AiChatSliceReducer from "./AichatSlice";

export const store = configureStore({
  reducer: {
    searchFilterSort: searchFilterSortReducer,
    aiChat: AiChatSliceReducer,
  },
});

// Types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
