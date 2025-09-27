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
