import { Calendar, FileText, MessageSquare } from "lucide-react";
import QuickActionBtn from "./QuickActionBtn";

interface QuickActionsCardProps {
  contact: string;
  jobLink: string;
  setIsEditing: (x: boolean) => void;
}
function QuickActionsCard({
  contact,
  jobLink,
  setIsEditing,
}: QuickActionsCardProps) {
  return (
    <section className="custom-border h-fit">
      <h2 className="text-(--text-color) mb-7">Quick Actions</h2>
      <div className="flex flex-col gap-2">
        <QuickActionBtn link={true} text="View Job Posting" href={jobLink} />

        <QuickActionBtn link={true} text="Contact Recriter" href={contact} />

        <QuickActionBtn
          text="Schedule Interview"
          eventHandler={() => {
            setIsEditing(true);
          }}
          icon={Calendar}
        />
        <QuickActionBtn
          text="Add Document"
          eventHandler={() => {
            setIsEditing(true);
          }}
          icon={FileText}
        />
        <QuickActionBtn
          text="Add Follow up"
          eventHandler={() => {
            setIsEditing(true);
          }}
          icon={MessageSquare}
        />
      </div>

      {/* Tells screen readers that this link opens a new tap */}
      <span className="sr-only" id="new-window-note">
        Opens in new window
      </span>
    </section>
  );
}

export default QuickActionsCard;
