import styles from "./SelectedSupplementCard.module.css";
import Image from "next/image";

const getDaySummary = (days) => {
  if (!days || days.length === 0) return "No days selected";
  if (days.length === 7) return "Every day";
  if (days.every((d) => ["Mo", "Tu", "We", "Th", "Fr"].includes(d)))
    return "Weekdays";
  if (days.every((d) => ["Sa", "Su"].includes(d))) return "Weekends";
  return days.join(", ");
};

const SelectedSupplementCard = ({
  name,
  image,
  frequency,
  usageCount,
  time,
  days,
  onRemove,
}) => {
  return (
    <div className={styles.selectedCard}>
      <div className={styles.cardImage}>
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardFrequency}>
          {frequency} times per day
          {days && <>, {getDaySummary(days)}</>}
          {usageCount && <>, {usageCount} usage</>}
          {time && <>, at {time}</>}
        </p>
      </div>
      <button className={styles.removeButton} onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default SelectedSupplementCard;
