import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

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
        <div>Nikhil Nishad · © {new Date().getFullYear()}</div>
        <div>Powered by Nikhil Nishad</div>
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
