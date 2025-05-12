import styles from './CharacterCard.module.css';
import Image from 'next/image';
import video from '../public/Characters/Charactor design copy.mp4';

const CharacterCard({ LevelGoal }) {
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
      <div className={styles.characterLevelBar}>
        <p>Lv 1</p>
        <Image src="/public/Characters/LevelBar.png" alt="LevelBar" />
        <p>Lv 2</p>
      </div>
      <div className={styles.characterLevel}></div>
      <div className={styles.levelGoal}>
        <p>Current Goal</p>
        <p>{LevelGoal}</p>
      </div>
    </div>
  );
}
