import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aure – Modern Money Management',
  description: 'Smarter financial solutions for modern businesses.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <title>Aure – Modern Money Management</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
