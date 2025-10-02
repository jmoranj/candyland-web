'use client';
import { useRouter } from 'next/navigation';
import CandyLogo from '@/components/icons/CandyLogo';
import { LoginForm } from '@/components/Auth/LoginForm';
import Wave from '@/components/icons/Wave';
import { FiArrowLeft } from 'react-icons/fi';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex relative">
      <div className="flex-1 flex items-center justify-center bg-white relative">
        <button
          onClick={() => router.push('/')}
          className="absolute top-16 left-16 flex items-center gap-2 bg-[var(--pinkStrong)] text-white font-extrabold px-6 py-2 rounded-md hover:bg-[var(--pinkStrongHover)] transition z-20"
        >
          <FiArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <div className="flex items-center justify-center w-full h-full">
          <CandyLogo sizeClasses="w-[512px] h-[512px]" />
        </div>
        <Wave
          side="right"
          fill="var(--background-pink)"
          className="absolute top-0 -right-24 h-full w-40"
        />
      </div>
      <div className="flex-1 flex items-center justify-center bg-[var(--background-pink)] relative z-0">
        <div className="p-8 rounded-lg w-[31.25rem]">
          <h1 className="text-2xl font-bold text-center text-[var(--brown-text)] mb-8">
            Área do Administrador
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
