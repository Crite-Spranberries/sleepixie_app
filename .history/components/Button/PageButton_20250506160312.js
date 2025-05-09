import styles from '@/components/Button/PageButton.module.css';
import Image from 'next/image';

const PageButton = ({ label }) => {
  return (
    <button className={styles.pageButton}>
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

export default PageButton;
