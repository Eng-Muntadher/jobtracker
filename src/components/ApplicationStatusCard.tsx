interface jobStatusCardProps {
  applicationStatus: string;
}

function ApplicationStatusCard({ applicationStatus }: jobStatusCardProps) {
  const cssTextColor = `var(--${applicationStatus.toLowerCase()}-status-color)`;
  const cssBgColor = `var(--${applicationStatus.toLowerCase()}-status-bg)`;
  return (
    <section className="custom-border h-fit">
      <h5 className="text-(--text-color) mb-7">Application Status</h5>
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
