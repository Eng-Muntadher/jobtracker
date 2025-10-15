import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import { sendAndRecieveMessage } from "../api";

interface QuickPromptBtnProps {
  text: string;
  input: string;
}

function QuickPromptBtn({ text, input }: QuickPromptBtnProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { messages } = useSelector((state: RootState) => state.aiChat);

  // since we use React mark down for a better UI format, we use ** for titles and \n for new lines
  input = `**${text}**` + "  \n" + input;

  return (
    <li>
      <button
        onClick={() => sendAndRecieveMessage({ messages, dispatch, input })}
        className="
    text-(--text-color) text-xs font-semibold 
    border border-(--border-color) px-[0.8rem] rounded-lg flex items-center py-2 
    focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) 
    transition-transform ease-in duration-200 
    cursor-pointer
    hover:-translate-y-1"
      >
        {text}
      </button>
    </li>
  );
}

export default QuickPromptBtn;
