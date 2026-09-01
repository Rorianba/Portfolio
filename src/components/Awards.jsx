import React from 'react';

export default function Awards() {
  const awards = [
    {
      title: 'Top Performer (#1/22)',
      organization: 'Genpact India Services Pvt Ltd.',
      date: 'Consistent Performance',
      description: 'Ranked #1 among 22 team members for consistent performance over 1 year and 3 months.',
      icon: 'fa-trophy'
    },
    {
      title: 'Star Performer Quarterly Award',
      organization: 'Genpact India Services Pvt Ltd.',
      date: 'Jan 2024 \u2013 Mar 2024',
      description: 'Received the Star Performer Quarterly Award for exceeding productivity targets by handling 10 additional service requests per day.',
      icon: 'fa-star'
    },
    {
      title: 'Placement Coordinator',
      organization: 'Sarala Birla University (SBU)',
      date: 'Jun 2022 \u2013 May 2023',
      description: 'Appointed as the Placement Coordinator, facilitating placement drives and bridging the gap between students and recruiters.',
      icon: 'fa-user-tie'
    },
    {
      title: 'Cultural Head',
      organization: 'Sarala Birla University (SBU)',
      date: 'Oct 2022 \u2013 May 2023',
      description: 'Appointed as Cultural Head from the Commerce and Management Department, organizing and leading department cultural events.',
      icon: 'fa-masks-theater'
    }
  ];

  return (
    <section id="awards" className="awards-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">RECOGNITION</span>
          <h2 className="section-title">AWARDS & ACHIEVEMENTS</h2>
        </div>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div className="award-card" key={index}>
              <div className="award-icon-wrapper">
                <i className={`fas ${award.icon}`}></i>
              </div>
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <div className="award-meta">
                  <span className="award-org"><i className="fas fa-building"></i> {award.organization}</span>
                  <span className="award-date"><i className="fas fa-calendar-alt"></i> {award.date}</span>
                </div>
                <p className="award-desc">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
