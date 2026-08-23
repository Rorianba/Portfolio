export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-grid">
          <div className="cta-box">
            <h2>LET'S CREATE<br /><span className="cta-highlight">SOMETHING AMAZING!</span></h2>
            <p>I'm open to new opportunities, collaborations and challenges that create impact.</p>
            <a href="https://mail.google.com/mail/?view=cm&to=rohan.s2002ingh@gmail.com&su=Let's Connect - Portfolio Inquiry" className="btn-talk" target="_blank" rel="noopener noreferrer">
              LET'S TALK <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="contact-details">
            <h3>CONTACT ME</h3>
            <div className="contact-list">
              <div className="contact-detail-item"><i className="fas fa-envelope"></i><span>rohan.s2002ingh@gmail.com</span></div>
              <div className="contact-detail-item"><i className="fas fa-phone"></i><span>+91 8271064734</span></div>
              <div className="contact-detail-item"><i className="fas fa-location-dot"></i><span>Noida, Uttar Pradesh, India</span></div>
              <div className="contact-detail-item"><i className="fab fa-linkedin"></i><span>linkedin.com/in/rohankumarsingh01012003</span></div>
            </div>
          </div>
          <div className="social-section">
            <h3>LET'S CONNECT</h3>
            <div className="social-icons">
              <a href="https://linkedin.com/in/rohankumarsingh01012003" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-icon" aria-label="Behance"><i className="fab fa-behance"></i></a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="social-decoration-circle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
