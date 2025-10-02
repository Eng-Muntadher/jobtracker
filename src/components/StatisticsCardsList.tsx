import { Award, Clock, Target, TrendingUp } from "lucide-react";
import StatisticsCard from "./StatisticsCard";
import { calculateStatsRates, type UserDb } from "../helpers";
import { useEffect } from "react";

interface StatsCardsListProps {
  jobApplications: UserDb[] | undefined;
  setterFunction?: (x: number) => void;
}
function StatisticsCardsList({
  jobApplications,
  setterFunction,
}: StatsCardsListProps) {
  const {
    totalApplications,
    recentApplications,
    responseRate,
    interviewRate,
    successRate,
  } = calculateStatsRates(jobApplications);
  /* We could memoize the above calculation, but since
   this component almost NEVER re-renders, it's not an obligation. */

  /* here, we lift a state up to be consumed by a relative chlid. 
   We do this because the calculation above might be heavy and since we only need one
   value from it, we lift only this value up insted of modifying the return of the function above
   and have messy code. (We use useEffect to not update the state while the component is rendering!) */
  useEffect(() => {
    setterFunction?.(recentApplications);
  }, [recentApplications, setterFunction]);
  const stats = [
    {
      header: "Total Applications",
      icon: Target,
      displayedNumber: totalApplications.toLocaleString(),
      text: `${recentApplications} in the last 30 days`,
    },
    {
      header: "Response Rate",
      icon: TrendingUp,
      displayedNumber: `${responseRate.toFixed(1)}%`,
      text: "Companies that responded",
    },
    {
      header: "Interview Rate",
      icon: Clock,
      displayedNumber: `${interviewRate.toFixed(1)}%`,
      text: "Applications that led to interviews",
    },
    {
      header: "Success Rate",
      icon: Award,
      displayedNumber: `${successRate.toFixed(1)}%`,
      text: "Applications that resulted in offers",
    },
  ];

  return (
    <div
      className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1"
      role="list"
    >
      {stats.map((card) => (
        <StatisticsCard
          key={card.header}
          header={card.header}
          text={card.text}
          icon={card.icon}
          displayedNumber={card.displayedNumber}
        />
      ))}
    </div>
  );
}

export default StatisticsCardsList;
