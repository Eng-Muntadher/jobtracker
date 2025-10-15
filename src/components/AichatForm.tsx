import { Send } from "lucide-react";
import { sendAndRecieveMessage } from "../api";
import type { NewMessage } from "../store/AichatSlice";
import type { AppDispatch, RootState } from "../store/store";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

function AichatForm() {
  const [input, setInput] = useState("");
  const resetFunction = setInput; // this is passed to the ai chat function

  // The AI conversation is stored in Redux state for better UX
  const dispatch = useDispatch<AppDispatch>();
  const { messages } = useSelector((state: RootState) => state.aiChat);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    messages: NewMessage[],
    dispatch: AppDispatch,
    input: string,
    resetFunction: (value: string) => void
  ) {
    e.preventDefault();
    if (!input.trim()) return;

    // This function sends all past conversations in a single session and fetches the ai response
    sendAndRecieveMessage({ messages, dispatch, input, resetFunction });
  }
  return (
    <form
      className="flex justify-between gap-2"
      onSubmit={(e) =>
        handleSubmit(e, messages, dispatch, input, resetFunction)
      }
    >
      <label htmlFor="AI-Chat" className="sr-only">
        Write a message to the AI assistant
      </label>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        value={input}
        type="text"
        id="AI-Chat"
        name="AI-Chat"
        required={true}
        placeholder="Ask me about your job search..."
        addedClasses="grow text-sm"
        srOnlyInfo="Write a message to the AI assistant"
      />
      <button
        className="p-2.5 bg-(--bg-color-2) opacity-50 rounded-lg cursor-pointer focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100"
        aria-label="Send a message to the AI assistant"
      >
        <Send size={16} className="text-(--text-color-2)" aria-hidden="true" />
      </button>
    </form>
  );
}

export default AichatForm;
