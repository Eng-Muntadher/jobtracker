import { Search } from "lucide-react";
import CustomSelect from "./CustomSelect";
import { setFilter, setSearch } from "../store/searchFilterSortSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";

function FilterAndSortApplications() {
  const dispatch = useDispatch<AppDispatch>();

  // typed search and chosen filters are stored in Redux so if the user leaves this page, they stay the same
  const { search, filter } = useSelector(
    (state: RootState) => state.searchFilterSort
  );

  return (
    <section
      aria-label="Applications filters and actions"
      className="container mx-auto mb-6"
    >
      <div className="p-6 mx-4 custom-border rounded-[0.875rem]">
        <h2 className="text-(--text-color) mb-6">Filter Applications</h2>
        <div className="flex gap-4 max-sm:flex-col">
          <div className="relative grow">
            <Search
              size={16}
              className="absolute top-2.5 left-3"
              color="#717182"
              aria-hidden="true"
            />
            <input
              aria-label="Search applications"
              type="search"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              name="search-applications"
              id="search-applications"
              aria-describedby="search-help"
              placeholder="Search by company or job title..."
              className="bg-(--input-color) placeholder:text-(--text-color-secondary) text-(--text-color) rounded-lg pr-3 pl-10 py-2 w-full text-sm focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100"
            />
          </div>

          {/* A custom select that sets the UI for the filter and the redux state */}
          <CustomSelect
            addedClasses="w-48 max-sm:w-full"
            optionsArray={[
              "All",
              "Applied",
              "Interviewing",
              "Rejected",
              "Accepted",
            ]}
            onChange={dispatch}
            reduxUsage={true}
            reduxActionCreator={setFilter}
            value={filter}
          />
        </div>
      </div>
    </section>
  );
}

export default FilterAndSortApplications;
