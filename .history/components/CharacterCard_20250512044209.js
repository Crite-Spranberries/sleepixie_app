import styles from './CharacterCard.module.css';
import Image from 'next/image';

export default function CharacterCard() {
  return (
    <div className={styles.characterCard}>
      <div className={styles.chracterVideo}></div>
      <div className={styles.characterLevelBar}></div>
      <div className={styles.characterLevel}></div>
      <div className={styles.levelGoal}></div>
    </div>
  );
}
