'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../Api/Api';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get('/dashboard');
        setLoading(false);
      } catch (error) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <p className=" flex flex-col items-center justify-center flex-1 p-8 bg-white font-candyland-bold text-pink-900 text-3xl mb-4">
        Carregando...
      </p>
    );
  }

  return (
    <div className="flex min-h-screen">
      <main className="flex flex-col items-center justify-center flex-1 p-8 bg-white text-2xl font-candyland font-candyland-bold text-pink-900">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-black">
          Welcome to the dashboard! You're now authenticated 🎉
        </p>
      </main>
    </div>
  );
}
