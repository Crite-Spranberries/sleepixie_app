import Image from 'next/image';
import CharacterCard from '@/components/CharacterCard';
import PrimaryButton from '@/components/Button/PrimaryButton';
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
      <div>
        <Image
          src="/images/colorChip1.png"
          alt="colorChip1"
          width={82}
          height={82}
        />
        <Image
          src="/images/colorChip2.png"
          alt="colorChip2"
          width={82}
          height={82}
        />
        <Image
          src="/images/colorChip3.png"
          alt="colorChip3"
          width={82}
          height={82}
        />
        <Image
          src="/images/colorChip4.png"
          alt="colorChip4"
          width={82}
          height={82}
        />
      </div>
      <PrimaryButton
        label="Cutomizing/Color"
        onClick={() => router.push('/customizing')}
      />
    </div>
  );
}
