import styles from '@/components/Button/Button.module.css';
import Image from 'next/image';

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

export default SelectedSupplementCard;
