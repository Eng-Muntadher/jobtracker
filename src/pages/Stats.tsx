import StatsHeader from "../components/StatsHeader";
import StatisticsCardsList from "../components/StatisticsCardsList";
import PieChart from "../components/StatsPieChart";
import CompaniesBox from "../components/CompaniesBox";
import ResponsiveLineChart from "../components/ResponsiveLineChart";
import StatsTips from "../components/StatsTips";
import { UseFetchApplications } from "../hooks/useFetchApplications";
import Spinner from "../components/Spinner";
import { useState } from "react";

function Stats() {
  const { data: jobApplications, isPending } = UseFetchApplications();
  const [recentApplications, setRecentApplications] = useState<number>(0);

  if (isPending) return <Spinner />;

  return (
    <div className="container p-4 mx-auto">
      <StatsHeader />
      <StatisticsCardsList
        jobApplications={jobApplications}
        setterFunction={setRecentApplications}
      />

      <div className="grid grid-cols-2 gap-6 mt-6 max-lg:grid-cols-1">
        <PieChart jobApplications={jobApplications} />
        <CompaniesBox jobApplications={jobApplications} />
      </div>

      <ResponsiveLineChart jobApplications={jobApplications} />
      <StatsTips recentApplications={recentApplications} />
    </div>
  );
}

export default Stats;
