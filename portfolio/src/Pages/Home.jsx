import React, { useEffect, useRef, useState } from 'react';
// import profileImage from '../assets/Screenshot 2026-05-25 221652.png';

// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
const personalInfo = {
  name: 'Rajat Raj Pandey',
  firstName: 'Rajat',
  title: 'Final Year B.Tech CSE Student',
  titleWords: ['Developer', 'Engineer', 'Builder', 'Problem Solver'],
  shortIntro:
    'Aspiring computer science engineer with a passion for software development, system design, and building efficient, scalable solutions.',
  resumeLink: '#',
  githubLink: 'https://github.com/rajatrajdav',
  contactLink: '#contact-form',
  email: 'rajatrajdav@gmail.com',
  social: {
    github: 'https://github.com/rajatrajdav',
    linkedin: 'https://linkedin.com/in/rajatraj',
    email: 'mailto:rajatrajdav@gmail.com',
    leetcode: 'https://leetcode.com/rajatrajdav',
  },
};

const skills = [
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 78 },
  { name: 'Python', level: 82 },
  { name: 'System Design', level: 70 },
  { name: 'SQL / NoSQL', level: 75 },
  { name: 'DSA & Algorithms', level: 88 },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Full-Stack Development',
    desc: 'Building end-to-end web applications with modern frameworks like React, Node.js, and cloud-ready architectures that scale.',
    tag: 'MERN · REST · GraphQL',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Algorithm & DSA',
    desc: 'Solving complex computational problems with optimized data structures and algorithms. Active competitive programmer on LeetCode.',
    tag: 'C++ · Python · LeetCode',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'System & DB Design',
    desc: 'Designing scalable system architectures, relational and NoSQL databases with attention to performance and data integrity.',
    tag: 'PostgreSQL · MongoDB · Redis',
  },
];

const projects = [
  { title: 'DevConnect', desc: 'A developer networking platform with real-time chat and project collaboration.', tags: ['React', 'Socket.io', 'MongoDB'], color: '#00e5ff' },
  { title: 'AlgoViz', desc: 'Visual learning tool for sorting and graph algorithms with step-by-step animation.', tags: ['JavaScript', 'Canvas API', 'CSS'], color: '#a78bfa' },
  { title: 'TaskFlow', desc: 'Kanban-style project management app with AI-assisted task prioritization.', tags: ['Next.js', 'PostgreSQL', 'OpenAI'], color: '#34d399' },
  { title: 'StockSense', desc: 'Real-time stock tracker with ML-based trend prediction and portfolio analysis.', tags: ['Python', 'Flask', 'TensorFlow'], color: '#f59e0b' },
  { title: 'SmartBlog', desc: 'Full-featured CMS with markdown support, auth, and SEO optimization built-in.', tags: ['Node.js', 'React', 'MySQL'], color: '#f43f5e' },
  { title: 'ChatBot SDK', desc: 'Plug-and-play chatbot library with NLP capabilities for web integrations.', tags: ['TypeScript', 'NLP.js', 'npm'], color: '#00e5ff' },
];

// ─── ICONS ────────────────────────────────────────────────────────────────────
const Icons = {
  Github: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.442 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  Linkedin: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Code: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  ArrowUp: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  ),
  Send: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Download: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
};

// ─── ANIMATED TYPING EFFECT ───────────────────────────────────────────────────
const TypingText = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-cyan-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// ─── SKILL BAR ────────────────────────────────────────────────────────────────
const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-white">{name}</span>
        <span className="text-cyan-400 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

// ─── HEXAGONAL PROFILE ────────────────────────────────────────────────────────
const HexProfile = ({ size = 280 }) => {
  const clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Rotating border rings */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          clipPath: clip,
          background: 'conic-gradient(from 0deg, #00e5ff, #a78bfa, #00e5ff)',
          animation: 'spin 6s linear infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          width: size - 8,
          height: size - 8,
          clipPath: clip,
          background: '#0d1117',
        }}
      />
      {/* Avatar placeholder — swap src for profileImage import */}
      <div
        className="absolute flex items-center justify-center overflow-hidden"
        style={{ width: size - 16, height: size - 16, clipPath: clip, background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
      >
        {/* Replace this div with <img src={profileImage} ... /> once you import it */}
        <div className="flex flex-col items-center gap-3 text-cyan-400/50">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
          <span className="text-xs font-mono">Add your photo</span>
        </div>
      </div>
      {/* Orbiting dot */}
      <div className="absolute inset-0" style={{ animation: 'spin 4s linear infinite' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#00e5ff]" />
      </div>
    </div>
  );
};

// ─── NAV LINK ─────────────────────────────────────────────────────────────────
const NavLink = ({ href, children, active }) => (
  <a
    href={href}
    className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 group ${
      active ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
    }`}
  >
    {children}
    <span
      className={`absolute -bottom-1 left-0 h-px bg-cyan-400 transition-all duration-300 ${
        active ? 'w-full' : 'w-0 group-hover:w-full'
      }`}
    />
  </a>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'services', 'portfolio', 'contact-form'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact-form', id: 'contact-form' },
  ];

  return (
    <>
      {/* ── GLOBAL STYLES ─────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=Manrope:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan: #00e5ff;
          --violet: #a78bfa;
          --bg: #080c10;
          --surface: #0f1419;
          --surface2: #161d27;
          --border: rgba(255,255,255,0.07);
          --text: #e2e8f0;
          --muted: #64748b;
        }

        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'Manrope', sans-serif; }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow-pulse { 0%,100% { box-shadow: 0 0 20px rgba(0,229,255,0.3); } 50% { box-shadow: 0 0 40px rgba(0,229,255,0.7); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes drift { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-20px) scale(1.05); } 66% { transform: translate(-20px,15px) scale(0.95); } }

        .fade-up { animation: fadeUp 0.7s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }

        .font-display { font-family: 'Syne', sans-serif; }
        .font-mono-custom { font-family: 'DM Mono', monospace; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px;
          background: var(--cyan);
          color: #080c10;
          font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 14px; letter-spacing: 0.05em;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid var(--cyan);
        }
        .btn-primary:hover { background: transparent; color: var(--cyan); transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,229,255,0.3); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px;
          background: transparent;
          color: var(--cyan);
          font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: 14px; letter-spacing: 0.05em;
          border-radius: 50px;
          text-decoration: none;
          border: 2px solid rgba(0,229,255,0.4);
          transition: all 0.3s ease;
        }
        .btn-outline:hover { border-color: var(--cyan); background: rgba(0,229,255,0.08); transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,229,255,0.15); }

        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(0,229,255,0.04), transparent 40%);
          opacity: 0; transition: opacity 0.3s;
          pointer-events: none;
        }
        .card:hover::before { opacity: 1; }
        .card:hover { border-color: rgba(0,229,255,0.25); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }

        .noise-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .gradient-text { background: linear-gradient(135deg, var(--cyan) 0%, var(--violet) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .section-label {
          font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--cyan); display: flex; align-items: center; gap: 12px;
        }
        .section-label::after { content: ''; flex: 0 0 40px; height: 1px; background: var(--cyan); }

        .glow { filter: drop-shadow(0 0 8px var(--cyan)); }
        .project-card-accent { position: absolute; top: 0; right: 0; width: 120px; height: 120px; border-radius: 0 20px 0 100%; opacity: 0.07; }

        .contact-input {
          width: 100%; padding: 14px 18px;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--text);
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .contact-input:focus { border-color: rgba(0,229,255,0.5); box-shadow: 0 0 0 3px rgba(0,229,255,0.08); }
        .contact-input::placeholder { color: var(--muted); }

        /* Stats counter animation */
        .stat-num { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 2.5rem; line-height: 1; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.3); border-radius: 4px; }
      `}</style>

      <div className="noise-overlay" />

      {/* Ambient blobs */}
      <div aria-hidden className="fixed pointer-events-none" style={{ top: '10%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)', animation: 'drift 18s ease-in-out infinite', zIndex: 0 }} />
      <div aria-hidden className="fixed pointer-events-none" style={{ bottom: '15%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)', animation: 'drift 22s ease-in-out infinite reverse', zIndex: 0 }} />

      {/* ─────────────────────────────────────────────────────────────── HEADER */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#home" style={{ textDecoration: 'none' }}>
            <span className="font-display" style={{ fontSize: 22, fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
              R<span style={{ color: 'var(--cyan)' }}>.</span>Pandey
            </span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {navItems.map((item) => (
              <NavLink key={item.id} href={item.href} active={activeSection === item.id}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <a href={personalInfo.resumeLink} className="btn-primary" style={{ padding: '9px 22px', fontSize: 13 }}>
            <Icons.Download /> Resume
          </a>
        </nav>
      </header>

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ───────────────────────────────────────────────────────── HERO */}
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 70 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div className="section-label fade-up">
                <span className="font-mono-custom">Available for opportunities</span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
              </div>

              <h1 className="font-display fade-up delay-1" style={{ fontSize: 'clamp(42px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'white' }}>
                Hi, I'm<br />
                <span style={{ color: 'var(--cyan)' }}>Rajat Raj</span><br />
                Pandey.
              </h1>

              <p className="fade-up delay-2" style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8, maxWidth: 480 }}>
                A <TypingText words={personalInfo.titleWords} /> — {personalInfo.shortIntro}
              </p>

              {/* Stats row */}
              <div className="fade-up delay-3" style={{ display: 'flex', gap: 32, paddingTop: 8 }}>
                {[
                  { val: '6+', label: 'Projects Built' },
                  { val: '400+', label: 'Problems Solved' },
                  { val: '3.5', label: 'CGPA (10)' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="font-display" style={{ fontSize: 28, fontWeight: 800, color: 'white' }}>
                      {val}<span style={{ color: 'var(--cyan)' }}>+</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="fade-up delay-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href={personalInfo.contactLink} className="btn-primary">
                  <Icons.Send /> Let's Talk
                </a>
                <a href={personalInfo.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Icons.Github /> GitHub
                </a>
              </div>

              {/* Social strip */}
              <div className="fade-up delay-5" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <span className="font-mono-custom" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.15em' }}>FOLLOW —</span>
                {[
                  { href: personalInfo.social.linkedin, Icon: Icons.Linkedin, label: 'LinkedIn' },
                  { href: personalInfo.social.github, Icon: Icons.Github, label: 'GitHub' },
                  { href: personalInfo.social.leetcode, Icon: Icons.Code, label: 'LeetCode' },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                    style={{ color: 'var(--muted)', transition: 'color 0.2s, transform 0.2s', display: 'flex' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.transform = 'none'; }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Hex image + floating tags */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', animation: 'float 5s ease-in-out infinite' }}>
              <HexProfile size={320} />

              {/* Floating badges */}
              {[
                { text: 'React', top: '5%', right: '-5%' },
                { text: 'Node.js', bottom: '15%', right: '-8%' },
                { text: 'Python', bottom: '5%', left: '0%' },
                { text: 'DSA ★', top: '15%', left: '-5%' },
              ].map(({ text, ...pos }) => (
                <div key={text}
                  style={{
                    position: 'absolute', ...pos,
                    padding: '6px 14px', borderRadius: 50,
                    background: 'var(--surface)', border: '1px solid rgba(0,229,255,0.25)',
                    fontSize: 12, fontWeight: 600, color: 'var(--cyan)',
                    fontFamily: "'DM Mono', monospace",
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────── ABOUT */}
        <section id="about" style={{ padding: '100px 24px', background: 'var(--surface)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

              {/* Left — visual column */}
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: 24, overflow: 'hidden', background: 'var(--surface2)', border: '1px solid var(--border)', padding: 32 }}>
                  <div className="font-mono-custom" style={{ fontSize: 13, color: 'var(--cyan)', marginBottom: 24 }}>// about_me.json</div>
                  <pre style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.8, fontFamily: "'DM Mono', monospace" }}>
{`{
  "name": "Rajat Raj Pandey",
  "role": "CSE Final Year",
  "university": "B.Tech",
  "location": "India",
  "status": "Open to Roles",
  "interests": [
    "Software Engineering",
    "System Design",
    "Competitive Prog.",
    "Open Source"
  ],
  "available": true
}`}
                  </pre>
                </div>

                {/* Skill bars card */}
                <div style={{ marginTop: 24, background: 'var(--surface2)', borderRadius: 20, padding: 28, border: '1px solid var(--border)' }}>
                  <div className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 20 }}>Core Skills</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {skills.map((s) => <SkillBar key={s.name} {...s} />)}
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div className="section-label">About Me</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(36px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.1 }}>
                  Who I <span style={{ color: 'var(--cyan)' }}>Am</span>
                </h2>
                <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: 15 }}>
                  I'm a passionate final-year Computer Science student with a love for transforming complex ideas into clean, efficient code. My journey in tech started with curiosity and evolved into a deep-rooted drive to build things that matter.
                </p>
                <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: 15 }}>
                  From competitive programming battles to architecting full-stack web applications, I thrive in challenging environments. I believe in writing code that not only works but is maintainable, scalable, and elegant.
                </p>
                <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: 15 }}>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or preparing for technical interviews with renewed enthusiasm.
                </p>

                <div style={{ display: 'flex', gap: 16, paddingTop: 8, flexWrap: 'wrap' }}>
                  <a href={personalInfo.resumeLink} className="btn-primary"><Icons.Download /> Download CV</a>
                  <a href={`mailto:${personalInfo.email}`} className="btn-outline">Say Hello →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────── SERVICES */}
        <section id="services" style={{ padding: '100px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>
                <span style={{ flex: '0 0 40px', height: 1, background: 'var(--cyan)', display: 'inline-block' }} />
                What I Do
                <span style={{ flex: '0 0 40px', height: 1, background: 'var(--cyan)', display: 'inline-block' }} />
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(36px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'white', marginTop: 16, lineHeight: 1.1 }}>
                My <span style={{ color: 'var(--cyan)' }}>Services</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {services.map((s, i) => (
                <div key={i} className="card" style={{ padding: 36 }}
                  onMouseMove={e => {
                    const r = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                  }}
                >
                  <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(0,229,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)', marginBottom: 24, border: '1px solid rgba(0,229,255,0.2)' }}>
                    {s.icon}
                  </div>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: 14, marginBottom: 20 }}>{s.desc}</p>
                  <div className="font-mono-custom" style={{ fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.05em', padding: '6px 12px', background: 'rgba(0,229,255,0.06)', borderRadius: 50, display: 'inline-block', border: '1px solid rgba(0,229,255,0.15)' }}>
                    {s.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────── PROJECTS */}
        <section id="portfolio" style={{ padding: '100px 24px', background: 'var(--surface)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>
                <span style={{ flex: '0 0 40px', height: 1, background: 'var(--cyan)', display: 'inline-block' }} />
                Portfolio
                <span style={{ flex: '0 0 40px', height: 1, background: 'var(--cyan)', display: 'inline-block' }} />
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(36px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'white', marginTop: 16 }}>
                Featured <span style={{ color: 'var(--cyan)' }}>Projects</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
              {projects.map((p, i) => (
                <div key={i} className="card" style={{ padding: 28, cursor: 'pointer' }}
                  onMouseMove={e => {
                    const r = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                  }}
                >
                  <div className="project-card-accent" style={{ background: p.color }} />
                  {/* Project num */}
                  <div className="font-mono-custom" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 16 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 50, background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'DM Mono', monospace" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Hover arrow */}
                  <div style={{ marginTop: 20, color: p.color, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                    View Project <span>→</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href={personalInfo.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Icons.Github /> See All on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────── CONTACT */}
        <section id="contact-form" style={{ padding: '100px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>
                <span style={{ flex: '0 0 40px', height: 1, background: 'var(--cyan)', display: 'inline-block' }} />
                Get In Touch
                <span style={{ flex: '0 0 40px', height: 1, background: 'var(--cyan)', display: 'inline-block' }} />
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(36px, 4vw, 54px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'white', marginTop: 16 }}>
                Let's <span style={{ color: 'var(--cyan)' }}>Connect</span>
              </h2>
              <p style={{ color: '#64748b', marginTop: 16, lineHeight: 1.7, maxWidth: 500, margin: '16px auto 0' }}>
                Whether it's a full-time role, internship, freelance project, or just a tech chat — my inbox is always open.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40 }}>
              {/* Info panel */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { label: 'GitHub', value: 'rajatrajdav', href: personalInfo.social.github },
                  { label: 'LinkedIn', value: '/in/rajatraj', href: personalInfo.social.linkedin },
                  { label: 'LeetCode', value: 'rajatrajdav', href: personalInfo.social.leetcode },
                ].map(({ label, value, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 20, borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <span className="font-mono-custom" style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
                    <span style={{ fontSize: 14, color: 'white', fontWeight: 500 }}>{value}</span>
                  </a>
                ))}
              </div>

              {/* Form */}
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 24, padding: 36 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em' }}>Full Name</label>
                      <input type="text" placeholder="John Doe" className="contact-input" />
                    </div>
                    <div>
                      <label style={{ fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em' }}>Email</label>
                      <input type="email" placeholder="john@example.com" className="contact-input" />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em' }}>Subject</label>
                    <input type="text" placeholder="Internship Opportunity / Project Collab..." className="contact-input" />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em' }}>Message</label>
                    <textarea rows={5} placeholder="Tell me about the opportunity..." className="contact-input" style={{ resize: 'vertical' }} />
                  </div>
                  <button
                    type="button"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
                  >
                    <Icons.Send /> Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────── FOOTER */}
        <footer style={{ padding: '40px 24px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>
                R<span style={{ color: 'var(--cyan)' }}>.</span>Pandey
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
                © {new Date().getFullYear()} Rajat Raj Pandey · Built with React
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { Icon: Icons.Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { Icon: Icons.Github, href: personalInfo.social.github, label: 'GitHub' },
                { Icon: Icons.Code, href: personalInfo.social.leetcode, label: 'LeetCode' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--muted)', transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'; e.currentTarget.style.background = 'rgba(0,229,255,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  <Icon />
                </a>
              ))}
            </div>

            <a href="#home"
              style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)', color: 'var(--cyan)', transition: 'all 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,229,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,229,255,0.1)'}
            >
              <Icons.ArrowUp />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PortfolioPage;