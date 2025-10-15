import { useQuery } from "@tanstack/react-query";
import { fetchOneApplicationFullData } from "../servises/jobApplicationsApi";

export function useFetchApplication(applicationId: number) {
  const { data, isPending } = useQuery({
    queryKey: ["jobApplication-", applicationId], // include id for cach data

    queryFn: () => fetchOneApplicationFullData(applicationId),

    enabled: !!applicationId, // only fetch if id is defined
  });

  return { data, isPending };
}
