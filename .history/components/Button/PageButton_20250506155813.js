import styles from '@/components/Button/PageButton.module.css';
import image from '@/public/Icons/CaretRight.svg';

const PageButton = ({ label }) => {
  return (
    <button className={styles.pageButton}>
      <div>
        {label} <img src="@/public/Icons/CaretRight.svg" alt="arrow-right" />
      </div>
    </button>
  );
};

export default PageButton;
