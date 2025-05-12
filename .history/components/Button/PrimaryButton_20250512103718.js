import styles from './Button.module.css';

const PrimaryButton = ({ label, onClick }) => {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
