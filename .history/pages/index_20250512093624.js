'use client';
import Image from 'next/image';
import Video from '@/components/Video';
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
