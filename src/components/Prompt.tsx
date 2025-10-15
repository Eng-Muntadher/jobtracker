import ReactMarkdown from "react-markdown";

interface PromptProps {
  text: string;
  imageSrc: string;
  altText: string;
  ariaLabelledby: string;
  time: string;
  role: "ai" | "user";
}

// This component represents the propmt sent to or recieved from the ai chat bot
function Prompt({
  text,
  imageSrc,
  altText,
  ariaLabelledby,
  time,
  role,
}: PromptProps) {
  const tailwindClasses =
    role === "ai"
      ? "flex items-start gap-3"
      : "flex flex-row-reverse items-start gap-3";

  return (
    <div
      role="article"
      aria-labelledby={ariaLabelledby}
      className={tailwindClasses}
    >
      <img
        src={imageSrc}
        alt={altText}
        height={33}
        width={33}
        className="object-cover w-[33px] h-[33px] rounded-full flex-shrink-0 bg-red-300"
      />
      <div className="bg-(--prompt-bg-color) p-3 rounded-[0.625rem] w-md text-(--text-color)">
        <div className="mb-1 text-sm" id={ariaLabelledby}>
          {<ReactMarkdown>{text}</ReactMarkdown>}
        </div>
        <time dateTime={time} className="text-xs opacity-70">
          {time}
        </time>
      </div>
    </div>
  );
}

export default Prompt;
