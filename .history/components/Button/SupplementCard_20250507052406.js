import styles from '@/components/Button/Button.module.css';
import Image from 'next/image';

const SupplementCard = ({ name, image }) => {
  return (
    <div className={styles.supplementCard}>
      <Image src={image} alt={name} width={70} height={70} />
    </div>
  );
};
