import PageButton from '@/components/Button/PageButton';
import styles from '@/components/Button/Button.module.css';
import TwoButton from '@/components/Button/TwoButton';
import Image from 'next/image';

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
    </div>
  );
}
