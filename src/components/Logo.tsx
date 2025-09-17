import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      aria-label="Go to homepage"
      className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <Briefcase size={32} className="mr-[8px]" />
      <span className="text-xl font-semibold text-[var(--text-color)]">
        JobTracker
      </span>
    </Link>
  );
}

export default Logo;
