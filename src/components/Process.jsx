export default function Process() {
  const steps = [
    { num: '01', icon: 'fa-search', title: 'DISCOVER', desc: 'Understand the problem, data and business objectives' },
    { num: '02', icon: 'fa-file-lines', title: 'PREPARE', desc: 'Collect, clean and prepare data for analysis' },
    { num: '03', icon: 'fa-globe', title: 'EXPLORE', desc: 'Analyze data and uncover patterns & insights' },
    { num: '04', icon: 'fa-cube', title: 'MODEL', desc: 'Build models and validate for accurate results' },
    { num: '05', icon: 'fa-chart-column', title: 'VISUALIZE', desc: 'Create dashboards and visual reports to communicate' },
    { num: '06', icon: 'fa-bullseye', title: 'RECOMMEND', desc: 'Provide actionable recommendations that drive impact' },
  ]

  return (
    <section id="achievements" className="process-section">
      <div className="section-container">
        <div className="section-header centered">
          <span className="section-tag">HOW I WORK</span>
          <h2 className="section-title">MY WORKING PROCESS</h2>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="step-number">{s.num}</div>
              <div className="step-icon-wrapper"><div className="step-icon"><i className={`fas ${s.icon}`}></i></div></div>
              {i < steps.length - 1 && <div className="step-connector"></div>}
              <h4 className="step-title">{s.title}</h4>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
