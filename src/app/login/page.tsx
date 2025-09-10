"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email.trim() || !password.trim()) {
      toast.error("Preencha todos os campos!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        toast.error("Credenciais inválidas!");
        throw new Error("Login failed");
      }

      const data = await response.json();

      localStorage.setItem("token", data.access_token);

      toast.success(`🍬 Seja Bem-vindo ${data.user.name || ""}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => { router.push("/dashboard");}, 3000);

    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-5xl font-candyland font-candyland-bold rounded flex justify-center items-center px-4 py-2 text-pink-800 mb-8">
          Login
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="font-candyland font-candyland-bold text-pink-900 text-2xl">
              Email:
            </label>
            <input
              type="email"
              placeholder="exemplo@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700 mb-4 text-neutral-900"
              required
            />
          </div>
          <div>
            <label className="font-candyland font-candyland-bold text-pink-900 text-2xl">
              Senha:
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700 mb-8 text-neutral-900"
              required
            />
          </div>

          <button
            type="submit"
            className="font-candyland font-candyland-bold w-full bg-pink-800 text-white py-2 rounded-md hover:bg-pink-800 transition"
            disabled={loading}
          >
            {loading ? <span className="animate-pulse">Carregando...</span> : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
