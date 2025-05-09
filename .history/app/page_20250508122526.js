import PageButton from '@/components/Button/PageButton';
import styles from '@/app/global.css';
// import styles from '@/components/Button/Button.module.css';
import TwoButton from '@/components/Button/TwoButton';
import Image from 'next/image';
import Search from '@/components/Button/Search';
import SupplementCard from '@/components/Button/SupplementCard';
import SelectedSupplementCard from '@/components/Button/SelectedSupplementCard';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';

export default function GoalSetting() {
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
      <div className="buttonContainer">
        <p>Sleep</p>
        <div>
          <PageButton label="Bedtime Setting" />
        </div>
      </div>
      <div className="buttonContainer">
        <p>Additional</p>
        <div>
          <TwoButton label1="Supplements Setting" label2="Water Setting" />
        </div>
      </div>
      <NavigationBar className="navPosition" />
    </div>
  );
}
