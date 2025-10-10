import CandyLogo from '@/components/icons/CandyLogo';
import Wave from '@/components/icons/Wave';

export default function LoginIllustration() {
  return (
    <div className="flex-1 items-center justify-center bg-white relative hidden md:flex min-w-[400px] min-h-[800px]">
      <div className="flex items-center justify-center w-full h-full">
        <CandyLogo sizeClasses="w-[512px] h-[512px]" />
      </div>
      <Wave
        side="right"
        fill="var(--background-pink)"
        className="absolute top-0 -right-24 h-full w-40"
      />
    </div>
  );
}
