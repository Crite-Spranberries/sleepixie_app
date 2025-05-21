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
      ></main>

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
