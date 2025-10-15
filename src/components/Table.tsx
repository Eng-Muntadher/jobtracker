import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { UseFetchApplications } from "../hooks/useFetchApplications";
import TableRow from "./TableRow";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useDispatch } from "react-redux";
import {
  setSortOrder,
  setSortBy,
  type SortByOptions,
} from "../store/searchFilterSortSlice";
import { sortByKey } from "../helpers";

function Table() {
  const dispatch = useDispatch<AppDispatch>();

  // fetch all applications using React query
  const { data, isPending } = UseFetchApplications();

  // get filter and search states from redux
  const { search, filter, sortOrder, sortBy } = useSelector(
    (state: RootState) => state.searchFilterSort
  );

  // STEP 1) filter by search
  const filteredJobsBySearch = data?.filter(
    (job) =>
      job.job_title.toLowerCase().includes(search.toLowerCase()) ||
      job.company_name.toLowerCase().includes(search.toLowerCase())
  );

  // STEP 2) filter by the status filter
  const filteredJobsBySelectFilter =
    filter === "All"
      ? filteredJobsBySearch
      : filteredJobsBySearch?.filter(
          (job) => job.application_status === filter
        );

  // indicates if the sort is based on a key of type (date)
  const isDate = sortBy === "application_date";

  // STEP 3) sort by (company, title, status or date)
  const sortedApplications = sortByKey(
    filteredJobsBySelectFilter || [],
    sortBy || "",
    sortOrder || "asc",
    isDate
  );

  // handles the sort and sortBy state in the Redux store
  function handleClick(sortOptionName: SortByOptions) {
    if (sortBy === sortOptionName) {
      if (sortOrder === "asc") {
        dispatch(setSortOrder("desc"));
      } else if (sortOrder === "desc") {
        dispatch(setSortOrder(null));
        dispatch(setSortBy(null));
      }
    } else {
      dispatch(setSortBy(sortOptionName));
      dispatch(setSortOrder("asc"));
    }
  }

  if (isPending) return <Spinner />;

  return (
    <section
      aria-labelledby="applications-heading"
      className="container mx-auto mb-6"
    >
      <div className="mx-4  overflow-auto max-h-[263.6px]">
        <table
          role="table"
          aria-label="job applications tracking table"
          className="border border-(--border-color) rounded-[0.875rem] block pt-2.5 min-w-[736px] min-h-[263.6px]"
        >
          <thead className="block w-full">
            <tr className="flex justify-between pb-2.5 border-b border-(--border-color)">
              <th
                className="flex justify-center w-1/5 text-sm font-semibold text-(--text-color)"
                scope="col"
                aria-sort="none"
              >
                <button
                  aria-label="Company/sort by company"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleClick("company_name")}
                >
                  <span>Company</span>
                  <span aria-hidden="true">
                    {sortBy === "company_name" ? (
                      sortOrder === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )
                    ) : (
                      <ArrowUpDown size={16} />
                    )}
                  </span>
                </button>
              </th>

              <th
                scope="col"
                aria-sort="none"
                className="flex justify-center w-1/5 text-sm font-semibold text-(--text-color)"
              >
                <button
                  aria-label="sort by job title"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleClick("job_title")}
                >
                  <span>Job Title</span>
                  <span aria-hidden="true">
                    {sortBy === "job_title" ? (
                      sortOrder === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )
                    ) : (
                      <ArrowUpDown size={16} />
                    )}
                  </span>
                </button>
              </th>

              <th
                scope="col"
                aria-sort="none"
                className="flex justify-center w-1/5 text-sm font-semibold text-(--text-color)"
              >
                <button
                  aria-label="sort by status"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleClick("application_status")}
                >
                  <span>Status</span>
                  <span aria-hidden="true">
                    {sortBy === "application_status" ? (
                      sortOrder === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )
                    ) : (
                      <ArrowUpDown size={16} />
                    )}
                  </span>
                </button>
              </th>

              <th
                scope="col"
                aria-sort="none"
                className="flex justify-center w-1/5 text-sm font-semibold text-(--text-color)"
              >
                <button
                  aria-label="sort by Date"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleClick("application_date")}
                >
                  <span>Date Applied</span>
                  <span aria-hidden="true">
                    {sortBy === "application_date" ? (
                      sortOrder === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )
                    ) : (
                      <ArrowUpDown size={16} />
                    )}
                  </span>
                </button>
              </th>

              <th
                scope="col"
                className="flex justify-center w-1/5 text-sm font-semibold text-(--text-color)"
              >
                <span>Actions</span>
              </th>
            </tr>
          </thead>

          <tbody className="block w-full">
            {sortedApplications?.map((application) => (
              <TableRow
                key={application.id}
                id={application.id}
                company={application.company_name}
                role={application.job_title}
                date={application.application_date}
                status={application.application_status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
