import type { LucideIcon } from "lucide-react";

interface Props {
  heading: string;
  icon: LucideIcon;
  text1: string;
  text2: string;
}

function FeaturesCard({ heading, icon: Icon, text1, text2 }: Props) {
  return (
    <article className="custom-border w-[368px] max-[775px]:grow max-[775px]:mx-4">
      <div>
        <div className="flex items-center gap-2 mb-3 text-(--text-color)">
          <span aria-hidden="true">{<Icon />}</span> <h2>{heading}</h2>
        </div>
        <p className="text-(--text-color-secondary) mb-6">{text1}</p>
        <p className="text-(--text-color-secondary) text-[14px]">{text2}</p>
      </div>
    </article>
  );
}

export default FeaturesCard;
