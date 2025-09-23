import AiChatBox from "../components/AiChatBox";
import AIChatCardsList from "../components/AIChatCardsList";
import AiChatHeader from "../components/AiChatHeader";

function AiChatbot() {
  return (
    <div className="container px-4 mx-auto mb-8 ">
      <AiChatHeader />
      <AiChatBox />
      <AIChatCardsList />
    </div>
  );
}

export default AiChatbot;
