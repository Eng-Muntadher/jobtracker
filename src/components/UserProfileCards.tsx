import { Book, Briefcase } from "lucide-react";
import JobDescriptionCard from "./JobDescriptionCard";

function UserProfileCards() {
  return (
    <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
      <JobDescriptionCard
        heading="Experience"
        type="description"
        icon={Briefcase}
      />
      <JobDescriptionCard heading="Education" icon={Book} type="jobNotes" />
    </div>
  );
}

export default UserProfileCards;
