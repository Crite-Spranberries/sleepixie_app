import styles from './CharacterCard.module.css';
import Image from 'next/image';
import video from '../public/Characters/Charactor design copy.mp4';
export default function CharacterCard() {
  return (
    <div className={styles.characterCard}>
      <div className={styles.chracterVideo}>
        <video
          src="/public/Characters/Charactor design copy.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className={styles.characterLevelBar}></div>
      <div className={styles.characterLevel}></div>
      <div className={styles.levelGoal}></div>
    </div>
  );
}
