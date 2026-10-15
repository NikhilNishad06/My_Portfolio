import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import rocketImg from '../assets/rocket2-removebg-preview.png';

export default function Footer() {
  const { contacts } = portfolioData;
  const finalRef = useRef(null);

  useEffect(() => {
    const el = finalRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.rv').forEach((node) => node.classList.add('in'));
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="final" ref={finalRef}>
        {/* Animated Professional Cosmic Rocket Trajectory */}
        <div className="flying-rocket-track" aria-hidden="true">
          {/* Subtle curved orbital flight path line */}
          <svg className="rocket-orbit-path-svg" viewBox="0 0 1400 300" preserveAspectRatio="none">
            <path
              d="M -100 240 Q 350 -40, 700 180 T 1500 60"
              fill="none"
              stroke="url(#rocketOrbitGrad)"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.35"
            />
            <defs>
              <linearGradient id="rocketOrbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main Flying Rocket Actor */}
          <div className="flying-rocket">
            {/* Speed Hyperspace Streaks */}
            <div className="rocket-speed-streaks">
              <span className="streak str1" />
              <span className="streak str2" />
              <span className="streak str3" />
            </div>

            <div className="rocket-body-wrapper">
              <img src={rocketImg} alt="Flying Rocket" className="final-rocket-img" />
              {/* Cockpit light reflection */}
              <span className="cockpit-lens-flare" />
            </div>

            {/* High-Tech Plasma Thruster Engine */}
            <div className="rocket-engine-exhaust">
              <span className="flame-core" />
              <span className="flame-inner" />
              <span className="flame-glow" />
              <span className="flame-shock-diamond d1" />
              <span className="flame-shock-diamond d2" />

              {/* Cosmic Stardust particles */}
              <span className="cosmic-spark sp1" />
              <span className="cosmic-spark sp2" />
              <span className="cosmic-spark sp3" />
              <span className="cosmic-spark sp4" />
              <span className="smoke-trail s1" />
              <span className="smoke-trail s2" />
              <span className="smoke-trail s3" />
            </div>
          </div>
        </div>

        <div className="wrap">
          <h2 className="rv">
            Your next product could <span className="grad">ship like this.</span>
          </h2>
          <p className="rv">Let's make it happen.</p>
          <a href="#contact" className="btn solid rv">
            Start a Project
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-powered">Powered by Nikhil Nishad</div>
        <div className="r">
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={contacts.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
