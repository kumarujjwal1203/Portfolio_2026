'use client';

import { useEffect, useRef, useState } from 'react';
import CinematicLayer from './CinematicLayer';
import Controls from './Controls';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';
import { runHeroEntrance } from '../lib/gsapAnimations';
import { profile } from '../lib/portfolioData';
import styles from './VideoIntro.module.css';

const VIDEO_SRC = '/video/hero.mp4';

export default function VideoIntro() {
  const rootRef = useRef(null);
  const foregroundRef = useRef(null);
  const backgroundRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [soundHintVisible, setSoundHintVisible] = useState(true);
  const [videoReady, setVideoReady] = useState(true);

  useEffect(() => {
    const ctx = runHeroEntrance(rootRef.current);
    const hintTimer = window.setTimeout(() => setSoundHintVisible(false), 5200);
    const readinessTimer = window.setTimeout(() => {
      if (foregroundRef.current?.readyState === 0 && backgroundRef.current?.readyState === 0) {
        setVideoReady(false);
      }
    }, 2200);

    return () => {
      ctx?.kill();
      window.clearTimeout(hintTimer);
      window.clearTimeout(readinessTimer);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const pauseVideos = () => {
      foregroundRef.current?.pause();
      backgroundRef.current?.pause();
      setPlaying(false);
    };

    const playVideos = async () => {
      const foreground = foregroundRef.current;
      const background = backgroundRef.current;
      if (!foreground || !background || !videoReady) return;

      background.play().catch(() => {});

      try {
        await foreground.play();
        setPlaying(true);
      } catch {
        foreground.muted = true;
        setMuted(true);
        foreground.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
          playVideos();
        } else {
          pauseVideos();
        }
      },
      { threshold: [0, 0.2, 0.35, 0.6] }
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, [videoReady]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const startWithSound = () => {
      const foreground = foregroundRef.current;
      const background = backgroundRef.current;
      if (!foreground || !background) return;

      foreground.muted = false;
      setMuted(false);
      setSoundHintVisible(false);
      Promise.allSettled([foreground.play(), background.play()]).then(([foregroundResult]) => {
        setPlaying(foregroundResult.status === 'fulfilled');
      });
    };

    root.addEventListener('pointerdown', startWithSound, { once: true });
    root.addEventListener('touchstart', startWithSound, { once: true, passive: true });

    return () => {
      root.removeEventListener('pointerdown', startWithSound);
      root.removeEventListener('touchstart', startWithSound);
    };
  }, []);

  const handleVideoError = () => {
    setVideoReady(false);
  };

  const togglePlay = () => {
    const foreground = foregroundRef.current;
    const background = backgroundRef.current;
    if (!foreground || !background) return;

    if (playing) {
      foreground.pause();
      background.pause();
      setPlaying(false);
      return;
    }

    Promise.allSettled([foreground.play(), background.play()]).then(([foregroundResult]) => {
      if (foregroundResult.status === 'fulfilled') {
        setPlaying(true);
        return;
      }

      foreground.muted = true;
      setMuted(true);
      foreground.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    });
  };

  const toggleMute = () => {
    const nextMuted = !muted;
    if (foregroundRef.current) foregroundRef.current.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted) setSoundHintVisible(false);
  };

  return (
    <section className={styles.hero} ref={rootRef} aria-label="Cinematic introduction">
      <header className={styles.nav} data-hero-line>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className={styles.emailButton} href={`mailto:${profile.email}`}>Email me</a>
      </header>
      <video
        className={styles.videoBackground}
        ref={backgroundRef}
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={handleVideoError}
      />
      <CinematicLayer />
      <div className={styles.orangePractical} aria-hidden="true" />
      <div className={styles.bluePractical} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <video
        className={`${styles.videoForeground} ${videoReady ? '' : styles.videoUnavailable}`}
        ref={foregroundRef}
        src={VIDEO_SRC}
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="metadata"
        onError={handleVideoError}
        data-video-fg
      />
      <HeroContent />
      <Controls
        muted={muted}
        playing={playing}
        soundHintVisible={soundHintVisible}
        videoReady={videoReady}
        onToggleMute={toggleMute}
        onTogglePlay={togglePlay}
      />
      <ScrollIndicator />
    </section>
  );
}
