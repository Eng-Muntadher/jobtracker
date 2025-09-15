import { Briefcase } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center cursor-pointer">
      <Briefcase size={32} className="mr-[8px]" />
      <span className="text-xl font-semibold text-[var(--text-color)]">
        JobTracker
      </span>
    </div>
  );
}

export default Logo;
