import Search from '@/components/Button/Search';
import Link from 'next/link';
import Image from 'next/image';
import SupplementCard from '@/components/Button/SupplementCard';
import SelectedSupplementCard from '@/components/Button/SelectedSupplementCard';

export default function SupplementPage() {
  return (
    <div className="mainContainer">
      <HeaderComponent />

      <div className="searchContainer">
        <Search label="Search Supplement" />
      </div>
      <div className="supplementList">
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
