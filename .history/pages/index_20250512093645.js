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
      <CharacterCard />
    </div>
  );
}
