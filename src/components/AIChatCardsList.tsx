import {
  ChartColumn,
  Lightbulb,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import AIChatCard from "./AIChatCard";
export interface dataType {
  icon: LucideIcon;
  heading: string;
  text: string;
}

const data: dataType[] = [
  {
    icon: ChartColumn,
    heading: "Statistics Analysis",
    text: "Get detailed insights on your application performance",
  },
  {
    icon: Lightbulb,
    heading: "Smart Recommendations",
    text: "Receive personalized tips to improve your search",
  },
  {
    icon: TrendingUp,
    heading: "Trend Analysis",
    text: "Identify patterns in your job search behavior",
  },
  {
    icon: Target,
    heading: "Goal Tracking",
    text: "Monitor progress towards your career objectives",
  },
];
function AIChatCardsList() {
  return (
    <section
      className="grid grid-cols-4 gap-4 max-w-[896px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1"
      role="list"
      aria-label="AI Chat features"
    >
      {data.map((el, i) => (
        <AIChatCard
          icon={el.icon}
          heading={el.heading}
          text={el.text}
          key={i}
        />
      ))}
    </section>
  );
}

export default AIChatCardsList;
