import {
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip,
  PieChart,
} from "recharts";
import { calculateStats, type UserDb } from "../helpers";

interface StatsPieChartProps {
  jobApplications: UserDb[] | undefined;
}
function StatsPieChart({ jobApplications }: StatsPieChartProps) {
  const { accepted, applied, interviewing, rejected } =
    calculateStats(jobApplications);

  /* We could memoize the above calculation here also, but since
   this component also almost NEVER re-renders, it's not an obligation. */

  return (
    <section className="custom-border" aria-labelledby="pie-chart-title">
      <h4
        className="text-(--text-color) font-semibold mb-1.5"
        id="pie-chart-title"
      >
        Application Status Distribution
      </h4>
      <p className="text-(--text-color-secondary) mb-6">
        Visual breakdown of your application statuses
      </p>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart
          data={[
            {
              name: "Accepted",
              value: accepted,
            },
            {
              name: "Interviewing",
              value: interviewing,
            },
            {
              name: "Applied",
              value: applied,
            },
            {
              name: "Rejected",
              value: rejected,
            },
          ]}
          height={400}
          onMouseMove={function Wde() {}}
          width={400}
        >
          <Pie
            dataKey="value"
            fill="#8884d8"
            onMouseEnter={function Wde() {}}
            onMouseLeave={function Wde() {}}
            outerRadius={80}
          >
            <Cell fill="#10B981" />
            <Cell fill="#FACC15" />
            <Cell fill="#3B82F6" />
            <Cell fill="#EF4444" />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* Summerize the stats for screen readers */}
      <ul className="sr-only">
        <li>Accepted: {accepted}</li>
        <li>Interviewing: {interviewing}</li>
        <li>Applied: {applied}</li>
        <li>Rejected: {rejected}</li>
      </ul>
    </section>
  );
}

export default StatsPieChart;
