import supabase from "./supabase";

export async function getAllJobApplications() {
  const { data, error } = await supabase.from("job_applications").select("*");
  console.log(data);

  if (error) {
    throw new Error("No connection established!");
  }
}
