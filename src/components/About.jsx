export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">GET TO KNOW ME</span>
          <h2 className="section-title">ABOUT ME</h2>
        </div>
        <div className="about-grid">
          <div className="about-text-content">
            <p className="about-lead">I'm a passionate <strong>Business Analytics Professional</strong> with expertise in transforming complex data into actionable business insights.</p>
            <p>With a strong foundation in data analysis, visualization, and predictive modeling, I help organizations make data-driven decisions that improve efficiency and drive growth. My approach combines technical expertise with business acumen to deliver solutions that create real impact.</p>
            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-map-marker-alt"></i>
                <div><h4>Location</h4><p>Bhagalpur, Bihar, India</p></div>
              </div>
              <div className="highlight-item">
                <i className="fas fa-language"></i>
                <div><h4>Languages</h4><p>English, Hindi</p></div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <div className="about-card-icon"><i className="fas fa-database"></i></div>
              <h3>Data-Driven Mindset</h3>
              <p>Every decision backed by data, every insight validated through analysis</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><i className="fas fa-lightbulb"></i></div>
              <h3>Business First</h3>
              <p>Translating technical findings into strategies that drive business value</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><i className="fas fa-rocket"></i></div>
              <h3>Continuous Growth</h3>
              <p>Always learning new tools, techniques, and methodologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
