'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NavigationBar from '@/components/Button/NavigationBar';
import HeaderComponent from '@/components/Button/HeaderComponent';

export default function WeeklyCalandar() {
  const router = useRouter();
  return (
    <div>
      <HeaderComponent pageName="Weekly Calandar" pageLink="/index" />
    </div>
  );
}
