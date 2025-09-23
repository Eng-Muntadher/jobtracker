function AiChatHeader() {
  return (
    <header
      className="mt-8 mb-6 text-center"
      aria-labelledby="ai-assistant-heading"
    >
      <h1
        className="text-(--text-color) font-semibold text-3xl mb-2"
        id="ai-assistant-heading"
      >
        AI Job Search Assistant
      </h1>
      <p className="text-(--text-color-secondary) mb-2">
        Get personalized insights and recommendations for your job search
      </p>
    </header>
  );
}

export default AiChatHeader;
