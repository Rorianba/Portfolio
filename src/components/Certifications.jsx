export default function Certifications() {
  const certs = [
    { name: 'IBM SPSS Modeler Predictive Analytics (Advanced)', issuer: 'IBM', date: 'Apr 2026', badge: 'Advanced', proof: '/certificates/cert1.pdf' },
    { name: 'IBM Data Visualization (Cognos Dashboard)', issuer: 'IBM', date: 'Apr 2026', badge: 'Professional', proof: '/certificates/cert2.pdf' },
    { name: 'Business Intelligence Certification', issuer: 'IBM Skills Network', date: 'Apr 2026', badge: 'Professional', proof: '/certificates/cert3.pdf' },
    { name: 'IBM Cognos Analytics V11.1.x Reporting Essentials', issuer: 'IBM', date: 'Feb 2026', badge: 'Essentials', proof: '/certificates/cert4.pdf' },
  ]

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <div className="section-header centered">
          <span className="section-tag">MY CREDENTIALS</span>
          <h2 className="section-title">CERTIFICATIONS</h2>
        </div>
        <div className="certifications-grid">
          {certs.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-ribbon"></div>
              <div className="cert-icon"><i className="fas fa-award"></i></div>
              <h3 className="cert-name">{c.name}</h3>
              <div className="cert-divider"></div>
              <p className="cert-issuer"><i className="fab fa-ibm"></i> {c.issuer}</p>
              <div className="cert-date"><i className="fas fa-calendar-check"></i> {c.date}</div>
              <div className="cert-badge">{c.badge}</div>
              {c.proof && (
                <a href={c.proof} target="_blank" rel="noopener noreferrer" className="btn-view-proof">
                  View Credential <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
