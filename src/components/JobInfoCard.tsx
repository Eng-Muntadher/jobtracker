import { Calendar, DollarSign, MapPin } from "lucide-react";

interface JobInfoCardProps {
  companyName: string;
  jobTitle: string;
  location: string;
  applicationDate: string;
  applicationStatus: string;
  salary: string;
}

function JobInfoCard({
  companyName,
  jobTitle,
  location,
  applicationDate,
  applicationStatus,
  salary,
}: JobInfoCardProps) {
  const cssTextColor = `var(--${applicationStatus.toLowerCase()}-status-color)`;
  const cssBgColor = `var(--${applicationStatus.toLowerCase()}-status-bg)`;
  return (
    <section aria-labelledby="job-details" className="custom-border">
      <div className="flex justify-between mb-[1.85rem]">
        <div>
          <h4 className="text-(--text-color) text-3xl mb-2" id="job-details">
            {companyName}
          </h4>
          <p className="text-(--text-color-secondary) text-xl">{jobTitle}</p>
        </div>
        <span
          className="text-xs font-semibold py-0.5 px-2 rounded-lg h-fit"
          style={{ color: cssTextColor, backgroundColor: cssBgColor }}
        >
          {applicationStatus}
        </span>
      </div>

      <div>
        <div className="flex mb-4 gap-28 max-lg:gap-48 max-md:flex-col max-md:gap-4">
          <p className="flex gap-2 text-(--text-color-secondary) items-center">
            <span aria-hidden="true">
              <MapPin size={16} />
            </span>
            {location ? location : <span>No location specified</span>}
          </p>
          <p
            aria-label="date-applied"
            className="flex gap-2 text-(--text-color-secondary) items-center"
          >
            <span aria-hidden="true">
              <Calendar size={16} />
            </span>
            Applied
            <time dateTime={applicationDate}>{applicationDate}</time>
          </p>
        </div>

        <p className="flex gap-2 text-(--text-color-secondary) items-center">
          <span aria-hidden="true">
            <DollarSign size={16} />
          </span>
          {salary ? salary : <span>No salary specified</span>}
        </p>
      </div>
    </section>
  );
}

export default JobInfoCard;
