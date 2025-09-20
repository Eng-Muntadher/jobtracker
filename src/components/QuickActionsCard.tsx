import { Calendar, ExternalLink, FileText, MessageSquare } from "lucide-react";
import QuickActionBtn from "./QuickActionBtn";

function QuickActionsCard() {
  return (
    <section className="custom-border h-fit">
      <h5 className="text-(--text-color) mb-7">Quick Actions</h5>
      <div className="flex flex-col gap-2">
        <QuickActionBtn link={true} text="View Job Posting" />
        <QuickActionBtn link={true} text="Contact Recriter" />
        <QuickActionBtn
          text="Schedule Interview"
          eventHandler={() => {}}
          icon={Calendar}
        />
        <QuickActionBtn
          text="Add Document"
          eventHandler={() => {}}
          icon={FileText}
        />
        <QuickActionBtn
          text="Add Follow up"
          eventHandler={() => {}}
          icon={MessageSquare}
        />
      </div>

      <span className="sr-only" id="new-window-note">
        Opens in new window
      </span>
    </section>
  );
}

export default QuickActionsCard;
