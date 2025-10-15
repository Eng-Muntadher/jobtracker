import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      aria-label="Go to homepage"
      className="flex items-center cursor-pointer focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100"
    >
      <Briefcase size={32} className="mr-[8px] text-(--text-color)" />
      <span className="text-xl font-semibold text-[var(--text-color)]">
        JobTracker
      </span>
    </Link>
  );
}

export default Logo;
