import type { LucideIcon } from "lucide-react";
import Input from "./Input";

interface JobDescriptionCardProps {
  icon: LucideIcon;
  heading: string;
  jobDetails?: string | undefined;
  jobNotes?: string | undefined;
  isEditing: boolean;
  handleChange: (name: string, value: string) => void;
}

function JobDescriptionCard({
  icon: Icon,
  heading,
  jobDetails,
  jobNotes,
  isEditing,
  handleChange,
}: JobDescriptionCardProps) {
  if (isEditing) {
    return (
      <fieldset className="custom-border">
        <label
          htmlFor={jobDetails ? "job-details" : "job-notes"}
          className="flex gap-2 text-(--text-color) font-semibold items-center mb-6"
        >
          <span aria-hidden="true">
            <Icon size={20} />
          </span>
          <span>{heading}</span>
        </label>
        <Input
          type="textarea"
          id={jobDetails ? "job-details" : "job-notes"}
          name={jobDetails ? "job-details" : "job-notes"}
          defaultValue={jobDetails ? jobDetails : jobNotes || ""}
          addedClasses="text-sm w-full pb-4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(jobDetails ? "jobDetails" : "jobNotes", e.target.value)
          }
        />
      </fieldset>
    );
  }
  return (
    <section className="custom-border">
      <h4 className="flex gap-2 text-(--text-color) font-semibold items-center mb-6">
        <span aria-hidden="true">
          <Icon size={20} />
        </span>
        <span>{heading}</span>
      </h4>
      <p className="text-(--text-color-secondary)">
        {/* Return only what was passed as a prop wich should be either one  */}
        {jobDetails ? jobDetails : jobNotes}
      </p>
    </section>
  );
}

export default JobDescriptionCard;
