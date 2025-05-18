import styles from './SmallPrimButton.module.css';
import Image from 'next/image';

const SmallPrimButton = ({ label, onClick }) => {
  return (
    <div className={styles.smallPrimButtonContainer}>
      <button className={styles.smallPrimButton} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default SmallPrimButton;
