import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { prepareChartData, type UserDb } from "../helpers";
import dayjs from "dayjs";

interface ResponsiveLineChartProps {
  jobApplications: UserDb[] | undefined;
}
function ResponsiveLineChart({ jobApplications }: ResponsiveLineChartProps) {
  const data = jobApplications ? prepareChartData(jobApplications) : [];
  return (
    <section className="my-6 custom-border" aria-labelledby="line-chart-title">
      <h2
        className="text-(--text-color) font-semibold mb-1.5"
        id="line-chart-title"
      >
        Application Status Distribution
      </h2>
      <p className="text-(--text-color-secondary) mb-6">
        Visual breakdown of your application statuses
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tickFormatter={(date: string) => dayjs(date).format("MMM D")} // Sep 12
          />
          <YAxis />
          <Tooltip
            labelFormatter={(date: string) =>
              dayjs(date).format("MMMM D, YYYY")
            } // full date (September 12, 2025)
          />
          <Legend />
          <Line type="monotone" dataKey="applications" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Summerize stats for screen readers */}
      <ul className="sr-only">
        {data.map((point) => (
          <li key={point.date}>
            {point.date}: {point.applications} applications
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResponsiveLineChart;
