import React, { useState, useEffect, useRef } from 'react';

export default function MiniGameModal({ isOpen, onClose }) {
  const [selectedGame, setSelectedGame] = useState('space'); // 'space' | 'flappy' | 'memory'
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('portfolio_game_highscore') || '0', 10);
  });

  if (!isOpen) return null;

  return (
    <div className="game-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="game-modal-container compact-mode" onClick={(e) => e.stopPropagation()}>
        {/* Compact & Clean Single Header Bar */}
        <div className="game-modal-header-compact">
          <div className="game-header-brand">
            <span className="game-header-icon">🎮</span>
            <div className="game-header-meta">
              <h3>Gameing Hub</h3>
              <span className="free-badge-sub">FREE PLAY</span>
            </div>
          </div>

          {/* Centered Switch Tabs */}
          <div className="game-tabs-compact">
            <button
              className={`game-tab-pill ${selectedGame === 'space' ? 'active' : ''}`}
              onClick={() => setSelectedGame('space')}
            >
              🚀 Space Shooter
            </button>
            <button
              className={`game-tab-pill ${selectedGame === 'flappy' ? 'active' : ''}`}
              onClick={() => setSelectedGame('flappy')}
            >
              🛸 Astro Flap
            </button>
            <button
              className={`game-tab-pill ${selectedGame === 'memory' ? 'active' : ''}`}
              onClick={() => setSelectedGame('memory')}
            >
              🧠 Tech Memory
            </button>
          </div>

          {/* Close button */}
          <button className="game-close-circle" onClick={onClose} aria-label="Close Game" title="Close [Esc]">
            ✕
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="game-modal-content-compact">
          {selectedGame === 'space' && (
            <SpaceDefenderGame highScore={highScore} setHighScore={setHighScore} />
          )}
          {selectedGame === 'flappy' && (
            <AstroFlapGame highScore={highScore} setHighScore={setHighScore} />
          )}
          {selectedGame === 'memory' && (
            <TechMemoryGame />
          )}
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   GAME 1: SPACE DEFENDER (Height reduced to 300px)
   ======================================================== */
function SpaceDefenderGame({ highScore, setHighScore }) {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('ready'); // 'ready', 'playing', 'gameover'
  const [score, setScore] = useState(0);

  const stateRef = useRef({
    score: 0,
    player: { x: 320, y: 265, width: 28, height: 22, speed: 6.5 },
    bullets: [],
    enemies: [],
    particles: [],
    stars: [],
    keys: {},
    lastEnemyTime: 0,
    animId: null,
    running: false
  });

  const updateHighScore = (finalScore) => {
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem('portfolio_game_highscore', finalScore.toString());
    }
  };

  const startGame = () => {
    const s = stateRef.current;
    s.score = 0;
    setScore(0);
    s.player.x = 320;
    s.player.y = 265;
    s.bullets = [];
    s.enemies = [];
    s.particles = [];
    s.running = true;
    s.lastEnemyTime = performance.now();
    setGameState('playing');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const s = stateRef.current;

    s.stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * 640,
      y: Math.random() * 310,
      size: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 1.5 + 0.5
    }));

    const handleKeyDown = (e) => {
      s.keys[e.key] = true;
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'Spacebar', 'Enter'].includes(e.key)) {
        e.preventDefault();
      }

      if (e.key === 'Enter') {
        if (!s.running) {
          startGame();
          return;
        }
      }

      if (e.key === ' ' || e.key === 'Spacebar') {
        if (s.running) {
          s.bullets.push({
            x: s.player.x,
            y: s.player.y - 12,
            radius: 3,
            speed: 8.5
          });
        } else {
          // Can also restart/start with Space
          startGame();
        }
      }
    };

    const handleKeyUp = (e) => {
      s.keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const loop = (time) => {
      // Cosmic background
      ctx.fillStyle = '#060a16';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Starfield
      ctx.fillStyle = '#9cc3ee';
      s.stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.globalAlpha = 0.4 + Math.random() * 0.4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      if (s.running) {
        if (s.keys['ArrowLeft'] || s.keys['a'] || s.keys['A']) {
          s.player.x -= s.player.speed;
        }
        if (s.keys['ArrowRight'] || s.keys['d'] || s.keys['D']) {
          s.player.x += s.player.speed;
        }
        s.player.x = Math.max(18, Math.min(canvas.width - 18, s.player.x));

        // Spawn enemies
        if (time - s.lastEnemyTime > Math.max(420, 1100 - s.score * 12)) {
          s.enemies.push({
            x: Math.random() * (canvas.width - 36) + 18,
            y: -15,
            radius: 12 + Math.random() * 5,
            speed: 1.8 + Math.random() * 1.6 + Math.min(s.score * 0.03, 2.5),
            color: ['#ff4d6d', '#f72585', '#a855f7', '#38bdf8'][Math.floor(Math.random() * 4)]
          });
          s.lastEnemyTime = time;
        }

        // Bullets update
        for (let i = s.bullets.length - 1; i >= 0; i--) {
          const b = s.bullets[i];
          b.y -= b.speed;
          if (b.y < -10) {
            s.bullets.splice(i, 1);
            continue;
          }

          // Enemy collision
          for (let j = s.enemies.length - 1; j >= 0; j--) {
            const en = s.enemies[j];
            const dist = Math.hypot(b.x - en.x, b.y - en.y);
            if (dist < en.radius + b.radius) {
              for (let p = 0; p < 10; p++) {
                s.particles.push({
                  x: en.x,
                  y: en.y,
                  vx: (Math.random() - 0.5) * 4.5,
                  vy: (Math.random() - 0.5) * 4.5,
                  life: 1,
                  color: en.color
                });
              }
              s.enemies.splice(j, 1);
              s.bullets.splice(i, 1);
              s.score += 10;
              setScore(s.score);
              break;
            }
          }
        }

        // Enemies update
        for (let j = s.enemies.length - 1; j >= 0; j--) {
          const en = s.enemies[j];
          en.y += en.speed;

          const distToPlayer = Math.hypot(en.x - s.player.x, en.y - s.player.y);
          if (distToPlayer < en.radius + 12) {
            s.running = false;
            setGameState('gameover');
            updateHighScore(s.score);
            break;
          }

          if (en.y > canvas.height + 25) {
            s.enemies.splice(j, 1);
          }
        }
      }

      // Draw bullets
      s.bullets.forEach((b) => {
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw enemies
      s.enemies.forEach((en) => {
        ctx.fillStyle = en.color;
        ctx.shadowColor = en.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(en.x, en.y, en.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(en.x, en.y, en.radius * 0.35, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particles
      for (let p = s.particles.length - 1; p >= 0; p--) {
        const pt = s.particles[p];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life -= 0.04;
        if (pt.life <= 0) {
          s.particles.splice(p, 1);
          continue;
        }
        ctx.globalAlpha = Math.max(0, pt.life);
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Draw player spaceship
      ctx.save();
      ctx.translate(s.player.x, s.player.y);

      if (s.running) {
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(-5, 10);
        ctx.lineTo(5, 10);
        ctx.lineTo(0, 17 + Math.random() * 5);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(0, -14);
      ctx.lineTo(14, 10);
      ctx.lineTo(5, 7);
      ctx.lineTo(-5, 7);
      ctx.lineTo(-14, 10);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.ellipse(0, -1, 3.5, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      s.animId = requestAnimationFrame(loop);
    };

    s.animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(s.animId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="compact-game-layout">
      {/* Integrated Mini Top Bar */}
      <div className="arcade-hud-compact">
        <div className="hud-cell">
          <span className="hud-cell-lbl">SCORE</span>
          <span className="hud-cell-val">{score}</span>
        </div>
        <div className="hud-cell-divider" />
        <div className="hud-cell">
          <span className="hud-cell-lbl">RECORD</span>
          <span className="hud-cell-val gold">{highScore}</span>
        </div>
        <div className="hud-controls-pill">
          <span>Move: <strong>[◀ ▶ / A D]</strong></span>
          <span>Fire: <strong>[SPACE]</strong></span>
        </div>
      </div>

      {/* Canvas */}
      <div className="canvas-wrapper-compact">
        <canvas ref={canvasRef} width={640} height={310} className="arcade-canvas" />

        {gameState === 'ready' && (
          <div className="game-overlay-screen-compact">
            <span className="overlay-badge-icon">🚀</span>
            <h4>Space Defender</h4>
            <p>Dodge rogue drones & shoot incoming meteors</p>
            <button className="game-action-btn" onClick={startGame}>
              START GAME
            </button>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="game-overlay-screen-compact gameover">
            <span className="overlay-badge-icon">💥</span>
            <h4 className="gameover-title">Game Over</h4>
            <p>Your Score: <strong className="text-cyan">{score}</strong></p>
            {score >= highScore && score > 0 && (
              <span className="new-record-pill">🏆 NEW BEST!</span>
            )}
            <button className="game-action-btn" onClick={startGame}>
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>

      {/* Mobile Touch Bar */}
      <div className="compact-touch-bar">
        <button
          className="touch-action-btn"
          onTouchStart={() => { stateRef.current.keys['ArrowLeft'] = true; }}
          onTouchEnd={() => { stateRef.current.keys['ArrowLeft'] = false; }}
          onMouseDown={() => { stateRef.current.keys['ArrowLeft'] = true; }}
          onMouseUp={() => { stateRef.current.keys['ArrowLeft'] = false; }}
        >
          ◀ Left
        </button>
        <button
          className="touch-action-btn fire-accent"
          onClick={() => {
            if (stateRef.current.running) {
              stateRef.current.bullets.push({
                x: stateRef.current.player.x,
                y: stateRef.current.player.y - 12,
                radius: 3,
                speed: 8.5
              });
            }
          }}
        >
          🔥 Fire Laser
        </button>
        <button
          className="touch-action-btn"
          onTouchStart={() => { stateRef.current.keys['ArrowRight'] = true; }}
          onTouchEnd={() => { stateRef.current.keys['ArrowRight'] = false; }}
          onMouseDown={() => { stateRef.current.keys['ArrowRight'] = true; }}
          onMouseUp={() => { stateRef.current.keys['ArrowRight'] = false; }}
        >
          Right ▶
        </button>
      </div>
    </div>
  );
}

/* ========================================================
   GAME 2: ASTRO FLAP (Height reduced to 300px)
   ======================================================== */
function AstroFlapGame({ highScore, setHighScore }) {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('ready');
  const [score, setScore] = useState(0);

  const stateRef = useRef({
    bird: { x: 70, y: 150, vy: 0, gravity: 0.38, jump: -6.2, radius: 12 },
    pipes: [],
    score: 0,
    running: false,
    lastPipe: 0,
    animId: null
  });

  const jump = () => {
    if (stateRef.current.running) {
      stateRef.current.bird.vy = stateRef.current.bird.jump;
    }
  };

  const start = () => {
    const s = stateRef.current;
    s.bird.y = 150;
    s.bird.vy = 0;
    s.pipes = [];
    s.score = 0;
    setScore(0);
    s.running = true;
    s.lastPipe = performance.now();
    setGameState('playing');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const s = stateRef.current;

    const handleKey = (e) => {
      if (['Space', 'Spacebar', ' ', 'ArrowUp', 'Enter'].includes(e.code) || [' ', 'ArrowUp', 'Enter'].includes(e.key)) {
        e.preventDefault();
        if (!s.running) {
          start();
        } else {
          jump();
        }
      }
    };
    window.addEventListener('keydown', handleKey);

    const loop = (time) => {
      ctx.fillStyle = '#080c18';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Neon grid lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      if (s.running) {
        s.bird.vy += s.bird.gravity;
        s.bird.y += s.bird.vy;

        if (s.bird.y > canvas.height - s.bird.radius || s.bird.y < s.bird.radius) {
          s.running = false;
          setGameState('gameover');
          if (s.score > highScore) {
            setHighScore(s.score);
            localStorage.setItem('portfolio_game_highscore', s.score.toString());
          }
        }

        if (time - s.lastPipe > 1650) {
          const gap = 100;
          const minPipe = 35;
          const topHeight = Math.random() * (canvas.height - gap - minPipe * 2) + minPipe;
          s.pipes.push({
            x: canvas.width,
            width: 44,
            top: topHeight,
            bottom: canvas.height - topHeight - gap,
            passed: false
          });
          s.lastPipe = time;
        }

        for (let i = s.pipes.length - 1; i >= 0; i--) {
          const p = s.pipes[i];
          p.x -= 2.5;

          if (!p.passed && p.x + p.width < s.bird.x) {
            p.passed = true;
            s.score += 1;
            setScore(s.score);
          }

          const bx = s.bird.x;
          const by = s.bird.y;
          const br = s.bird.radius;

          const hitsTop = bx + br > p.x && bx - br < p.x + p.width && by - br < p.top;
          const hitsBottom = bx + br > p.x && bx - br < p.x + p.width && by + br > canvas.height - p.bottom;

          if (hitsTop || hitsBottom) {
            s.running = false;
            setGameState('gameover');
            if (s.score > highScore) {
              setHighScore(s.score);
              localStorage.setItem('portfolio_game_highscore', s.score.toString());
            }
          }

          if (p.x + p.width < -10) {
            s.pipes.splice(i, 1);
          }
        }
      }

      // Draw Laser Gates
      s.pipes.forEach((p) => {
        const grad = ctx.createLinearGradient(p.x, 0, p.x + p.width, 0);
        grad.addColorStop(0, '#1e293b');
        grad.addColorStop(0.5, '#38bdf8');
        grad.addColorStop(1, '#0f172a');
        ctx.fillStyle = grad;

        // Top
        ctx.fillRect(p.x, 0, p.width, p.top);
        ctx.strokeStyle = '#00f2fe';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(p.x, 0, p.width, p.top);

        // Bottom
        const bY = canvas.height - p.bottom;
        ctx.fillRect(p.x, bY, p.width, p.bottom);
        ctx.strokeRect(p.x, bY, p.width, p.bottom);
      });

      // Draw UFO Bird
      ctx.save();
      ctx.translate(s.bird.x, s.bird.y);
      const angle = Math.min(Math.PI / 4, Math.max(-Math.PI / 4, s.bird.vy * 0.08));
      ctx.rotate(angle);

      ctx.fillStyle = '#6366f1';
      ctx.shadowColor = '#818cf8';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.ellipse(0, 0, 14, 6.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(0, -3.5, 5.5, Math.PI, 0);
      ctx.fill();

      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(-7, 1, 1.5, 0, Math.PI * 2);
      ctx.arc(0, 1.8, 1.5, 0, Math.PI * 2);
      ctx.arc(7, 1, 1.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      s.animId = requestAnimationFrame(loop);
    };

    s.animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(s.animId);
      window.removeEventListener('keydown', handleKey);
    };
  }, [gameState, highScore]);

  return (
    <div className="compact-game-layout">
      {/* Top HUD */}
      <div className="arcade-hud-compact">
        <div className="hud-cell">
          <span className="hud-cell-lbl">GATES PASSED</span>
          <span className="hud-cell-val">{score}</span>
        </div>
        <div className="hud-cell-divider" />
        <div className="hud-cell">
          <span className="hud-cell-lbl">RECORD</span>
          <span className="hud-cell-val gold">{highScore}</span>
        </div>
        <div className="hud-controls-pill">
          <span>Tap/Click Canvas or <strong>[SPACE]</strong> to Boost</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="canvas-wrapper-compact" onClick={gameState === 'playing' ? jump : undefined}>
        <canvas ref={canvasRef} width={640} height={310} className="arcade-canvas" />

        {gameState === 'ready' && (
          <div className="game-overlay-screen-compact">
            <span className="overlay-badge-icon">🛸</span>
            <h4>Astro Flap</h4>
            <p>Guide the UFO safely through energy beams</p>
            <button className="game-action-btn" onClick={start}>
              LAUNCH UFO
            </button>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="game-overlay-screen-compact gameover">
            <span className="overlay-badge-icon">⚡</span>
            <h4 className="gameover-title">Shield Depleted!</h4>
            <p>Gates Cleared: <strong className="text-cyan">{score}</strong></p>
            {score >= highScore && score > 0 && (
              <span className="new-record-pill">🏆 NEW RECORD!</span>
            )}
            <button className="game-action-btn" onClick={start}>
              RETRY JUMP [ENTER ↵]
            </button>
          </div>
        )}
      </div>

      {/* Single Tap Boost Bar */}
      <div className="compact-touch-bar single">
        <button className="touch-action-btn boost-accent" onClick={gameState === 'playing' ? jump : start}>
          🚀 Boost / Jump [Space]
        </button>
      </div>
    </div>
  );
}

/* ========================================================
   GAME 3: TECH MEMORY MATCH (Compact & Sleek)
   ======================================================== */
const TECH_ICONS = [
  { id: 1, label: 'React', icon: '⚛️' },
  { id: 2, label: 'Node', icon: '🟢' },
  { id: 3, label: 'Mongo', icon: '🍃' },
  { id: 4, label: 'Rocket', icon: '🚀' },
  { id: 5, label: 'Database', icon: '🗄️' },
  { id: 6, label: 'API', icon: '⚡' }
];

function TechMemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const initGame = () => {
    const deck = [...TECH_ICONS, ...TECH_ICONS]
      .sort(() => Math.random() - 0.5)
      .map((item, idx) => ({
        uniqueId: idx,
        id: item.id,
        label: item.label,
        icon: item.icon
      }));
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setWon(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (idx) => {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(cards[idx].id)) {
      return;
    }

    const nextFlipped = [...flipped, idx];
    setFlipped(nextFlipped);

    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstIdx, secondIdx] = nextFlipped;
      if (cards[firstIdx].id === cards[secondIdx].id) {
        setMatched((prev) => {
          const updated = [...prev, cards[firstIdx].id];
          if (updated.length === TECH_ICONS.length) {
            setWon(true);
          }
          return updated;
        });
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 750);
      }
    }
  };

  return (
    <div className="compact-memory-wrapper">
      <div className="arcade-hud-compact">
        <div className="hud-cell">
          <span className="hud-cell-lbl">MOVES</span>
          <span className="hud-cell-val">{moves}</span>
        </div>
        <div className="hud-cell-divider" />
        <div className="hud-cell">
          <span className="hud-cell-lbl">MATCHED</span>
          <span className="hud-cell-val">{matched.length} / {TECH_ICONS.length}</span>
        </div>
        <button className="hud-reset-mini-btn" onClick={initGame}>
          🔄 Reset
        </button>
      </div>

      {won ? (
        <div className="memory-compact-win">
          <span className="win-emoji-mini">🏆</span>
          <h4>Puzzle Solved!</h4>
          <p>Matched all cards in <strong>{moves}</strong> moves!</p>
          <button className="game-action-btn" onClick={initGame}>
            PLAY AGAIN
          </button>
        </div>
      ) : (
        <div className="memory-cards-grid-compact">
          {cards.map((card, idx) => {
            const isFlipped = flipped.includes(idx) || matched.includes(card.id);
            return (
              <div
                key={card.uniqueId}
                className={`compact-card ${isFlipped ? 'flipped' : ''} ${matched.includes(card.id) ? 'matched' : ''}`}
                onClick={() => handleCardClick(idx)}
              >
                <div className="compact-card-inner">
                  <div className="compact-card-front">
                    <span>⚡</span>
                  </div>
                  <div className="compact-card-back">
                    <span className="card-mini-emoji">{card.icon}</span>
                    <span className="card-mini-text">{card.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
