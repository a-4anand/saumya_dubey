const dashboardCards = [
  { label: "BMR / BPR", value: "Review status", tone: "blue" },
  { label: "SOP", value: "Revision status", tone: "amber" },
  { label: "CAPA", value: "Action status", tone: "green" },
  { label: "Audit", value: "Readiness", tone: "blue" },
  { label: "COA", value: "Review status", tone: "slate" },
  { label: "Batch Records", value: "Final QA review", tone: "green" },
];

export function HeroDashboard() {
  return (
    <div className="hero-dashboard" aria-hidden="true">
      <div className="hero-dashboard-panel">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-kicker">Quality System Control</p>
            <h3>Structured QA visibility for growing manufacturers</h3>
          </div>
          <span className="dashboard-chip">Independent QA support</span>
        </div>
        <div className="dashboard-summary">
          <div>
            <span className="dashboard-summary-label">Operating model</span>
            <strong>Founder-led, scope-based QA and documentation support</strong>
          </div>
          <span className="dashboard-chip dashboard-chip-soft">
            Surat • Gujarat • Remote India
          </span>
        </div>
        <div className="dashboard-grid">
          {dashboardCards.map((card) => (
            <article className={`dashboard-card tone-${card.tone}`} key={card.label}>
              <span className="dashboard-status" />
              <p>{card.label}</p>
              <strong>{card.value}</strong>
            </article>
          ))}
        </div>
        <div className="dashboard-footer">
          <div>
            <span>Focus</span>
            <strong>Documentation discipline</strong>
          </div>
          <div>
            <span>Review</span>
            <strong>Audit readiness</strong>
          </div>
          <div>
            <span>Delivery</span>
            <strong>Direct with Saumya</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
