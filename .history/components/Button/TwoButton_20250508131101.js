import styles from '@/components/Button/Button.module.css';
import Image from 'next/image';
import Link from 'next/link';

const TwoButton = ({ label1, label2, pageLink }) => {
  return (
    <div className={styles.twoButtonContainer}>
      <button className={styles.twoButtonTop}>
        <div className={styles.buttonContent}>
          <span>{label1}</span>
          <link href={pageLink}>
            <Image
              src="/icons/CaretRight.svg"
              alt="arrow-right"
              width={24}
              height={24}
              className={styles.arrowIcon}
            />
          </link>
        </div>
      </button>
      <button className={styles.twoButtonBottom}>
        <div className={styles.buttonContent}>
          <span>{label2}</span>
          <Image
            src="/icons/CaretRight.svg"
            alt="arrow-right"
            width={24}
            height={24}
            className={styles.arrowIcon}
          />
        </div>
      </button>
    </div>
  );
};

export default TwoButton;
