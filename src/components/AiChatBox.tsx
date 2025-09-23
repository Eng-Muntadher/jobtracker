import { Bot, Send } from "lucide-react";
import QuickPrompts from "./QuickPrompts";
import Input from "./Input";
import AiBotImage from "../images/AIBot.svg";

function AiChatBox() {
  return (
    <section
      aria-labelledby="chat-section-heading"
      className="custom-border max-w-[896px] mx-auto mb-6"
    >
      <h3 id="chat-section-heading" className="flex items-center gap-2 mb-6">
        <span aria-hidden="true">
          <Bot size={20} className="text-(--text-color)" />
        </span>
        <span className="text-(--text-color)">Chat with AI Assistant</span>
      </h3>

      <div
        role="log"
        aria-live="polite"
        // make sure new chat messages are announced properly by screen readers.
        aria-relevant="additions"
        aria-atomic="false"
        aria-label="Chat conversation"
        className="h-[332px] custom-border-no-padding p-4"
      >
        <div
          role="article"
          aria-labelledby="ai-message-1"
          className="flex items-start gap-3 "
        >
          <img src={AiBotImage} alt="AI Assistant image" />
          <div className="bg-[#ECECF0] p-3 rounded-[0.625rem] w-md">
            <p className="mb-1 text-sm" id="ai-message-1">
              Hello! I&apos;m your AI job search assistant. I can help analyze
              your applications, provide insights, and suggest improvements to
              your job search strategy. What would you like to know?
            </p>
            <time dateTime="23:29:43" className="text-xs opacity-70">
              11:29:43 PM
            </time>
          </div>
        </div>
      </div>

      <QuickPrompts />

      <form className="flex justify-between gap-2">
        <label htmlFor="AI-Chat" className="sr-only">
          Write a message to the AI assistant
        </label>
        <Input
          type="text"
          id="AI-Chat"
          name="AI-Chat"
          required={true}
          placeholder="Ask me about your job search..."
          addedClasses="grow"
          srOnlyInfo="Write a message to the AI assistant"
        />
        <button
          className="p-2.5 bg-(--bg-color-2) opacity-50 rounded-lg cursor-pointer focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100"
          aria-label="Send a message to the AI assistant"
        >
          <Send size={16} color="white" aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}

export default AiChatBox;
