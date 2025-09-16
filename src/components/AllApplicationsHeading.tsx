import { Plus } from "lucide-react";
import Button from "./Button";

function AllApplicationsHeading() {
  return (
    <div className="container flex flex-wrap items-center justify-between mx-auto mt-8 mb-6">
      <div>
        <h1 className="text-(--text-color) font-semibold text-3xl mx-4">
          Job Applications
        </h1>
        <p className="mx-4 leading-[1.5rem] text-(--text-color-secondary) mt-1">
          Track and manage all your job applications in one place
        </p>
      </div>
      <Button
        variation="dark"
        onClick={() => {}}
        additionalClasses="px-3 flex gap-2 mx-4 max-[623px]:mt-4"
      >
        <span className="">
          <Plus size={16} />
        </span>
        <span>Add Application</span>
      </Button>
    </div>
  );
}

export default AllApplicationsHeading;
