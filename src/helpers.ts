// This file contains all the helper functions used accross the app
// mapper.js

// DB object (snake_case)
export interface UserDb {
  id: number;
  created_at?: string;
  user_id: number;
  company_name: string;
  job_title: string;
  application_status: "Interviewing" | "Applied" | "Accepted" | "Rejected";
  location: string;
  job_posting: string;
  contact: string;
  salary: string;
  application_date: string;
  job_details: string;
  job_notes: string;
  interview_date?: string;
}

// JS object (camelCase)
export interface UserJs {
  user_id: string;
  companyName: string;
  jobTitle: string;
  applicationStatus: string;
  applicationDate: string;
  location: string;
  jobPosting: string;
  contact: string;
  salary: string;
  jobDetails: string;
  jobNotes: string;
  interviewDate?: string;
}

// Convert camel case to snake case when uploading data for best practise
export function toSnake(obj: UserJs) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
      value,
    ])
  );
}

interface AnyObject {
  [key: string]: string;
}

// This function sorts an array of objects based on a key input
export function sortByKey<T extends AnyObject>(
  arr: T[],
  key: string,
  order: "asc" | "desc" = "asc",
  isDate: boolean // indicates if the key is of type "date"
): T[] {
  return [...arr].sort((a, b) => {
    let valA: string | number;
    let valB: string | number;

    if (isDate) {
      // Convert to timestamp for proper date comparison
      valA = a[key] ? new Date(a[key]).getTime() : 0;
      valB = b[key] ? new Date(b[key]).getTime() : 0;
    } else {
      valA = a[key] ? String(a[key]).toLowerCase() : "";
      valB = b[key] ? String(b[key]).toLowerCase() : "";
    }

    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });
}
