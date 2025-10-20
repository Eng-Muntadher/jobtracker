import {
  DollarSign,
  FileText,
  LinkIcon,
  MapPin,
  MessageSquare,
  Save,
  X,
} from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import CustomSelect from "./CustomSelect";
import { useState } from "react";
import { useUploadApplication } from "../hooks/useUploadApplication";
import Spinner from "./Spinner";

type event = React.ChangeEvent<HTMLInputElement>;

function AddApplicationForm() {
  const [companyName, setCompanyName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [applicationStatus, setApplicationStatus] = useState<string>("Applied");
  const [applicationDate, setApplicationDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [location, setLocation] = useState<string>("");
  const [jobPosting, setJobPosting] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [jobDetails, setJobDetails] = useState<string>("");
  const [jobNotes, setJobNotes] = useState<string>("");
  const { isPending, uploadApplication } = useUploadApplication();

  // Here we set a limit for the date input (one year before and after the current year for an application)
  const today = new Date();

  // Get the current year
  const currentYear = today.getFullYear();

  // Calculate min and max years (1 before and 1 after)
  const minDate = new Date(currentYear - 1, 0, 1); // Jan 1 of 3 years ago
  const maxDate = new Date(currentYear + 1, 11, 31); // Dec 31 of 3 years ahead

  // Convert to yyyy-mm-dd format
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      user_id: "", // this will be used for user authorization
      companyName,
      jobTitle,
      applicationStatus,
      applicationDate,
      location,
      jobPosting,
      contact,
      salary,
      jobDetails,
      jobNotes,
    };
    uploadApplication(data);
    handleReset();
  }

  function handleReset() {
    setCompanyName("");
    setJobTitle("");
    setApplicationStatus("");
    setApplicationDate("");
    setLocation("");
    setJobPosting("");
    setContact("");
    setSalary("");
    setJobDetails("");
    setJobNotes("");
  }

  return (
    <form
      aria-label="New job application form"
      className="grid grid-cols-1 mb-6 justify-items-center"
      onSubmit={handleSubmit}
    >
      {isPending && <Spinner />}

      <fieldset className="block w-full max-w-3xl mb-6 custom-border">
        <h2
          aria-label="basic information"
          className="flex items-center gap-2 mb-2"
        >
          <span aria-hidden="true">
            <FileText size={20} className="text-(--text-color)" />
          </span>
          <span className="text-(--text-color) font-semibold">
            Basic Information
          </span>
        </h2>
        <p className="text-(--text-color-secondary) mb-6">
          Enter the essential details about the job and company
        </p>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <div>
            <label htmlFor="company-name" className="block mb-2">
              <span className="text-(--text-color) font-semibold text-sm">
                Company Name *
              </span>
              <span
                title="required"
                aria-label="required"
                className="text-[#DC2626] font-semibold text-sm ml-2"
              >
                *
              </span>
            </label>
            <Input
              type="text"
              required={true}
              id="company-name"
              name="companyName"
              value={companyName}
              onChange={(e: event) => setCompanyName(e.target.value)}
              placeholder="e.g., Google, Microsoft, Meta"
              srOnlyInfo="Enter the name of the company you are applying for"
              addedClasses="block w-full text-sm"
            />
          </div>

          <div>
            <label htmlFor="job-title" className="block mb-2">
              <span className="text-(--text-color) font-semibold text-sm">
                Job Title *
              </span>
              <span
                title="required"
                aria-label="required"
                className="text-[#DC2626] font-semibold text-sm ml-2"
              >
                *
              </span>
            </label>
            <Input
              type="text"
              required={true}
              id="job-title"
              name="jobTitle"
              value={jobTitle}
              onChange={(e: event) => setJobTitle(e.target.value)}
              placeholder="e.g., Software Engineer, Product Manager"
              srOnlyInfo="Enter the name of the position you are applying for"
              addedClasses="block w-full text-sm mb-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <div>
            <label htmlFor="application-status" className="block mb-2">
              <span className="text-(--text-color) font-semibold text-sm">
                Application Status
              </span>
            </label>
            <CustomSelect
              onChange={setApplicationStatus}
              addedClasses="w-full"
              optionsArray={["Applied", "Interviewing", "Rejected", "Accepted"]}
            />
          </div>

          <div>
            <label htmlFor="application-date" className="block mb-2">
              <span className="text-(--text-color) font-semibold text-sm">
                Application Date *
              </span>
              <span
                title="required"
                aria-label="required"
                className="text-[#DC2626] font-semibold text-sm ml-2"
              >
                *
              </span>
            </label>
            <Input
              type="date"
              required={true}
              id="application-date"
              name="applicationDate"
              value={applicationDate}
              min={formatDate(minDate)}
              max={formatDate(maxDate)}
              onChange={(e: event) => setApplicationDate(e.target.value)}
              srOnlyInfo="Enter the date of the current application"
              addedClasses="block w-full text-sm cursor-pointer mb-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="flex items-center mb-2 text-(--text-color) gap-4"
          >
            <span>
              <MapPin size={16} />
            </span>
            <span className="text-(--text-color) font-semibold text-sm">
              Location
            </span>
          </label>
          <Input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e: event) => setLocation(e.target.value)}
            placeholder="e.g., San Francisco, CA or Remote"
            srOnlyInfo="Enter the location of the company you are applying for"
            addedClasses="block w-full text-sm"
          />
        </div>
      </fieldset>

      <fieldset className="block w-full max-w-3xl mb-6 custom-border">
        <h2
          aria-label="Links and compensation"
          className="flex items-center gap-2 mb-2"
        >
          <span aria-hidden="true">
            <LinkIcon size={20} className="text-(--text-color)" />
          </span>
          <span className="text-(--text-color) font-semibold">
            Links & Compensation
          </span>
        </h2>
        <p className="text-(--text-color-secondary) mb-6">
          Add relevant links and salary information
        </p>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <div>
            <label htmlFor="job-posting" className="block mb-2">
              <span className="text-(--text-color) font-semibold text-sm">
                Job Posting Link
              </span>
            </label>
            <Input
              type="text"
              id="job-posting"
              name="jobPosting"
              value={jobPosting}
              onChange={(e: event) => setJobPosting(e.target.value)}
              placeholder="https://company.com/careers/job-id"
              srOnlyInfo="Enter the link of the company you are applying for (optional)"
              addedClasses="block w-full text-sm"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block mb-2">
              <span className="text-(--text-color) font-semibold text-sm">
                Contact/Recruiter Link
              </span>
            </label>
            <Input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e: event) => setContact(e.target.value)}
              placeholder="https://linkedin.com/in/recruiter or email"
              srOnlyInfo="Enter the contact info of the job recruiter"
              addedClasses="block w-full text-sm mb-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="salary"
            className="flex items-center mb-2 text-(--text-color) gap-4"
          >
            <span>
              <DollarSign size={16} />
            </span>
            <span className="text-(--text-color) font-semibold text-sm">
              Salary Expectation
            </span>
          </label>
          <Input
            type="text"
            id="salary"
            name="salary"
            value={salary}
            onChange={(e: event) => setSalary(e.target.value)}
            placeholder="e.g., $12,000 - $150,000 or $75/hour"
            srOnlyInfo="Enter the expected salary of the role you are applying for"
            addedClasses="block w-full text-sm"
          />
        </div>
      </fieldset>

      <fieldset className="block w-full max-w-3xl mb-6 custom-border">
        <h2 aria-label="job-details" className="flex items-center gap-2 mb-2">
          <span aria-hidden="true">
            <FileText size={20} className="text-(--text-color)" />
          </span>
          <span className="text-(--text-color) font-semibold">Job Details</span>
        </h2>
        <p className="text-(--text-color-secondary) mb-6">
          Add details about the role and responsibilities
        </p>

        <div>
          <label
            htmlFor="description"
            className="flex items-center mb-2 text-(--text-color) gap-4"
          >
            <span className="text-(--text-color) font-semibold text-sm">
              Job Description
            </span>
          </label>
          <Input
            type="textarea"
            id="description"
            name="description"
            value={jobDetails}
            onChange={(e: event) => setJobDetails(e.target.value)}
            placeholder="Describe the role, responsibilities, requirements and any relevant details..."
            srOnlyInfo="Describe the role, responsibilities, requirements and any relevant details"
            addedClasses="block w-full text-sm min-h-16"
          />
        </div>
      </fieldset>

      <fieldset className="block w-full max-w-3xl mb-6 custom-border">
        <h2
          aria-label="Links and compensation"
          className="flex items-center gap-2 mb-2"
        >
          <span aria-hidden="true">
            <MessageSquare size={20} className="text-(--text-color)" />
          </span>
          <span className="text-(--text-color) font-semibold">
            Notes & Progress
          </span>
        </h2>
        <p className="text-(--text-color-secondary) mb-6">
          Track your progress add personal notes about this application
        </p>

        <div>
          <label
            htmlFor="notes"
            className="flex items-center mb-2 text-(--text-color) gap-4"
          >
            <span className="text-(--text-color) font-semibold text-sm">
              Personal Notes
            </span>
          </label>
          <Input
            type="textarea"
            id="notes"
            name="notes"
            value={jobNotes}
            onChange={(e: event) => setJobNotes(e.target.value)}
            placeholder="Add your thoughts, interview feedback, follow-up reminders, or any other notes..."
            srOnlyInfo="Add your thoughts, interview feedback, follow-up reminders, or any other notes"
            addedClasses="block w-full text-sm min-h-16"
          />
        </div>
      </fieldset>

      <div
        aria-label="action-buttons"
        className="flex justify-end w-full max-w-3xl gap-3 max-sm:flex-col-reverse"
      >
        {/* A Reset btn is safer and more controllable as type=button with a handler*/}
        <Button
          type="button"
          onClick={handleReset}
          variation="light"
          additionalClasses="gap-4 px-3 py-2 justify-center"
          link={false}
          accessibility="Reset all fields"
        >
          <span>
            <X size={16} />
          </span>
          <span>Cancel</span>
        </Button>

        <Button
          type="submit"
          onClick={() => {}}
          variation="dark"
          additionalClasses="gap-4 px-3 py-2 justify-center"
          link={false}
        >
          <span>
            <Save size={16} />
          </span>
          <span>Add Application</span>
        </Button>
      </div>
    </form>
  );
}

export default AddApplicationForm;
