import Image from 'next/image';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';
import HeaderComponent from '@/components/Button/HeaderComponent';
import Calendar from '@/components/Calendar';
import ThreeButton from '@/components/Button/ThreeButton';

export default function GoalSetting() {
  return (
    <div className="mainContainer">
      <h3 className="weeklyAchievement">Weekly Achievement</h3>
      <div></div>
      <h3 className="myGoal">My Goal</h3>
      <div>
        <Image src="/icons/BedProgress.svg" alt="bedProgress" />
      </div>
      <div className="navigationBarGlobal"></div>
      <div className="navigationBarGlobal">
        <NavigationBar
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </div>
      <div className="calendar">
        <Calendar month={2} year={2025} highlightDay={3} />
      </div>
    </div>
  );
}
