'use client';

import styles from './VideoIntro.module.css';

export default function ScrollIndicator() {
  const scrollToWork = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToWork();
    }
  };

  return (
    <button
      className={styles.scrollIndicator}
      type="button"
      aria-label="Scroll to about section"
      onClick={scrollToWork}
      onKeyDown={handleKeyDown}
      data-scroll-indicator
    >
      <span>Scroll</span>
      <i aria-hidden="true" />
    </button>
  );
}
