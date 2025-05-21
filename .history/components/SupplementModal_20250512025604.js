import React, { useState } from "react";
import styles from "./SupplementModal.module.css";

// Modal overlay and content is here
const SupplementModal = ({ open, onClose, onSave, title = "Probiotics" }) => {
  // Counter state for usage direction
  const [usageCount, setUsageCount] = useState(1);
  // Counter state for frequency per day
  const [frequency, setFrequency] = useState(1);
  // State for time (string for now till I edit this later)
  const [time, setTime] = useState("00:00 AM");
  // State for selected days
  const [selectedDays, setSelectedDays] = useState([]);

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  // Toggle day selection
  const handleDayClick = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // Handle save button click
  const handleSave = () => {
    onSave({
      usageCount,
      frequency,
      time,
      selectedDays,
      title,
    });
  };

  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Modal header with cancel and save button */}
        <div className={styles.modalHeader}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <span className={styles.title}>{title}</span>
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        </div>
        {/* Direction for use/Usage section */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Direction for use/Usage</div>
          <div className={styles.counter}>
            <button onClick={() => setUsageCount((c) => Math.max(1, c - 1))}>
              -
            </button>
            <span>{usageCount}</span>
            <button onClick={() => setUsageCount((c) => c + 1)}>+</button>
          </div>
        </div>
        {/* Frequency(Per day) section */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Frequency(Per day)</div>
          <div className={styles.counter}>
            <button onClick={() => setFrequency((f) => Math.max(1, f - 1))}>
              -
            </button>
            <span>{frequency}</span>
            <button onClick={() => setFrequency((f) => f + 1)}>+</button>
          </div>
        </div>
        {/* Time section */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Time</div>
          <div className={styles.timePicker}>
            <span className={styles.clockIcon}>🕒</span>
            <span>{time}</span>
          </div>
          <div className={styles.daysRow}>
            {days.map((day) => (
              <span
                key={day}
                className={`${styles.dayBtn} ${
                  selectedDays.includes(day) ? styles.selectedDay : ""
                }`}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplementModal;
