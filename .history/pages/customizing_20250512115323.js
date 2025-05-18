import Image from 'next/image';
import PrimaryButton from '@/components/Button/PrimaryButton';
import CharacterCard2 from '@/components/CharacterCard2';
import HeaderComponent from '@/components/Button/HeaderComponent';
import { useRouter } from 'next/navigation';

export default function CustomizingPage() {
  const router = useRouter();
  return (
    <div className="styles.customizingPage">
      <HeaderComponent pageName="Customizing/Themes" pageLink="/character" />
      <CharacterCard2 />
      <div className="styles.colorTheme">Color Theme</div>
      <div className="colorChipContainer">
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
