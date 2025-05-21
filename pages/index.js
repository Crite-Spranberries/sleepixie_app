"use client";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Link from "next/link";
import HeaderComponent from "@/components/ui/HeaderComponent";
import Calendar from "@/components/feature/Calendar";
import ThreeButton from "@/components/ui/ThreeButton";
import { useRouter } from "next/navigation";
import styles from "@/styles/SupplementPage.module.css";

export default function AchievementPage() {
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
        <h3 className="weeklyAchievement">Sleep Tracker</h3>

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
      </main>

      <nav className={styles.navigationBarGlobal}>
        <NavigationBar
          sleepIcon="/icons/StarAndCrescentSelected.svg"
          achievementIcon="/icons/Crown.svg"
          profileIcon="/icons/UserCircle.svg"
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </nav>
    </div>
  );
}
