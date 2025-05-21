import styles from './Notification.module.css';
import SmallPrimButton from './Button/SmallPrimButton';
import SmallSecondButton from './Button/SmallSecondButton';

const Notification = () => {
  return (
    <div className={styles.notificationContainer}>
      <p className={styles.notificationTitle}>Supplement Time!</p>
      <p className={styles.notificationTime}>8:30 AM</p>
      <div className={styles.buttonContainer}>
        <SmallPrimButton label="Accept" onClick={() => {}} />
        <SmallSecondButton label="Skip" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Notification;
