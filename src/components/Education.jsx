export default function Education() {
  const education = [
    { icon: 'fa-user-graduate', date: 'Aug 2025 \u2013 May 2027', degree: 'Master of Business Administration', major: 'Business Analytics & Finance', institution: 'Lovely Professional University (LPU)', location: 'Phagwara, Punjab', status: 'pursuing', statusText: 'Pursuing', instIcon: 'fa-university' },
    { icon: 'fa-graduation-cap', date: 'Jul 2020 \u2013 May 2023', degree: 'Bachelor of Business Administration', major: 'Finance', institution: 'Sarala Birla University (SBU)', location: 'Ranchi, Jharkhand', status: 'completed', statusText: 'Completed', instIcon: 'fa-university' },
    { icon: 'fa-school', date: 'Jun 2018 \u2013 May 2020', degree: 'Intermediate', major: 'Science', institution: 'Marwari +2 High School', location: 'Ranchi, Jharkhand', status: 'completed', statusText: 'Completed', instIcon: 'fa-school' },
  ]

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">ACADEMIC BACKGROUND</span>
          <h2 className="section-title">EDUCATION</h2>
        </div>
        <div className="education-grid">
          {education.map((edu, i) => (
            <div className="education-card" key={i}>
              <div className="edu-icon-wrapper">
                <div className="edu-icon"><i className={`fas ${edu.icon}`}></i></div>
              </div>
              <div className="edu-date">{edu.date}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-major">{edu.major}</p>
              <div className="edu-divider"></div>
              <p className="edu-institution"><i className={`fas ${edu.instIcon}`}></i> {edu.institution}</p>
              <p className="edu-location"><i className="fas fa-map-marker-alt"></i> {edu.location}</p>
              <div className={`edu-badge ${edu.status}`}>{edu.statusText}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
