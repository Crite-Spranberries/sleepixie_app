import Image from 'next/image';
import CharacterCard from '@/components/CharacterCard';

import HeaderComponent from '@/components/Button/HeaderComponent';
import { useRouter } from 'next/navigation';

export default function CharacterPage() {
  const router = useRouter();
  return (
    <div>
      <HeaderComponent pageName="Achievement" pageLink="/index" />
      <CharacterCard
        LevelGoal="Sleep for at least 7 hours for a month"
        level1="/icons/SelectedLevel1.svg"
        level2="/icons/Level2.svg"
        level3="/icons/Level3.svg"
      />
    </div>
  );
}
