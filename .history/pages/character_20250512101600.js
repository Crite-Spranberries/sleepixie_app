import Image from 'next/image';
import CharacterCard from '@/components/CharacterCard';

export default function CharacterPage() {
  return (
    <CharacterCard
      levelGoal="Sleep for at least 7 hours for a month"
      video={Video}
      level1="/icons/SelectedLevel1.png"
      level2="/icons/Level2.png"
      level3="/icons/Level3.png"
    />
  );
}
