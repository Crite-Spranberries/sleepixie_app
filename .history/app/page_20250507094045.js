import PageButton from '@/components/Button/PageButton';
import styles from '@/components/Button/Button.module.css';
import TwoButton from '@/components/Button/TwoButton';
import Image from 'next/image';
import Search from '@/components/Button/Search';
import SupplementCard from '@/components/Button/SupplementCard';
import SelectedSupplementCard from '@/components/Button/SelectedSupplementCard';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';

export default function GoalSetting() {
  return (
    <div>
      <div className={styles.goalSettingHeader}>
        <Image
          src="/icons/CaretLeft.svg"
          alt="arrow-left"
          width={32}
          height={32}
        />
        <h4>Goal Setting</h4>
      </div>
      <div className={styles.buttonContainer}>
        <p>Sleep</p>
        <div>
          <PageButton label="Bedtime Setting" />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <p>Additional</p>
        <div>
          <TwoButton label1="Supplements Setting" label2="Water Setting" />
        </div>
      </div>
      <Search label="Search supplements" />
      <SupplementCard name="Supplement 1" image="/icons/Supplement1.svg" />
      <SelectedSupplementCard
        name="Supplement 1"
        image="/icons/Supplement1.svg"
        usage="1 pill per day"
      />
      <NavigationBar
        pageName="Sleep"
        pageName2="Achievement"
        pageName3="Profile"
      />
    </div>
  );
}
