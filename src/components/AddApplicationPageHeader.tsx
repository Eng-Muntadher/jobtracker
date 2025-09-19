import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function AddApplicationPageHeader() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto mt-10 mb-8">
        <Link
          to="/all-applications"
          aria-label="Go back to applications page"
          className="flex items-center gap-4 text-(--text-color) hover:text-(--text-color-secondary)"
        >
          <span aria-hidden="true">
            <ArrowLeft size={16} />
          </span>
          <span className="text-sm font-semibold">Back to applications</span>
        </Link>
      </nav>

      <section
        aria-labelledby="add-application-title"
        className="mb-6 text-center"
      >
        <h1 className="text-(--text-color) text-3xl font-semibold mb-2">
          Add New Application
        </h1>
        <p className="text-(--text-color-secondary)">
          Track a new job application and keep all details organized
        </p>
      </section>
    </>
  );
}

export default AddApplicationPageHeader;
