import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Services() {
  const { services } = portfolioData;
  const containerRef = useRef(null);

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

    return () => rvObserver.disconnect();
  }, []);

  // Split services into Row 1 and Row 2, then duplicate for seamless loop
  const mid = Math.ceil(services.length / 2);
  const row1 = services.slice(0, mid);
  const row2 = services.slice(mid);

  const infiniteRow1 = [...row1, ...row1, ...row1];
  const infiniteRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="services" ref={containerRef}>
      <div className="wrap">
        <div className="sec-head">
          <div className="tag rv">Core Services</div>
          <h2 className="rv">
            Software that <span className="grad">runs your business.</span>
          </h2>
        </div>
      </div>

      <div className="services-marquee-container">
        {/* Row 1: Left to Right Marquee */}
        <div className="services-track-wrapper">
          <div className="services-marquee marquee-ltr">
            {infiniteRow1.map((item, idx) => (
              <div key={`r1-${idx}`} className="service-card glass">
                <div className="service-card-top">
                  <div className="service-orb" />
                  <span className="service-num">0{((idx % row1.length) + 1)}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="service-tech">{item.tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="services-track-wrapper">
          <div className="services-marquee marquee-rtl">
            {infiniteRow2.map((item, idx) => (
              <div key={`r2-${idx}`} className="service-card glass">
                <div className="service-card-top">
                  <div className="service-orb" />
                  <span className="service-num">0{((idx % row2.length) + mid + 1)}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="service-tech">{item.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
