"use client";

import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Link from "next/link";
import HeaderComponent from "@/components/ui/HeaderComponent";
import Calendar from "@/components/feature/Calendar";
import ThreeButton from "@/components/ui/ThreeButton";
import { useRouter } from "next/navigation";
import styles from "@/styles/SupplementPage.module.css";
import TimeRing from "@/components/feature/TimeRing";
import "@/styles/globals.css";

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
        {/* Greeting */}
        <div className="greeting">
          <span>
            Hello, <b>Jane</b>!
          </span>
          <br />
          <span className="greetingSub">
            Did you sleep well?{" "}
            <span role="img" aria-label="sleep">
              😴
            </span>
          </span>
        </div>
        {/* TimeRing and Progress Icons */}
        <div className="centerRow">
          <TimeRing />
          <div className="progressIcons">
            <Image
              src="/images/progressicons.png"
              alt="Progress Icons"
              width={80}
              height={300}
              style={{ width: "180%", height: "auto" }}
            />
          </div>
        </div>
        {/* Sleep Now Button */}
        <button className="sleepNowButton">Sleep now</button>
        {/* Sleep Streak Rings */}
        <div className="streakRings" style={{ width: 350 }}>
          <Image
            src="/images/sleepstreakrings.png"
            alt="Sleep Streak Rings"
            width={350}
            height={70}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* Improvement Message */}
        <div className="improvementMsg">
          Your sleep time has <span className="sparkle">✨improved✨</span>
          <br />
          Keep it up! Don't break the green streak!
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
