import { FileText, MessageSquare } from "lucide-react";
import JobInfoCard from "../components/JobInfoCard";
import JobLinksCard from "../components/JobLinksCard";
import ApplicationStatusCard from "../components/ApplicationStatusCard";
import InterviewDatesCard from "../components/InterviewDatesCard";
import QuickActionsCard from "../components/QuickActionsCard";
import JobDescriptionCard from "../components/JobDescriptionCard";
import SingleApplicationPageHeading from "../components/SingleApplicationPageHeading";
import Spinner from "../components/Spinner";
import { useFetchApplication } from "../hooks/useFetchApplication";
import { useParams } from "react-router-dom";

function OneApplicationPage() {
  // Get the current application id from the URL
  const { id } = useParams();
  const newId = Number(id);
  const { data, isPending } = useFetchApplication(newId);

  // Return spinner when loading
  if (isPending) return <Spinner />;

  // Get the data at index 0 since our data is an array of one element
  const jobApplication = data?.at(0);

  // Change from snake case to camel case to meet TS and JS standards
  const {
    company_name: companyName,
    job_title: jobTitle,
    location,
    application_date: applicationDate,
    application_status: applicationStatus,
    salary,
    contact,
    interview_date: interviewDate,
    job_details: jobDetails,
    job_notes: jobNotes,
    job_posting: jobPosting,
  } = jobApplication;

  return (
    <div className="container mx-auto mt-8">
      <SingleApplicationPageHeading />
      <div className="px-4 max-w-[896px] mx-auto flex gap-6 mb-8 max-lg:flex-col">
        <div className="w-[589px] flex flex-col gap-6 max-lg:w-full">
          <JobInfoCard
            companyName={companyName}
            jobTitle={jobTitle}
            location={location}
            applicationDate={applicationDate}
            applicationStatus={applicationStatus}
            salary={salary}
          />
          <JobLinksCard contact={contact} jobPosting={jobPosting} />
          <JobDescriptionCard
            icon={FileText}
            heading="Job Description"
            jobDetails={jobDetails}
          />
          <JobDescriptionCard
            icon={MessageSquare}
            heading="Notes"
            jobNotes={jobNotes}
          />
        </div>

        <div className="w-[282px] flex flex-col gap-6 max-lg:w-full">
          <ApplicationStatusCard applicationStatus={applicationStatus} />
          <InterviewDatesCard interviewDate={interviewDate} />
          <QuickActionsCard />
        </div>
      </div>
    </div>
  );
}

export default OneApplicationPage;
