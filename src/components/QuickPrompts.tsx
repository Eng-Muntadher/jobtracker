import dayjs from "dayjs";
import { UseFetchApplications } from "../hooks/useFetchApplications";
import QuickPromptBtn from "./QuickPromptBtn";

function QuickPrompts() {
  const { data } = UseFetchApplications();
  const input1 = data
    ?.map((app) => {
      const formattedDate = dayjs(app.application_date).format("MMM D, YYYY");
      return `${formattedDate} —> ${app.application_status} \n`;
    })
    .join("\n");

  const input3 = data
    ?.map((app) => `${app.company_name} —> ${app.job_title} \n`)
    .join("\n");

  // remove duplicates
  const uniqueCompanies = [
    ...new Set(data?.map((app) => `${app.company_name} \n`)),
  ];

  // Make it a nice-looking string
  const input4 = uniqueCompanies.join("\n");

  const quickPromptsList = [
    {
      text: "Show me my application statistics:",
      input: input1,
    },
    { text: "How can I improve my job search?", input2: " " },
    { text: "What trends do you see in my applications?", input: input3 },
    { text: "Analyze the companies I've applied to", input: input4 },
  ];

  return (
    <div className="my-4">
      <h4 className="text-(--text-color-secondary) text-sm mb-2">
        Quick prompts:
      </h4>
      <ul className="flex flex-wrap gap-2">
        {quickPromptsList.map((prompt, index) => (
          <QuickPromptBtn
            text={prompt.text}
            key={index}
            input={prompt.input || ""}
          />
        ))}
      </ul>
    </div>
  );
}

export default QuickPrompts;
