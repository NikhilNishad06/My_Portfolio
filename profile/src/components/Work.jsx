import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Work() {
  const { projects } = portfolioData;
  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const projectCardsRef = useRef([]);
  const isHoveredRef = useRef(false);

  // Duplicate projects for infinite seamless loop
  const infiniteProjects = [...projects, ...projects];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reveal all .rv elements in Work section
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
      el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    };

    const handleLeave = (el) => {
      el.style.transform = '';
    };

    const listeners = [];
    const canHover =
      window.matchMedia('(hover:hover)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    projectCardsRef.current.forEach((el) => {
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
  }, [projects]);

  const scroll = (direction) => {
    if (!scrollTrackRef.current) return;
    const offset = direction === 'left' ? -340 : 340;
    scrollTrackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="work" ref={containerRef}>
      <div className="wrap">
        <div className="sec-head work-header">
          <div>
            <div className="tag rv">Enterprise Systems</div>
            <h2 className="rv">
              Selected <span className="grad">Work & Portals</span>
            </h2>
            <p className="work-sub rv">
              Scalable enterprise systems engineered with MERN stack — automatically scrolling (hover to inspect).
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="projs-track-wrapper">
        <div className="projs projs-marquee">
          {infiniteProjects.map((proj, idx) => (
            <article
              key={`${proj.id}-${idx}`}
              className="proj glass rv in"
              style={{ '--c': proj.color }}
              ref={(el) => (projectCardsRef.current[idx] = el)}
            >
              <div className="pl" />
              <div className="proj-top">
                <small>{proj.id}</small>
                <div className="cat">{proj.category}</div>
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="note">{proj.note}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
