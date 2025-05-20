'use client';
import Image from 'next/image';
import NavigationBar from '@/components/Button/NavigationBar';
import Link from 'next/link';
import HeaderComponent from '@/components/Button/HeaderComponent';
import Calendar from '@/components/Calendar';
import ThreeButton from '@/components/Button/ThreeButton';
import { useRouter } from 'next/navigation';

export default function CharacterPage() {
  return (
    <div className="mainContainer">
      <HeaderComponent pageName="Achievement" pageLink="/achievement" />
    </div>
  );
}
