import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Journey() {
  const { journey } = portfolioData;
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rvElements = container.querySelectorAll('.rv');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    rvElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" ref={containerRef}>
      <div className="wrap">
        <div className="sec-head">
          <div className="tag rv">Career Timeline</div>
          <h2 className="rv">
            Experience &amp; <span className="grad">Milestones</span>
          </h2>
          <p className="journey-sub rv">
            A chronological timeline of production engineering roles and academic achievements.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track" />
          {journey.map((item, idx) => (
            <div key={idx} className="timeline-item rv">
              {/* Glowing Timeline Marker */}
              <div className="timeline-marker">
                <div
                  className="marker-dot"
                  style={{ '--dot-c': item.badgeColor || '#38bdf8' }}
                />
              </div>

              {/* Enterprise Glass Card */}
              <div className="timeline-card glass">
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-type">{item.type}</span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-org">
                      🏢 <span>{item.organization}</span>
                    </div>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{item.period}</span>
                    <span
                      className="timeline-badge"
                      style={{
                        color: item.badgeColor,
                        borderColor: `${item.badgeColor}40`,
                        background: `${item.badgeColor}15`
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.skills && (
                  <div className="timeline-skills">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="timeline-skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
