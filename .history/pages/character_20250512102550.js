import Image from 'next/image';
import CharacterCard from '@/components/CharacterCard';

import HeaderComponent from '@/components/Button/HeaderComponent';
import { useRouter } from 'next/navigation';

export default function CharacterPage() {
  const router = useRouter();
  return (
    <div>
      <HeaderComponent pageName="Character" pageLink="/index" />
      <CharacterCard
        levelGoal="Sleep for at least 7 hours for a month"
        video={Video}
        level1="/icons/SelectedLevel1.png"
        level2="/icons/Level2.png"
        level3="/icons/Level3.png"
      />
    </div>
  );
}
