export default function Experience() {
  const experiences = [
    {
      date: 'Sep 2023 - Jun 2025', badge: 'work', badgeText: 'Work Experience',
      title: 'Process Associate', company: 'Genpact India Services Pvt Ltd. | Noida',
      details: [
        'Executed end-to-end data cleaning, validation, and reconciliation for financial reports and invoices, ensuring 100% data accuracy and audit readiness',
        'Processed 30+ service requests daily while maintaining high accuracy and meeting SLA and turnaround-time benchmarks',
        'Analyzed operational KPIs, productivity metrics, and performance data to identify trends, process gaps, and improvement opportunities',
        'Prepared operational reports and maintained accurate data records using MS Excel, supporting data-driven decision-making',
        'Leveraged MS Excel, Bridge, Applied APIC, and Broker Desktop to streamline data workflows, improving team efficiency by 15%',
        'Collaborated with cross-functional teams to resolve operational issues, reduce errors, and improve turnaround time (TAT)',
        'Performed document verification, compliance checks, and process audits to ensure adherence to SOPs and organizational policies',
        'Ranked #1 among 22 team members for consistent performance over 1 year and 3 months',
        'Received the Star Performer Quarterly Award for exceeding productivity targets by handling 10 additional service requests per day',
      ],
    },
    {
      date: 'Aug 2022 - Sep 2022', badge: 'internship', badgeText: 'Internship',
      title: 'Finance Intern', company: 'SBI - State Bank of India | Jhandapur',
      details: [
        'Interacted with clients to understand service requirements and support timely resolution of operational service needs',
        'Visited CSP branches to conduct routine inspections, verify adherence to operational standards, and perform document verification and compliance checks',
      ],
    },
    {
      date: 'Jun 2026 - Aug 2026', badge: 'internship', badgeText: 'Internship',
      title: 'Business Analytics Intern', company: 'SkillScoop | Remote',
      details: [
        'Researched and analysed 125+ local businesses across Kanpur, Noida, and Ghaziabad to identify digital gaps and built a structured lead intelligence database',
        'Developed an analytical dashboard with charts, priority breakdowns, and actionable insights using Excel',
        'Applied gap identification logic to classify businesses by service need, flagging 26 high-priority leads and delivering 5 data-backed recommendations to the sales team',
        'Executed end-to-end sales outreach based on research findings, successfully converting leads into clients and contributing to revenue generation targets',
      ],
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">MY JOURNEY</span>
          <h2 className="section-title">EXPERIENCE</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <div className={`timeline-badge ${exp.badge}`}>{exp.badgeText}</div>
                <h3>{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-details">
                  {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
