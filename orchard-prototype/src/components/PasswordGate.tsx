import { useState } from 'react'
import type { FormEvent } from 'react'

const STORAGE_KEY = 'orchard-prototype-unlocked'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const expectedPassword = import.meta.env.VITE_PROTOTYPE_PASSWORD
  const [unlocked, setUnlocked] = useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem(STORAGE_KEY) === 'true'
  })
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // No password configured (e.g. local dev): show app without gate
  if (!expectedPassword || expectedPassword === '') {
    return <>{children}</>
  }

  if (unlocked) {
    return <>{children}</>
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (password === expectedPassword) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setUnlocked(true)
    } else {
      setError('Incorrect password. Try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0C2235] flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-xl border border-[#1e3a52] bg-[#0f2d44] p-8 shadow-xl">
        <h1 className="text-xl font-semibold text-[#E4E9ED] mb-1">Orchard Prototype</h1>
        <p className="text-sm text-[#94a3b8] mb-6">This prototype is password protected.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#E4E9ED] mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-[#0C2235] border border-[#1e3a52] text-[#E4E9ED] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent"
              placeholder="Enter password"
              autoFocus
              autoComplete="current-password"
            />
          </div>
          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium transition-colors"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  )
}
