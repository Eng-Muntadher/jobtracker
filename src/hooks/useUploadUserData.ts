import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserData as updateUserDataApi } from "../servises/UserApi";
import type { SubmittedUserData } from "../pages/UserProfile";

export function useUploadUserData() {
  const queryClient = useQueryClient();

  const { mutate: updateUserData, isPending } = useMutation<
    void, // Return type of mutation function
    unknown, // Error type
    SubmittedUserData // Input type
  >({
    mutationFn: (data: SubmittedUserData) => updateUserDataApi(data),
    onSuccess: () => {
      toast.success("Profile successfully edited!");
      queryClient.invalidateQueries({ queryKey: ["currentUser"], exact: true });
    },
    onError: (err) => {
      console.error(err);
      toast.error(
        "There was an error updating profile info! Please try again later"
      );
    },
  });

  return { isPending, updateUserData };
}
