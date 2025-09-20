import { Briefcase, Target, TrendingUp } from "lucide-react";
import FeaturesCard from "./FeaturesCard";

const StaticData = [
  {
    heading: "Applications Tracking",
    icon: Briefcase,
    text1:
      "Keep track of every job application with detailed information andstatus updates.",
    text2: `Record company details, job descriptions,
     application dates, and current status for each position you apply to.`,
  },
  {
    heading: "Interview Management",
    icon: Target,
    text1: "Schedule and track your interviews with notes and feedback",
    text2: `Keep detailed notes about each interview round, track follow-ups,
            and monitor your progress through the hiring process.`,
  },
  {
    heading: "Progress Analytics",
    icon: TrendingUp,
    text1: "Visualize your job search progress with detailed statistics.",
    text2: `Get insights into your application success rate, response times, and
            identify patterns to improve your job search strategy.`,
  },
];

function FeaturesCardsList() {
  return (
    <section className="container flex flex-wrap gap-6 mx-auto mb-16 md:justify-center">
      {StaticData.map((card) => (
        <FeaturesCard
          heading={card.heading}
          icon={card.icon}
          text1={card.text1}
          text2={card.text2}
          key={card.heading}
        />
      ))}
    </section>
  );
}

export default FeaturesCardsList;
