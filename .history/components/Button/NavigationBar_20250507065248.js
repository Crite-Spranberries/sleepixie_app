import styles from '@/components/Button/Button.module.css';
import Image from 'next/image';

const NavigationBar = ({ pageName }) => {
  return (
    <div className={styles.navigationBar}>
      <div>
        <Image
          src="/icons/StarAndCrest.svg"
          alt="arrow-left"
          width={32}
          height={32}
        />
        <p>{pageName}</p>
      </div>
      <div>
        <Image
          src="/icons/CaretLeft.svg"
          alt="arrow-left"
          width={32}
          height={32}
        />
        <p>{pageName}</p>
      </div>
      <div>
        <Image
          src="/icons/CaretLeft.svg"
          alt="arrow-left"
          width={32}
          height={32}
        />
        <p>{pageName}</p>
      </div>
    </div>
  );
};
