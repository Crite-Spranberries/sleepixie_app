import styles from "./SelectedSupplementCard.module.css";
import Image from "next/image";

const SelectedSupplementCard = ({ name, image, frequency, onRemove }) => {
  return (
    <div className={styles.selectedCard}>
      <div className={styles.cardImage}>
        <Image src={image} alt={name} width={80} height={80} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardFrequency}>{frequency} times per day</p>
      </div>
      <button className={styles.removeButton} onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default SelectedSupplementCard;
