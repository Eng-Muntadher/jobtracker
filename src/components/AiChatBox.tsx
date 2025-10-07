import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Bot } from "lucide-react";
import type { RootState } from "../store/store";
import QuickPrompts from "./QuickPrompts";
import AiBotImage from "../images/AIBot.svg";
import UserImage from "../images/userImg.png";
import ReactMarkdown from "react-markdown";
import AichatForm from "./AichatForm";
import Prompt from "./Prompt";

function AiChatBox() {
  // The AI conversation is stored in Redux state for better UX
  const { messages, initialAiMessageTime } = useSelector(
    (state: RootState) => state.aiChat
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

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
        ref={containerRef}
        role="log"
        aria-live="polite"
        // makes sure new chat messages are announced properly by screen readers.
        aria-relevant="additions"
        aria-atomic="false"
        aria-label="Chat conversation"
        className="h-[332px] overflow-y-auto custom-border-no-padding p-4 flex flex-col gap-6 scroll-smooth relative"
      >
        <Prompt
          role="ai"
          text="Hello! I'm your AI job search assistant. I can help analyze
              your applications, provide insights, and suggest improvements to
              your job search strategy. What would you like to know?"
          imageSrc={AiBotImage}
          altText="AI Assistant image"
          time={initialAiMessageTime}
          ariaLabelledby="ai-initial-message"
        />

        {/* This mapping displays all messages stored in Redux store based on the role*/}
        {messages.map((msg, index) =>
          msg.role === "assistant" ? (
            <Prompt
              role="ai"
              key={index + 1}
              text={msg.content}
              time={msg.time}
              imageSrc={AiBotImage}
              altText="AI Assistant image"
              ariaLabelledby={`ai-respond-to-message-${index - 1}`}
            />
          ) : (
            <Prompt
              key={index + 1}
              role="user"
              text={msg.content}
              time={msg.time}
              imageSrc={UserImage}
              altText="User image"
              ariaLabelledby={`user-message-${index}`}
            />
          )
        )}
      </div>

      <QuickPrompts />
      <AichatForm />
    </section>
  );
}

export default AiChatBox;
