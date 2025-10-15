import { ArrowLeft, Pen, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useUpdateApplication } from "../hooks/useUpdateApplication";
import Button from "./Button";
import Spinner from "./Spinner";

interface SubmittedData {
  companyName: string;
  jobTitle: string;
  location: string;
  applicationDate: string;
  applicationStatus: string;
  salary: string;
  contact: string;
  interviewDate: string | null;
  jobDetails: string;
  jobNotes: string;
  jobPosting: string;
}

interface HeadingProps {
  setIsEditing: (x: boolean) => void;
  isEditing: boolean;
  submittedData: SubmittedData;
  id: number;
}

function SingleApplicationPageHeading({
  setIsEditing,
  isEditing,
  submittedData,
  id,
}: HeadingProps) {
  const { isPending, updateApplication } = useUpdateApplication();

  // this function updates the application based on it's id in Supabase
  function handleSubmit() {
    if (isEditing) {
      updateApplication({ data: submittedData, id });

      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  if (isPending) return <Spinner />;

  return (
    <div className="flex items-center justify-between px-4 max-w-[896px] mx-auto mb-6 max-[400px]:justify-end">
      {/* This h1 is only for screen readers and to improve SEO optimization */}
      <h1 className="sr-only">Single application details</h1>

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

      <div className="flex gap-4">
        {isEditing ? (
          <Button
            type="button"
            variation="light"
            additionalClasses="gap-4 px-3 py-2 justify-center"
            link={false}
            accessibility="Reset all fields"
            onClick={() => setIsEditing(false)}
          >
            <span>
              <X size={16} />
            </span>
            <span>Cancel</span>
          </Button>
        ) : null}

        <Button
          link={false}
          variation="dark"
          onClick={handleSubmit}
          additionalClasses="px-3 flex gap-2"
        >
          <span aria-hidden="true">
            <Pen size={16} />
          </span>
          <span>{isEditing ? "Save Changes" : "Edit Application"}</span>
        </Button>
      </div>
    </div>
  );
}

export default SingleApplicationPageHeading;
