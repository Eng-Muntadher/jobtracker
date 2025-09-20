import { ArrowLeft, Pen } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

function SingleApplicationPageHeading() {
  return (
    <div className="flex items-center justify-between px-4 max-w-[896px] mx-auto mb-6 max-[400px]:justify-end">
      <nav aria-label="Breadcrumb" className="max-[400px]:hidden">
        <Link
          to="/all-applications"
          className="flex items-center gap-4 text-(--text-color) hover:text-(--text-color-secondary)"
        >
          <span aria-hidden="true">
            <ArrowLeft size={16} />
          </span>
          <span className="text-sm font-semibold">Back to applications</span>
        </Link>
      </nav>

      <Button
        to="/add-application"
        variation="dark"
        onClick={() => {}}
        additionalClasses="px-3 flex gap-2"
      >
        <span aria-hidden="true">
          <Pen size={16} />
        </span>
        <span>Edit Application</span>
      </Button>
    </div>
  );
}

export default SingleApplicationPageHeading;
