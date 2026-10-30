import { useState, useEffect } from 'react';
import rocketLogo from '../assets/rocket2-removebg-preview.png';
import MiniGameModal from './MiniGameModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsScrolled(window.scrollY > 30);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={isScrolled ? 's' : ''} aria-label="Main">
        <a href="#top" className="logo" aria-label="Nikhil Nishad home">
          <img src={rocketLogo} alt="Rocket Logo" className="nav-rocket-icon" />
          <span>Nikhil Nishad</span>
        </a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#journey">Journey</a>
          <a href="#contact" className="btn">Let's Work Together</a>
          <button
            type="button"
            className="btn-game-nav"
            onClick={() => setIsGameOpen(true)}
            aria-label="Play Arcade Games"
            title="Play Fun Arcade Games!"
          >
            <span className="game-icon-bounce"></span>
            <span>Play Game</span>
            <span className="game-tag-pulse">FREE</span>
          </button>
        </div>
        <button
          className={`burger ${menuOpen ? 'o' : ''}`}
          id="burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i />
          <i />
        </button>
      </nav>

      <div id="menu" className={menuOpen ? 'o' : ''} aria-hidden={!menuOpen}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#journey" onClick={closeMenu}>Journey</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <button
          type="button"
          className="btn-game-nav"
          style={{ marginTop: '12px', justifyContent: 'center' }}
          onClick={() => {
            closeMenu();
            setIsGameOpen(true);
          }}
        >
          <span className="game-icon-bounce">🎮</span>
          <span>Play Game (Arcade)</span>
          <span className="game-tag-pulse">FREE</span>
        </button>
      </div>

      <MiniGameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
}
