import type { LucideIcon } from "lucide-react";

interface JobDescriptionCardProps {
  icon: LucideIcon;
  heading: string;
  jobDetails?: string | undefined;
  jobNotes?: string | undefined;
}

function JobDescriptionCard({
  icon: Icon,
  heading,
  jobDetails,
  jobNotes,
}: JobDescriptionCardProps) {
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
