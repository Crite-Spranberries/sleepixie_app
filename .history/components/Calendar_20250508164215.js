import styles from './Calendar.module.css';
import Image from 'next/image';

const Calendar = ({ month }) => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarTitleContainer}>
        <p className={styles.calendarTitle}>Calendar</p>
      </div>
      <div>
        <p className={styles.month}>{month}</p>
        <div>
          <p>1</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
