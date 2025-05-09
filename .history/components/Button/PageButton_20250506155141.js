import styles from '@/components/Button/PageButton.module.css';

const PageButton = ({ label }) => {
  return (
    <button className={styles.pageButton}>
      <div>
        {label} <img src="/images/arrow-right.svg" alt="arrow-right" />
      </div>
    </button>
  );
};

export default PageButton;
