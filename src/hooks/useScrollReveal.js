import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.stat-card, .project-card, .service-item, .process-step, .about-card, .highlight-item, .timeline-item, .contact-detail-item, .education-card, .cert-card'
    )
    revealElements.forEach((el) => el.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), index * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
    )
    revealElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
