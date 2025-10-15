import CustomSelect from "./CustomSelect";

interface jobStatusCardProps {
  applicationStatus: string;
  isEditing: boolean;
  handleChange: (name: string, value: string) => void;
}

function ApplicationStatusCard({
  applicationStatus,
  isEditing,
  handleChange,
}: jobStatusCardProps) {
  // conditional return if we are in edit mode
  if (isEditing) {
    return (
      <fieldset className="custom-border h-fit">
        <h2 className="text-(--text-color) mb-7">Application Status</h2>
        <CustomSelect
          optionsArray={["Applied", "Interviewing", "Rejected", "Accepted"]}
          addedClasses="w-full"
          name="applicationStatus"
          specialCase={true}
          value={applicationStatus}
          onChange={handleChange}
        />
      </fieldset>
    );
  }
  const cssTextColor = `var(--${applicationStatus.toLowerCase()}-status-color)`;
  const cssBgColor = `var(--${applicationStatus.toLowerCase()}-status-bg)`;
  return (
    <section className="custom-border h-fit">
      <h2 className="text-(--text-color) mb-7">Application Status</h2>
      <span
        className="text-sm font-semibold py-2 px-[0.8rem] rounded-lg h-fit"
        style={{ color: cssTextColor, backgroundColor: cssBgColor }}
      >
        {applicationStatus}
      </span>
    </section>
  );
}

export default ApplicationStatusCard;
