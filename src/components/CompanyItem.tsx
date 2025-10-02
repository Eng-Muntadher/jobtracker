interface CompanyItemProps {
  index: number;
  company: string;
  role: string;
  status: "Applied" | "Interviewing" | "Rejected" | "Accepted";
  date: string;
}

function CompanyItem({ index, company, role, status, date }: CompanyItemProps) {
  return (
    <li
      className="flex items-center justify-between"
      aria-label={`${company}, ${role}, status: ${status}, applied on ${date}`}
    >
      <div className="flex items-center gap-3">
        <span
          className="bg-(--company-card-color) w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold"
          aria-hidden="true"
        >
          {index}
        </span>
        <div>
          <h5 className="text-(--text-color) font-semibold">{company}</h5>
          <p className="text-(--text-color-secondary) text-sm">{role}</p>
        </div>
      </div>
      <div className="mr-4">
        <span className="block text-(--text-color-secondary) text-sm font-semibold text-end">
          {status}
        </span>
        <time
          dateTime="..."
          className="text-(--text-color-secondary) text-xs text-end block"
        >
          {date}
        </time>
      </div>
    </li>
  );
}

export default CompanyItem;
