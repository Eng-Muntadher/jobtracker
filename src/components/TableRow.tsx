import { Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { createPortal } from "react-dom";
import { useDeleteApplication } from "../hooks/useDeleteApplication";

interface TableRowProps {
  id: number;
  company: string;
  role: string;
  status: "Interviewing" | "Applied" | "Accepted" | "Rejected";
  date: string;
}

function TableRow({ company, role, status, date, id }: TableRowProps) {
  const navigate = useNavigate();
  const { deleteApplication, isPending } = useDeleteApplication();

  const cssTextColor = `var(--${status.toLowerCase()}-status-color)`;
  const cssBgColor = `var(--${status.toLowerCase()}-status-bg)`;

  function handleIconClick(e: React.MouseEvent<HTMLButtonElement>) {
    // stop the click to propagate to the parent because the row is also clickable
    e.stopPropagation();
    const approve = confirm(
      "Are you sure you want to delete this application?"
    );
    if (approve) deleteApplication(id);
  }

  if (isPending) {
    // If we render a div inside a table we cause a hydration error so we use React portals
    return createPortal(<Spinner />, document.getElementById("root")!);
  }

  return (
    <tr
      className="flex py-4 border-b border-[rgba(0,0,0,0.1)] hover:bg-[#ececf0]/50 transition-all ease-out duration-300 cursor-pointer focus:outline-none focus:bg-[#ececf0]/50"
      onClick={() => navigate(`/application/${id}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/application/${id}`)}
      tabIndex={0}
      role="button"
    >
      <td className="flex justify-center w-1/5 text-sm font-semibold">
        {company}
      </td>
      <td className="flex justify-center w-1/5 text-sm">{role}</td>
      <td
        aria-label="Status: Interviewing"
        className="flex justify-center w-1/5"
      >
        <span
          className="text-xs font-semibold py-0.5 px-2 rounded-lg"
          style={{ color: cssTextColor, backgroundColor: cssBgColor }}
        >
          {status}
        </span>
      </td>
      <td className="flex justify-center w-1/5 text-sm">
        <time dateTime={date}>{date}</time>
      </td>
      <td
        aria-label="delete this application"
        className="flex justify-center w-1/5"
      >
        <button
          onClick={handleIconClick}
          disabled={isPending}
          className="cursor-pointer focus:scale-150 focus:outline-none disabled:text-gray-500"
          aria-label="Delete this job application"
        >
          <Trash2Icon
            color="red"
            size={16}
            className="hover:scale-125"
            aria-hidden="true"
          />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
