import { Calendar } from "lucide-react";

interface jobInterviewDatesCard {
  interviewDate: string;
}

function InterviewDatesCard({ interviewDate }: jobInterviewDatesCard) {
  return (
    <section className="custom-border h-fit">
      <h5 className="text-(--text-color) mb-7">Interview Dates</h5>
      <div className="flex items-center gap-2 mb-2 text-sm">
        {interviewDate ? (
          <>
            <span aria-hidden="true">
              <Calendar size={16} color="#717182" />
            </span>
            <time dateTime={interviewDate}>{interviewDate}</time>
          </>
        ) : (
          <p className="text-(--text-color-secondary)">
            No current interview scheduled.
          </p>
        )}
      </div>
    </section>
  );
}

export default InterviewDatesCard;
