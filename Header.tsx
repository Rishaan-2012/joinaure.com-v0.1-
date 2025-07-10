"use client"

import Image from "next/image"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/aure-logo-new.png" alt="Aure Logo" width={140} height={52} />
        </Link>

        {/* Nav + Auth */}
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>

          {session ? (
            <>
              <span className="text-sm text-gray-600 hidden sm:inline">Hi, {session.user?.name?.split(" ")[0]}</span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
