import { Book, Briefcase } from "lucide-react";
import JobDescriptionCard from "./JobDescriptionCard";

function UserProfileCards() {
  return (
    <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
      <JobDescriptionCard
        heading="Experience"
        text="5+ years"
        icon={Briefcase}
      />
      <JobDescriptionCard
        heading="Education"
        text="Bachelor's in Computer Science"
        icon={Book}
      />
    </div>
  );
}

export default UserProfileCards;
