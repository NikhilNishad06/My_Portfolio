import { useState, useEffect } from 'react';
import heartImg from '../assets/heart.png';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth progress counter up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate near end
        const increment = prev < 70 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 700);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div className={`arc-preloader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="arc-reactor-wrap">
        {/* Centered Disc System */}
        <div className="arc-center-disc">
          {/* Outer Pulsing Glow Rings */}
          <div className="arc-shockwave" />
          <div className="arc-shockwave shockwave-delay" />

          {/* Center Rotating HUD Frame */}
          <div className="arc-ring-outer" />
          <div className="arc-ring-inner" />

          {/* Arc Reactor Heart Image (Pure Circle) */}
          <div className="arc-heart-container">
            <img
              src={heartImg}
              alt="Arc Reactor Heart"
              className="arc-heart-img"
            />
          </div>
        </div>

        {/* Status Text & Progress Counter */}
        <div className="arc-meta">
          <div className="arc-title">INITIALIZING SYSTEM</div>
          <div className="arc-counter-box">
            <span className="arc-percent">{progress}%</span>
          </div>
          <div className="arc-progress-bar">
            <div
              className="arc-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="arc-sub">NIKHIL NISHAD // MERN CORE</div>
        </div>
      </div>
    </div>
  );
}
