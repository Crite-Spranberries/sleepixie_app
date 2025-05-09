import styles from '@/components/Button/Button.module.css';
import Image from 'next/image';

const SupplementCard = ({ name, image }) => {
  return (
    <div className={styles.supplementCard}>
      <Image
        src={image}
        alt={name}
        width={70}
        height={70}
        className={styles.supplementImage}
      />
      <p className={styles.supplementName}>{name}</p>
      <Image
        src="/icons/CircleAdd.svg"
        alt="arrow-right"
        width={28}
        height={28}
      />
    </div>
  );
};

export default SupplementCard;
