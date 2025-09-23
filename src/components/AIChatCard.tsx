import type { dataType } from "./AIChatCardsList";

function AIChatCard({ icon: Icon, heading, text }: dataType) {
  return (
    <div className="flex flex-col items-center custom-border" role="listitem">
      <Icon size={32} className="mb-2" aria-hidden="true" />
      <h3 className="text-(--text-color) font-semibold text-sm">{heading}</h3>
      <p className="text-(--text-color-secondary) text-xs w-[11.15rem] text-center">
        {text}
      </p>
    </div>
  );
}

export default AIChatCard;
