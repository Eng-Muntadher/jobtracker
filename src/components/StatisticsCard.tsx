import { type LucideIcon } from "lucide-react";

interface StatsCardProps {
  header: string;
  icon: LucideIcon;
  displayedNumber: string;
  text: string;
}

function StatisticsCard({
  header,
  icon: Icon,
  displayedNumber,
  text,
}: StatsCardProps) {
  return (
    <section className="custom-border" role="listitem">
      <h3 className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold">{header}</span>
        <span aria-hidden="true">
          <Icon size={16} color="#717182" />
        </span>
      </h3>
      <div className="font-bold text-(--text-color) text-2xl">
        {displayedNumber}
        <span className="sr-only">{header}</span> {/* For screen readers */}
      </div>
      <p className="text-(--text-color-secondary) text-xs">{text}</p>
    </section>
  );
}

export default StatisticsCard;
