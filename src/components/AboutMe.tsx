function AboutMe() {
  return (
    <section
      className="custom-border max-h-[207.5px] overflow-y-auto h-[207.5px]"
      aria-labelledby="about-me-heading"
    >
      <h3
        className="text-(--text-color) font-semibold mb-1.5"
        id="about-me-heading"
      >
        About Me
      </h3>
      <p className="text-(--text-color-secondary) mb-6">
        Tell others about your professional background
      </p>
      <p className="text-(--text-color-secondary)">
        Full-stack developer with 5+ years of experience building scalable web
        applications.
      </p>
    </section>
  );
}

export default AboutMe;
