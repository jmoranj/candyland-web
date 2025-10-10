import { LoginForm } from '@/components/Login/LoginForm';

export default function LoginPanel() {
  return (
    <div className="flex-1 flex items-center justify-center bg-[var(--background-pink)] relative z-0 w-full">
      <div className="bg-white p-8 rounded-lg w-[70%] max-w-md lg:bg-transparent lg:w-[31.25rem]">
        <h1 className="text-2xl font-bold text-center text-[var(--brown-text)] mb-8">
          Área do Administrador
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
