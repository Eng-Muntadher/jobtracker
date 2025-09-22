import CompanyItemList from "./CompanyItemList";

function CompaniesBox() {
  return (
    <section className="custom-border">
      <h4 className="text-(--text-color) font-semibold mb-1.5">
        All Companies Applied to
      </h4>
      <p className="text-(--text-color-secondary) mb-6">
        Companies where you&apos;ve submitted applications
      </p>
      <CompanyItemList />
    </section>
  );
}

export default CompaniesBox;
