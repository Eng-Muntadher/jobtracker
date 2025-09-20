function ApplicationStatusCard() {
  return (
    <section className="custom-border h-fit">
      <h5 className="text-(--text-color) mb-7">Application Status</h5>
      <span className="text-sm font-semibold bg-(--interviewing-status-bg) text-(--interviewing-status-color) py-2 px-[0.8rem] rounded-lg h-fit">
        Interviewing
      </span>
    </section>
  );
}

export default ApplicationStatusCard;
