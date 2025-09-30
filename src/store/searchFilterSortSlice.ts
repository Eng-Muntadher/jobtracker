import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SortByOptions =
  | "company_name"
  | "job_title"
  | "application_status"
  | "application_date";

interface SearchFilterSortState {
  search: string;
  filter: string;
  sortOrder: "asc" | "desc" | null;
  sortBy: SortByOptions | null;
}

const initialState: SearchFilterSortState = {
  search: "",
  filter: "All",
  sortOrder: null,
  sortBy: null,
};

const searchFilterSortSlice = createSlice({
  name: "searchFilterSort",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"asc" | "desc" | null>) => {
      state.sortOrder = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortByOptions | null>) => {
      state.sortBy = action.payload;
    },
    resetAll: () => initialState,
  },
});

export const { setSearch, setFilter, setSortOrder, resetAll, setSortBy } =
  searchFilterSortSlice.actions;
export default searchFilterSortSlice.reducer;
