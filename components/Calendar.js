import React from "react";
import styles from "@/components/Calendar.module.css";

function getWeeks(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0: Sunday, 6: Saturday
  const weeks = [];
  let day = 1 - firstDayIndex;

  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++, day++) {
      if (day > 0 && day <= daysInMonth) {
        week.push(day);
      } else {
        week.push("");
      }
    }
    weeks.push(week);
  }
  return weeks;
}

export default function Calendar({ month = 2, year = 2025, highlightDay = 3 }) {
  // month: 0-based (0=Jan, 1=Feb, 2=Mar, ...)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weeks = getWeeks(year, month);

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>Calendar</div>
      <div className={styles.calendarMonth}>{monthNames[month]}</div>
      <table className={styles.calendarTable}>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((date, j) => (
                <td
                  key={j}
                  className={
                    date === highlightDay
                      ? styles.highlight
                      : date
                      ? styles.day
                      : styles.empty
                  }
                >
                  {date}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
