import PageButton from "@/components/ui/PageButton";
import TwoButton from "@/components/ui/TwoButton";
import Image from "next/image";
import NavigationBar from "@/components/layout/NavigationBar";
import Link from "next/link";
import HeaderComponent from "@/components/ui/HeaderComponent";
import SmallPrimButton from "@/components/ui/SmallPrimButton";
import SmallSecondButton from "@/components/ui/SmallSecondButton";

export default function GoalSettingPage() {
  return (
    <div className="mainContainer">
      <div className="settingHeader">
        <HeaderComponent pageName="Goal Setting" pageLink="/index" />
      </div>
      <div className="buttonContainer">
        <p className="sleep">Sleep</p>
        <div>
          <PageButton label="Bedtime Setting" />
        </div>
      </div>
      <div className="buttonContainer">
        <p className="additional">Additional</p>
        <div>
          <TwoButton
            label1="Supplements Setting"
            label2="Water Setting"
            pageLink="/supplementPage"
          />
        </div>
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
    </div>
  );
}
