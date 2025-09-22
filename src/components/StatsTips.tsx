function StatsTips() {
  return (
    <section className="custom-border" aria-labelledby="tips-heading">
      <h6
        className="text-(--text-color) font-semibold mb-1.5"
        id="tips-heading"
      >
        Insights & Recommendations
      </h6>
      <p className="text-(--text-color-secondary) mb-6">
        Personalized tips to improve your job search
      </p>

      <p
        className={`text-(--text-color) text-sm p-4 bg-(--tipsCard-yellow) mb-3`}
      >
        <strong className="font-bold">Stay active:</strong> You haven&apos;t
        submitted any applications in the last 30 days. Consistency is key to a
        successful job search.
      </p>

      <p className={`text-(--text-color) text-sm p-4 bg-(--tipsCard-green)`}>
        <strong className="font-bold">You&apos;re doing well!</strong> Your
        application strategy seems effective. Keep tracking your progress and
        refining your approach.
      </p>
    </section>
  );
}

export default StatsTips;
