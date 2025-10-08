import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateApplication as updateApplicationApi } from "../servises/jobApplicationsApi";
import type { UserJs } from "../helpers";

export function useUpdateApplication() {
  const queryClient = useQueryClient();

  const { mutate: updateApplication, isPending } = useMutation({
    mutationFn: ({ data, id }: { data: UserJs; id: number }) =>
      updateApplicationApi(data, id),
    onSuccess: () => {
      toast.success("Application successfully edited!");
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      console.log(err);
      toast.error("Something went wrong! Please check your data and try again");
    },
  });

  return { isPending, updateApplication };
}
