import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan 5",
    Applications: 4,
  },
  {
    name: "Jan 10",
    Applications: 2,
  },
  {
    name: "Jan 15",
    Applications: 1,
  },
  {
    name: "Jan 18",
    Applications: 1,
  },
  {
    name: "Jan 20",
    Applications: 6,
  },
];

function ResponsiveLineChart() {
  return (
    <section className="my-6 custom-border" aria-labelledby="line-chart-title">
      <h5
        className="text-(--text-color) font-semibold mb-1.5"
        id="line-chart-title"
      >
        Application Status Distribution
      </h5>
      <p className="text-(--text-color-secondary) mb-6">
        Visual breakdown of your application statuses
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Applications" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Summerize stats for screen readers */}
      <ul className="sr-only">
        {data.map((point) => (
          <li key={point.name}>
            {point.name}: {point.Applications} applications
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResponsiveLineChart;
