import Image from 'next/image';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';
import HeaderComponent from '@/components/Button/HeaderComponent';
import Calendar from '@/components/Calendar';
import ThreeButton from '@/components/Button/ThreeButton';
import { useRouter } from 'next/router';

export default function GoalSetting() {
  const router = useRouter();
  return (
    <div className="mainContainer">
      <h3 className="weeklyAchievement">Weekly Achievement</h3>
      <div className="characterContainerProgress"></div>
      <h3 className="myGoal">My Goal</h3>
      <div className="myGoalContainer">
        <Image
          src="/icons/BedProgress.svg"
          alt="bedProgress"
          width={70}
          height={70}
        />
        <Image
          src="/icons/InactiveSupProg.svg"
          alt="supplementProgress"
          width={70}
          height={70}
        />
        <Image
          src="/icons/InactiveWatProg.svg"
          alt="waterProgress"
          width={70}
          height={70}
        />
        <Image
          src="/icons/GoalAdd.svg"
          alt="goalAdd"
          width={70}
          height={70}
          onClick={() => router.push('/goalSetting')}
          className="goalAdd"
        />
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

const styles = {
  goalAdd: {
    cursor: 'pointer',
  },
};
