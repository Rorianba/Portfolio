export default function Projects() {
  const projects = [
    { num: '01', name: 'British Airways', type: 'Data Science Job Simulation', imgClass: 'project-img-1', icon: 'fa-plane', imgText: 'British Airways', desc: 'Predictive modeling to understand customer buying behaviour and modeling lounge eligibility.', tags: ['Python', 'Machine Learning', 'Data Analysis'] },
    { num: '02', name: 'Deloitte', type: 'Data Analytics Job Simulation', imgClass: 'project-img-2', deloitte: true, desc: 'Forensic technology and data analytics including data cleaning, EDA, hypothesis testing and data modelling.', tags: ['Excel', 'SQL', 'Data Visualization'], featured: true },
    { num: '03', name: 'Power BI Project', type: 'Business Intelligence Dashboard', imgClass: 'project-img-3', icon: 'fa-chart-bar', imgText: 'Power BI Dashboard', desc: 'Interactive Power BI dashboard for business insights with KPIs, trends, and data-driven decision support.', tags: ['Power BI', 'DAX', 'Data Modeling'] },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="projects-header">
          <div>
            <span className="section-tag">MY WORK</span>
            <h2 className="section-title">FEATURED PROJECTS</h2>
          </div>
          <a href="#skills" className="view-all-link" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }}>VIEW ALL PROJECTS <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`project-card ${p.featured ? 'featured' : ''}`} key={i}>
              <div className="project-number">{p.num}</div>
              <div className="project-card-header">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-type">{p.type}</p>
              </div>
              <div className={`project-image ${p.imgClass}`}>
                <div className="project-img-content">
                  {p.deloitte ? <span className="deloitte-text">Deloitte.</span> : <><i className={`fas ${p.icon}`}></i><span>{p.imgText}</span></>}
                </div>
              </div>
              <p className="project-description">{p.desc}</p>
              <div className="project-tags">{p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
