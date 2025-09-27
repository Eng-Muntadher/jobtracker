import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteApplication as deleteApplicationApi } from "../servises/jobApplicationsApi";

export function useDeleteApplication() {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteApplication } = useMutation({
    mutationFn: (id: number) => deleteApplicationApi(id),
    onSuccess: () => {
      toast.success("Job application successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["TableJobApplications"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, deleteApplication };
}
