import styles from "./NavigationBar.module.css";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      <div className={styles.navItem}>
        <Image src="/icons/HomeIcon.svg" alt="Home" width={24} height={24} />
        <span>Home</span>
      </div>
      <div className={styles.navItem}>
        <Image
          src="/icons/CalendarIcon.svg"
          alt="Calendar"
          width={24}
          height={24}
        />
        <span>Calendar</span>
      </div>
      <div className={styles.navItem}>
        <Image
          src="/icons/CharacterIcon.svg"
          alt="Character"
          width={24}
          height={24}
        />
        <span>Character</span>
      </div>
      <div className={styles.navItem}>
        <Image
          src="/icons/SettingIcon.svg"
          alt="Settings"
          width={24}
          height={24}
        />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default NavigationBar;
