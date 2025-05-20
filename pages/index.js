"use client";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Link from "next/link";
import HeaderComponent from "@/components/ui/HeaderComponent";
import Calendar from "@/components/feature/WeeklyCalendar";
import ThreeButton from "@/components/ui/ThreeButton";
import { useRouter } from "next/navigation";
import styles from "@/styles/SupplementPage.module.css";

export default function AchievementPage() {
  const router = useRouter();
  return (
    <div className={styles.mobileContainer}>
      <main
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        <h3 className="weeklyAchievement">Weekly Achievement</h3>
        <div className="characterContainerProgress">
          <span
            onClick={() => {
              console.log("clicked");
              router.push("/character");
            }}
            style={{ cursor: "pointer", display: "inline-block" }}
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
              console.log("clicked");
              router.push("/goalSetting");
            }}
            className="goalAdd"
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            <Image
              src="/icons/GoalAdd.svg"
              alt="goalAdd"
              width={70}
              height={70}
            />
          </span>
        </div>
        <span
          onClick={() => {
            console.log("clicked");
            router.push("/weeklyCalendarPage");
          }}
          style={{ cursor: "pointer", display: "inline-block" }}
        >
          <div className="calendar">
            <Calendar month={2} year={2025} highlightDay={3} />
          </div>
        </span>
      </main>

      <nav className={styles.navigationBarGlobal}>
        <NavigationBar
          sleepIcon="/icons/StarAndCrescent.svg"
          achievementIcon="/icons/CrownSelected.svg"
          profileIcon="/icons/UserCircle.svg"
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </nav>
    </div>
  );
}
