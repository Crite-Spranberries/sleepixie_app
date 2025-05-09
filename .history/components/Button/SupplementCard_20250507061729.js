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

const SelectedSupplementCard = ({ name, image, usage }) => {
  return (
    <div className={styles.selectedSupplementCard}>
      <Image
        src={image}
        alt={name}
        width={70}
        height={70}
        className={styles.supplementImage}
      />
      <div className={styles.supplementCardContent}>
        <p className={styles.supplementName}>{name}</p>
        <p className={styles.supplementUsage}>{usage}</p>
      </div>
    </div>
  );
};

export { SupplementCard, SelectedSupplementCard };
