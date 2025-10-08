import { ExternalLink, LinkIcon } from "lucide-react";
import Input from "./Input";

interface JobLinksCardProps {
  jobPosting: string;
  contact: string;
  isEditing: boolean;
  handleChange: (name: string, value: string) => void;
}
function JobLinksCard({
  jobPosting,
  contact,
  isEditing,
  handleChange,
}: JobLinksCardProps) {
  if (isEditing) {
    return (
      <fieldset className="custom-border">
        <h5 className="flex items-center gap-2 mb-6">
          <span aria-hidden="true">
            <LinkIcon size={20} />
          </span>
          <span className="text-(--text-color)">Links</span>
        </h5>

        <label
          htmlFor="job-posting"
          className="text-(--text-color) font-semibold text-sm mb-2 block"
        >
          Job Posting
        </label>
        <Input
          type="text"
          id="job-posting"
          name="job-posting"
          defaultValue={jobPosting}
          addedClasses="text-sm w-full mb-4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("jobPosting", e.target.value)
          }
        />

        <label
          htmlFor="contact"
          className="text-(--text-color) font-semibold text-sm mb-2 block"
        >
          Contact/Recruiter
        </label>
        <Input
          type="text"
          id="contact"
          name="contact"
          defaultValue={contact}
          addedClasses="text-sm w-full mb-2"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("contact", e.target.value)
          }
        />
      </fieldset>
    );
  }
  return (
    <section className="custom-border">
      <h5 className="flex items-center gap-2 mb-6">
        <span aria-hidden="true">
          <LinkIcon size={20} />
        </span>
        <span className="text-(--text-color)">Links</span>
      </h5>

      <h6 className="text-(--text-color) font-semibold text-sm mb-2">
        Job Posting
      </h6>

      {jobPosting ? (
        <a
          href={`${jobPosting}`}
          target="_blank"
          rel="noopener noreferrer external"
          className="flex gap-2 text-[#155DFC] items-center mb-4"
          aria-describedby="new-window-note"
        >
          <span>View Job Posting</span>
          <span aria-hidden="true">
            <ExternalLink size={16} />
          </span>
        </a>
      ) : (
        <p className="text-(--text-color-secondary) mb-4">No link</p>
      )}
      <span className="sr-only" id="new-window-note">
        Opens in new window
      </span>

      <h6 className="text-(--text-color) font-semibold text-sm mb-2">
        Contact/Recruiter
      </h6>
      {contact ? (
        <a
          href={`${contact}`}
          target="_blank"
          rel="noopener noreferrer external"
          className="flex gap-2 text-[#155DFC] items-center"
          aria-describedby="new-window-note"
        >
          <span>Contact Recruiter</span>
          <span aria-hidden="true">
            <ExternalLink size={16} />
          </span>
        </a>
      ) : (
        <p className="text-(--text-color-secondary) m-0">No link</p>
      )}
    </section>
  );
}

export default JobLinksCard;
