/* This file is deticated to fetch my personal data (email, GitHub, portfolio)
 since I have made them dynamic using Supabase just in case I change them later */

import supabase from "./supabase";

export async function fetchMyOwnInfo() {
  const { data: info, error } = await supabase
    .from("info")
    .select("name, value");

  if (error) throw new Error(error.message);

  return info;
}
