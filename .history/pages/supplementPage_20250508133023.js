import Search from '@/components/Button/Search';
import Link from 'next/link';
import Image from 'next/image';
import SupplementCard from '@/components/Button/SupplementCard';
import SelectedSupplementCard from '@/components/Button/SelectedSupplementCard';

export default function SupplementPage() {
  return (
    <div className="mainContainer">
      <div className="settingHeader">
        <Image
          src="/icons/CaretLeft.svg"
          alt="arrow-left"
          width={32}
          height={32}
        />
        <h4>Goal Setting</h4>
      </div>
      <div className="searchContainer">
        <Search label="Search Supplement" />
      </div>
      <div classNAme="supplementList">
        <SupplementCard name="Supplement 1" />
        <SupplementCard name="Supplement 1" />
        <SupplementCard name="Supplement 1" />
        <SupplementCard name="Supplement 1" />
        <SupplementCard name="Supplement 1" />
        <SupplementCard name="Supplement 1" />
        <SupplementCard name="Supplement 1" />
        <SupplementCard name="Supplement 1" />
      </div>
    </div>
  );
}
