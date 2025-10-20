import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { uploadApplication as uploadApplicationApi } from "../servises/jobApplicationsApi";

export function useUploadApplication() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: uploadApplication,
    isError,
  } = useMutation({
    mutationFn: uploadApplicationApi,
    retry: 0,
    onSuccess: () => {
      toast.success("Job application successfully added!");
      queryClient.invalidateQueries({ queryKey: ["TableJobApplications"] });
    },
    onError: () =>
      toast.error("Faild to upload! Please check your connection."),
  });

  return { isPending, uploadApplication, isError };
}
