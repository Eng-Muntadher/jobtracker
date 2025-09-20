import { FileText, MessageSquare } from "lucide-react";
import JobInfoCard from "../components/JobInfoCard";
import JobLinksCard from "../components/JobLinksCard";
import ApplicationStatusCard from "../components/ApplicationStatusCard";
import InterviewDatesCard from "../components/InterviewDatesCard";
import QuickActionsCard from "../components/QuickActionsCard";
import JobDescriptionCard from "../components/JobDescriptionCard";
import SingleApplicationPageHeading from "../components/SingleApplicationPageHeading";

function OneApplicationPage() {
  return (
    <div className="container mx-auto mt-8">
      <SingleApplicationPageHeading />
      <div className="px-4 max-w-[896px] mx-auto flex gap-6 mb-8 max-lg:flex-col">
        <div className="w-[589px] flex flex-col gap-6 max-lg:w-full">
          <JobInfoCard />
          <JobLinksCard />
          <JobDescriptionCard
            icon={FileText}
            heading="Job Description"
            text="Full-stack development role working on search infrastructure."
          />
          <JobDescriptionCard
            icon={MessageSquare}
            heading="Notes"
            text="Had initial phone screen, technical interview scheduled for next week."
          />
        </div>

        <div className="w-[282px] flex flex-col gap-6 max-lg:w-full">
          <ApplicationStatusCard />
          <InterviewDatesCard />
          <QuickActionsCard />
        </div>
      </div>
    </div>
  );
}

export default OneApplicationPage;
