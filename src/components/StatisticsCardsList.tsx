import { Award, Clock, Target, TrendingUp } from "lucide-react";
import StatisticsCard from "./StatisticsCard";

function StatisticsCardsList() {
  return (
    <div
      className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1"
      role="list"
    >
      <StatisticsCard
        header="Total Applications"
        icon={Target}
        displayedNumber="5"
        text="0 in the last 30 days"
      />
      <StatisticsCard
        header="Response Rate"
        icon={TrendingUp}
        displayedNumber="80.0%"
        text="Companies that responded"
      />
      <StatisticsCard
        header="Interview Rate"
        icon={Clock}
        displayedNumber="60.0%"
        text="Applications that led to interviews"
      />
      <StatisticsCard
        header="Success Rate"
        icon={Award}
        displayedNumber="20.0%"
        text="Applications that resulted in offers"
      />
    </div>
  );
}

export default StatisticsCardsList;
