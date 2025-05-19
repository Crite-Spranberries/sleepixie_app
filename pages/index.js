import PageButton from "@/components/ui/PageButton";
import TwoButton from "@/components/ui/TwoButton";
import Image from "next/image";
import Search from "@/components/ui/Search";
import SupplementCard from "@/components/feature/SupplementCard";
import SelectedSupplementCard from "@/components/feature/SelectedSupplementCard";
import NavigationBar from "@/components/ui/NavigationBar";
import Link from "next/link";
import HeaderComponent from "@/components/ui/HeaderComponent";
import Calendar from "@/components/feature/Calendar";
import CharacterCard from "@/components/feature/CharacterCard";
import ThreeButton from "@/components/ui/ThreeButton";
import CharacterCard2 from "@/components/feature/CharacterCard2";
import styles from "@/styles/SupplementPage.module.css";

export default function GoalSetting() {
  return (
    <div className={styles.mobileContainer}>
      <div
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        <div className="settingHeader">
          <HeaderComponent pageName="Goal Setting" pageLink="/index" />
        </div>
        <div className="buttonContainer">
          <p>Sleep</p>
          <div>
            <PageButton label="Bedtime Setting" />
          </div>
        </div>
        <div className="buttonContainer">
          <p>Additional</p>
          {/* <div>
            <TwoButton
              label1="Supplements Setting"
              label2="Water Setting"
              pageLink="/supplementPage"
            />
          </div> */}
          <div>
            <ThreeButton
              label1="Supplements Setting"
              label2="Water Setting"
              label3="Sleep Setting"
              pageLink="/supplementPage"
            />
          </div>
        </div>
        <div className="calendar">
          <Calendar month={2} year={2025} highlightDay={3} />
        </div>
      </div>
      <div className={styles.navigationBarGlobal}>
        <NavigationBar
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </div>
    </div>
  );
}
