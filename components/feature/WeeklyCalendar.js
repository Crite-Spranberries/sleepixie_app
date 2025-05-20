import React from "react";
import styles from "./WeeklyCalendar.module.css";

export default function WeeklyCalendar({
  month = "March",
  days = [3, 4, 5, 6, 7, 8, 9],
  highlightDay = 3,
}) {
  return (
    <div className={styles.calendarScrollWrapper}>
      <div className={styles.calendarContainer}>
        <div className={styles.header}>{month}</div>
        <table className={styles.calendarTable}>
          <tbody>
            <tr>
              {days.map((day, idx) => (
                <td
                  key={idx}
                  className={
                    day === highlightDay ? styles.highlight : styles.day
                  }
                >
                  {day}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
