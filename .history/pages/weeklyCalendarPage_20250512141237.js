'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NavigationBar from '@/components/Button/NavigationBar';
import HeaderComponent from '@/components/Button/HeaderComponent';
import WeeklyCalendar from '@/components/WeeklyCalendar';
export default function WeeklyCalendarPage() {
  const router = useRouter();
  return (
    <div>
      <HeaderComponent pageName="Weekly Calandar" pageLink="/index" />
      <WeeklyCalendar
        month="April"
        days={[1, 2, 3, 4, 5, 6, 7]}
        highlightDay={1}
      />
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
