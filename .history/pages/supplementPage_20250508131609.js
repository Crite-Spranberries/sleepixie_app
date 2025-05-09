import Search from '@/components/Button/Search';
import Link from 'next/link';
import styles from '@/styles/globals.css';

export default function SupplementPage() {
  return (
    <div className="mainContainer">
      <div className="goalSettingHeader">
        <Image
          src="/icons/CaretLeft.svg"
          alt="arrow-left"
          width={32}
          height={32}
        />
        <h4>Goal Setting</h4>
      </div>
      <Search label="Search Supplement" />
    </div>
  );
}
