import { ArrowUpDown, Trash2Icon } from "lucide-react";

function Table() {
  return (
    <section
      aria-labelledby="applications-heading"
      className="container mx-auto mb-6"
    >
      <div className="mx-4 bg-(--bg-color-1)">
        <table
          role="table"
          aria-label="job applications tracking table"
          className="border border-[rgba(0,0,0,0.1)] rounded-[0.875rem] block p-2.5"
        >
          <thead className="block w-full">
            <tr className="flex justify-between pb-2.5 border-b border-[rgba(0,0,0,0.1)]">
              <th
                className="flex justify-center w-1/5 text-sm font-semibold text-(--text-color)"
                scope="col"
                aria-sort="none"
              >
                <button aria-label="sort by company" className="flex">
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
                <button aria-label="sort by job title" className="flex">
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
                <button aria-label="sort by status" className="flex">
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
                <button aria-label="sort by Date" className="flex">
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
            <tr className="flex py-2.5 border-b border-[rgba(0,0,0,0.1)]">
              <td className="flex justify-center w-1/5">Google</td>
              <td className="flex justify-center w-1/5">Software Engineer</td>
              <td
                aria-label="Status: Interviewing"
                className="flex justify-center w-1/5"
              >
                Interviewing
              </td>
              <td className="flex justify-center w-1/5">
                <time dateTime="1/15/2024">1/15/2024</time>
              </td>
              <td
                aria-label="delete this application"
                className="flex justify-center w-1/5"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>

            <tr className="flex py-2.5 border-b border-[rgba(0,0,0,0.1)]">
              <td className="flex justify-center w-1/5">Microsoft</td>
              <td className="flex justify-center w-1/5">Front end developer</td>
              <td
                className="flex justify-center w-1/5"
                aria-label="Status: applied"
              >
                Applied
              </td>
              <td className="flex justify-center w-1/5">
                <time dateTime="1/20/2024">1/20/2024</time>
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="delete this application"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>

            <tr className="flex py-2.5 border-b border-[rgba(0,0,0,0.1)]">
              <td className="flex justify-center w-1/5">Meta</td>
              <td className="flex justify-center w-1/5">Product Manager</td>
              <td
                className="flex justify-center w-1/5"
                aria-label="Status: rejected"
              >
                Rejected
              </td>
              <td className="flex justify-center w-1/5">
                <time dateTime="1/10/2024">1/10/2024</time>
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="delete this application"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>

            <tr className="flex py-2.5 border-b border-[rgba(0,0,0,0.1)]">
              <td className="flex justify-center w-1/5">Spotify</td>
              <td className="flex justify-center w-1/5">Backend Engineer</td>
              <td
                className="flex justify-center w-1/5"
                aria-label="Status: accepted"
              >
                Accepted
              </td>
              <td className="flex justify-center w-1/5">
                <time dateTime="1/5/2024">1/5/2024</time>
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="delete this application"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>

            <tr className="flex py-2.5">
              <td className="flex justify-center w-1/5">Airbnb</td>
              <td className="flex justify-center w-1/5">UX Designer</td>
              <td
                className="flex justify-center w-1/5"
                aria-label="Status: Interviewing"
              >
                Interviewing
              </td>
              <td className="flex justify-center w-1/5">
                <time dateTime="1/18/2024">1/18/2024</time>
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="delete this application"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
