// This file contains all the helper functions used accross the app
// mapper.js

import dayjs from "dayjs";

// DB object (snake_case)
export interface UserDb {
  id: number;
  created_at?: string;
  user_id?: number;
  company_name: string;
  job_title: string;
  application_status: "Interviewing" | "Applied" | "Accepted" | "Rejected";
  location?: string;
  job_posting?: string;
  contact?: string;
  salary?: string;
  application_date: string;
  job_details?: string;
  job_notes?: string;
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

export interface JobStats {
  totalApplications: number;
  recentApplications: number;
  responseRate: number;
  interviewRate: number;
  successRate: number;
}

export function calculateStatsRates(jobApplications: UserDb[] = []): JobStats {
  // calculate today's date and the date before 30 days
  const now = new Date();
  const cutoff = new Date();
  cutoff.setDate(now.getDate() - 30);

  let responses = 0; // applications where status != Applied
  let interviews = 0;
  let accepted = 0;
  let recent = 0; // applications in the last 30 days

  for (const item of jobApplications) {
    const itemDate = new Date(item.application_date);

    // calulate recent applications (with a safe fallback for null dates)
    if (!isNaN(itemDate.getTime()) && itemDate >= cutoff) {
      recent++;
    }

    if (item.application_status !== "Applied") responses++;
    if (item.application_status === "Interviewing") interviews++;
    if (item.application_status === "Accepted") accepted++;
  }

  const total = jobApplications.length;

  return {
    totalApplications: total,
    recentApplications: recent,
    responseRate: total ? (responses / total) * 100 : 0,
    interviewRate: total ? (interviews / total) * 100 : 0,
    successRate: total ? (accepted / total) * 100 : 0,
  };
}

export function calculateStats(jobApplications: UserDb[] = []) {
  let accepted = 0;
  let interviewing = 0;
  let applied = 0;
  let rejected = 0;

  for (let i of jobApplications) {
    if (i.application_status === "Accepted") accepted++;
    if (i.application_status === "Interviewing") interviewing++;
    if (i.application_status === "Applied") applied++;
    if (i.application_status === "Rejected") rejected++;
  }

  return { accepted, interviewing, applied, rejected };
}

// This function returns an array of applications that have one application per company
export function calculateCompanies(jobApplications: UserDb[] = []): UserDb[] {
  // If we use an array here, the look up inside each iteration will O(n**2).
  // Using a set makes it O(1) for each look up in each iteration.
  const seenCompanies = new Set<string>();

  const uniqueApplications: UserDb[] = [];

  jobApplications?.forEach((application) => {
    if (!seenCompanies.has(application.company_name)) {
      seenCompanies.add(application.company_name);
      uniqueApplications.push(application);
    }
  });

  return uniqueApplications;
}

// transformed data for the chart
type ChartPoint = {
  date: string; // ISO date string
  applications: number; // count of applications on that date
};
// This function gets the normal applications data and returns number of applications in each date
export function prepareChartData(applications: UserDb[]): ChartPoint[] {
  const grouped: Record<string, number> = {};

  applications.forEach((app) => {
    const date = app.application_date; // keep as ISO
    grouped[date] = (grouped[date] || 0) + 1;
  });

  return Object.entries(grouped)
    .map(([date, count]) => ({ date, applications: count }))
    .sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix()); // sort by time
}
