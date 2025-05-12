'use client';
import Image from 'next/image';
import Video from '@/public/Video.mp4';
import Link from 'next/link';
import HeaderComponent from '@/components/Button/HeaderComponent';

import { useRouter } from 'next/navigation';
import CharacterCard from '@/components/CharacterCard';

export default function CharacterPage() {
  return (
    <div className="mainContainer">
      <HeaderComponent pageName="Achievement" pageLink="/achievement" />
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
