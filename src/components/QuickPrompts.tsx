import dayjs from "dayjs";
import { UseFetchApplications } from "../hooks/useFetchApplications";
import QuickPromptBtn from "./QuickPromptBtn";

function QuickPrompts() {
  // fetch all the applications data using React query
  const { data } = UseFetchApplications();

  // calculate the date and status for all applications to be sent to the ai chat bot via a quick prompt
  const input1 = data
    ?.map((app) => {
      const formattedDate = dayjs(app.application_date).format("MMM D, YYYY");
      return `${formattedDate} —> ${app.application_status} \n`;
    })
    .join("\n");

  // calculate the company names and job titles for all applications to be sent to the ai chat bot via a quick prompt
  const input3 = data
    ?.map((app) => `${app.company_name} —> ${app.job_title} \n`)
    .join("\n");

  // remove duplicates and calculate the company names for all applications to be sent to the ai chat bot via a quick prompt
  const uniqueCompanies = [
    ...new Set(data?.map((app) => `${app.company_name} \n`)),
  ];

  // Make it a nice-looking string
  const input4 = uniqueCompanies.join("\n");

  // visual text for each prompt and what will be sent to ai if it's pressed
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
      <h3 className="text-(--text-color-secondary) text-sm mb-2">
        Quick prompts:
      </h3>
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
