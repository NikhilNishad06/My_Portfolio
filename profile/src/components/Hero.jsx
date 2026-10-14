import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-copy">
          <div className="pill">
            <i />
            {personal.tagline}
          </div>
          <h1>
            {personal.headingPrefix}
            <span className="grad">{personal.headingHighlight}</span>
          </h1>
          <p>{personal.heroDescription}</p>
          <div className="btns">
            <a href="#work" className="btn solid">View My Work</a>
            <a
              href="/Nikhil_Nishad_Resume.pdf"
              download="Nikhil_Nishad_Resume.pdf"
              className="btn btn-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
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
