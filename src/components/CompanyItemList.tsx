import type { UserDb } from "../helpers";
import CompanyItem from "./CompanyItem";

interface CompanyItemListProps {
  uniqueApplications: UserDb[] | undefined;
}
function CompanyItemList({ uniqueApplications }: CompanyItemListProps) {
  return (
    <ul
      className="flex flex-col gap-4 max-h-[284px] overflow-y-auto"
      tabIndex={0}
    >
      {uniqueApplications?.map((el, i) => (
        <CompanyItem
          key={i}
          index={i + 1}
          company={el.company_name}
          role={el.job_title}
          status={el.application_status}
          date={el.application_date}
        />
      ))}
    </ul>
  );
}

export default CompanyItemList;
