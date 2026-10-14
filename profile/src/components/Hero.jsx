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
            <a href="#contact" className="btn">Let's Work Together</a>
          </div>
        </div>
      </div>
      <div className="hint">
        SCROLL TO EXPLORE<b />
      </div>
    </section>
  );
}
