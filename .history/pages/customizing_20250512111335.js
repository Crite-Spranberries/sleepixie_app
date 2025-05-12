import Image from 'next/image';
import PrimaryButton from '@/components/Button/PrimaryButton';
import CharacterCard2 from '@/components/CharacterCard2';
import HeaderComponent from '@/components/Button/HeaderComponent';
import { useRouter } from 'next/navigation';

export default function CustomizingPage() {
  const router = useRouter();
  return (
    <div>
      <HeaderComponent pageName="Customizing/Themes" pageLink="/character" />
      <CharacterCard2 />
      <PrimaryButton
        label="Cutomizing/Color"
        onClick={() => router.push('/customizing')}
      />
      <p className="styles.theme">Color theme</p>
    </div>
  );
}
