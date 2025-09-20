import { ExternalLink, LinkIcon } from "lucide-react";

function JobLinksCard() {
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
      <a
        href="#"
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
      <span className="sr-only" id="new-window-note">
        Opens in new window
      </span>

      <span className="text-(--text-color) font-semibold text-sm mb-2">
        Contact/Recruiter
      </span>
      <a
        href="#"
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
    </section>
  );
}

export default JobLinksCard;
