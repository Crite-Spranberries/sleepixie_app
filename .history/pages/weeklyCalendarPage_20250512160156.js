'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NavigationBar from '@/components/Button/NavigationBar';
import HeaderComponent from '@/components/Button/HeaderComponent';
import WeeklyCalendar from '@/components/WeeklyCalendar';
import Image from 'next/image';

export default function WeeklyCalendarPage() {
  const router = useRouter();
  return (
    <div>
      <HeaderComponent pageName="Weekly Calendar" pageLink="/index" />
      <WeeklyCalendar
        month="March"
        days={[3, 4, 5, 6, 7, 8, 9]}
        highlightDay={3}
      />
      <Image src="/images/TimeProgress1.png" alt="Time Progress" />
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
    </div>
  );
}
