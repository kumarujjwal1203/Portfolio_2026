'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function heroEntrance() {
  const tl = gsap.timeline({ delay: 0.4 });
  tl.to('#video-fg',        { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' }, 0.1);
  tl.to('.tagline',         { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.3);
  tl.to('.heroName',        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.55);
  tl.to('.heroRole',        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.75);
  tl.to('.heroSummary',     { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.9);
  tl.to('.techRow',         { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 1.05);
  tl.to('.ctaRow',          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 1.2);
  tl.to('.controls',        { opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.35);
  tl.to('.scrollIndicator', { opacity: 0.65, duration: 0.6, ease: 'power2.out' }, 1.5);
  return tl;
}

export function skillCardsEntrance() {
  gsap.to('.skillCard', {
    opacity: 1, x: 0, duration: 0.6,
    ease: 'power2.out', stagger: 0.08, delay: 1.2,
  });
  document.querySelectorAll('.skillCard').forEach((card, i) => {
    gsap.to(card, {
      y: i % 2 === 0 ? -8 : 8,
      duration: 2.5 + i * 0.3,
      ease: 'sine.inOut', yoyo: true, repeat: -1,
    });
  });
}

export function scrollReveal(selector) {
  const els = document.querySelectorAll(selector);
  els.forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0, y: 40, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
    });
  });
}

export function cleanup() {
  ScrollTrigger.getAll().forEach(t => t.kill());
  gsap.killTweensOf('*');
}
