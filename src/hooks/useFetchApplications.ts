import { useQuery } from "@tanstack/react-query";
import { fetchApplicationsForTable } from "../servises/jobApplicationsApi";

export function UseFetchApplications() {
  const { data, isPending } = useQuery({
    queryKey: ["TableJobApplications"],
    queryFn: fetchApplicationsForTable,
  });
  return { data, isPending };
}
