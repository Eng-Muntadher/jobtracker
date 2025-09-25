import supabase from "./supabase";
import type { User } from "@supabase/supabase-js";

export interface loginArguments {
  email: string;
  password: string;
}

export async function login({ email, password }: loginArguments) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getCurrentUser(): Promise<User | null> {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.error("Error getting current user:", error);
    return null;
  }
  return user ?? null; // null if no user is logged in
}
