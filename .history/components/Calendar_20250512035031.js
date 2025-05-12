import styles from './Calendar.module.css';
import Image from 'next/image';

const Calendar = ({ month }) => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarTitleContainer}>
        <p className={styles.calendarTitle}>Calendar</p>
      </div>
      <div className={styles.calendarContentContainer}>
        <p className={styles.month}>{month}</p>
        <div>
          <div className={styles.dayContainer}>
            <table>
              <tr>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>2</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
