'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/VideoIntro.module.css';
import CinematicLayer from './CinematicLayer';
import HeroContent from './HeroContent';
import Controls from './Controls';
import ScrollIndicator from './ScrollIndicator';

export default function VideoIntro() {
  const fgRef = useRef(null);
  const bgRef = useRef(null);
  const [muted,   setMuted]   = useState(true);
  const [playing, setPlaying] = useState(true);
  const [badgeVisible, setBadgeVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBadgeVisible(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const toggleMute = () => {
    const next = !muted;
    if (fgRef.current) fgRef.current.muted = next;
    setMuted(next);
    if (!next) setBadgeVisible(false);
  };

  const togglePlay = () => {
    if (playing) { fgRef.current?.pause(); bgRef.current?.pause(); }
    else         { fgRef.current?.play();  bgRef.current?.play(); }
    setPlaying(p => !p);
  };

  return (
    <section className={styles.hero} id="hero">
      {/* Ambient background */}
      <video ref={bgRef} className={styles.videoBg}
        autoPlay loop muted playsInline src="/video/hero.mp4" />

      {/* Particle layer */}
      <CinematicLayer />

      {/* Lighting */}
      <div className={styles.overlayVignette} />
      <div className={styles.orangeLight} />
      <div className={styles.blueLight} />

      {/* Foreground video */}
      <video ref={fgRef} id="video-fg" className={styles.videoFg}
        autoPlay loop muted playsInline src="/video/hero.mp4" />

      {/* Hero text */}
      <HeroContent />

      {/* Controls */}
      <Controls
        muted={muted} playing={playing} badgeVisible={badgeVisible}
        onToggleMute={toggleMute} onTogglePlay={togglePlay}
      />

      {/* Scroll */}
      <ScrollIndicator />
    </section>
  );
}
