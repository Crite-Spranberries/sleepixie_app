import styles from '@/components/Button/PageButton.module.css';

const PageButton = ({ label }) => {
  return <button className={styles.pageButton}>{label}</button>;
};

export default PageButton;
