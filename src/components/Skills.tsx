import Skill from "./Skill";

const skills = ["React", "TypeScript", "Node.js", "Python", "AWS"];
function Skills() {
  return (
    <section className="custom-border max-h-[148px] overflow-y-auto">
      <h3 className="text-(--text-color) font-semibold mb-1.5">Skills</h3>
      <p className="text-(--text-color-secondary) mb-6">
        Your technical and professional skills
      </p>
      <ul className="flex flex-wrap gap-2">
        {skills.map((el, i) => (
          <Skill key={i}>{el}</Skill>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
