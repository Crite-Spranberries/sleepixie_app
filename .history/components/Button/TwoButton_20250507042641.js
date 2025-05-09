import styles from '@/components/Button/Button.module.css';
import Image from 'next/image';

const TwoButton = ({ label }) => {
  return (
    <button className={styles.twoButtonTop}>
      <div className={styles.buttonContent}>
        <span>{label}</span>
        <Image
          src="/icons/CaretRight.svg"
          alt="arrow-right"
          width={24}
          height={24}
          className={styles.arrowIcon}
        />
      </div>
    </button>
    <button className={styles.twoButtonTop}>
    <div className={styles.buttonContent}>
      <span>{label}</span>
      <Image
        src="/icons/CaretRight.svg"
        alt="arrow-right"
        width={24}
        height={24}
        className={styles.arrowIcon}
      />
    </div>
  </button>
  );
};

export default TwoButton;
