import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aure Modern Money Management',
  description: 'Join Aure Today',
  generator: 'v0.dev',
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
