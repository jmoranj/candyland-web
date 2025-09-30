"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen w-full">
      <main className="flex flex-col items-center justify-center flex-1 p-8 bg-white text-2xl font-candyland font-candyland-bold text-pink-900">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-black">
          Welcome to the dashboard! You're now authenticated 🎉
        </p>
      </main>
    </div>
  );
}
