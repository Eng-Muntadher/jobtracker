import type { SubmittedUserData } from "../pages/UserProfile";
import Input from "./Input";

interface AboutMePorps {
  aboutMeText: string;
  isEditing: boolean;
  handleChange: <K extends keyof SubmittedUserData>(
    name: K,
    value: SubmittedUserData[K]
  ) => void;
}

function AboutMe({ aboutMeText, isEditing, handleChange }: AboutMePorps) {
  if (isEditing)
    return (
      <section
        className="custom-border max-h-[231px] overflow-y-auto h-[231px]"
        aria-labelledby="about-me-heading"
      >
        <label
          htmlFor="about-me"
          className="text-(--text-color) font-semibold mb-1.5"
          id="about-me-heading"
        >
          About Me
        </label>
        <p className="text-(--text-color-secondary) mb-6">
          Tell others about your professional background
        </p>

        <Input
          id="about-me"
          type="textarea"
          name="about-me"
          placeholder="Write a brief bio about yourself..."
          defaultValue={aboutMeText}
          addedClasses="text-sm w-full min-h-[56px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            // set the user info state in the parent
            handleChange("aboutMe", e.target.value)
          }
        />
      </section>
    );

  return (
    <section
      className="custom-border max-h-[207.5px] overflow-y-auto h-[207.5px]"
      aria-labelledby="about-me-heading"
    >
      <h2
        className="text-(--text-color) font-semibold mb-1.5"
        id="about-me-heading"
      >
        About Me
      </h2>
      <p className="text-(--text-color-secondary) mb-6">
        Tell others about your professional background
      </p>
      <p className="text-(--text-color-secondary)">
        {aboutMeText || "Add some info about you"}
      </p>
    </section>
  );
}

export default AboutMe;
