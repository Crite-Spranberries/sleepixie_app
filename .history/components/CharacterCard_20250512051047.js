import styles from './CharacterCard.module.css';
import Image from 'next/image';

const CharacterCard = ({ LevelGoal, video }) => {
  return (
    <div className={styles.characterCard}>
      <div className={styles.chracterVideo}>
        <video src={video} autoPlay muted loop />
      </div>
      <div className={styles.characterLevelBar}>
        <p>Lv 1</p>
        <Image
          className={styles.levelBar}
          src="/Characters/LevelBar.png"
          alt="LevelBar"
          width={100}
          height={20}
        />
        <p>Lv 2</p>
      </div>
      <div className={styles.characterLevel}></div>
      <div className={styles.levelGoal}>
        <p>Current Goal</p>
        <p>{LevelGoal}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
