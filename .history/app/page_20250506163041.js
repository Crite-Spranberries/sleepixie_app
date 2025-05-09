import PageButton from '@/components/Button/PageButton';
import styles from '@/app/globals.css';

export default function GoalSetting() {
  return (
    <div>
      <h4>Goal Setting</h4>
      <div className={styles.goalSetting}>
        <p>Sleep</p>
        <div>
          <PageButton label="Bedtime Setting" />
        </div>
      </div>
    </div>
  );
}
