import styles from '@/components/Button/NavigationBar.module.css';
import Image from 'next/image';

const NavigationBar = ({ pageName, pageName2, pageName3 }) => {
  return (
    <div className={styles.navigationBar}>
      <div className={styles.navigationBarSleep}>
        <Image src={sleepIcon} alt="arrow-left" width={25} height={25} />
        <p className={styles.pageName}>{pageName}</p>
      </div>
      <div className={styles.navigationBarAchievement}>
        <Image src={achievementIcon} alt="arrow-left" width={25} height={25} />
        <p className={styles.pageName2}>{pageName2}</p>
      </div>
      <div className={styles.navigationBarProfile}>
        <Image src={profileIcon} alt="arrow-left" width={25} height={25} />
        <p className={styles.pageName3}>{pageName3}</p>
      </div>
    </div>
  );
};

export default NavigationBar;
