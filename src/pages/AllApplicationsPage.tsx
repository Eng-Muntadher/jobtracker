import AllApplicationsHeading from "../components/AllApplicationsHeading";
import FilterAndSortApplications from "../components/FilterAndSortApplications";
import StatusCardList from "../components/StatusCardList";
import Table from "../components/Table";

function AllApplicationsPage() {
  /* Since we have a main tag around the Outlet in the App Layout component, 
   here we return a fragment for accessibility reasons */
  return (
    <>
      <AllApplicationsHeading />
      <FilterAndSortApplications />
      <Table />
      <StatusCardList />
    </>
  );
}

export default AllApplicationsPage;
