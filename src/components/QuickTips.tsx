function QuickTips() {
  return (
    <section
      aria-labelledby="quick-tips-heading"
      className="max-w-3xl mx-auto mb-8 custom-border bg-(--input-color)"
    >
      <h4
        className="text-(--text-color) text-lg font-semibold mb-7"
        id="quick-tips-heading"
      >
        <span aria-hidden="true">💡 </span>
        <span>Quick Tips</span>
      </h4>

      <ul className="text-(--text-color-secondary) text-sm flex flex-col gap-2">
        <li>• Keep track of application dates to follow up appropriately</li>
        <li>• Add detailed notes about the interview process and feedback</li>
        <li>• Update the status as you progress through different stages</li>
        <li>
          • Include salary range and benefits information in the description
        </li>
        <li>• Set reminders for follow-up dates in your notes</li>
      </ul>
    </section>
  );
}

export default QuickTips;
