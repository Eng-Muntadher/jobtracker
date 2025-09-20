import { Calendar } from "lucide-react";

function InterviewDatesCard() {
  return (
    <section className="custom-border h-fit">
      <h5 className="text-(--text-color) mb-7">Interview Dates</h5>
      <div className="flex items-center gap-2 mb-2 text-sm">
        <span aria-hidden="true">
          <Calendar size={16} color="#717182" />
        </span>
        <time dateTime="2024-01-22">1/22/2024</time>
      </div>
      <span className="flex items-center gap-2 text-sm">
        <span aria-hidden="true">
          <Calendar size={16} color="#717182" />
        </span>
        <time dateTime="2024-01-29">1/29/2024</time>
      </span>
    </section>
  );
}

export default InterviewDatesCard;
