import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signOut } from "./useUser";

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signOutUser, isPending } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      // Clear cached queries since the user has signed out
      queryClient.clear();
      navigate("/");
    },
    onError: (err) => {
      console.error("Sign-out failed:", err);
    },
  });

  return { signOutUser, isPending };
}
