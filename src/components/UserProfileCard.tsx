import type { LucideIcon } from "lucide-react";
import Input from "./Input";
import type { SubmittedUserData } from "../pages/UserProfile";

interface JobDescriptionCardProps {
  icon: LucideIcon;
  heading: string;
  isEditing: boolean;
  text: string;
  initialValue: string;
  placeHolder: string;
  id: "experience" | "education";
  handleChange: <K extends keyof SubmittedUserData>(
    name: K,
    value: SubmittedUserData[K]
  ) => void;
}

function UserProfileCard({
  icon: Icon,
  heading,
  text,
  initialValue,
  isEditing,
  id,
  placeHolder,
  handleChange,
}: JobDescriptionCardProps) {
  if (isEditing)
    return (
      <section className="h-[142px] overflow-auto custom-border">
        <label
          htmlFor={id}
          className="flex gap-2 text-(--text-color) font-semibold items-center mb-6"
        >
          <span aria-hidden="true">
            <Icon size={20} />
          </span>
          <span>{heading}</span>
        </label>

        <Input
          id={id}
          type="text"
          name={id}
          addedClasses="text-sm w-full"
          defaultValue={initialValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(id, e.target.value)
          }
        />
      </section>
    );

  return (
    <section className="custom-border h-[122px] overflow-auto">
      <h2 className="flex gap-2 text-(--text-color) font-semibold items-center mb-6">
        <span aria-hidden="true">
          <Icon size={20} />
        </span>
        <span>{heading}</span>
      </h2>
      <p className="text-(--text-color-secondary)">{text || placeHolder}</p>
    </section>
  );
}

export default UserProfileCard;
