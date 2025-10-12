import { X } from "lucide-react";

interface SkillProps {
  text: string;
  isEditing?: boolean;
  deleteSkills?: (skill: string) => void;
}

function Skill({ text, isEditing = false, deleteSkills }: SkillProps) {
  if (isEditing)
    return (
      <li className="text-(--bg-color-2) text-xs font-semibold bg-(--skill-bg) px-2 py-0.5 rounded-lg flex gap-1 items-center">
        {text}
        <button
          className="cursor-pointer hover:text-red-600"
          onClick={() => deleteSkills?.(text)}
        >
          <X size={12} aria-hidden="true" />
        </button>
      </li>
    );
  return (
    <li className="text-(--bg-color-2) text-xs font-semibold bg-(--skill-bg) px-2 py-0.5 rounded-lg">
      {text}
    </li>
  );
}

export default Skill;
