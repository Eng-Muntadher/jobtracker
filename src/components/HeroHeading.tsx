import Button from "./Button";

function HeroHeading() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="container flex flex-col items-center mx-auto mb-16 text-center">
        <h1
          className="mb-6 text-6xl text-[var(--text-color)] max-md:text-4xl"
          id="hero-heading"
        >
          Track Your Job Applications
        </h1>

        <p className="text-[var(--text-color-secondary)] text-xl max-w-2xl mb-6">
          Stay organized and never lose track of your job search progress.
          Manage applications, track interviews, and analyze your success rate.
        </p>

        <div
          aria-label="Get started options"
          role="group"
          className="flex gap-4 max-sm:flex-col max-sm:container"
        >
          <Button
            to="sign-in"
            variation="dark"
            additionalClasses="px-5 py-2.5 max-sm:mx-4 justify-center"
            onClick={() => console.log("")}
          >
            Get Started
          </Button>

          <Button
            to="sign-in"
            variation="light"
            additionalClasses="px-7 py-2.5 max-sm:mx-4 justify-center"
            onClick={() => console.log("")}
          >
            Sign In
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroHeading;
