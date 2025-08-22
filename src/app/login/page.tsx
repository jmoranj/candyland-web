'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      console.log('Login successful:', data)
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-candyland font-candyland-bold rounded flex justify-center items-center px-4 py-2 text-pink-800 mb-8">
          Login
        </h1>
        <form className="space-y-6"></form>
        <div>
          <label className="font-candyland font-candyland-bold text-pink-900">
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
          <label className="font-candyland font-candyland-bold text-pink-900">
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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-pink-800 text-white py-2 rounded-md hover:bg-pink-800 transition"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </div>
    </div>
  )
}
