'use client';

import styles from './VideoIntro.module.css';

export default function Controls({
  muted,
  playing,
  videoReady,
  onToggleMute,
  onTogglePlay
}) {
  if (!videoReady) return null;

  return (
    <div className={styles.controls} data-controls>
      <button className={styles.controlButton} type="button" onClick={onTogglePlay} aria-label={playing ? 'Pause video' : 'Play video'}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button className={styles.controlButton} type="button" onClick={onToggleMute} aria-label={muted ? 'Unmute video' : 'Mute video'}>
        {muted ? <MutedIcon /> : <SoundIcon />}
      </button>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5.8v12.4c0 .8.87 1.29 1.55.86l9.72-6.2a1.02 1.02 0 0 0 0-1.72l-9.72-6.2A1.01 1.01 0 0 0 7 5.8Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 5h2.5c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H7.8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1Zm6 0h2.5c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1Z" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9.4v5.2h3.2L12 19V5L7.2 9.4H4Zm10.8-1.1v7.4c1.3-.72 2.15-2.1 2.15-3.7s-.85-2.98-2.15-3.7Zm0-3.3v2.1A6 6 0 0 1 19.2 12a6 6 0 0 1-4.4 4.9V19a8 8 0 0 0 0-14Z" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4.7 3.3 16 16-1.4 1.4-3.1-3.1c-.44.26-.9.48-1.4.64v-2.1l-2.8-2.8V19l-4.8-4.4H4V9.4h3.08L3.3 4.7l1.4-1.4ZM12 5v3.75L9.83 6.58 12 5Zm6.95 7c0 .92-.2 1.78-.58 2.56l-1.52-1.52c.07-.33.1-.68.1-1.04a4.25 4.25 0 0 0-2.15-3.7V6.1A6.02 6.02 0 0 1 18.95 12Z" />
    </svg>
  );
}
