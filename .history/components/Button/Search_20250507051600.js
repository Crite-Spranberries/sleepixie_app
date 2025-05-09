import styles from '@/components/Button/Button.module.css';
import Image from 'next/image';

const Search = ({ label3 }) => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder={label3} />
      <Image src="/icons/Search.svg" alt="search" width={25} height={25} />
    </div>
  );
};

export default Search;
