import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../servises/UserApi";
import { useEffect } from "react";
import supabase from "../servises/supabase";
import type { User } from "@supabase/supabase-js";

export function useUser() {
  const queryClient = useQueryClient();

  // React Query hook
  const query = useQuery<User | null, Error>({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  // Subscribe to auth state changes
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        // Update query cache immediately
        queryClient.setQueryData(["currentUser"], session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [queryClient]);

  return query; // contains { data, isLoading, isError, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Sign-out failed:", error.message);
    return;
  }
}
