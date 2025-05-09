import PageButton from '@/components/Button/PageButton';
import styles from '@/components/Button/Button.module.css';
import TwoButton from '@/components/Button/TwoButton';

export default function GoalSetting() {
  return (
    <div>
      <h4>Goal Setting</h4>
      <div className={styles.buttonContainer}>
        <p>Sleep</p>
        <div>
          <PageButton label="Bedtime Setting" />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <p>Additional</p>
        <div>
          <TwoButton label="Supplements Setting" />
        </div>
      </div>
    </div>
  );
}
