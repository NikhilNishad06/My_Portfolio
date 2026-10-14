import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import myPic from '../assets/mypic.png';

export default function About() {
  const { personal, stats, education } = portfolioData;
  const containerRef = useRef(null);
  const statsRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reveal all .rv elements in About section
    const rvElements = container.querySelectorAll('.rv');
    const rvObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            rvObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    rvElements.forEach((el) => rvObserver.observe(el));

    // Stats Counter & Tilt
    const handleMove = (e, el) => {
      const b = el.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width - 0.5;
      const y = (e.clientY - b.top) / b.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
    };

    const handleLeave = (el) => {
      el.style.transform = '';
    };

    const listeners = [];
    const canHover =
      window.matchMedia('(hover:hover)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    statsRefs.current.forEach((el) => {
      if (!el) return;
      const counterEl = el.querySelector('[data-c]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            el.classList.add('in');
            observer.unobserve(el);

            if (counterEl) {
              const end = +counterEl.dataset.c;
              const d = +(counterEl.dataset.d || 0);
              const s = counterEl.dataset.s || '';
              const t0 = performance.now();
              const step = (t) => {
                const p = Math.min((t - t0) / 1800, 1);
                const v = end * (1 - Math.pow(1 - p, 3));
                counterEl.textContent = v.toFixed(d) + s;
                if (p < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(el);

      if (canHover) {
        const onMove = (e) => handleMove(e, el);
        const onLeave = () => handleLeave(el);
        el.addEventListener('pointermove', onMove);
        el.addEventListener('pointerleave', onLeave);
        listeners.push({ el, onMove, onLeave, observer });
      } else {
        listeners.push({ el, observer });
      }
    });

    return () => {
      rvObserver.disconnect();
      listeners.forEach(({ el, onMove, onLeave, observer }) => {
        if (observer) observer.disconnect();
        if (onMove) el.removeEventListener('pointermove', onMove);
        if (onLeave) el.removeEventListener('pointerleave', onLeave);
      });
    };
  }, []);

  return (
    <section id="about" ref={containerRef}>
      <div className="wrap">
        <div className="about-grid">
          {/* Left Column: Premium Photo Showcase Card */}
          <div className="about-photo-card glass rv">
            <div className="photo-frame">
              <img src={myPic} alt={personal.name} className="about-img" />
              <div className="photo-overlay" />
            </div>
            <div className="photo-badge">
              <span className="live-dot" />
              <div>
                <strong>{personal.name}</strong>
                <p>Full Stack MERN Developer</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Education & Stats */}
          <div className="about-content">
            <div className="tag rv">About Me</div>
            <h2 className="rv">
              Code that ships to <span className="grad">production.</span>
            </h2>
            <p className="lead rv">{personal.aboutLead}</p>
            <p className="sub rv">{personal.aboutSub}</p>

            <div className="about-resume-cta rv">
              <a
                href="/Nikhil_Nishad_Resume.pdf"
                download="Nikhil_Nishad_Resume.pdf"
                className="btn solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume (PDF)
              </a>
            </div>

            {/* Education Highlight Cards */}
            {education && (
              <div className="education-cards rv">
                <h3 className="edu-heading">
                  <span className="edu-icon">🎓</span> Education & Certifications
                </h3>
                <div className="edu-grid">
                  {education.map((edu, idx) => (
                    <div key={idx} className="edu-card glass">
                      <div className="edu-header">
                        <h4>{edu.degree}</h4>
                        <span className="edu-period">{edu.period}</span>
                      </div>
                      <p className="edu-inst">{edu.institution}</p>
                      <div className="edu-footer">
                        <span className="edu-score">{edu.score}</span>
                        <span className="edu-badge">{edu.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Metrics / Stats */}
            <div className="stats">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="stat glass rv"
                  ref={(el) => (statsRefs.current[idx] = el)}
                >
                  <b
                    className="grad"
                    data-c={stat.value}
                    data-d={stat.decimals || 0}
                    data-s={stat.suffix || ''}
                  >
                    0
                  </b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
