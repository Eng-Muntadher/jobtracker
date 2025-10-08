import { useEffect, useState } from "react";
import { FileText, MessageSquare } from "lucide-react";
import { useFetchApplication } from "../hooks/useFetchApplication";
import { useParams } from "react-router-dom";
import JobInfoCard from "../components/JobInfoCard";
import JobLinksCard from "../components/JobLinksCard";
import ApplicationStatusCard from "../components/ApplicationStatusCard";
import InterviewDatesCard from "../components/InterviewDatesCard";
import QuickActionsCard from "../components/QuickActionsCard";
import JobDescriptionCard from "../components/JobDescriptionCard";
import SingleApplicationPageHeading from "../components/SingleApplicationPageHeading";
import Spinner from "../components/Spinner";

function OneApplicationPage() {
  // since this component has two modes, this state controls them
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // this is the data that will be submitted by a child component
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    location: "",
    applicationDate: "",
    applicationStatus: "",
    salary: "",
    contact: "",
    interviewDate: null,
    jobDetails: "",
    jobNotes: "",
    jobPosting: "",
  });

  // Get the current application id from the URL
  const { id } = useParams();
  const newId = Number(id);

  // fetch the application based on it's id from Supabase
  const { data, isPending } = useFetchApplication(newId);

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
  } = jobApplication || {};

  // Update the state when the data arrives from Supabase
  useEffect(() => {
    if (jobApplication) {
      setFormData({
        companyName: jobApplication.company_name ?? "",
        jobTitle: jobApplication.job_title ?? "",
        location: jobApplication.location ?? "",
        applicationDate: jobApplication.application_date ?? "",
        applicationStatus: jobApplication.application_status ?? "",
        salary: jobApplication.salary ?? "",
        contact: jobApplication.contact ?? "",
        interviewDate: jobApplication.interview_date || null,
        jobDetails: jobApplication.job_details ?? "",
        jobNotes: jobApplication.job_notes ?? "",
        jobPosting: jobApplication.job_posting ?? "",
      });
    }
  }, [jobApplication]);

  // Return spinner when loading
  if (isPending) return <Spinner />;

  // A generic function used to update the state
  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value, // updates only that field
    }));
  };

  const layout = () => (
    <>
      <SingleApplicationPageHeading
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        submittedData={formData}
        id={newId}
      />
      <div className="px-4 max-w-[896px] mx-auto flex gap-6 mb-8 max-lg:flex-col">
        <div className="w-[589px] flex flex-col gap-6 max-lg:w-full">
          <JobInfoCard
            companyName={companyName}
            jobTitle={jobTitle}
            location={location}
            applicationDate={applicationDate}
            applicationStatus={applicationStatus}
            salary={salary}
            isEditing={isEditing}
            handleChange={handleChange}
          />
          <JobLinksCard
            contact={contact}
            jobPosting={jobPosting}
            isEditing={isEditing}
            handleChange={handleChange}
          />

          <JobDescriptionCard
            icon={FileText}
            heading="Job Description"
            jobDetails={jobDetails}
            isEditing={isEditing}
            handleChange={handleChange}
          />
          <JobDescriptionCard
            icon={MessageSquare}
            heading="Notes"
            jobNotes={jobNotes}
            isEditing={isEditing}
            handleChange={handleChange}
          />
        </div>

        <div className="w-[282px] flex flex-col gap-6 max-lg:w-full">
          <ApplicationStatusCard
            applicationStatus={applicationStatus}
            isEditing={isEditing}
            handleChange={handleChange}
          />
          <InterviewDatesCard
            interviewDate={interviewDate}
            isEditing={isEditing}
            handleChange={handleChange}
          />
          {isEditing ? null : (
            <QuickActionsCard
              contact={contact}
              jobLink={jobPosting}
              setIsEditing={setIsEditing}
            />
          )}
        </div>
      </div>
    </>
  );

  return isEditing ? (
    // Whenever we are in edit mode, we return a form and sub fieldsets in child components
    <form className="container mx-auto mt-8">{layout()}</form>
  ) : (
    <div className="container mx-auto mt-8">{layout()}</div>
  );
}

export default OneApplicationPage;
