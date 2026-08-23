import { useEffect, useRef } from 'react'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  useEffect(() => {
    const t1 = setTimeout(() => {
      if (line1Ref.current) {
        line1Ref.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        line1Ref.current.style.opacity = '1'
        line1Ref.current.style.transform = 'translateY(0)'
      }
    }, 300)
    const t2 = setTimeout(() => {
      if (line2Ref.current) {
        line2Ref.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        line2Ref.current.style.opacity = '1'
        line2Ref.current.style.transform = 'translateY(0)'
      }
    }, 600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-decoration-circle"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              <span className="hero-line-1" ref={line1Ref} style={{ opacity: 0, transform: 'translateY(20px)' }}>DATA DRIVEN.</span>
              <span className="hero-line-2" ref={line2Ref} style={{ opacity: 0, transform: 'translateY(20px)' }}>BUSINESS FOCUSED.</span>
            </h1>
            <p className="hero-subtitle">Turning data, finance and operations into insights that drive business results.</p>
          </div>
          <div className="stats-grid">
            <StatCard icon="fa-briefcase" number={22} label="Months" desc="Work Experience at Genpact" />
            <StatCard icon="fa-chart-line" number={30} suffix="+" label="Requests/Day" desc="Processed with Accuracy" />
            <StatCard icon="fa-arrow-trend-up" number={15} suffix="%" label="Efficiency Improvement" desc="Through Automation & Optimization" />
            <StatCard icon="fa-trophy" text="#1/22" label="Top Performer" desc="Ranked #1 among 22 team members" />
          </div>
          <div className="contact-bar">
            <a href="tel:+918271064734" className="contact-item"><i className="fas fa-phone"></i><span>+91 8271064734</span></a>
            <a href="mailto:rohan.s2002ingh@gmail.com" className="contact-item"><i className="fas fa-envelope"></i><span>rohan.s2002ingh@gmail.com</span></a>
            <a href="https://linkedin.com/in/rohankumarsingh01012003" target="_blank" rel="noopener noreferrer" className="contact-item"><i className="fab fa-linkedin"></i><span>linkedin.com/in/rohankumarsingh01012003</span></a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="hero-image-bg"></div>
            <div className="hero-profile-photo">
              <img src={profileImg} alt="Rohan Kumar Singh" />
            </div>
            <div className="hero-accent-arc"></div>
          </div>
          <div className="hero-cursive-text">
            <span className="cursive-text">Turning Ideas</span>
            <span className="cursive-text">Into Impact</span>
            <div className="cursive-arrow">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5 35 C15 25, 25 15, 35 5" stroke="#e8491d" strokeWidth="2" fill="none" />
                <path d="M25 5 L35 5 L35 15" stroke="#e8491d" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, number, suffix, text, label, desc }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!number) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0
        const increment = number / (2000 / 16)
        const update = () => {
          current += increment
          if (current < number) {
            if (ref.current) ref.current.textContent = Math.floor(current)
            requestAnimationFrame(update)
          } else {
            if (ref.current) ref.current.textContent = number
          }
        }
        update()
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current.closest('.stat-card'))
    return () => observer.disconnect()
  }, [number])

  return (
    <div className="stat-card">
      <div className="stat-icon"><i className={`fas ${icon}`}></i></div>
      <div className="stat-info">
        {text ? (
          <span className="stat-number-text">{text}</span>
        ) : (
          <><span className="stat-number" ref={ref}>0</span>{suffix && <span className="stat-plus">{suffix}</span>}</>
        )}
        <span className="stat-label">{label}</span>
        <span className="stat-desc">{desc}</span>
      </div>
    </div>
  )
}
