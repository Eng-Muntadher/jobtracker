import { useQuery } from "@tanstack/react-query";
import { fetchMyOwnInfo } from "../servises/info";

export function useMyOwnInfo() {
  const { data, isPending } = useQuery({
    queryKey: ["myOwnInfo"],
    queryFn: fetchMyOwnInfo,
  });
  return { data, isPending };
}
