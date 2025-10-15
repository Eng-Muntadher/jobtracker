import type { SubmittedUserData } from "../pages/UserProfile";
import supabase from "./supabase";
import type { User } from "@supabase/supabase-js";

export interface LoginArguments {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginArguments) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function signUp({ email, password }: LoginArguments) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:5173/auth/callback",
    },
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getCurrentUser(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();
  if (!data.user?.user_metadata.skills) {
    const { error } = await supabase.auth.updateUser({
      data: { skills: [] },
    });

    if (error) {
      console.error("Error updating metadata:", error);
    }
  }

  if (error) {
    console.error("Error getting current user:", error);
    return null;
  }
  return data.user ?? null; // null if no user is logged in
}

export async function updateUserData(data: SubmittedUserData) {
  const { error } = await supabase.auth.updateUser({ data });

  if (error) {
    console.error("Failed to update user data:", error);
    throw error; // optional — lets the caller handle it
  }

  return;
}

export async function uploadUserAvatar(
  userId: string,
  userAvatar: File,
  bucketName: string = "avatars",
  pathPrefix: string = "avatars"
): Promise<string | null> {
  try {
    if (!userAvatar) return null;

    // Build unique file path
    const ext = userAvatar.name.split(".").pop();
    const fileName = `${userId}.${ext}`;
    const filePath = `${pathPrefix}/${fileName}`;

    // Upload file to Supabase storage
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, userAvatar, { upsert: true });

    if (uploadError) throw uploadError;

    // Get public URL
    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);

    const publicUrl = data.publicUrl;

    // Update user metadata
    const { error: updateError } = await supabase.auth.updateUser({
      data: { ...data, avatar_url: publicUrl },
    });

    if (updateError) throw updateError;

    return publicUrl;
  } catch (error) {
    console.error("Error uploading avatar:", error);
    return null;
  }
}
