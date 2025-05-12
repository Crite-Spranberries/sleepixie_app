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
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
