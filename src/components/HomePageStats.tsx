function HomePageStats() {
  // Please don't mind the numbers below! I don't claim to have that many users in this app 👀
  return (
    <section
      className="flex justify-center mx-auto max-xl:container"
      aria-labelledby="stats-heading"
    >
      <div className="max-xl:mx-4 bg-(--landing-page-section-color) p-8 mb-16 rounded-[0.562rem] w-6xl">
        <h2
          className="text-center text-(--text-color) text-3xl mb-8"
          id="status-heading"
        >
          Join Thousands of Job Seekers
        </h2>

        <div role="list" className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          <div role="listitem" className="flex flex-col text-center">
            <span
              aria-label="50,000 plus"
              className="text-3xl font-bold text-(--text-color) mb-2"
            >
              50K+
            </span>
            <span className="text-(--text-color-secondary)">
              Applications Tracked
            </span>
          </div>

          <div role="listitem" className="flex flex-col text-center">
            <span
              aria-label="12,000 plus"
              className="text-3xl font-bold text-(--text-color) mb-2"
            >
              12K+
            </span>
            <span className="text-(--text-color-secondary)">Active Users</span>
          </div>

          <div role="listitem" className="flex flex-col text-center">
            <span
              aria-label="85 percent"
              className="text-3xl font-bold text-(--text-color) mb-2"
            >
              85%
            </span>
            <span className="text-(--text-color-secondary)">Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageStats;
