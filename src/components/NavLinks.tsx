import { NavLink } from "react-router-dom";
import { BarChart3, Briefcase, MessageCircle } from "lucide-react";

function NavLinks({ addedClasses }: { addedClasses?: string }) {
  return (
    <ul
      // For sceen readers
      aria-label={
        addedClasses ? "Mobile navigation links" : "Desktop navigation links"
      }
      aria-hidden={!addedClasses}
      className={`grid grid-cols-[auto_auto_auto] gap-6 max-[370px]:gap-0 ${
        !addedClasses ? "max-md:hidden" : ""
      }`}
    >
      <li>
        <NavLink
          to="/all-applications"
          aria-label="Jobs section"
          className={({ isActive }: { isActive: boolean }) =>
            `flex gap-4 px-3 py-2 rounded-lg items-center text-sm font-semibold ${addedClasses} ${
              isActive
                ? "text-(--text-color-2) bg-(--bg-color-2)"
                : "text-(--text-color)"
            }`
          }
        >
          <span aria-hidden="true">
            <Briefcase size={16} />
          </span>
          <span>Jobs</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/stats"
          aria-label="Stats section"
          className={({ isActive }: { isActive: boolean }) =>
            `flex gap-4 items-center rounded-lg px-3 py-2 text-sm font-semibold ${addedClasses} ${
              isActive
                ? "text-(--text-color-2) bg-(--bg-color-2)"
                : "text-(--text-color)"
            }`
          }
        >
          <span aria-hidden="true">
            <BarChart3 size={16} />
          </span>
          <span>Stats</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/ai-chatbot"
          aria-label="Ai chat section"
          className={({ isActive }: { isActive: boolean }) =>
            `flex gap-4 items-center rounded-lg px-3 py-2 text-sm font-semibold ${addedClasses} ${
              isActive
                ? "text-(--text-color-2) bg-(--bg-color-2)"
                : "text-(--text-color)"
            }`
          }
        >
          <span aria-hidden="true">
            <MessageCircle size={16} />
          </span>
          <span>AI Chat</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
