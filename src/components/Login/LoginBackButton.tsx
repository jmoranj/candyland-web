'use client';
import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function LoginBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="absolute top-6 left-6 flex items-center gap-2 bg-[var(--pinkStrong)] text-white font-extrabold px-6 py-2 rounded-md hover:bg-[var(--pinkStrongHover)] transition z-20"
    >
      <FiArrowLeft className="w-5 h-5" />
      Voltar
    </button>
  );
}
