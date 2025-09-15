import type { LucideIcon } from "lucide-react";

interface Props {
  heading: string;
  icon: LucideIcon;
  text1: string;
  text2: string;
}

function FeaturesCard({ heading, icon: Icon, text1, text2 }: Props) {
  return (
    <article className="border w-[368px] border-[rgba(0,0,0,0.1)] p-6 rounded-xl max-md:grow max-md:mx-4">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span>{<Icon />}</span> <h3>{heading}</h3>
        </div>
        <p className="text-[#717182] mb-6">{text1}</p>
        <p className="text-[#717182] text-[14px]">{text2}</p>
      </div>
    </article>
  );
}

export default FeaturesCard;
