"use client"

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

export function Header() {
  const { data: session } = useSession()

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <Link href="/" className="font-semibold text-lg">Aure</Link>
      <nav className="flex items-center gap-4">
        <Link href="/docs">Docs</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/legal">Legal</Link>
        {session ? (
          <button onClick={() => signOut()} className="text-sm text-red-500">Logout</button>
        ) : (
          <button onClick={() => signIn("google")} className="text-sm text-blue-600">Login</button>
        )}
      </nav>
    </header>
  )
}
