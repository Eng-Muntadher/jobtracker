import Button from "./Button";
import Input from "./Input";

function SignInForm() {
  return (
    <div className="mx-4">
      <div className="mt-20 bg-(--bg-color-1) border rounded-[0.875rem] container mx-auto max-w-md border-[rgba(0,0,0,0.1)] p-6">
        <section className="flex flex-col text-center">
          <div>
            <h1 className="text-(--text-color) font-semibold mb-1.5">
              Welcome Back
            </h1>
            <p className="text-(--text-color-secondary) mb-6">
              Sign in to your JobTracker account
            </p>
          </div>

          <form>
            <label
              htmlFor="email"
              className="block text-(--text-color) font-semibold text-sm mb-2 text-start"
            >
              Email
            </label>

            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required={true}
              addedClasses="mb-4 text-(--text-color-secondary) w-full"
            />

            <label
              htmlFor="password"
              className="block text-(--text-color) font-semibold text-sm mb-2 text-start"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required={true}
              addedClasses="mb-4 text-(--text-color-secondary) w-full"
            />

            <Button
              variation="dark"
              onClick={() => {}}
              additionalClasses="flex justify-center w-full"
              link={false}
            >
              Sign In
            </Button>
          </form>

          <button
            className="text-(bg-color-2) text-sm font-semibold cursor-pointer my-6 hover:underline"
            aria-label="Reset your password"
          >
            Forgot your password?
          </button>

          <hr className="mb-4 border-t border-gray-300" />

          <p className="mb-2 text-(--text-color-secondary)">
            Don&apos;t have an account?
          </p>

          <Button
            variation="light"
            onClick={() => {}}
            additionalClasses="flex justify-center"
            accessibility="Open sign up page in a new tap"
          >
            Sign Up
          </Button>

          <div
            className="p-3 mt-4 rounded-sm bg-(--landing-page-section-color)"
            aria-labelledby="demo-heading"
          >
            <h2 className="text-(--text-color) font-semibold mb-1 text-start">
              Demo Access:
            </h2>
            <p className="text-(--text-color-secondary) text-start text-sm">
              You can sign up for a fresh account and it will be added to the
              database. Or you can enter (email: A@B.com, password: 00) for demo
              access and data.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default SignInForm;
