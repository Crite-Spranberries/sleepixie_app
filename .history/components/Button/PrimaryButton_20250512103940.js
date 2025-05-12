import styles from './Button.module.css';
import { useRouter } from 'next/navigation';

const PrimaryButton = ({ label, onClick }) => {
  return (
    <button className={styles.primaryButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
