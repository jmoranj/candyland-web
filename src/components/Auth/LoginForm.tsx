'use client';

import api from '@/Api/Api';
import { loginSchema } from '@/schemas/Login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data: LoginFormData) => {
    setServerError('');
    setSuccessMessage('');

    try {
      await api.post('auth/login', data);
      setSuccessMessage('Login realizado com sucesso!');
      router.push('/dashboard');
    } catch (error: any) {
      if (error.response?.data?.message) {
        setServerError(error.response.data.message);
      } else {
        setServerError('Erro ao tentar fazer login. Tente novamente.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
      <input
        type="email"
        placeholder="id do adm"
        {...register('email')}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--pinkStrong)] text-neutral-900"
      />
      {errors.email && (
        <p className="text-red-500 text-base font-semibold mt-1">
          {errors.email.message}
        </p>
      )}

      <input
        type="password"
        placeholder="senha"
        {...register('password')}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--pinkStrong)] text-neutral-900"
      />
      {errors.password && (
        <p className="text-red-500 text-base font-semibold mt-1">{errors.password.message}</p>
      )}

      {serverError && <p className="text-red-500 text-base font-semibold mt-1">{serverError}</p>}
      {successMessage && (
        <p className="text-green-600 text-base font-semibold mt-1">{successMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full sm:w-[15.625rem] mx-auto block bg-[var(--pinkStrong)] text-white font-extrabold text-base sm:text-xl py-3 rounded-md hover:bg-[var(--pinkStrongHover)] transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <span className="animate-pulse">Carregando...</span>
        ) : (
          'Entrar'
        )}
      </button>
    </form>
  );
}
