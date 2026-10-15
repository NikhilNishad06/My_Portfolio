<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Nikhil Nishad Nishad — MERN Stack Developer</title>
<meta name="description" content="MERN stack developer from Bhilai, India building production-ready ERP, HR, MIS and inventory systems.">
<meta name="theme-color" content="#050810">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%2304030f'/%3E%3Ccircle cx='32' cy='32' r='12' fill='%23e8f0ff'/%3E%3Cellipse cx='32' cy='32' rx='28' ry='9' fill='none' stroke='%235b7fb8' stroke-width='3' transform='rotate(-25 32 32)'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=Unbounded:wght@400;600;700&display=swap" rel="stylesheet">
<script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"}}</script>
<style>
:root{--void:#050810;--violet:#5b7fb8;--cyan:#9cc3ee;--pink:#c8a27a;--gold:#e8f0ff;--star:#eef3fb;--mute:#9fb0c8;--line:rgba(150,180,220,.2);--glass:rgba(10,16,30,.62);--head:'Unbounded','Manrope',system-ui,sans-serif;--sans:'Manrope',system-ui,sans-serif;--pad:clamp(18px,5vw,72px)}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--void);color:var(--star);font:400 16px/1.65 var(--sans);overflow-x:hidden;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
::selection{background:var(--violet)}
#space{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block}
.fog{position:fixed;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse at 75% 0%,rgba(140,180,235,.16),transparent 55%),radial-gradient(ellipse at 10% 100%,rgba(90,120,170,.12),transparent 55%)}
main,footer,nav{position:relative;z-index:2}
h1,h2,h3{font-family:var(--head);font-weight:600;line-height:1.1;letter-spacing:-.02em}
h2{font-size:clamp(28px,5vw,64px)}
.grad{background:linear-gradient(100deg,var(--cyan),var(--violet) 50%,var(--pink));-webkit-background-clip:text;background-clip:text;color:transparent}
.wrap{padding:0 var(--pad);max-width:1400px;margin:0 auto}
section{padding:clamp(70px,10vw,150px) 0}
.tag{font-size:13px;color:var(--cyan);letter-spacing:.12em;margin-bottom:16px;display:flex;align-items:center;gap:10px}
.tag::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--cyan);box-shadow:0 0 14px var(--cyan)}
.glass{background:var(--glass);border:1px solid var(--line);border-radius:22px;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.btn{display:inline-flex;align-items:center;padding:14px 28px;border:1px solid var(--line);border-radius:999px;font-weight:600;font-size:14px;transition:.35s;background:rgba(255,255,255,.04)}
.btn:hover{border-color:var(--cyan);box-shadow:0 0 28px rgba(156,195,238,.35)}
.btn.solid{background:linear-gradient(100deg,#3c64a0,#6f9bd1);border-color:transparent}
.btn.solid:hover{box-shadow:0 0 30px rgba(111,155,209,.5);transform:translateY(-2px)}
.rv{opacity:0;transform:translateY(34px);transition:opacity .9s,transform .9s}.rv.in{opacity:1;transform:none}

/* nav */
nav{position:fixed;top:0;left:0;right:0;display:flex;justify-content:space-between;align-items:center;padding:16px var(--pad);transition:.4s;z-index:50}
nav.s{background:rgba(5,8,16,.7);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.logo{font-family:var(--head);font-weight:700;font-size:20px;display:flex;align-items:center;gap:8px}
.logo i{width:12px;height:12px;border-radius:50%;background:var(--gold);box-shadow:0 0 14px var(--gold);position:relative}
.logo i::after{content:"";position:absolute;inset:-6px;border:1px solid var(--violet);border-radius:50%;animation:spin 6s linear infinite;border-top-color:transparent}
.links{display:flex;gap:30px;align-items:center}.links a{font-size:14px;font-weight:500;color:var(--mute);transition:.3s}.links a:hover{color:#fff}.links .btn{color:#fff;padding:10px 20px}
.burger{display:none;width:44px;height:44px;position:relative;z-index:70}
.burger i{position:absolute;left:10px;right:10px;height:2px;background:#fff;transition:.35s}.burger i:first-child{top:17px}.burger i:last-child{top:26px}
.burger.o i:first-child{top:22px;transform:rotate(45deg)}.burger.o i:last-child{top:22px;transform:rotate(-45deg)}
#menu{position:fixed;inset:0;z-index:60;background:rgba(5,8,16,.96);display:flex;flex-direction:column;justify-content:center;padding:0 var(--pad);gap:6px;opacity:0;visibility:hidden;transition:.4s}
#menu.o{opacity:1;visibility:visible}#menu a{font-family:var(--head);font-weight:600;font-size:clamp(30px,9vw,52px);padding:6px 0}
@media(max-width:860px){.links{display:none}.burger{display:block}}

/* hero */
#hero{min-height:100svh;display:flex;align-items:center;padding:110px 0 70px;position:relative}
.hero-copy{max-width:620px}
.pill{display:inline-flex;align-items:center;gap:8px;padding:7px 16px;border:1px solid var(--line);border-radius:999px;font-size:12.5px;background:var(--glass);margin-bottom:26px}
.pill i{width:7px;height:7px;border-radius:50%;background:#5cffb0;box-shadow:0 0 10px #5cffb0;animation:pulse 1.8s infinite}
#hero h1{font-size:clamp(32px,5.2vw,72px)}
#hero p{color:var(--mute);margin:24px 0 32px;max-width:520px;font-size:clamp(15px,1.5vw,18px)}
.btns{display:flex;flex-wrap:wrap;gap:12px}
.hint{position:absolute;bottom:22px;left:50%;transform:translateX(-50%);font-size:12px;color:var(--mute);letter-spacing:.2em;display:flex;flex-direction:column;align-items:center;gap:8px}
.hint b{width:1px;height:34px;background:linear-gradient(var(--cyan),transparent);animation:nudge 1.8s infinite}
.plabel{position:fixed;left:0;top:0;z-index:3;pointer-events:none;font-size:11.5px;font-weight:600;padding:4px 10px;border-radius:999px;background:rgba(5,8,16,.7);border:1px solid var(--line);white-space:nowrap;transition:opacity .4s}
@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.3;transform:scale(.7)}}@keyframes nudge{50%{transform:translateY(8px)}}

/* about */
.about{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(30px,6vw,90px);align-items:center}
.about .lead{font-size:clamp(18px,2vw,26px);margin:26px 0 16px;line-height:1.45}
.about p.sub{color:var(--mute);max-width:600px}
.stats{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.stat{padding:26px 22px;text-align:center}
.stat b{display:block;font-family:var(--head);font-size:clamp(30px,4.4vw,52px);line-height:1.1}
.stat span{font-size:13px;color:var(--mute)}
@media(max-width:860px){.about{grid-template-columns:1fr}}

/* work */
.sec-head{margin-bottom:clamp(36px,5vw,70px)}
.projs{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:22px}
.proj{padding:30px;transition:.45s;position:relative;overflow:hidden}
.proj:hover{transform:translateY(-8px);border-color:var(--c)}
.proj:hover .pl{transform:scale(1.1) rotate(8deg)}
.pl{width:92px;height:92px;position:relative;margin-bottom:26px;transition:.6s}
.pl::before{content:"";position:absolute;inset:14px;border-radius:50%;background:radial-gradient(circle at 32% 28%,#fff6,transparent 38%),radial-gradient(circle at 60% 60%,var(--c),#0a0620 95%);box-shadow:0 0 34px var(--c)}
.pl::after{content:"";position:absolute;left:-8px;right:-8px;top:34px;bottom:34px;border:2px solid var(--c);border-radius:50%;transform:rotate(-22deg);opacity:.75}
.proj small{color:var(--c);font-weight:600;font-size:12px;letter-spacing:.1em}
.proj h3{font-size:clamp(20px,2vw,26px);margin:8px 0 6px}
.proj .cat{color:var(--mute);font-size:13px}
.proj p{color:var(--mute);font-size:14.5px;margin:16px 0}
.chips{display:flex;flex-wrap:wrap;gap:7px}.chips span{font-size:11.5px;padding:5px 12px;border:1px solid var(--line);border-radius:999px;color:var(--mute)}
.note{margin-top:18px;font-size:12px;color:var(--c)}

/* skills orbit */
.skills{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,5vw,80px);align-items:center}
.orbit{position:relative;width:min(100%,560px);aspect-ratio:1;margin:0 auto}
.rows{padding:8px clamp(18px,3vw,34px)}.rows .row:first-child{border-top:0}.rows .row:last-child{border-bottom:0}
section:not(#hero){background:rgba(5,8,16,.76)}
.rows .row{display:grid;grid-template-columns:120px 1fr;gap:16px;padding:16px 0;border-top:1px solid var(--line)}
.rows .row:last-child{border-bottom:1px solid var(--line)}
.row h3{font:600 12px var(--sans);color:var(--cyan);letter-spacing:.1em;padding-top:3px}
.row div{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:15px;color:#d6d8f5}
@media(max-width:860px){.skills{grid-template-columns:1fr}.rows .row{grid-template-columns:1fr;gap:4px}}

/* services / why */
.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:20px}
.card{padding:30px;transition:.4s}.card:hover{transform:translateY(-6px);border-color:var(--cyan);box-shadow:0 0 34px rgba(156,195,238,.15)}
.card .dot{width:40px;height:40px;border-radius:50%;margin-bottom:20px;background:radial-gradient(circle at 30% 30%,#fff8,transparent 40%),linear-gradient(135deg,var(--cyan),var(--violet),var(--pink));position:relative}
.card .dot::after{content:"";position:absolute;inset:-7px;border-radius:50%;border:1px solid var(--line);border-top-color:var(--cyan);animation:spin 5s linear infinite}
.card h3{font-size:clamp(17px,1.7vw,21px);margin-bottom:10px;line-height:1.25}.card p{color:var(--mute);font-size:14.5px}
.card .tech{display:block;margin-top:16px;font-size:12px;color:var(--cyan)}

/* journey */
.tl{position:relative;padding-left:34px}
.tl::before{content:"";position:absolute;left:7px;top:6px;bottom:6px;width:2px;background:linear-gradient(var(--cyan),var(--violet),var(--pink))}
.ev{position:relative;padding:26px 28px;margin-bottom:20px}
.ev::before{content:"";position:absolute;left:-34px;top:32px;width:16px;height:16px;border-radius:50%;background:var(--void);border:2px solid var(--cyan);box-shadow:0 0 14px var(--cyan)}
.ev time{font-size:12.5px;color:var(--cyan);font-weight:600}.ev h3{font-size:clamp(17px,1.9vw,24px);margin:6px 0 10px;line-height:1.25}.ev p{color:var(--mute);font-size:14.5px;max-width:860px}

/* testimonial */
.testi{max-width:820px;margin:0 auto;text-align:center;padding:clamp(30px,5vw,60px);border-style:dashed}
.testi q{font-size:clamp(20px,2.6vw,32px);line-height:1.35;color:#c4c7f0;quotes:none;display:block}.testi cite{display:block;margin-top:22px;font-style:normal;font-size:13px;color:var(--mute)}

/* contact */
.cgrid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(30px,6vw,90px)}
.cgrid>div>p{color:var(--mute);margin:22px 0 30px;max-width:480px}
.clinks{margin-top:34px}.clinks a,.clinks .loc{display:flex;justify-content:space-between;gap:12px;padding:15px 0;border-top:1px solid var(--line);font-size:14.5px;font-weight:500;transition:.3s;word-break:break-word}
.clinks a:hover{padding-left:10px;color:var(--cyan)}.clinks .loc{border-bottom:1px solid var(--line)}
form{padding:clamp(22px,3vw,40px);display:flex;flex-direction:column;gap:20px}
label{font-size:12px;color:var(--mute);letter-spacing:.08em}
input,select,textarea{width:100%;background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:12px;color:#fff;font:inherit;font-size:16px;padding:13px 15px;margin-top:6px;outline:none;transition:.3s;appearance:none}
select option{background:#0a1220}
input:focus,select:focus,textarea:focus{border-color:var(--cyan);box-shadow:0 0 18px rgba(156,195,238,.25)}
textarea{min-height:110px;resize:vertical}#note{font-size:13px;min-height:18px;color:var(--cyan)}
@media(max-width:860px){.cgrid{grid-template-columns:1fr}}

#final{text-align:center}#final h2{font-size:clamp(30px,6vw,84px);max-width:1000px;margin:0 auto 26px}#final p{color:var(--mute);margin-bottom:34px;font-size:18px}
footer{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;padding:28px var(--pad);border-top:1px solid var(--line);font-size:13px;color:var(--mute);background:rgba(5,8,16,.6)}
footer .r{display:flex;gap:18px}footer a:hover{color:var(--cyan)}
@media(max-width:600px){footer{flex-direction:column;text-align:center}}
:focus-visible{outline:2px solid var(--cyan);outline-offset:3px}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition-duration:.01ms!important}.rv{opacity:1;transform:none}}
</style>
</head>
<body>
<canvas id="space" aria-hidden="true"></canvas><div class="fog"></div>
<div id="labels"></div>

<nav id="nav" aria-label="Main">
  <a href="#top" class="logo" aria-label="Nikhil Nishad Nishad home">Nikhil Nishad<i></i></a>
  <div class="links"><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#services">Services</a><a href="#journey">Journey</a><a href="#contact" class="btn">Let's Work Together</a></div>
  <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i></button>
</nav>
<div id="menu" aria-hidden="true"><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#services">Services</a><a href="#journey">Journey</a><a href="#contact">Contact</a></div>

<main id="top">
<section id="hero">
  <div class="wrap"><div class="hero-copy">
    <div class="pill"><i></i>Full Satck Developer </div>
    <h1>Scalable full-stack apps that <span class="grad">businesses rely on.</span></h1>
    <p>Full stack developer building production-ready ERP, HR, MIS and inventory systems with secure REST APIs and responsive UI.</p>
    <div class="btns"><a href="#work" class="btn solid">View My Work</a><a href="#contact" class="btn">Let's Work Together</a></div>
  </div></div>
  <div class="hint">SCROLL TO EXPLORE<b></b></div>
</section>

<section id="about"><div class="wrap about">
  <div>
    <div class="tag rv">About</div>
    <h2 class="rv">Code that ships to <span class="grad">production.</span></h2>
    <p class="lead rv">I turn business requirements into production-ready software — from database design to deployment.</p>
    <p class="sub rv">Hands-on with the MERN stack, delivering end-to-end enterprise solutions — ERP, HR management, MIS and purchase/inventory systems — with a strong focus on responsive UI, secure REST APIs and performance optimization.</p>
  </div>
  <div class="stats">
    <div class="stat glass rv"><b class="grad" data-c="7">0</b><span>Enterprise Systems Built</span></div>
    <div class="stat glass rv"><b class="grad" data-c="3.79" data-d="2" data-s="/4">0</b><span>BCA CGPA</span></div>
    <div class="stat glass rv"><b class="grad" data-c="5">0</b><span>Key Projects</span></div>
    <div class="stat glass rv"><b class="grad" data-c="4">0</b><span>Core MERN Technologies</span></div>
  </div>
</div></section>

<section id="work"><div class="wrap">
  <div class="sec-head"><div class="tag rv">Key projects</div><h2 class="rv">Selected <span class="grad">work</span></h2></div>
  <div class="projs">
    <article class="proj glass rv" style="--c:#8fb8e8"><div class="pl"></div><small>01</small><h3>ERP &amp; Master Management</h3><div class="cat">Enterprise Platform</div><p>A centralized ERP module for managing master data, roles and cross-department workflows for a business client.</p><div class="chips"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div><div class="note">Built for a business client</div></article>
    <article class="proj glass rv" style="--c:#8aa0cf"><div class="pl"></div><small>02</small><h3>MIS Dashboard</h3><div class="cat">Reporting &amp; Analytics</div><p>A centralized Management Information System that consolidates data across departments into real-time reports for decision-making — synced with Google Sheets through Google Apps Script.</p><div class="chips"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Google Apps Script</span></div><div class="note">Built for a business client</div></article>
    <article class="proj glass rv" style="--c:#c8a27a"><div class="pl"></div><small>03</small><h3>HR Management System</h3><div class="cat">Attendance &amp; Live Tracking</div><p>Employee management with outside-attendance tracking, live location monitoring and role-based dashboards.</p><div class="chips"><span>React.js</span><span>Node.js</span><span>MongoDB</span><span>JWT Auth</span></div><div class="note">Built for a business client</div></article>
    <article class="proj glass rv" style="--c:#d8c8a4"><div class="pl"></div><small>04</small><h3>Purchase &amp; Sales System</h3><div class="cat">Order-to-Delivery Workflow</div><p>Automates the purchase-to-delivery workflow with real-time order tracking, inventory updates and reporting.</p><div class="chips"><span>React.js</span><span>Express.js</span><span>MongoDB</span></div><div class="note">Built for a business client</div></article>
    <article class="proj glass rv" style="--c:#7fb7b0"><div class="pl"></div><small>05</small><h3>Checklist &amp; Delegation</h3><div class="cat">Team Accountability</div><p>Task delegation and checklist tracking tools with notifications that improve accountability across the team.</p><div class="chips"><span>React.js</span><span>Node.js</span><span>MongoDB</span></div><div class="note">Built for a business client</div></article>
  </div>
</div></section>

<section id="skills"><div class="wrap">
  <div class="sec-head"><div class="tag rv">Skills</div><h2 class="rv">Tools in <span class="grad">orbit</span></h2></div>
  <div class="skills">
    <div class="orbit" id="orbit" role="img" aria-label="Skills orbiting the MERN stack"></div>
    <div class="rows glass rv">
      <div class="row"><h3>Languages</h3><div><span>JavaScript</span><span>HTML5</span><span>CSS3</span></div></div>
      <div class="row"><h3>Frameworks</h3><div><span>React.js</span><span>Next.js</span><span>Node.js</span><span>Express.js</span><span>NestJS</span><span>Redux</span><span>Tailwind CSS</span><span>Bootstrap</span><span>Material UI</span><span>Framer Motion</span><span>Spring Boot</span></div></div>
      <div class="row"><h3>Databases</h3><div><span>MongoDB</span><span>MySQL</span><span>PostgreSQL</span><span>Supabase</span></div></div>
      <div class="row"><h3>Auth</h3><div><span>JWT Auth</span><span>OAuth Integration</span></div></div>
      <div class="row"><h3>Integrations</h3><div><span>REST APIs</span><span>Payment Gateways</span><span>Google Sheets API</span><span>Email / SMS Services</span></div></div>
      <div class="row"><h3>Automation</h3><div><span>Google Apps Script</span></div></div>
      <div class="row"><h3>Tools</h3><div><span>Git</span><span>GitHub</span><span>Postman</span><span>Netlify</span><span>Vercel</span><span>Render</span><span>npm</span></div></div>
      <div class="row"><h3>Spoken</h3><div><span>Hindi</span><span>English</span></div></div>
      <div class="row"><h3>Soft skills</h3><div><span>Problem Solving</span><span>Communication</span><span>Adaptability</span><span>Teamwork</span><span>Critical Thinking</span></div></div>
    </div>
  </div>
</div></section>

<section id="services"><div class="wrap">
  <div class="sec-head"><div class="tag rv">Services</div><h2 class="rv">Software that <span class="grad">runs your business.</span></h2></div>
  <div class="grid3">
    <div class="card glass rv"><div class="dot"></div><h3>Full-Stack Web Applications</h3><p>End-to-end MERN applications — frontend, backend, database design, API integration, testing and deployment.</p><span class="tech">MongoDB · Express · React · Node</span></div>
    <div class="card glass rv"><div class="dot"></div><h3>ERP, HR &amp; MIS Systems</h3><p>Enterprise software that centralises data, roles and workflows across your departments.</p><span class="tech">RBAC · Dashboards · Reports</span></div>
    <div class="card glass rv"><div class="dot"></div><h3>REST API &amp; Backend Development</h3><p>Secure, well-structured APIs with JWT / OAuth authentication and optimised database queries.</p><span class="tech">Node · Express · JWT</span></div>
    <div class="card glass rv"><div class="dot"></div><h3>Business Process Automation</h3><p>Google Apps Script and Sheets API integrations for automated data sync and report generation.</p><span class="tech">Apps Script · Sheets API</span></div>
    <div class="card glass rv"><div class="dot"></div><h3>Responsive Business Websites</h3><p>Fast, responsive interfaces built around your brand and tuned for performance.</p><span class="tech">React · Next.js · Tailwind</span></div>
    <div class="card glass rv"><div class="dot"></div><h3>Performance &amp; Maintenance</h3><p>Cutting page-load times, tuning queries and resolving production issues.</p><span class="tech">Optimisation · Support</span></div>
  </div>
</div></section>

<section id="why"><div class="wrap">
  <div class="sec-head"><div class="tag rv">Why work with me</div><h2 class="rv">Built to ship, <span class="grad">built to last.</span></h2></div>
  <div class="grid3">
    <div class="card glass rv"><h3>End-to-end ownership — frontend to deployment</h3></div>
    <div class="card glass rv"><h3>Requirements gathered directly with clients</h3></div>
    <div class="card glass rv"><h3>Secure by design — JWT auth &amp; role-based access</h3></div>
    <div class="card glass rv"><h3>Performance-focused APIs and queries</h3></div>
    <div class="card glass rv"><h3>Clean, production-ready code</h3></div>
    <div class="card glass rv"><h3>Responsive by default</h3></div>
  </div>
</div></section>

<section id="journey"><div class="wrap">
  <div class="sec-head"><div class="tag rv">Journey</div><h2 class="rv">Experience &amp; <span class="grad">education</span></h2></div>
  <div class="tl">
    <div class="ev glass rv"><time>Mar 2026 – Present</time><h3>Full Stack Web Developer — Botivate Services LLP</h3><p>Designed, built and deployed multiple client applications end-to-end, and maintain 7 enterprise systems — ERP, HR management with live location and attendance, purchase &amp; sales, MIS, and document/subscription management. Implemented authentication, role-based access control, file uploads, dashboards and notification workflows, and cut page-load times, API latency and query overhead.</p></div>
    <div class="ev glass rv"><time>Jan – Feb 2026</time><h3>Full Stack Web Developer Intern — Botivate Services LLP</h3><p>Supported development of enterprise modules for the ERP and HR management systems, applying REST API and database design best practices.</p></div>
    <div class="ev glass rv"><time>Aug 2023 – Feb 2026</time><h3>Bachelor of Computer Application (BCA) — Kalinga University</h3><p>Raipur, Chhattisgarh · CGPA 3.79 / 4.00</p></div>
    <div class="ev glass rv"><time>Feb 2026</time><h3>Full Stack Web Development — Avish Educom</h3><p>Agration Chowk, Durg, Chhattisgarh</p></div>
  </div>
</div></section>

<section id="testimonials"><div class="wrap">
  <div class="sec-head" style="text-align:center"><div class="tag rv" style="justify-content:center">Kind words</div><h2 class="rv">What clients <span class="grad">say</span></h2></div>
  <div class="testi glass rv">
    <!-- Apne real testimonials yahan add karo. Fake testimonials mat daalo. -->
    <q>Your first real testimonial will live here.</q><cite>Client name — Role / Company</cite>
  </div>
</div></section>

<section id="contact"><div class="wrap cgrid">
  <div>
    <div class="tag rv">Contact</div>
    <h2 class="rv">Have a project? <span class="grad">Let's build it.</span></h2>
    <p class="rv">Need an ERP, HR or MIS system, a full-stack web app or a business website? Tell me what you need and let's ship it.</p>
    <div class="btns"><a href="#form" class="btn solid">Start a Project</a><a href="#" class="btn" data-link="linkedin">Let's Connect</a></div>
    <div class="clinks">
      <a href="#" data-link="email"><span>Email</span><span data-text="email"></span></a>
      <a href="#" data-link="phone"><span>Phone</span><span data-text="phone"></span></a>
      <a href="#" data-link="linkedin"><span>LinkedIn</span><span>↗</span></a>
      <a href="#" data-link="github"><span>GitHub</span><span>↗</span></a>
      <div class="loc"><span>Location</span><span>Bhilai, India</span></div>
    </div>
  </div>
  <form id="form" class="glass rv" novalidate>
    <div><label for="fn">Name</label><input id="fn" name="name" required autocomplete="name"></div>
    <div><label for="fe">Email</label><input id="fe" name="email" type="email" required autocomplete="email"></div>
    <div><label for="fp">Project Type</label><select id="fp" name="type"><option>Full-Stack Web Application</option><option>ERP / HR / MIS System</option><option>REST API / Backend</option><option>Business Website</option><option>Automation / Integrations</option></select></div>
    <div><label for="fm">Message</label><textarea id="fm" name="message" required></textarea></div>
    <div><button class="btn solid" type="submit">Let's Build</button></div>
    <div id="note" role="status"></div>
  </form>
</div></section>

<section id="final"><div class="wrap">
  <h2 class="rv">Your next product could <span class="grad">ship like this.</span></h2>
  <p class="rv">Let's make it happen.</p>
  <a href="#contact" class="btn solid rv">Start a Project</a>
</div></section>
</main>

<footer><div>Nikhil Nishad Nishad · © 2026</div><div>Powered by NikhilNishad</div><div class="r"><a href="#" data-link="linkedin">LinkedIn</a><a href="#" data-link="github">GitHub</a></div></footer>

<script type="module">
import * as THREE from 'three';
const CONFIG={email:'Nikhil Nishadnishad622@gmail.com',phone:'+916264345297',phoneLabel:'+91 6264345297',
  linkedin:'https://www.linkedin.com/in/your-handle',github:'https://github.com/your-handle'}; // TODO: apne real URLs
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* links */
$$('[data-link]').forEach(a=>{const k=a.dataset.link;a.href=k==='email'?`mailto:${CONFIG.email}`:k==='phone'?`tel:${CONFIG.phone}`:CONFIG[k];if(k!=='email'&&k!=='phone'){a.target='_blank';a.rel='noopener'}});
$$('[data-text=email]').forEach(e=>e.textContent=CONFIG.email);$$('[data-text=phone]').forEach(e=>e.textContent=CONFIG.phoneLabel);

/* nav + menu */
const nav=$('#nav'),burger=$('#burger'),menu=$('#menu');
const setMenu=o=>{menu.classList.toggle('o',o);burger.classList.toggle('o',o);burger.setAttribute('aria-expanded',o);menu.setAttribute('aria-hidden',!o);document.body.style.overflow=o?'hidden':''};
burger.onclick=()=>setMenu(!menu.classList.contains('o'));
$$('#menu a').forEach(a=>a.onclick=()=>setMenu(false));
addEventListener('keydown',e=>e.key==='Escape'&&setMenu(false));

/* reveals + counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
  const b=e.target.querySelector('[data-c]');if(b){const end=+b.dataset.c,d=+(b.dataset.d||0),s=b.dataset.s||'',t0=performance.now();
    const f=t=>{const p=Math.min((t-t0)/1800,1),v=end*(1-Math.pow(1-p,3));b.textContent=v.toFixed(d)+s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));

/* 3D helpers */
function planetTex(hex){const c=document.createElement('canvas');c.width=256;c.height=128;const x=c.getContext('2d');
  x.fillStyle='#'+new THREE.Color(hex).getHexString();x.fillRect(0,0,256,128);
  for(let i=0;i<240;i++){x.fillStyle=Math.random()<.5?'rgba(255,255,255,.07)':'rgba(0,0,0,.13)';x.beginPath();x.ellipse(Math.random()*256,Math.random()*128,10+Math.random()*40,2+Math.random()*8,0,0,6.3);x.fill()}
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}

/* 3D tool orbit (real Three.js, labels always face the viewer) */
function initSkills3D(){
  const box=$('#orbit');if(!box)return;
  const cv=document.createElement('canvas');cv.style.cssText='position:absolute;inset:0;width:100%;height:100%';box.appendChild(cv);
  let r;try{r=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true})}catch(e){return}
  r.setPixelRatio(Math.min(devicePixelRatio||1,2));
  const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.1,100);cam.position.set(0,6.5,16);cam.lookAt(0,0,0);
  sc.add(new THREE.AmbientLight(0x7388b0,1.2));const pl=new THREE.PointLight(0xdbe8ff,90,50,1.5);pl.position.set(3,5,6);sc.add(pl);
  const core=new THREE.Mesh(new THREE.IcosahedronGeometry(.95,3),new THREE.MeshStandardMaterial({color:0xaac8ee,roughness:.3,metalness:.7,emissive:0x2a4a80,emissiveIntensity:.5}));sc.add(core);
  const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.35,1),new THREE.MeshBasicMaterial({color:0x9cc3ee,wireframe:true,transparent:true,opacity:.28}));sc.add(wire);
  const label=(t,hex)=>{const c=document.createElement('canvas'),x=c.getContext('2d');x.font='600 30px Manrope,sans-serif';const w=Math.ceil(x.measureText(t).width)+44,h=64;c.width=w;c.height=h;
    x.font='600 30px Manrope,sans-serif';x.fillStyle='rgba(10,16,30,.9)';x.strokeStyle=hex;x.lineWidth=2;x.beginPath();x.roundRect(2,2,w-4,h-4,30);x.fill();x.stroke();
    x.fillStyle='#fff';x.textBaseline='middle';x.fillText(t,22,h/2+1);
    const tx=new THREE.CanvasTexture(c);tx.colorSpace=THREE.SRGBColorSpace;const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:tx,transparent:true,depthWrite:false}));sp.scale.set(.36*w/h*1.6,.36*1.6,1);return sp};
  const rings=[
    {r:2.5,tilt:.08,spd:.32,c:'#9cc3ee',w:['MongoDB','Express.js','React.js','Node.js']},
    {r:3.8,tilt:-.14,spd:-.22,c:'#8aa0cf',w:['Next.js','Redux','Tailwind','JWT','REST APIs']},
    {r:5.0,tilt:.18,spd:.15,c:'#c8a27a',w:['Git','GitHub','Postman','Vercel','Netlify','Render','Apps Script']}];
  const groups=[];
  const cols=[0x9cc3ee,0x8aa0cf,0xc8a27a];
  rings.forEach((o,ri)=>{const g=new THREE.Group();g.rotation.x=o.tilt;sc.add(g);
    const ln=new THREE.Mesh(new THREE.RingGeometry(o.r-.012,o.r+.012,160),new THREE.MeshBasicMaterial({color:0x8fb0e0,transparent:true,opacity:.35,side:THREE.DoubleSide}));ln.rotation.x=-Math.PI/2;g.add(ln);
    const pv=[];o.w.forEach((w,i)=>{const p=new THREE.Group();p.rotation.y=i/o.w.length*Math.PI*2;g.add(p);
      const m=new THREE.Mesh(new THREE.SphereGeometry(.17,24,18),new THREE.MeshStandardMaterial({map:planetTex(cols[ri]),roughness:.5,metalness:.3}));m.position.x=o.r;p.add(m);
      const l=label(w,o.c);l.position.set(o.r,.52,0);p.add(l);pv.push(p)});
    groups.push({pv,spd:o.spd})});
  const fit=()=>{const w=box.clientWidth,h=box.clientHeight;if(!w||!h)return;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};
  fit();addEventListener('resize',fit);
  let vis=false,px=0,py=0;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(box);
  addEventListener('pointermove',e=>{px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5},{passive:true});
  const clk=new THREE.Clock();
  (function loop(){requestAnimationFrame(loop);const dt=Math.min(clk.getDelta(),.05);if(!vis)return;const k=reduce?0:1;
    groups.forEach(g=>g.pv.forEach(p=>p.rotation.y+=dt*g.spd*k));core.rotation.y+=dt*.4*k;wire.rotation.y-=dt*.15*k;
    sc.rotation.y+=(px*.6-sc.rotation.y)*.05;sc.rotation.x+=(py*.25-sc.rotation.x)*.05;r.render(sc,cam)})();
}
initSkills3D();

/* 3D card tilt */
if(matchMedia('(hover:hover)').matches&&!reduce)$$('.proj,.card,.stat').forEach(el=>{
  el.addEventListener('pointermove',e=>{const b=el.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;el.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px)`});
  el.addEventListener('pointerleave',()=>el.style.transform='')});

/* contact form */
const form=$('#form'),note=$('#note');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);
  if(!d.get('name')||!/\S+@\S+\.\S+/.test(d.get('email')||'')||!d.get('message')){note.textContent='Please fill in name, a valid email and a message.';return}
  location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent('New project — '+d.get('type'))}&body=${encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nProject: ${d.get('type')}\n\n${d.get('message')}`)}`;
  note.textContent='Thanks — your mail app should open with the message ready.'});

/* ================= 3D GALAXY ================= */
const canvas=$('#space');let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false})}catch(e){renderer=null}
if(renderer){
const small=innerWidth<700;
renderer.setPixelRatio(Math.min(devicePixelRatio||1,small?1.5:2));renderer.setClearColor(0x050810,1);
const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(55,1,.1,500);
const root=new THREE.Group();scene.add(root);          // everything that gets offset in hero

/* spiral galaxy */
const N=small?26000:70000,R=14,ARMS=3;
const pos=new Float32Array(N*3),col=new Float32Array(N*3),siz=new Float32Array(N);
const cIn=new THREE.Color('#ead7b4'),cMid=new THREE.Color('#7d9bd0'),cOut=new THREE.Color('#2c4a82'),tmp=new THREE.Color();
for(let i=0;i<N;i++){
  const r=Math.pow(Math.random(),1.6)*R,arm=(i%ARMS)/ARMS*Math.PI*2,spin=r*.62;
  const sp=(.35+r*.05),rnd=()=>Math.pow(Math.random(),2)*(Math.random()<.5?-1:1)*sp;
  const a=arm+spin;
  pos[i*3]=Math.cos(a)*r+rnd();pos[i*3+1]=rnd()*.45;pos[i*3+2]=Math.sin(a)*r+rnd();
  const t=r/R;t<.35?tmp.copy(cIn).lerp(cMid,t/.35):tmp.copy(cMid).lerp(cOut,(t-.35)/.65);
  col.set([tmp.r,tmp.g,tmp.b],i*3);siz[i]=.5+Math.random()*1.6;
}
const gg=new THREE.BufferGeometry();
gg.setAttribute('position',new THREE.BufferAttribute(pos,3));gg.setAttribute('color',new THREE.BufferAttribute(col,3));gg.setAttribute('size',new THREE.BufferAttribute(siz,1));
const pm=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
  uniforms:{px:{value:renderer.getPixelRatio()}},
  vertexShader:`attribute float size;attribute vec3 color;varying vec3 vc;uniform float px;void main(){vc=color;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=size*px*(60./-mv.z);gl_Position=projectionMatrix*mv;}`,
  fragmentShader:`varying vec3 vc;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vc,pow(1.-d*2.,2.)*.9);}`});
const galaxy=new THREE.Points(gg,pm);root.add(galaxy);

/* background stars */
const SN=small?1200:3000,sp=new Float32Array(SN*3);
for(let i=0;i<SN;i++){const v=new THREE.Vector3().randomDirection().multiplyScalar(80+Math.random()*120);sp.set([v.x,v.y,v.z],i*3)}
const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(sp,3));
const stars=new THREE.Points(sg,new THREE.PointsMaterial({color:0xcdd6ff,size:.55,transparent:true,opacity:.85,sizeAttenuation:true}));scene.add(stars);

/* glow sprite helper */
const glowTex=(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);
  g.addColorStop(0,'rgba(235,244,255,1)');g.addColorStop(.25,'rgba(140,180,240,.5)');g.addColorStop(1,'rgba(60,100,180,0)');x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c)})();
const sun=new THREE.Group();root.add(sun);
sun.add(new THREE.Mesh(new THREE.SphereGeometry(.9,48,32),new THREE.MeshBasicMaterial({color:0xeaf2ff})));
const halo=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,blending:THREE.AdditiveBlending,depthWrite:false}));halo.scale.setScalar(7);sun.add(halo);
root.add(new THREE.PointLight(0xdbe8ff,60,40,1.6));root.add(new THREE.AmbientLight(0x44587a,.9));

/* planets orbiting the sun = MERN stack */
const sys=new THREE.Group();sys.rotation.x=.38;root.add(sys);
const defs=[['MongoDB',2.6,.34,0x6fa89c,.7],['Express.js',3.8,.3,0xcfd6e0,.52],['React.js',5.0,.42,0x7fb2e5,.4],['Node.js',6.3,.38,0x9aa579,.31],['REST APIs',7.6,.32,0xc08a62,.24]];
const planets=[];
defs.forEach(([name,rad,size,color,spd],i)=>{
  const orb=new THREE.Mesh(new THREE.RingGeometry(rad-.012,rad+.012,160),new THREE.MeshBasicMaterial({color:0x8fb0e0,transparent:true,opacity:.35,side:THREE.DoubleSide}));orb.rotation.x=-Math.PI/2;sys.add(orb);
  const pivot=new THREE.Group();pivot.rotation.y=i*1.7;sys.add(pivot);
  const m=new THREE.Mesh(new THREE.SphereGeometry(size,40,28),new THREE.MeshStandardMaterial({map:planetTex(color),roughness:.8,metalness:.05,emissive:color,emissiveIntensity:.08}));m.position.x=rad;pivot.add(m);
  if(name==='React.js'){const rg=new THREE.Mesh(new THREE.RingGeometry(size*1.5,size*2.3,64),new THREE.MeshBasicMaterial({color:0xb7d3f0,transparent:true,opacity:.55,side:THREE.DoubleSide}));rg.rotation.x=Math.PI/2.4;m.add(rg)}
  if(name==='MongoDB'){const moon=new THREE.Group();m.add(moon);const mm=new THREE.Mesh(new THREE.SphereGeometry(.09,16,12),new THREE.MeshBasicMaterial({color:0xffffff}));mm.position.x=.7;moon.add(mm);planets.moon=moon}
  const lb=document.createElement('div');lb.className='plabel';lb.textContent=name;lb.style.color='#'+color.toString(16).padStart(6,'0');$('#labels').appendChild(lb);
  planets.push({pivot,m,spd,lb});
});
const v3=new THREE.Vector3();

/* layout */
let offX=0,offY=0,vw=0,vh=0;
function resize(){vw=innerWidth;vh=innerHeight;renderer.setSize(vw,vh,false);cam.aspect=vw/vh;cam.updateProjectionMatrix()}
resize();addEventListener('resize',resize);
let mx=0,my=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
let sy=0,sc=0;
addEventListener('scroll',()=>{sy=scrollY;nav.classList.toggle('s',sy>30)},{passive:true});nav.classList.toggle('s',scrollY>30);

const clock=new THREE.Clock();let camA=0,camR=17,camH=7;
function tick(){
  const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime,k=reduce?0:1;
  const max=Math.max(1,document.documentElement.scrollHeight-vh);sc+=((sy/max)-sc)*.06;
  const heroF=Math.max(0,1-sy/(vh*.9));
  const wide=vw/vh>1.15;
  // desktop: system to the right of text. mobile: system below text
  offX+=((wide?Math.min(7.2,vw/vh*3.5)*heroF:0)-offX)*.07; offY+=((wide?0:-3.4*heroF)-offY)*.07;
  root.position.set(offX,offY,0);
  // camera glides around the galaxy as you scroll
  const ang=sc*Math.PI*1.6+mx*.35,rad=camR+sc*6*(wide?1:1.3)+(wide?0:3),h=camH-sc*4+my*2.2+(wide?0:3);
  camA+=(ang-camA)*.08;
  cam.position.set(Math.sin(camA)*rad*.45,h,Math.cos(camA)*rad);cam.lookAt(offX*.35,offY*.4,0);
  galaxy.rotation.y+=dt*.045*k;stars.rotation.y+=dt*.004*k;
  sys.visible=sun.visible=heroF>.03;sys.scale.setScalar(.5+.5*heroF);sys.rotation.z=Math.sin(t*.2)*.05;
  halo.material.rotation=t*.1;halo.scale.setScalar(7+Math.sin(t*1.6)*.35);
  planets.forEach(p=>{
    p.pivot.rotation.y+=dt*p.spd*k;p.m.rotation.y+=dt*.8*k;
    p.m.getWorldPosition(v3);v3.project(cam);
    const on=v3.z<1&&heroF>.02,x=(v3.x*.5+.5)*vw,y=(-v3.y*.5+.5)*vh;
    p.lb.style.opacity=on?Math.min(1,heroF*1.6):0;p.lb.style.transform=`translate(${x+14}px,${y-8}px)`;
  });
  if(planets.moon)planets.moon.rotation.y+=dt*2.4*k;
  renderer.render(scene,cam);requestAnimationFrame(tick);
}
tick();
}
</script>
</body>
</html>