import { getCurrentTime } from "./helpers";
import { setAiChat, type NewMessage } from "./store/AichatSlice";
import type { AppDispatch } from "./store/store";

export async function sendMessage(messages: NewMessage[]) {
  const res = await fetch(
    "https://ijgbxgdoqzoqjhgpvnna.supabase.co/functions/v1/smooth-worker",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // add Authorization if function requires it
        // "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({ messages }),
    }
  );

  if (!res.ok) {
    const errorText = await res.text(); // read body once for error
    throw new Error(`HTTP ${res.status} - ${errorText}`);
  }

  // read body once
  const data = await res.json();
  return data;
}

interface SendAndRecieveMessageProps {
  messages: NewMessage[];
  input: string;
  dispatch: AppDispatch;
  resetFunction?: (value: string) => void;
}

export async function sendAndRecieveMessage({
  messages,
  input,
  dispatch,
  resetFunction,
}: SendAndRecieveMessageProps) {
  // Add user message to state
  const newUserMessage: NewMessage = {
    role: "user",
    content: input,
    time: getCurrentTime(),
  };
  const updatedMessages = [...messages, newUserMessage];
  dispatch(setAiChat(updatedMessages));
  resetFunction?.("");

  // Send full conversation to AI
  const aiReply = await sendMessage(updatedMessages);
  // Make sure the AI reply is a string
  const aiReplyText =
    typeof aiReply === "string"
      ? aiReply
      : aiReply.output_text ?? "No response";

  // Add AI reply to state
  const newAiMessage: NewMessage = {
    role: "assistant",
    content: aiReplyText,
    time: getCurrentTime(),
  };
  dispatch(setAiChat([...updatedMessages, newAiMessage]));

  return null;
}
