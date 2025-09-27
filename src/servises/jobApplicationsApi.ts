import { toSnake, type UserJs } from "../helpers";
import supabase from "./supabase";

export async function uploadApplication(data: UserJs) {
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError || !user.user) throw new Error("Not authenticated");

  /* since it's a convention to use snake case for the DB
   and camel case for TS/JS code, we convert between
    the two when reading/writing to the DB*/
  const snakeData = toSnake({ ...data, user_id: user.user.id });

  const { error } = await supabase.from("job_applications").insert([snakeData]);

  if (error) throw new Error(error.message);
}

export async function fetchApplicationsForTable() {
  const { data, error } = await supabase
    .from("job_applications")
    .select(
      "id, company_name, job_title, application_status, application_date"
    );

  if (error) throw new Error(error.message);
  return data;
}

export async function fetchOneApplicationFullData(applicationId: number) {
  let { data, error } = await supabase
    .from("job_applications")
    .select("*") // could exclude (created_at, user_id) but the code would be a bit messy😃
    .eq("id", applicationId);

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteApplication(id: number) {
  const { error } = await supabase
    .from("job_applications")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
}
