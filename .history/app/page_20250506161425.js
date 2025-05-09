import PageButton from '@/components/Button/PageButton';

export default function GoalSetting() {
  return (
    <div>
      <h4>Achievement</h4>
      <div>
        <p className={styles.title}>Sleep</p>
        <div>
          <PageButton label="Bedtime Setting" />
        </div>
      </div>
    </div>
  );
}
