import styles from './Calendar.module.css';
import Image from 'next/image';

const Calendar = ({ month }) => {
  return (
    <div className={styles.calendarContainer}>
      <div>
        <p>Calendar</p>
      </div>
      <div>
        <p>{month}</p>
        <div>
          <p>1</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
