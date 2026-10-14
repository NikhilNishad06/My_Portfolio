import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { portfolioData } from '../data/portfolioData';

function planetTex(hex) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 128;
  const x = c.getContext('2d');
  if (!x) return null;
  x.fillStyle = '#' + new THREE.Color(hex).getHexString();
  x.fillRect(0, 0, 256, 128);
  for (let i = 0; i < 240; i++) {
    x.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.13)';
    x.beginPath();
    x.ellipse(
      Math.random() * 256,
      Math.random() * 128,
      10 + Math.random() * 40,
      2 + Math.random() * 8,
      0,
      0,
      6.3
    );
    x.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Official clean SVG Devicon / Tech vector paths for top-tier professional look
const SVG_ICONS = {
  // Languages
  'JavaScript': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#f7df1e"><path d="M0 0h24v24H0V0z"/><path d="M12 18.2c-.4.7-1 1.1-1.8 1.1-.9 0-1.4-.5-1.7-1.3l2.2-1.3c.2.4.4.7.7.7.3 0 .5-.2.5-.6v-6.3h2.6v6.4c0 1.5-.7 2.3-2.5 2.3zm6.3-2.3c.5 0 .9-.3 1.1-.7l2.1 1.2c-.6 1.1-1.7 1.8-3.2 1.8-2.2 0-3.6-1.5-3.6-3.8 0-2.4 1.5-3.8 3.7-3.8 2.2 0 3.3 1.4 3.3 3.6v.7h-4.4c0 .7.5 1 1 1z" fill="#000"/></svg>
  ),
  'HTML5': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#e34f26"><path d="M1.5 0h21l-1.9 21.7L12 24l-8.6-2.3L1.5 0zm17 5H5.5l.4 4.5h11.8l-.5 5.5-4.2 1.2-4.2-1.2-.3-2.9H6.1l.5 4.8 5.4 1.5 5.4-1.5 1.1-11.9z"/></svg>
  ),
  'CSS3': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#1572b6"><path d="M1.5 0h21l-1.9 21.7L12 24l-8.6-2.3L1.5 0zm17 5H5.5l.4 4.5h11.8l-.5 5.5-4.2 1.2-4.2-1.2-.3-2.9H6.1l.5 4.8 5.4 1.5 5.4-1.5 1.1-11.9z"/></svg>
  ),
  // Frameworks
  'React.js': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#61dafb"><circle cx="12" cy="12" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="none" stroke="#61dafb" strokeWidth="1.5"/></svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#ffffff"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.6 17.5l-5.8-8.2V17h-2V7h2l5.8 8.3V7h2v10.5h-2z"/></svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#5fa04e"><path d="M12 2l10 5.8v11.6L12 22 2 16.4V7.8L12 2zm0 2.3L4 8.7v8.6l8 4.4 8-4.4V8.7l-8-4.4z"/></svg>
  ),
  'Express.js': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#ffffff"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V8h2v2z"/></svg>
  ),
  'NestJS': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#e0234e"><path d="M12 2L2 8l10 6 10-6-10-6zm0 10L4 7v10l8 5 8-5V7l-8 5z"/></svg>
  ),
  'Redux': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#764abc"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 13.8L12 13.9l-3.8 1.9.7-4.2-3.1-3 4.2-.6L12 4.2l1.9 3.8 4.2.6-3.1 3 .6 4.2z"/></svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#38bdf8"><path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-1.7 1.2.4 2 1.3 3 2.3 1.5 1.6 3.2 3.4 7 3.4 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 1.7-1.2-.4-2-1.3-3-2.3-1.5-1.6-3.2-3.4-7-3.4zm-6 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-1.7 1.2.4 2 1.3 3 2.3 1.5 1.6 3.2 3.4 7 3.4 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 1.7-1.2-.4-2-1.3-3-2.3-1.5-1.6-3.2-3.4-7-3.4z"/></svg>
  ),
  'Bootstrap': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#7952b3"><path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm4.5 4v12h4.5c2 0 3.5-1.2 3.5-3 0-1.2-.7-2.2-1.8-2.6 1-.5 1.5-1.3 1.5-2.4 0-1.7-1.3-2.8-3.3-2.8H8.5z"/></svg>
  ),
  'Material UI': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#007fff"><path d="M0 2.5l12 7 12-7L12 0 0 2.5zm12 9.5L0 5v14l12 7V12zm2 0v14l10-7V5l-10 7z"/></svg>
  ),
  'Framer Motion': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#f08"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
  ),
  'Spring Boot': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#6db33f"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 14.5l-4-4 1.4-1.4 2.6 2.6 6.6-6.6 1.4 1.4-8 8z"/></svg>
  ),
  // Databases
  'MongoDB': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#13aa52"><path d="M12 0C8 7 8 10 8 13.5c0 3.5 2 6.5 4 8.5 2-2 4-5 4-8.5C16 10 16 7 12 0z"/></svg>
  ),
  'MySQL': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#00758f"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
  ),
  'PostgreSQL': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#336791"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-3-3 1.4-1.4 1.6 1.6 5.6-5.6 1.4 1.4-7 7z"/></svg>
  ),
  'Supabase': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#3ecf8e"><path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z"/></svg>
  ),
  // Auth
  'JWT Auth': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#d63aff"><path d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1v2z"/></svg>
  ),
  'OAuth Integration': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#4285f4"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
  ),
  // Integrations & APIs
  'REST APIs': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#38bdf8"><path d="M14 12l-2-2-2 2 2 2 2-2zm6-6h-6v2h6v6h2V6a2 2 0 00-2-2zM4 18h6v-2H4v-6H2v6a2 2 0 002 2z"/></svg>
  ),
  'Payment Gateways': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#fbbf24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4H4V6h16v2zm0 10H4v-6h16v6z"/></svg>
  ),
  'Google Sheets API': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#0f9d58"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-3h6v3zm0-5H6v-3h6v3zm6 5h-4v-3h4v3zm0-5h-4v-3h4v3z"/></svg>
  ),
  'Email / SMS Services': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#60a5fa"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
  ),
  'Google Apps Script': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#ea4335"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z"/></svg>
  ),
  // Tools
  'Git': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#f05032"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
  ),
  'GitHub': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#ffffff"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>
  ),
  'Postman': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#ff6c37"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5" fill="none" stroke="#fff" strokeWidth="2"/></svg>
  ),
  'Netlify': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#00c7b7"><path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5L12 17.5 6.5 12 12 6.5z"/></svg>
  ),
  'Vercel': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#ffffff"><path d="M12 1L24 22H0L12 1z"/></svg>
  ),
  'Render': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#46e3b7"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2"/></svg>
  ),
  'npm': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#cb3837"><path d="M0 0v24h24V0H0zm19 19h-3V8h-3v11H5V5h14v14z"/></svg>
  ),
  // Soft & Spoken
  'Hindi': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#38bdf8"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/></svg>
  ),
  'English': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#a78bfa"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/></svg>
  ),
  'Problem Solving': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#fbbf24"><path d="M9 21h6v-2H9v2zm3-19a7 7 0 00-7 7c0 2.4 1.2 4.5 3 5.7V17h8v-2.3c1.8-1.2 3-3.3 3-5.7a7 7 0 00-7-7z"/></svg>
  ),
  'Communication': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#34d399"><path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z"/></svg>
  ),
  'Adaptability': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#f472b6"><path d="M12 4V1L8 5l4 4V6a6 6 0 11-6 6H4a8 8 0 108-8z"/></svg>
  ),
  'Teamwork': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#818cf8"><path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5c0-2.3-4.7-3.5-7-3.5zm8 0c-.3 0-.7 0-1.1.1 1.3.9 2.1 2.1 2.1 3.4V19h6v-2.5c0-2.3-4.7-3.5-7-3.5z"/></svg>
  ),
  'Critical Thinking': (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#fb923c"><path d="M12 2a9 9 0 00-9 9c0 3.6 2.1 6.7 5.2 8.1l.8 2.9h6l.8-2.9C18.9 17.7 21 14.6 21 11a9 9 0 00-9-9zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/></svg>
  )
};

export default function Skills() {
  const { skillRows } = portfolioData;
  const sectionRef = useRef(null);
  const orbitBoxRef = useRef(null);
  const rowsCardRef = useRef(null);

  useEffect(() => {
    // Reveal all .rv elements inside Skills
    const sec = sectionRef.current;
    if (sec) {
      const rvElements = sec.querySelectorAll('.rv');
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
    }

    // 3D Skills Orbit
    const box = orbitBoxRef.current;
    if (!box) return;

    const cv = document.createElement('canvas');
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%';
    box.appendChild(cv);

    let r;
    try {
      r = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    } catch {
      return;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const sc = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    cam.position.set(0, 6.8, 17.5);
    cam.lookAt(0, 0, 0);

    sc.add(new THREE.AmbientLight(0x90a8d0, 1.4));
    
    // Central White Glow PointLight
    const whiteCenterLight = new THREE.PointLight(0xffffff, 80, 25, 1.2);
    whiteCenterLight.position.set(0, 0, 0);
    sc.add(whiteCenterLight);

    const pl = new THREE.PointLight(0xe8f2ff, 90, 50, 1.5);
    pl.position.set(3, 6, 7);
    sc.add(pl);

    // Glowing White Core Sphere (Like a shining white star/moon)
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.1,
      emissive: 0xffffff,
      emissiveIntensity: 1.2
    });
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.22, 36, 36),
      coreMat
    );
    sc.add(core);

    // Dynamic White Core Glow Aura / Halo
    const makeGlowTex = () => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');
      const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      g.addColorStop(0, 'rgba(255, 255, 255, 1)');
      g.addColorStop(0.25, 'rgba(235, 245, 255, 0.85)');
      g.addColorStop(0.55, 'rgba(180, 215, 255, 0.4)');
      g.addColorStop(0.85, 'rgba(140, 190, 255, 0.12)');
      g.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 256, 256);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    };

    const glowSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: makeGlowTex(),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    glowSprite.scale.set(4.6, 4.6, 1);
    sc.add(glowSprite);

    // Outer subtle crystalline wireframe cage
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.65, 1),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      })
    );
    sc.add(wire);

    const makeLabel = (t, hex) => {
      const c = document.createElement('canvas');
      const x = c.getContext('2d');
      x.font = '700 32px Manrope,sans-serif';
      const w = Math.ceil(x.measureText(t).width) + 48;
      const h = 68;
      c.width = w;
      c.height = h;
      x.font = '700 32px Manrope,sans-serif';
      x.fillStyle = 'rgba(10,16,30,.92)';
      x.strokeStyle = hex;
      x.lineWidth = 2.5;
      x.beginPath();
      x.roundRect(2, 2, w - 4, h - 4, 32);
      x.fill();
      x.stroke();
      x.fillStyle = '#fff';
      x.textBaseline = 'middle';
      x.fillText(t, 24, h / 2 + 1);

      const tx = new THREE.CanvasTexture(c);
      tx.colorSpace = THREE.SRGBColorSpace;
      const sp = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: tx, transparent: true, depthWrite: false })
      );
      sp.scale.set((0.42 * w / h) * 1.6, 0.42 * 1.6, 1);
      return sp;
    };

    const rings = [
      { r: 3.1, tilt: 0.08, spd: 0.32, c: '#9cc3ee', w: ['MongoDB', 'Express.js', 'React.js', 'Node.js'] },
      { r: 4.6, tilt: -0.14, spd: -0.22, c: '#8aa0cf', w: ['Next.js', 'Redux', 'Tailwind', 'JWT', 'REST APIs'] },
      { r: 6.0, tilt: 0.18, spd: 0.15, c: '#c8a27a', w: ['Git', 'GitHub', 'Postman', 'Vercel', 'Netlify', 'Render', 'Apps Script'] }
    ];

    const groups = [];
    const cols = [0x9cc3ee, 0x8aa0cf, 0xc8a27a];

    rings.forEach((o, ri) => {
      const g = new THREE.Group();
      g.rotation.x = o.tilt;
      sc.add(g);

      const ln = new THREE.Mesh(
        new THREE.RingGeometry(o.r - 0.016, o.r + 0.016, 180),
        new THREE.MeshBasicMaterial({ color: 0x8fb0e0, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
      );
      ln.rotation.x = -Math.PI / 2;
      g.add(ln);

      const pv = [];
      o.w.forEach((w, i) => {
        const p = new THREE.Group();
        p.rotation.y = (i / o.w.length) * Math.PI * 2;
        g.add(p);

        const m = new THREE.Mesh(
          new THREE.SphereGeometry(0.22, 24, 18),
          new THREE.MeshStandardMaterial({ map: planetTex(cols[ri]), roughness: 0.5, metalness: 0.3 })
        );
        m.position.x = o.r;
        p.add(m);

        const l = makeLabel(w, o.c);
        l.position.set(o.r, 0.62, 0);
        p.add(l);
        pv.push(p);
      });
      groups.push({ pv, spd: o.spd });
    });

    const fit = () => {
      const w = box.clientWidth;
      const h = box.clientHeight;
      if (!w || !h) return;
      r.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    };
    fit();
    window.addEventListener('resize', fit);

    let vis = false;
    let px = 0;
    let py = 0;

    const observer = new IntersectionObserver((e) => {
      vis = e[0].isIntersecting;
    });
    observer.observe(box);

    const onPointerMove = (e) => {
      px = e.clientX / window.innerWidth - 0.5;
      py = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const clk = new THREE.Clock();
    let animId;

    function loop() {
      animId = requestAnimationFrame(loop);
      const dt = Math.min(clk.getDelta(), 0.05);
      if (!vis) return;
      const k = reduce ? 0 : 1;
      const elapsedTime = clk.getElapsedTime();

      // Pulsing breathing white glow effect
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.18;
      const auraPulse = 1 + Math.sin(elapsedTime * 2.5) * 0.12;
      glowSprite.scale.set(4.6 * auraPulse, 4.6 * auraPulse, 1);
      coreMat.emissiveIntensity = 1.0 + Math.sin(elapsedTime * 2.5) * 0.45;
      whiteCenterLight.intensity = 70 + Math.sin(elapsedTime * 2.5) * 25;

      groups.forEach((g) => g.pv.forEach((p) => (p.rotation.y += dt * g.spd * k)));
      core.rotation.y += dt * 0.3 * k;
      wire.rotation.y -= dt * 0.2 * k;
      sc.rotation.y += (px * 0.6 - sc.rotation.y) * 0.05;
      sc.rotation.x += (py * 0.25 - sc.rotation.x) * 0.05;
      r.render(sc, cam);
    }
    loop();

    // Reveal trigger for rows container
    const rowsEl = rowsCardRef.current;
    let rowObserver;
    if (rowsEl) {
      rowObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            rowsEl.classList.add('in');
            rowObserver.unobserve(rowsEl);
          }
        });
      }, { threshold: 0.15 });
      rowObserver.observe(rowsEl);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', fit);
      window.removeEventListener('pointermove', onPointerMove);
      observer.disconnect();
      if (rowObserver) rowObserver.disconnect();
      r.dispose();
      box.innerHTML = '';
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head">
          <div className="tag">Tech Stack & Architecture</div>
          <h2>
            Skills & Tools in <span className="grad">Orbit</span>
          </h2>
          <p className="skills-sub">
            Interactive 3D MERN solar ecosystem alongside categorized production tools and libraries.
          </p>
        </div>
        <div className="skills">
          <div
            className="orbit"
            id="orbit"
            ref={orbitBoxRef}
            role="img"
            aria-label="Skills orbiting the MERN stack"
          />
          <div className="rows glass skills-card" ref={rowsCardRef}>
            <div className="skills-card-header">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="skills-badge">⚡ Full-Stack Tech Stack</span>
              <span className="skills-total">9 Categories</span>
            </div>

            <div className="skills-body">
              {skillRows.map((row, idx) => (
                <div key={idx} className="skill-group">
                  <div className="skill-cat">
                    <span className="cat-pulse-dot" />
                    <h4>{row.category}</h4>
                  </div>
                  <div className="skill-tags">
                    {row.items.map((item, i) => (
                      <span key={i} className="skill-tag">
                        {SVG_ICONS[item] && (
                          <span className="tech-svg-ico">{SVG_ICONS[item]}</span>
                        )}
                        <span className="tech-name">{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
