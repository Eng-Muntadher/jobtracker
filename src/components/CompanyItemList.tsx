import CompanyItem from "./CompanyItem";
interface CompanyItemProps {
  company: string;
  role: string;
  status: "Applied" | "Interviewing" | "Rejected" | "Accepted";
  date: string; // 'change later to "Date"'
}
const data: CompanyItemProps[] = [
  {
    company: "Google",
    role: "Software Engineer",
    status: "Interviewing",
    date: "1/15/2024",
  },
  {
    company: "Microsoft",
    role: "Frontend Developer",
    status: "Applied",
    date: "1/20/2024",
  },
  {
    company: "Meta",
    role: "Product Manager",
    status: "Rejected",
    date: "1/10/2024",
  },
  {
    company: "Spotify",
    role: "Backend Engineer",
    status: "Accepted",
    date: "1/5/2024",
  },
  {
    company: "Airbnb",
    role: "UX Designer",
    status: "Interviewing",
    date: "1/18/2024",
  },
];

function CompanyItemList() {
  return (
    <ul
      className="flex flex-col gap-4 max-h-[284px] overflow-y-auto"
      tabIndex={0}
    >
      {data.map((el, i) => (
        <CompanyItem
          key={i}
          index={i + 1}
          company={el.company}
          role={el.role}
          status={el.status}
          date={el.date}
        />
      ))}
    </ul>
  );
}

export default CompanyItemList;
