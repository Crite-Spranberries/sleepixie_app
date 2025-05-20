"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavigationBar from "@/components/layout/NavigationBar";
import HeaderComponent from "@/components/ui/HeaderComponent";
import WeeklyCalendar from "@/components/feature/WeeklyCalendar";
import Image from "next/image";

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
        <Image
          className="timeProgress"
          src="/images/TimeProgress1.png"
          alt="Time Progress"
          width={402}
          height={717}
        />
      </main>
      <div className="navigationBarGlobal">
        <NavigationBar
          sleepIcon=".public/icons/StarAndCrescent.svg"
          achievementIcon=".public/icons/CrownSelected.svg"
          profileIcon=".public/icons/UserCircle.svg"
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </div>
    </div>
  );
}
