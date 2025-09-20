import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  heading: string;
  text: string;
}

function JobDescriptionCard({ icon: Icon, heading, text }: Props) {
  return (
    <section className="custom-border">
      <h4 className="flex gap-2 text-(--text-color) font-semibold items-center mb-6">
        <span aria-hidden="true">
          <Icon size={20} />
        </span>
        <span>{heading}</span>
      </h4>
      <p className="text-(--text-color-secondary)">{text}</p>
    </section>
  );
}

export default JobDescriptionCard;
