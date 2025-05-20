"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavigationBar from "@/components/layout/NavigationBar";
import HeaderComponent from "@/components/ui/HeaderComponent";
import WeeklyCalendar from "@/components/feature/WeeklyCalendar";
import styles from "@/styles/SupplementPage.module.css";
import Image from "next/image";
import Calendar from "@/components/feature/WeeklyCalendar";

export default function WeeklyCalendarPage() {
  const router = useRouter();
  return (
    <div className={styles.mobileContainer}>
      {/* Scrollable main content area */}
      <main
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        <HeaderComponent pageName="Weekly Calendar" pageLink="/" />
        <WeeklyCalendar />
        <div className="calendar">
          <Calendar month={2} year={2025} highlightDay={3} />
        </div>
        <Image
          className="timeProgress"
          src="/images/TimeProgress1.png"
          alt="Time Progress"
          width={402}
          height={717}
        />
      </main>
      <nav className={styles.navigationBarGlobal}>
        <NavigationBar
          sleepIcon="./icons/StarAndCrescent.svg"
          achievementIcon="./icons/CrownSelected.svg"
          profileIcon="./icons/UserCircle.svg"
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </nav>
    </div>
  );
}
