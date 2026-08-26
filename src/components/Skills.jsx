import { useEffect, useRef } from 'react'

export default function Skills() {
  const progressRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.progress-fill').forEach((fill) => {
          setTimeout(() => { fill.style.width = fill.dataset.width + '%' }, 100)
        })
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    if (progressRef.current) observer.observe(progressRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    { icon: 'fa-laptop-code', title: 'TOOLS & PLATFORMS', desc: 'MS-Excel, PowerPoint, Google Sheets, Canva, Tableau, IBM Cognos Analytics, IBM SPSS Modeler, Power BI, Apache Hadoop, Looker Studio' },
    { icon: 'fa-database', title: 'CRM & DATA', desc: 'Data Validation, Reconciliation, Reporting, Exploratory Data Analysis, Data Mining, Dashboarding' },
    { icon: 'fa-users-gear', title: 'POWER SKILLS', desc: 'Leadership, Adaptability, Problem Solving, Decision Making, Teamwork' },
  ]

  const skills = [
    { name: 'MS-EXCEL', value: 95, logo: 'https://cdn.simpleicons.org/microsoftexcel' },
    { name: 'POWER BI', value: 90, logo: 'https://cdn.simpleicons.org/powerbi' },
    { name: 'TABLEAU', value: 85, logo: 'https://cdn.simpleicons.org/tableau' },
    { name: 'GOOGLE SHEETS', value: 90, logo: 'https://cdn.simpleicons.org/googlesheets' },
    { name: 'IBM COGNOS', value: 80, logo: 'https://cdn.simpleicons.org/ibm' },
    { name: 'LOOKER STUDIO', value: 75, logo: 'https://cdn.simpleicons.org/looker' },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="skills-grid">
          <div className="showcase-column">
            <h2 className="section-title">PROJECT SHOWCASE</h2>
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-app-content">
                  <div className="app-header-img"></div>
                  <div className="app-overlay"><h3>DISCOVER</h3><h2>AMAZING PLACES</h2></div>
                  <div className="app-bottom">
                    <div className="app-tabs">
                      <span className="app-tab active">Popular</span>
                      <span className="app-tab">Trending</span>
                      <span className="app-tab">New</span>
                    </div>
                    <div className="app-cards">
                      <div className="app-mini-card"><div className="mini-card-img" style={{ background: 'linear-gradient(135deg, #1a5276, #2e86c1)' }}></div><span>Popular Destinations</span></div>
                      <div className="app-mini-card"><div className="mini-card-img" style={{ background: 'linear-gradient(135deg, #c0392b, #e74c3c)' }}></div><span>Top Adventures</span></div>
                    </div>
                    <div className="app-stats-row">
                      <div className="app-stat"><span className="app-stat-num">2,456</span><span className="app-stat-label">Reviews</span></div>
                      <div className="app-stat"><span className="app-stat-num">4.8</span><span className="app-stat-label">Rating</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-column">
            <h2 className="section-title">SKILLS & SERVICES</h2>
            <div className="services-list">
              {services.map((s, i) => (
                <div className="service-item" key={i}>
                  <div className="service-icon"><i className={`fas ${s.icon}`}></i></div>
                  <div className="service-info"><h4>{s.title}</h4><p>{s.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="progress-bars" ref={progressRef}>
              {skills.map((s, i) => (
                <div className="progress-item" key={i}>
                  <div className="progress-header">
                    <span className="progress-label" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src={s.logo} alt={s.name} style={{ width: '20px', height: '20px' }} />
                      {s.name}
                    </span>
                    <span className="progress-value">{s.value}%</span>
                  </div>
                  <div className="progress-track"><div className="progress-fill" data-width={s.value}></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
