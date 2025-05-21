'use client';
import Image from 'next/image';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';
import HeaderComponent from '@/components/Button/HeaderComponent';
import Calendar from '@/components/Calendar';
import ThreeButton from '@/components/Button/ThreeButton';
import { useRouter } from 'next/navigation';

export default function AchievementPage() {
  const router = useRouter();
  return (
    <div className="mainContainer">
      <h3 className="weeklyAchievement">Weekly Achievement</h3>
      <div className="characterContainerProgress">
        <span
          onClick={() => {
            console.log('clicked');
            router.push('/character');
          }}
          style={{ cursor: 'pointer', display: 'inline-block' }}
        >
          <Image
            className="character"
            src="/images/character.png"
            alt="character"
            width={370}
            height={310}
          />
        </span>
      </div>
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
        <span
          onClick={() => {
            console.log('clicked');
            router.push('/goalSetting');
          }}
          className="goalAdd"
          style={{ cursor: 'pointer', display: 'inline-block' }}
        >
          <Image
            src="/icons/GoalAdd.svg"
            alt="goalAdd"
            width={70}
            height={70}
          />
        </span>
      </div>
      <div className="navigationBarGlobal"></div>
      <div className="navigationBarGlobal">
        <NavigationBar
          sleepIcon="/icons/StarAndCrescent.svg"
          achievementIcon="/icons/CrownSelected.svg"
          profileIcon="/icons/UserCircle.svg"
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </div>
      <span
        onClick={() => {
          console.log('clicked');
          router.push('/weeklyCalendar');
        }}
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        <div className="calendar">
          <Calendar month={2} year={2025} highlightDay={3} />
        </div>
      </span>
    </div>
  );
}
