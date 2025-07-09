export const metadata = {
  title: "Aure – Smarter Business Banking",
  description: "The best banking platform for modern businesses",
};
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aure – Smarter Business Banking</title> {/* ✅ Page tab title */}
        <meta name="description" content="Modern banking for modern businesses." />
      </Head>
      <main>
        {/* page content */}
      </main>
    </>
  );
}
"use client"

import Image from "next/image"
import Footer from "./components/footer"

interface ThankYouPageProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onFooterLinkClick: (page: string) => void
}

export default function ThankYouPage({ onLogoClick, onNavigateHome, onFooterLinkClick }: ThankYouPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-24">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onLogoClick} className="focus:outline-none">
              <Image
                src="/images/aure-logo-new.png"
                alt="Aure Logo"
                width={140}
                height={52}
                className="h-14 w-auto hover:opacity-90 transition-opacity"
                quality={100}
                priority
                style={{
                  imageRendering: "crisp-edges",
                  filter: "contrast(1.1) saturate(1.2)",
                }}
                unoptimized
              />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={onNavigateHome} className="text-gray-600 hover:text-gray-900 font-medium">
              Company
            </button>
            <span className="text-gray-900 font-medium">Contact</span>
            <button onClick={onNavigateHome} className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </button>
          </nav>
        </div>
      </header>

      {/* Thank You Content */}
      <div className="pt-24 h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-4xl font-normal text-gray-900 mb-4">Thank you!</h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We've received your message and will get back to you as soon as possible. Our team typically responds
                within 24 hours.
              </p>
            </div>

            <button
              onClick={onNavigateHome}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
