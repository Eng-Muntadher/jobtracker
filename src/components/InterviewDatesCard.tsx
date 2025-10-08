import { Calendar } from "lucide-react";
import Input from "./Input";

interface jobInterviewDatesCard {
  interviewDate: string;
  isEditing: boolean;
  handleChange: (name: string, value: string) => void;
}

function InterviewDatesCard({
  interviewDate,
  isEditing,
  handleChange,
}: jobInterviewDatesCard) {
  if (isEditing) {
    return (
      <fieldset className="custom-border h-fit">
        <label
          htmlFor="interview-date"
          className="text-(--text-color) mb-7 block"
        >
          Interview Date
        </label>
        <Input
          type="date"
          id="interview-date"
          name="interview-date"
          defaultValue={interviewDate || ""}
          addedClasses="text-sm w-full"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange("interviewDate", e.target.value);
            console.log(e.target.value);
          }}
        />
      </fieldset>
    );
  }
  return (
    <section className="custom-border h-fit">
      <h5 className="text-(--text-color) mb-7">Interview Date</h5>
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
