'use client';

import api from '@/api/Api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

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
      const response = await api.post('auth/login', data);
      console.log('Resposta da API:', response.data);

      localStorage.setItem('token', response.data.token);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          E-mail
        </label>
        <input
          type="email"
          {...register('email')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Senha
        </label>
        <input
          type="password"
          {...register('password')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {serverError && (
        <p className="text-red-600 text-sm mb-4">{serverError}</p>
      )}

      {successMessage && (
        <p className="text-green-600 text-sm mb-4">{successMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
      >
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}
