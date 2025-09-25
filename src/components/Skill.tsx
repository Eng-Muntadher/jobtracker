import type { ReactNode } from "react";

interface SkillProps {
  children: string | ReactNode;
}

function Skill({ children }: SkillProps) {
  return (
    <li className="text-(--bg-color-2) text-xs font-semibold bg-(--skill-bg) px-2 py-0.5 rounded-lg">
      {children}
    </li>
  );
}

export default Skill;
