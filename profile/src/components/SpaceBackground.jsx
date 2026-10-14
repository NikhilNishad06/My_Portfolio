import { useEffect, useRef } from 'react';
import * as THREE from 'three';


export default function SpaceBackground() {
  const canvasRef = useRef(null);
  const labelsContainerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const labelsContainer = labelsContainerRef.current;
    if (!canvas || !labelsContainer) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    } catch {
      return;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 700;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2));
    renderer.setClearColor(0x050810, 1);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(55, 1, 0.1, 500);
    const root = new THREE.Group();
    scene.add(root);

    // Galaxy Particles (Optimized for 60fps smooth scrolling)
    const N = small ? 14000 : 24000;
    const R = 14;
    const ARMS = 3;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const siz = new Float32Array(N);
    const cIn = new THREE.Color('#ead7b4');
    const cMid = new THREE.Color('#7d9bd0');
    const cOut = new THREE.Color('#2c4a82');
    const tmp = new THREE.Color();

    for (let i = 0; i < N; i++) {
      const r = Math.pow(Math.random(), 1.6) * R;
      const arm = ((i % ARMS) / ARMS) * Math.PI * 2;
      const spin = r * 0.62;
      const sp = 0.35 + r * 0.05;
      const rnd = () => Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? -1 : 1) * sp;
      const a = arm + spin;

      pos[i * 3] = Math.cos(a) * r + rnd();
      pos[i * 3 + 1] = rnd() * 0.45;
      pos[i * 3 + 2] = Math.sin(a) * r + rnd();

      const t = r / R;
      if (t < 0.35) {
        tmp.copy(cIn).lerp(cMid, t / 0.35);
      } else {
        tmp.copy(cMid).lerp(cOut, (t - 0.35) / 0.65);
      }
      col.set([tmp.r, tmp.g, tmp.b], i * 3);
      siz[i] = 0.5 + Math.random() * 1.6;
    }

    const gg = new THREE.BufferGeometry();
    gg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    gg.setAttribute('color', new THREE.BufferAttribute(col, 3));
    gg.setAttribute('size', new THREE.BufferAttribute(siz, 1));

    const pm = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { px: { value: renderer.getPixelRatio() } },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vc;
        uniform float px;
        void main() {
          vc = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * px * (60.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3 vc;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          gl_FragColor = vec4(vc, pow(1.0 - d * 2.0, 2.0) * 0.9);
        }
      `
    });

    const galaxy = new THREE.Points(gg, pm);
    root.add(galaxy);

    // Background Stars
    const SN = small ? 1200 : 3000;
    const sp = new Float32Array(SN * 3);
    for (let i = 0; i < SN; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(80 + Math.random() * 120);
      sp.set([v.x, v.y, v.z], i * 3);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    const stars = new THREE.Points(
      sg,
      new THREE.PointsMaterial({
        color: 0xcdd6ff,
        size: 0.55,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true
      })
    );
    scene.add(stars);

    // Glow Texture helper
    const makeGlowTex = () => {
      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const x = c.getContext('2d');
      if (!x) return null;
      const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, 'rgba(235,244,255,1)');
      g.addColorStop(0.25, 'rgba(140,180,240,.5)');
      g.addColorStop(1, 'rgba(60,100,180,0)');
      x.fillStyle = g;
      x.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(c);
    };

    const glowTex = makeGlowTex();
    const sun = new THREE.Group();
    root.add(sun);
    sun.add(new THREE.Mesh(new THREE.SphereGeometry(0.9, 48, 32), new THREE.MeshBasicMaterial({ color: 0xeaf2ff })));

    let halo = null;
    if (glowTex) {
      halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false }));
      halo.scale.setScalar(7);
      sun.add(halo);
    }

    root.add(new THREE.PointLight(0xdbe8ff, 60, 40, 1.6));
    root.add(new THREE.AmbientLight(0x44587a, 0.9));

    // Clear any leftover planet labels
    labelsContainer.innerHTML = '';

    let offX = 0, offY = 0, vw = 0, vh = 0;

    function resize() {
      vw = window.innerWidth;
      vh = window.innerHeight;
      renderer.setSize(vw, vh, false);
      cam.aspect = vw / vh;
      cam.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    let mx = 0, my = 0;
    const handlePointerMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    let sy = 0, sc = 0;
    const handleScroll = () => {
      sy = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const clock = new THREE.Clock();
    let camA = 0, camR = 17, camH = 7;
    let animId;

    function tick() {
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;
      const k = reduce ? 0 : 1;

      const max = Math.max(1, document.documentElement.scrollHeight - vh);
      sc += (sy / max - sc) * 0.06;
      const heroF = Math.max(0, 1 - sy / (vh * 0.9));
      const wide = vw / vh > 1.15;

      offX += ((wide ? Math.min(8.5, (vw / vh) * 4.2) * heroF : 0) - offX) * 0.07;
      offY += ((wide ? 0 : -3.4 * heroF) - offY) * 0.07;
      root.position.set(offX, offY, 0);

      const ang = sc * Math.PI * 1.6 + mx * 0.35;
      const rad = camR + sc * 6 * (wide ? 1 : 1.3) + (wide ? 0 : 3);
      const h = camH - sc * 4 + my * 2.2 + (wide ? 0 : 3);

      camA += (ang - camA) * 0.08;
      cam.position.set(Math.sin(camA) * rad * 0.45, h, Math.cos(camA) * rad);
      cam.lookAt(offX * 0.35, offY * 0.4, 0);

      galaxy.rotation.y += dt * 0.045 * k;
      stars.rotation.y += dt * 0.004 * k;

      sun.visible = heroF > 0.03;

      if (halo) {
        halo.material.rotation = t * 0.1;
        halo.scale.setScalar(7 + Math.sin(t * 1.6) * 0.35);
      }

      renderer.render(scene, cam);
      animId = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      renderer.dispose();
      if (labelsContainer) labelsContainer.innerHTML = '';
    };
  }, []);

  return (
    <>
      <canvas id="space" ref={canvasRef} aria-hidden="true" />
      <div className="fog" />
      <div id="labels" ref={labelsContainerRef} />
    </>
  );
}
