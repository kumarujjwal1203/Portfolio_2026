'use client';
import { useEffect } from 'react';
import { heroEntrance, skillCardsEntrance } from '../lib/gsapAnimations';

const TECH = ['MERN Stack','React.js','Node.js','Express.js','MongoDB',
              'JavaScript','Java','Kotlin','Android','REST APIs','Git/GitHub','DSA·OOP'];

const SKILLS = [
  { icon: '⚛', name: 'React.js',    type: 'Frontend' },
  { icon: '▲', name: 'Next.js',     type: 'Full-stack' },
  { icon: '🟢', name: 'Node.js',    type: 'Backend' },
  { icon: '🍃', name: 'MongoDB',    type: 'Database' },
  { icon: '☕', name: 'Java',       type: 'Language' },
  { icon: '🐍', name: 'Python',     type: 'Language' },
  { icon: '🌀', name: 'Tailwind',   type: 'Styling' },
];

export default function HeroContent() {
  useEffect(() => {
    heroEntrance();
    skillCardsEntrance();
  }, []);

  return (
    <>
      <div className="heroContent" id="hero-content">
        <div className="contentCol">
          <p className="tagline">Software Developer · MERN Stack</p>
          <h1 className="heroName">
            <span className="first">Ujjwal</span>
            <span className="last">Kumar</span>
          </h1>
          <p className="heroRole">Full-Stack Developer &amp; CS Engineering Student</p>
          <p className="heroSummary">
            Quick learner and passionate CS student building impactful technology
            solutions across web and mobile platforms.
          </p>
          <div className="techRow">
            {TECH.map(t => <span key={t} className="techBadge">{t}</span>)}
          </div>
          <div className="ctaRow">
            <a href="#projects" className="btnPrimary">View Projects</a>
            <a href="mailto:kumarujjwal1203@gmail.com" className="btnGlass">Contact Me</a>
            <a href="https://linkedin.com/in/-ujjwal-k-" target="_blank" rel="noreferrer" className="btnGlass">LinkedIn</a>
          </div>
        </div>
      </div>

      <aside className="skillCards" aria-label="Skills">
        {SKILLS.map((s, i) => (
          <div key={s.name} className="skillCard" data-float={i}>
            <div className="skillIcon">{s.icon}</div>
            <div>
              <div className="skillName">{s.name}</div>
              <div className="skillType">{s.type}</div>
            </div>
          </div>
        ))}
      </aside>
    </>
  );
}
