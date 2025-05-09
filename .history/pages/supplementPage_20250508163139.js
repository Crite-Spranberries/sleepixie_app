import Search from '@/components/Button/Search';
import Link from 'next/link';
import Image from 'next/image';
import SupplementCard from '@/components/Button/SupplementCard';
import SelectedSupplementCard from '@/components/Button/SelectedSupplementCard';
import HeaderComponent from '@/components/Button/HeaderComponent';

export default function SupplementPage() {
  return (
    <div className="mainContainer">
      <div>
        <HeaderComponent pageName="Supplements" pageLink="/index" />
      </div>
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
