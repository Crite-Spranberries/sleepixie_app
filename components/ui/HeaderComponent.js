import styles from './HeaderComponent.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HeaderComponent = ({ pageName, pageLink }) => {
  return (
    <div className={styles.settingHeader}>
      <Link href={pageLink}>
        <Image
          src="/icons/CaretLeft.svg"
          alt="arrow-left"
          width={32}
          height={32}
        />
      </Link>
      <h4>{pageName}</h4>
    </div>
  );
};

export default HeaderComponent;
