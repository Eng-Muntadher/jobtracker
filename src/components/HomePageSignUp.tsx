import Button from "./Button";

function SignUpForHomePage() {
  return (
    <section
      aria-label="cta-heading"
      className="container flex flex-col items-center mx-auto mb-36"
    >
      <h2 className="text-(--text-color) text-3xl mb-4 text-center">
        Reday to Get Organized?
      </h2>
      <p className="text-(--text-color-secondary) text-center leading-[1.75] text-xl mb-8">
        Start tracking your job applications today and take control of your
        career
      </p>
      <Button
        to="sign-in"
        variation="dark"
        onClick={() => console.log("Cta")}
        additionalClasses="px-6 py-2.5"
      >
        Sign Up Now
      </Button>
    </section>
  );
}

export default SignUpForHomePage;
