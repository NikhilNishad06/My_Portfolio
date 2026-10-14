import { useState, useEffect } from 'react';
import rocketImg from '../assets/rocket2-removebg-preview.png';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset launch state after reaching top
    setTimeout(() => {
      setIsLaunching(false);
    }, 1000);
  };

  return (
    <button
      className={`scroll-to-top-btn ${visible ? 'show' : ''} ${isLaunching ? 'launching' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to Top"
    >
      <div className="rocket-flame-glow" />
      <img src={rocketImg} alt="Rocket" className="rocket-icon-img" />
      <span className="rocket-tooltip">Top</span>
    </button>
  );
}
