'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function runHeroEntrance(root) {
  const scope = root || document;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.18 });

  tl.fromTo(
    scope.querySelector('[data-video-fg]'),
    { opacity: 0, y: 34, scale: 1.018 },
    { opacity: 1, y: 0, scale: 1, duration: 1.5 },
    0
  )
    .fromTo(
      scope.querySelectorAll('[data-hero-line]'),
      { opacity: 0, y: 28, filter: 'blur(14px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.95, stagger: 0.1 },
      0.18
    )
    .fromTo(
      scope.querySelector('[data-controls]'),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.55 },
      1.1
    )
    .fromTo(
      scope.querySelector('[data-scroll-indicator]'),
      { opacity: 0 },
      { opacity: 0.72, duration: 0.7 },
      1.2
    );

  return tl;
}

export function runSectionReveals() {
  const ctx = gsap.context(() => {
    gsap.utils.toArray('[data-reveal]').forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 34, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          delay: Math.min(index * 0.06, 0.18),
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 84%' }
        }
      );
    });
  });

  return () => ctx.revert();
}
