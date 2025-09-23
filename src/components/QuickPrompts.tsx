function QuickPrompts() {
  return (
    <div className="my-4">
      <h4 className="text-(--text-color-secondary) text-sm mb-2">
        Quick prompts:
      </h4>
      <ul className="flex flex-wrap gap-2">
        <li>
          <button className="text-(--text-color) text-xs font-semibold border border-[rgba(0,0,0,0.1)] px-[0.8rem] rounded-lg flex items-center py-2 focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100">
            Show me my application statistics
          </button>
        </li>
        <li>
          <button className="text-(--text-color) text-xs font-semibold border border-[rgba(0,0,0,0.1)] px-[0.8rem] rounded-lg flex items-center py-2 focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100">
            How can I improve my job search?
          </button>
        </li>
        <li>
          <button className="text-(--text-color) text-xs font-semibold border border-[rgba(0,0,0,0.1)] px-[0.8rem] rounded-lg flex items-center py-2 focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100">
            What trends do you see in my applications?
          </button>
        </li>
        <li>
          <button className="text-(--text-color) text-xs font-semibold border border-[rgba(0,0,0,0.1)] px-[0.8rem] rounded-lg flex items-center py-2 focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100">
            Analyze the companies I&apos;ve applied to
          </button>
        </li>
      </ul>
    </div>
  );
}

export default QuickPrompts;
