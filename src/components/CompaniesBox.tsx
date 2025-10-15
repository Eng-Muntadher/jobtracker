import { calculateCompanies, type UserDb } from "../helpers";
import CompanyItemList from "./CompanyItemList";

interface CompaniesBoxProps {
  jobApplications: UserDb[] | undefined;
}

function CompaniesBox({ jobApplications }: CompaniesBoxProps) {
  const uniqueApplications = calculateCompanies(jobApplications);

  return (
    <section className="custom-border" aria-labelledby="all-companies-header">
      <h3
        className="text-(--text-color) font-semibold mb-1.5"
        id="all-companies-header"
      >
        All Companies Applied to
      </h3>
      <p className="text-(--text-color-secondary) mb-6">
        Companies where you&apos;ve submitted applications
      </p>

      <CompanyItemList uniqueApplications={uniqueApplications} />
    </section>
  );
}

export default CompaniesBox;
