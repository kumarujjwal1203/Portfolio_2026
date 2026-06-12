'use client';

import { useEffect, useState } from 'react';
import { credentials, highlights, profile, services, skills } from '../lib/portfolioData';
import { runSectionReveals } from '../lib/gsapAnimations';
import ProjectsSection from './ProjectsSection';
import styles from './PortfolioSections.module.css';

export default function PortfolioSections() {
  const [aboutProgress, setAboutProgress] = useState(0);
  const [activeService, setActiveService] = useState('01');
  const contactCards = [
    {
      label: 'Email',
      icon: '@',
      value: profile.email,
      href: `mailto:${profile.email}`
    },
    {
      label: 'LinkedIn',
      icon: 'in',
      value: 'in/-ujjwal-k',
      href: profile.linkedin
    },
    {
      label: 'GitHub',
      icon: '{}',
      value: '@kumarujjwal1203',
      href: profile.github
    },
    {
      label: 'Phone',
      icon: '#',
      value: profile.phone,
      href: `tel:${profile.phone.replaceAll(' ', '')}`
    }
  ];

  useEffect(() => {
    const cleanupReveals = runSectionReveals();
    let rafId = 0;

    const clamp = (value) => Math.min(1, Math.max(0, value));
    const updateAboutText = () => {
      const copy = document.querySelector('[data-about-copy]');
      const copyTop = copy?.getBoundingClientRect().top || 0;
      const progress = clamp((window.innerHeight * 0.82 - copyTop) / 420);
      setAboutProgress(progress);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateAboutText);
    };
    const refreshTimers = [120, 500, 1000].map((delay) => window.setTimeout(scheduleUpdate, delay));

    updateAboutText();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);

    return () => {
      cleanupReveals();
      window.cancelAnimationFrame(rafId);
      refreshTimers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
    };
  }, []);

  const aboutCharacters = Array.from(profile.summary);
  const clamp = (value) => Math.min(1, Math.max(0, value));
  const highlightSweep = aboutProgress * (aboutCharacters.length + 24);

  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.aboutTitle} data-reveal>
          <span className={styles.glassGlyph}>CS</span>
          <h2>About Me</h2>
          <span className={styles.glassGlyph}>AI</span>
        </div>
        <p className={styles.aboutCopy} data-about-copy>
          {aboutCharacters.map((character, index) => (
            <span
              className={styles.aboutCharacter}
              data-about-character
              key={`${character}-${index}`}
              style={{
                color: `rgba(255, 255, 255, ${0.46 + clamp((highlightSweep - index) / 18) * 0.5})`,
                opacity: 0.42 + clamp((highlightSweep - index) / 18) * 0.58
              }}
            >
              {character}
            </span>
          ))}
        </p>
        <div className={styles.skillMatrix} data-reveal>
          {skills.map((group) => (
            <div className={styles.skillRow} key={group.label}>
              <strong>{group.label}</strong>
              <div>
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
        <a href="#contact" className={styles.glowButton} data-reveal>Contact Me</a>
      </section>

      <section className={styles.services} id="services">
        <h2 data-reveal>Services</h2>
        <div className={styles.serviceList}>
          {services.map((service) => (
            <article
              className={`${styles.serviceItem} ${activeService === service.number ? styles.serviceItemActive : ''}`}
              key={service.number}
              data-reveal
              role="button"
              tabIndex={0}
              onMouseEnter={() => setActiveService(service.number)}
              onFocus={() => setActiveService(service.number)}
              onClick={() => setActiveService(service.number)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveService(service.number);
                }
              }}
            >
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProjectsSection />

      <section className={styles.signal}>
        <div className={styles.signalPanel} data-reveal>
          <p className={styles.eyebrow}>Training</p>
          <h2>Java application development with GUI and OOP foundations.</h2>
          <p>Completed summer training at Lovely Professional University with hands-on focus on Java, OOP, GUI development, and interactive application building.</p>
          <a
            className={styles.certificateLink}
            href="https://drive.google.com/file/d/1694nU2n176PCV9iBpA50PKyeTJX8lOG0/view"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>
        <div className={styles.signalPanel} data-reveal>
          <p className={styles.eyebrow}>Credentials</p>
          <ul className={styles.credentialsList}>
            {credentials.map((item) => (
              <li key={item.title}>
                <span>{item.title}</span>
                <a href={item.url} target="_blank" rel="noreferrer">{item.platform}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.signalPanel} data-reveal>
          <p className={styles.eyebrow}>Highlights</p>
          <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <footer className={styles.footer} id="contact" data-reveal>
        <h2>Get in Touch</h2>
        <p>Pick whichever channel suits you</p>
        <div className={styles.contactGrid}>
          {contactCards.map((card) => (
            <a className={styles.contactCard} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noreferrer' : undefined} key={card.label}>
              <span className={styles.contactIcon}>{card.icon}</span>
              <span className={styles.contactArrow}>↗</span>
              <small>{card.label}</small>
              <strong>{card.value}</strong>
            </a>
          ))}
        </div>
        <div className={styles.footerMeta}>
          <span>© 2026 {profile.firstName} {profile.lastName}</span>
          <span>Designed & Built in Patna</span>
        </div>
      </footer>
    </>
  );
}
