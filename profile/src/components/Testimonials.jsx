import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const testiRef = useRef(null);

  useEffect(() => {
    const el = testiRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: 'center' }}>
          <div className="tag rv" style={{ justifyContent: 'center' }}>
            Kind words
          </div>
          <h2 className="rv">
            What clients <span className="grad">say</span>
          </h2>
        </div>
        <div className="testi glass rv" ref={testiRef}>
          <q>Your first real testimonial will live here.</q>
          <cite>Client name — Role / Company</cite>
        </div>
      </div>
    </section>
  );
}
