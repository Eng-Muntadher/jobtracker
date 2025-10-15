import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  login,
  login as loginApi,
  type LoginArguments,
} from "../servises/UserApi";
import { toast } from "react-hot-toast";

type LoginResult = Awaited<ReturnType<typeof login>>;

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation<
    LoginResult,
    Error,
    LoginArguments
  >({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => navigate("/"),
    onError: (error) => {
      console.log(error);
      toast.error(
        "Please make sure your email and password are correct or check your connection"
      );
    },
  });
  return { login, isPending };
}
