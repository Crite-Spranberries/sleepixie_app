import styles from '@/components/Button/PageButton.module.css';

const PageButton = ({ label }) => {
  return <button className={styles.pageButton}>{label}</button>;
};

export default PageButton;


const PageButton2 = ({ label }) => {
  return <button className={styles.pageButton2}>{label}</button>;
};

export default PageButton2;
