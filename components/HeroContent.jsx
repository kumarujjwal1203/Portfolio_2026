import { profile } from '../lib/portfolioData';
import styles from './VideoIntro.module.css';

export default function HeroContent() {
  return (
    <div className={styles.content}>
      <p className={styles.kicker} data-hero-line>Portfolio</p>
      <h1 className={styles.name} data-hero-line>
        <span>{profile.firstName}</span>
        <span>{profile.lastName}</span>
      </h1>
      <p className={styles.role} data-hero-line>{profile.tagline}</p>
    </div>
  );
}
