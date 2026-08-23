import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const handleDownload = () => {
    setDownloading(true)
    setTimeout(() => setDownloading(false), 3500)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          <div className="logo-circle">RKS</div>
          <div className="logo-text">
            <span className="logo-name">ROHAN KUMAR SINGH</span>
            <span className="logo-title">Business Analytics Professional</span>
          </div>
        </a>
        <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Rohan_Kumar_Singh_CV.pdf"
          className="btn-download"
          download="Rohan_Kumar_Singh_CV.pdf"
          onClick={handleDownload}
        >
          <span>{downloading ? 'DOWNLOADING...' : 'DOWNLOAD CV'}</span>
          <i className={`fas ${downloading ? 'fa-spinner fa-spin' : 'fa-download'}`}></i>
        </a>
        <button
          className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
