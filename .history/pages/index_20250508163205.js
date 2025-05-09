import PageButton from '@/components/Button/PageButton';
import TwoButton from '@/components/Button/TwoButton';
import Image from 'next/image';
import Search from '@/components/Button/Search';
import SupplementCard from '@/components/Button/SupplementCard';
import SelectedSupplementCard from '@/components/Button/SelectedSupplementCard';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';

export default function GoalSetting() {
  return (
    <div className="mainContainer">
      <div className="settingHeader">
        <HeaderComponent pageName="Supplements" />
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
      <div className="navigationBarGlobal">
        <NavigationBar
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </div>
    </div>
  );
}
