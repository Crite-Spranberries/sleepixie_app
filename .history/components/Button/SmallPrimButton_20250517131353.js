import styles from './SmallPrimButton.module.css';
import Image from 'next/image';

export default function SmallPrimButton({ label, onClick }) {
  return (
    <div className={styles.smallPrimButtonContainer}>
      <button className={styles.smallPrimButton} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default function SmallPrimButton({ label, onClick }) 