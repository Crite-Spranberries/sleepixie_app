import PageButton from '@/components/Button/PageButton';
import TwoButton from '@/components/Button/TwoButton';
import Image from 'next/image';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';
import HeaderComponent from '@/components/Button/HeaderComponent';

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
            pageName="Sleep"
            pageName2="Achievement"
            pageName3="Profile"
          />
        </div>
      </div>
    </div>
  );
}
