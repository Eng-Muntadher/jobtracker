import { useMutation } from "@tanstack/react-query";
import {
  signUp,
  signUp as signUpApi,
  type LoginArguments,
} from "../servises/UserApi";
import { toast } from "react-hot-toast";

type LoginResult = Awaited<ReturnType<typeof signUp>>;

export function useSignUp() {
  const { mutate: signUp, isPending } = useMutation<
    LoginResult,
    Error,
    LoginArguments
  >({
    mutationFn: ({ email, password }) => signUpApi({ email, password }),
    onSuccess: () =>
      toast.success(
        "A verification email is sent to your email address. Please confirm your email to sign up",
        { duration: 15000 }
      ),
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong! Please try again later");
    },
  });
  return { signUp, isPending };
}
