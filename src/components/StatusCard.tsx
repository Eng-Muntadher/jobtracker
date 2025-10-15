interface CardProps {
  color: string;
  text: string;
  statusCount: number;
}

function StatusCard({ color, text, statusCount }: CardProps) {
  return (
    <div>
      <div className="h-[93px] px-4 pt-4 pb-6 border border-(--border-color) rounded-[0.875rem]">
        <div className="flex flex-col items-center">
          <span
            aria-label={`1 ${text} applications`}
            className="text-2xl font-bold"
            style={{ color: color }}
          >
            {statusCount}
          </span>
          <span className="text-(--text-color) text-sm">{text}</span>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
