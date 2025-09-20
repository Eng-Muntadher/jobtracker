import { ArrowUpDown, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();
  return (
    <section
      aria-labelledby="applications-heading"
      className="container mx-auto mb-6"
    >
      <div className="mx-4 bg-(--bg-color-1) overflow-auto">
        <table
          role="table"
          aria-label="job applications tracking table"
          className="border border-[rgba(0,0,0,0.1)] rounded-[0.875rem] block pt-2.5 min-w-[736px]"
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
            <tr
              className="flex py-4 border-b border-[rgba(0,0,0,0.1)] hover:bg-[#ececf0]/50 transition-all ease-out duration-300 cursor-pointer focus:outline-none focus:bg-[#ececf0]/50"
              onClick={() => navigate(`/application/0`)}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/application/0`)}
              tabIndex={0}
              role="button"
            >
              <td className="flex justify-center w-1/5 text-sm font-semibold">
                Google
              </td>
              <td className="flex justify-center w-1/5 text-sm">
                Software Engineer
              </td>
              <td
                aria-label="Status: Interviewing"
                className="flex justify-center w-1/5"
              >
                <span className="text-xs font-semibold bg-(--interviewing-status-bg) text-(--interviewing-status-color) py-0.5 px-2 rounded-lg">
                  Interviewing
                </span>
              </td>
              <td className="flex justify-center w-1/5 text-sm">
                <time dateTime="1/15/2024">1/15/2024</time>
              </td>
              <td
                aria-label="delete this application"
                className="flex justify-center w-1/5"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>

            <tr
              className="flex py-4 border-b border-[rgba(0,0,0,0.1)] hover:bg-[#ececf0]/50 transition-all ease-out duration-300 cursor-pointer focus:outline-none focus:bg-[#ececf0]/50"
              onClick={() => navigate(`/application/0`)}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/application/0`)}
              tabIndex={0}
              role="button"
            >
              <td className="flex justify-center w-1/5 text-sm font-semibold">
                Microsoft
              </td>
              <td className="flex justify-center w-1/5 text-sm">
                Front end developer
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="Status: applied"
              >
                <span className="text-xs font-semibold bg-(--applied-status-bg) text-(--applied-status-color) py-0.5 px-2 rounded-lg">
                  Applied
                </span>
              </td>
              <td className="flex justify-center w-1/5 text-sm">
                <time dateTime="1/20/2024">1/20/2024</time>
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="delete this application"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>

            <tr
              className="flex py-4 border-b border-[rgba(0,0,0,0.1)] hover:bg-[#ececf0]/50 transition-all ease-out duration-300 cursor-pointer focus:outline-none focus:bg-[#ececf0]/50"
              onClick={() => navigate(`/application/0`)}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/application/0`)}
              tabIndex={0}
              role="button"
            >
              <td className="flex justify-center w-1/5 text-sm font-semibold">
                Meta
              </td>
              <td className="flex justify-center w-1/5 text-sm">
                Product Manager
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="Status: rejected"
              >
                <span className="text-xs font-semibold bg-(--rejected-status-bg) text-(--rejected-status-color) py-0.5 px-2 rounded-lg">
                  Rejected
                </span>
              </td>
              <td className="flex justify-center w-1/5 text-sm">
                <time dateTime="1/10/2024">1/10/2024</time>
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="delete this application"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>

            <tr
              className="flex py-4 border-b border-[rgba(0,0,0,0.1)] hover:bg-[#ececf0]/50 transition-all ease-out duration-300 cursor-pointer focus:outline-none focus:bg-[#ececf0]/50"
              onClick={() => navigate(`/application/0`)}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/application/0`)}
              tabIndex={0}
              role="button"
            >
              <td className="flex justify-center w-1/5 text-sm font-semibold">
                Spotify
              </td>
              <td className="flex justify-center w-1/5 text-sm">
                Backend Engineer
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="Status: accepted"
              >
                <span className="text-xs font-semibold bg-(--accepted-status-bg) text-(--accepted-status-color) py-0.5 px-2 rounded-lg">
                  Accepted
                </span>
              </td>
              <td className="flex justify-center w-1/5 text-sm">
                <time dateTime="1/5/2024">1/5/2024</time>
              </td>
              <td
                className="flex justify-center w-1/5"
                aria-label="delete this application"
              >
                <Trash2Icon color="red" size={16} />
              </td>
            </tr>

            <tr
              className="flex py-4 hover:bg-[#ececf0]/50 transition-all ease-out duration-300 cursor-pointer focus:outline-none focus:bg-[#ececf0]/50"
              onClick={() => navigate(`/application/0`)}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/application/0`)}
              tabIndex={0}
              role="button"
            >
              <td className="flex justify-center w-1/5 text-sm font-semibold">
                Airbnb
              </td>
              <td className="flex justify-center w-1/5 text-sm">UX Designer</td>
              <td
                className="flex justify-center w-1/5 "
                aria-label="Status: Interviewing"
              >
                <span className="text-xs font-semibold bg-(--interviewing-status-bg) text-(--interviewing-status-color) py-0.5 px-2 rounded-lg">
                  Interviewing
                </span>
              </td>
              <td className="flex justify-center w-1/5 text-sm">
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
