import styles from './CharacterCard.module.css';
import Image from 'next/image';

const CharacterCard2 = ({ LevelGoal, video }) => {
  return (
    <div className={styles.characterCard}>
      <div className={styles.characterVideo}>
        <video
          src={video}
          autoPlay
          muted
          loop
          width={350}
          height={198}
          style={{ borderRadius: '30px' }}
        />
      </div>
      <div className={styles.characterLevelBar}>
        <p className={styles.levelNumber}>Lv 1</p>
        <Image
          className={styles.levelBar}
          src="/icons/LevelStatusBar.png"
          alt="LevelBar"
          width={281}
          height={18}
        />
        <p className={styles.levelNumber}>Lv 2</p>
      </div>
    </div>
  );
};

export default CharacterCard2;
