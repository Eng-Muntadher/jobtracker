import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useLogin } from "../hooks/useLogin";
import Spinner from "./Spinner";
import { useSignUp } from "../hooks/useSignUp";
import toast from "react-hot-toast";

function SignInForm() {
  // this state indicates if the user is trying to sign in or sign up
  const [signUp, setSignUp] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending: isLoggingIn } = useLogin();
  const { isPending: isSigningUp, signUp: signUpFunction } = useSignUp();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, signUp: boolean) {
    e.preventDefault();
    if (signUp) {
      if (password.length < 6) {
        toast.error("Please use a password that is at least 6 digits!");
        return;
      }
      signUpFunction({ email, password });
      setEmail("");
      setPassword("");
    } else {
      login({ email, password });
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mx-4">
      <div className="mt-12  border border-(--border-color) rounded-[0.875rem] container mx-auto max-w-md p-6">
        {/* This h1 is only for screen readers and to improve SEO optimization */}
        <h1 className="sr-only">Sign in or sign up</h1>
        <section className="flex flex-col text-center">
          <div>
            {(isLoggingIn || isSigningUp) && <Spinner />}
            <h2 className="text-(--text-color) font-semibold mb-1.5">
              {signUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-(--text-color-secondary) mb-6">
              {signUp
                ? "Sign up to start tracking your job applications"
                : "Sign in to your JobTracker account"}
            </p>
          </div>

          <form onSubmit={(e) => handleSubmit(e, signUp)}>
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
              value={email}
              disabled={isLoggingIn || isSigningUp}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required={true}
              autoComplete="email"
              addedClasses="mb-4 w-full text-sm"
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
              value={password}
              disabled={isLoggingIn || isSigningUp}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required={true}
              autoComplete="current-password"
              addedClasses="mb-4 w-full text-sm"
            />

            <Button
              variation="dark"
              type="submit"
              additionalClasses="flex justify-center w-full"
              link={false}
            >
              {signUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          <button
            className="text-(--text-color) text-sm font-semibold cursor-pointer my-6 hover:underline"
            aria-label="Reset your password"
          >
            Forgot your password?
          </button>

          <hr className="mb-4 border-t border-gray-300" />

          <p className="mb-2 text-(--text-color-secondary) text-sm">
            {signUp ? "Already have an account?" : "Don't have an account?"}
          </p>

          <Button
            variation="light"
            onClick={() => {
              setSignUp((prev) => !prev);
            }}
            additionalClasses="flex justify-center"
          >
            {signUp ? "Sign In" : "Sign Up"}
          </Button>

          <div
            className="p-3 mt-4 rounded-sm bg-(--landing-page-section-color)"
            aria-labelledby="demo-heading"
          >
            <h3 className="text-(--text-color) font-semibold mb-1 text-start">
              Demo Access:
            </h3>
            <p className="text-(--text-color-secondary) text-start text-sm">
              You can sign up for a new account or enter (email: A@B.com,
              password: 00) for demo access and data.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default SignInForm;
