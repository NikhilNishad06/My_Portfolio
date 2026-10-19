import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const ROLES = [
  'Full Stack Developer',
  'UI/UX Developer',
  'MERN Stack Engineer',
  'Frontend & Creative Dev'
];

export default function Hero() {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-copy">
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="status-indicator">
              <span className="status-ping" />
              <span className="status-dot" />
            </span>
            <span className="status-text">{personal.tagline}</span>
          </div>

          {/* Intro Eyebrow with dynamic animated role */}
          <div className="hero-intro-header">
            <span className="hero-intro-label">Hello, I am</span>
            <span className="hero-intro-name">{personal.name}</span>
            <span className="hero-role-divider">/</span>
            <span className="hero-dynamic-role" aria-live="polite">
              <span className="role-text">{displayedText}</span>
              <span className="cursor-blink" />
            </span>
          </div>

          {/* Big impactful heading */}
          <h1 className="hero-title">
            {personal.headingPrefix}
            <span className="grad">{personal.headingHighlight}</span>
          </h1>

          {/* Concise, professional summary */}
          <p className="hero-summary-desc">{personal.heroDescription}</p>

          {/* Clean metadata badge with minimalist SVG icons (no emojis) */}
          <div className="hero-stats-strip">
            <div className="strip-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Bhilai, India</span>
            </div>
            <span className="strip-separator" />
            <div className="strip-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span> Full Stack Developer</span>
            </div>
            <span className="strip-separator" />
            <div className="strip-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span>10+ Enterprise Deployments</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="btns hero-actions">
            <a href="#work" className="btn solid btn-glow">
              <span>View Projects</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="/Nikhil_Nishad_Resume.pdf"
              download="Nikhil_Nishad_Resume.pdf"
              className="btn btn-outline-cyber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hint">
        SCROLL TO EXPLORE<b />
      </div>
    </section>
  );
}
