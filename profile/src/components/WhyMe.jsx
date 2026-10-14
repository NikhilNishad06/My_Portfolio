import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function WhyMe() {
  const { whyMe } = portfolioData;
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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

    const handleMove = (e, el) => {
      const b = el.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width - 0.5;
      const y = (e.clientY - b.top) / b.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-5px)`;
    };

    const handleLeave = (el) => {
      el.style.transform = '';
    };

    const listeners = [];
    const canHover =
      window.matchMedia('(hover:hover)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    cardsRef.current.forEach((el) => {
      if (!el) return;

      if (canHover) {
        const onMove = (e) => handleMove(e, el);
        const onLeave = () => handleLeave(el);
        el.addEventListener('pointermove', onMove);
        el.addEventListener('pointerleave', onLeave);
        listeners.push({ el, onMove, onLeave });
      }
    });

    return () => {
      rvObserver.disconnect();
      listeners.forEach(({ el, onMove, onLeave }) => {
        if (onMove) el.removeEventListener('pointermove', onMove);
        if (onLeave) el.removeEventListener('pointerleave', onLeave);
      });
    };
  }, []);

  return (
    <section id="why" ref={containerRef}>
      <div className="wrap">
        <div className="sec-head">
          <div className="tag rv">Why Work With Me</div>
          <h2 className="rv">
            Built to ship, <span className="grad">built to last.</span>
          </h2>
          <p className="why-sub rv">
            Proven engineering principles delivering reliability, speed, and business value.
          </p>
        </div>

        <div className="why-grid">
          {whyMe.map((item, idx) => (
            <div
              key={idx}
              className="why-card glass rv"
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <div className="why-card-top">
                <span className="why-icon-badge">{item.icon}</span>
                <span className="why-tag-pill">{item.tag}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
