import { ExternalLink, type LucideIcon } from "lucide-react";

interface BtnProps {
  text: string;
  eventHandler?: () => void;
  link?: boolean;
  icon?: LucideIcon;
  href?: string;
}

function QuickActionBtn({
  text,
  eventHandler,
  link = false,
  icon: Icon = ExternalLink,
  href = "",
}: BtnProps) {
  const tailwindClasses =
    "px-[0.8rem] py-2 border border-[rgba(0,0,0,0.1)] rounded-[0.875rem] flex gap-4 text-(--text-color) items-center hover:bg-(--accent) cursor-pointer";

  if (!link) {
    return (
      <button className={tailwindClasses} onClick={eventHandler}>
        <span aria-hidden="true">
          <Icon size={16} />
        </span>
        <span className="text-sm font-semibold">{text}</span>
      </button>
    );
  }

  return (
    <a
      className={tailwindClasses}
      aria-describedby="new-window-note"
      rel="noopener noreferrer external"
      href={href}
      target="_blank"
    >
      <span aria-hidden="true">
        <Icon size={16} />
      </span>
      <span className="text-sm font-semibold">{text}</span>
    </a>
  );
}

export default QuickActionBtn;
