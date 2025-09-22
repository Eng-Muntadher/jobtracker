import StatsHeader from "../components/StatsHeader";
import StatisticsCardsList from "../components/StatisticsCardsList";
import PieChart from "../components/StatsPieChart";
import CompaniesBox from "../components/CompaniesBox";
import ResponsiveLineChart from "../components/ResponsiveLineChart";
import StatsTips from "../components/StatsTips";

function Stats() {
  return (
    <div className="container p-4 mx-auto">
      <StatsHeader />
      <StatisticsCardsList />

      <div className="grid grid-cols-2 gap-6 mt-6 max-lg:grid-cols-1">
        <PieChart />
        <CompaniesBox />
      </div>

      <ResponsiveLineChart />
      <StatsTips />
    </div>
  );
}

export default Stats;
