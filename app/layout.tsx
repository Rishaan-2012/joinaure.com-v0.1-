import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aure – Modern Money Management',
  description: 'Smarter financial solutions for modern businesses.',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
