import PageButton from '@/components/Button/PageButton';
import TwoButton from '@/components/Button/TwoButton';
import Image from 'next/image';
import Search from '@/components/Button/Search';
import SupplementCard from '@/components/Button/SupplementCard';
import SelectedSupplementCard from '@/components/Button/SelectedSupplementCard';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';
import HeaderComponent from '@/components/Button/HeaderComponent';
import Calendar from '@/components/Calendar';
import CharacterCard from '@/components/CharacterCard';
import Level1 from '../public/icons/SelectedLevel1.svg';
import Level2 from '../public/icons/SelectedLevel2.svg';
import Level3 from '../public/icons/SelectedLevel3.svg';

export default function GoalSetting() {
  return (
    <div className="mainContainer">
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
        <div>
          <TwoButton
            label1="Supplements Setting"
            label2="Water Setting"
            pageLink="/supplementPage"
          />
        </div>
      </div>
      {/*<div className="navigationBarGlobal">
        <NavigationBar
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </div>*/}
      {/*<div className="calendar">
        <Calendar month={2} year={2025} highlightDay={3} />
      </div>*/}
      <CharacterCard
        LevelGoal="Sleep for at least 7 hours for a month"
        video="/Level1Video.mp4"
        level1="/public/icons/SelectedLevel1.svg"
        level2="/public/icons/Level2.svg"
        level3="/public/icons/Level3.svg"
      />
    </div>
  );
}
