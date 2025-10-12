import { Plus } from "lucide-react";
import Input from "./Input";
import Skill from "./Skill";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import type { SubmittedUserData } from "../pages/UserProfile";

interface SkillsProps {
  skillsSet: string[];
  isEditing: boolean;
  handleChange: <K extends keyof SubmittedUserData>(
    name: K,
    value: SubmittedUserData[K]
  ) => void;
}

function Skills({ skillsSet, isEditing, handleChange }: SkillsProps) {
  // this is a local state that is lifted up when the form is submitted
  const [skillsState, setSkillsState] = useState<string[]>(skillsSet);

  // this state contols the input element for adding new skills
  const [newSkill, setNewSkill] = useState<string>("");

  function handleDelete(skill: string) {
    // delete all skills with a specific name
    const updatedSkills = skillsState.filter((s) => s !== skill);
    setSkillsState(updatedSkills);
    handleChange("skills", updatedSkills); // update the parent state
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newSkill) {
      // since state updates are asynchronous, we store the state in a const to get the latest value and use it
      const updatedSkills = [...skillsState, newSkill];
      setSkillsState(updatedSkills);
      handleChange("skills", updatedSkills); // update the parent state
      setNewSkill("");
    } else {
      // if skill name is an empty string
      toast.error("Please add a valid skill name!");
    }
  }

  // reset the local state whenever the parent state is changed
  useEffect(() => {
    setSkillsState(skillsSet);
  }, [skillsSet, isEditing]); // runs whenever skillsSet or isEditing changes

  if (isEditing)
    return (
      <section className="custom-border max-h-[148px] overflow-y-auto">
        <h3 className="text-(--text-color) font-semibold mb-1.5">Skills</h3>
        <p className="text-(--text-color-secondary) mb-6">
          Your technical and professional skills
        </p>
        <form className="flex gap-2 mb-4" onSubmit={handleSubmit}>
          <label htmlFor="skills" className="sr-only">
            Add a new skill to your cv
          </label>
          <Input
            id="skills"
            type="text"
            name="skills"
            placeholder="Add a skill..."
            addedClasses="text-sm w-full"
            value={newSkill}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewSkill(e.target.value);
            }}
          />
          <button
            aria-label="submit a new skill"
            className="text-(--text-color-2) bg-(--bg-color-2) h-9 w-9 flex items-center justify-center rounded-md cursor-pointer"
          >
            <Plus size={16} aria-hidden="true" />
          </button>
        </form>
        <ul className="flex flex-wrap gap-2">
          {skillsState.map((el, i) => (
            <Skill
              text={el}
              isEditing={isEditing}
              key={i}
              deleteSkills={handleDelete}
            />
          ))}
        </ul>
      </section>
    );

  return (
    <section className="custom-border max-h-[148px] overflow-y-auto">
      <h3 className="text-(--text-color) font-semibold mb-1.5">Skills</h3>
      <p className="text-(--text-color-secondary) mb-6">
        Your technical and professional skills
      </p>
      <ul className="flex flex-wrap gap-2">
        {skillsSet.map((el, i) => (
          <Skill key={i} text={el} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
