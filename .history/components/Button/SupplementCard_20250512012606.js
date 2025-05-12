import styles from "@/components/Button/Button.module.css";
import Image from "next/image";

const SupplementCard = ({ name, image, frequency = 0, onAdd }) => {
  return (
    <div className={styles.supplementCard}>
      <Image
        src={image}
        alt={name}
        width={70}
        height={70}
        className={styles.supplementImage}
      />
      <div className={styles.supplementInfo}>
        <p className={styles.supplementName}>{name}</p>
        <p className={styles.supplementFrequency}>
          {frequency > 0 ? `${frequency}x per day` : "Not added"}
        </p>
      </div>
      <button onClick={() => onAdd && onAdd()} className={styles.addButton}>
        <Image
          src="/icons/CircleAdd.svg"
          alt="add supplement"
          width={28}
          height={28}
        />
      </button>
    </div>
  );
};

export default SupplementCard;
