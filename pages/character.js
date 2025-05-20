import Image from "next/image";
import CharacterCard from "@/components/feature/CharacterCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeaderComponent from "@/components/ui/HeaderComponent";
import styles from "@/styles/SupplementPage.module.css";
import NavigationBar from "@/components/layout/NavigationBar";
import { useRouter } from "next/navigation";

export default function CharacterPage() {
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
        <HeaderComponent pageName="Achievement" pageLink="/" />
        <CharacterCard
          LevelGoal="Sleep for at least 7 hours for a month"
          level1="/icons/SelectedLevel1.svg"
          level2="/icons/Level2.svg"
          level3="/icons/Level3.svg"
        />
        <PrimaryButton
          label="Customizing/Color"
          onClick={() => router.push("/customizing")}
        />
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
