import { ArrowUpDown } from "lucide-react";
import { UseFetchApplications } from "../hooks/useFetchApplications";
import TableRow from "./TableRow";
import Spinner from "./Spinner";

function Table() {
  const { data, isPending } = UseFetchApplications();

  if (isPending) return <Spinner />;

  return (
    <section
      aria-labelledby="applications-heading"
      className="container mx-auto mb-6"
    >
      <div className="mx-4 bg-(--bg-color-1) overflow-auto max-h-[263.6px]">
        <table
          role="table"
          aria-label="job applications tracking table"
          className="border border-[rgba(0,0,0,0.1)] rounded-[0.875rem] block pt-2.5 min-w-[736px] min-h-[263.6px]"
        >
          <thead className="block w-full">
            <tr className="flex justify-between pb-2.5 border-b border-[rgba(0,0,0,0.1)]">
              <th
                className="flex justify-center w-1/5 text-sm font-semibold text-(--text-color)"
                scope="col"
                aria-sort="none"
              >
                <button
                  aria-label="sort by company"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span>Company</span>
                  <span aria-hidden="true">
                    <ArrowUpDown size={16} />
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
                >
                  <span>Job Title</span>
                  <span aria-hidden="true">
                    <ArrowUpDown size={16} />
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
                >
                  <span>Status</span>
                  <span aria-hidden="true">
                    <ArrowUpDown size={16} />
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
                >
                  <span>Date Applied</span>
                  <span aria-hidden="true">
                    <ArrowUpDown size={16} />
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
            {data?.map((application) => (
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
