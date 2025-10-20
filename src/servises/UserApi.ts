import toast from "react-hot-toast";
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
  const emailIsTaken = await checkEmailExists(email);

  if (emailIsTaken) {
    toast.error("This email is already taken. Try signing in instead");
    throw Error("Email is taken");
  }

  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://jobtracker-99.vercel.app/auth/callback",
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  // Add the email to the "emails" table in Supabase
  const { error: insertError } = await supabase
    .from("emails")
    .insert([{ email }])
    .select();

  if (insertError) throw new Error(insertError.message);

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

export async function checkEmailExists(email: string): Promise<boolean> {
  const res = await fetch(
    "https://ijgbxgdoqzoqjhgpvnna.supabase.co/functions/v1/quick-responder",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );

  if (!res.ok) throw new Error("Failed to check email");

  const data = await res.json();
  return data.exists;
}
