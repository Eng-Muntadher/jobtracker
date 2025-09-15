import Button from "./Button";

function SignInForm() {
  return (
    <div className="mx-4">
      <div className="mt-20 bg-(--bg-color-1) border rounded-[0.875rem] container mx-auto max-w-md border-[rgba(0,0,0,0.1)] p-6">
        <section
          aria-labelledby="signin-heading"
          className="flex flex-col text-center"
        >
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
            <input
              type="email"
              id="email"
              name="email"
              className="mb-4 text-(--text-color-secondary) px-[0.8rem] py-2 focus:outline-none bg-(--input-color) rounded-lg w-full"
              placeholder="Enter your email"
            />

            <label
              htmlFor="password"
              className="block text-(--text-color) font-semibold text-sm mb-2 text-start"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="mb-4 text-(--text-color-secondary) block px-[0.8rem] py-2 focus:outline-none bg-(--input-color) rounded-lg w-full"
            />
          </form>

          <Button
            accessibility={{ "aria-describedby": "signin-button" }}
            variation="dark"
            onClick={() => {}}
            additionalClasses="flex justify-center"
          >
            Sign In
          </Button>

          <button
            className="text-(bg-color-2) text-sm  font-semibold my-6"
            aria-label="Reset your password"
          >
            Forgot your password?
          </button>

          <hr className="mb-4 border-t border-gray-300" />

          <p className="mb-2">Don&apos;t have an account?</p>

          <Button
            variation="light"
            onClick={() => {}}
            additionalClasses="flex justify-center"
            accessibility={{ "aria-label": "Create a new jobTracker account" }}
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
