import {
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip,
  PieChart,
} from "recharts";
function StatsPieChart() {
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
              name: "Rejected",
              value: 1,
            },
            {
              name: "Interviewing",
              value: 2,
            },
            {
              name: "Offers",
              value: 1,
            },
            {
              name: "Applied",
              value: 1,
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
            <Cell fill="#EF4444" />
            <Cell fill="#10B981" />
            <Cell fill="#FACC15" />
            <Cell fill="#3B82F6" />
          </Pie>
          <Tooltip />
          <Legend />
          {/* <RechartsHookInspector /> */}
        </PieChart>
      </ResponsiveContainer>

      {/* Summerize the stats for screen readers */}
      <ul className="sr-only">
        <li>Rejected: 1</li>
        <li>Interviewing: 2</li>
        <li>Offers: 1</li>
        <li>Applied: 1</li>
      </ul>
    </section>
  );
}

export default StatsPieChart;
