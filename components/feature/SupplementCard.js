import styles from "./SupplementCard.module.css";
import Image from "next/image";

const SupplementCard = ({ name, image, frequency, onAdd }) => {
  return (
    <div className={styles.supplementCard}>
      <div className={styles.cardImage}>
        <Image src={image} alt={name} width={100} height={100} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardFrequency}>{frequency} times per day</p>
      </div>
      <button
        className={styles.addButton}
        onClick={onAdd}
        aria-label="Add supplement"
      >
        <Image src="/icons/CircleAdd.svg" alt="Add" width={29} height={28} />
      </button>
    </div>
  );
};

export default SupplementCard;
