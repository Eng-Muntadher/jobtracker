import { Calendar, DollarSign, MapPin } from "lucide-react";
import Input from "./Input";

interface JobInfoCardProps {
  companyName: string;
  jobTitle: string;
  location: string;
  applicationDate: string;
  applicationStatus: string;
  salary: string;
  isEditing: boolean;
  handleChange: (name: string, value: string) => void;
}

function JobInfoCard({
  companyName,
  jobTitle,
  location,
  applicationDate,
  applicationStatus,
  salary,
  isEditing,
  handleChange,
}: JobInfoCardProps) {
  // this sets the style colors of the application status in a dynamic way
  const cssTextColor = `var(--${applicationStatus.toLowerCase()}-status-color)`;
  const cssBgColor = `var(--${applicationStatus.toLowerCase()}-status-bg)`;

  // conditional return if we are in edit mode
  if (isEditing) {
    // Here we set a limit for the date input (one year before and after the current year for an application)
    const today = new Date();

    // Get the current year
    const currentYear = today.getFullYear();

    // Calculate min and max years (1 before and 1 after)
    const minDate = new Date(currentYear - 1, 0, 1); // Jan 1 of 3 years ago
    const maxDate = new Date(currentYear + 1, 11, 31); // Dec 31 of 3 years ahead

    // Convert to yyyy-mm-dd format
    const formatDate = (date: Date) => date.toISOString().split("T")[0];

    return (
      <fieldset className="custom-border">
        <div className="mb-8">
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="company-name" className="sr-only">
              Company Name
            </label>
            <Input
              type="text"
              id="company-name"
              name="company-name"
              placeholder="Comapny name"
              defaultValue={companyName}
              addedClasses="font-bold w-full text-sm"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("companyName", e.target.value)
              }
              required={true}
            />

            <label htmlFor="job-title" className="sr-only">
              Job title
            </label>
            <Input
              type="text"
              id="job-title"
              name="job-title"
              placeholder="Job title"
              defaultValue={jobTitle}
              addedClasses="w-[228px] w-full text-sm"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("jobTitle", e.target.value)
              }
              required={true}
            />
          </div>
        </div>

        <div>
          <div className="flex gap-6 mb-4 max-md:flex-col max-md:gap-4">
            <div className="flex gap-2 text-(--text-color-secondary) items-center w-1/2 max-md:w-full">
              <span aria-hidden="true">
                <MapPin size={16} />
              </span>

              <label htmlFor="job-location" className="sr-only">
                Job location
              </label>
              <Input
                type="text"
                id="job-location"
                name="job-location"
                placeholder="Job location"
                defaultValue={location}
                addedClasses="text-sm grow"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange("location", e.target.value)
                }
                required={true}
              />
            </div>

            <div className="flex gap-2 text-(--text-color-secondary) items-center w-1/2 max-md:w-full">
              <span aria-hidden="true">
                <Calendar size={16} />
              </span>

              <label htmlFor="date-applied" className="sr-only">
                Date applied
              </label>
              <Input
                type="date"
                id="date-applied"
                name="date-applied"
                defaultValue={applicationDate}
                min={formatDate(minDate)}
                max={formatDate(maxDate)}
                addedClasses="grow text-sm"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange("applicationDate", e.target.value)
                }
                required={true}
              />
            </div>
          </div>

          <div className="flex gap-2 text-(--text-color-secondary) items-center">
            <span aria-hidden="true">
              <DollarSign size={16} />
            </span>

            <label htmlFor="salary" className="sr-only">
              Salary
            </label>
            <Input
              type="text"
              id="salary"
              name="salary"
              placeholder="Expected salary"
              defaultValue={salary}
              addedClasses="text-sm grow"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("salary", e.target.value)
              }
              required={true}
            />
          </div>
        </div>
      </fieldset>
    );
  }

  return (
    <section aria-labelledby="job-details" className="custom-border">
      <div className="flex justify-between mb-[1.85rem]">
        <div>
          <h2 className="text-(--text-color) text-3xl mb-2" id="job-details">
            {companyName}
          </h2>
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
          <p className="flex gap-2 text-(--text-color-secondary) items-center">
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
