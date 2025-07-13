"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Footer from "../components/footer"

interface TermsOfUseProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function TermsOfUse({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
}: TermsOfUseProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Handle scroll for header background
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 10) // Changed from 50 to 10 for quicker fade
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .logo-hover {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .logo-hover:hover {
          transform: scale(1.15);
        }
        .header-transition {
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-24 header-transition ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full relative flex items-center">
          {/* Logo - Positioned absolutely on the left */}
          <div className="absolute left-6 flex items-center">
            <button onClick={onLogoClick} className="focus:outline-none logo-hover">
              <Image
                src="/images/aure-logo-gold.png"
                alt="Aure Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                quality={100}
                priority
                style={{
                  imageRendering: "crisp-edges",
                }}
                unoptimized
              />
            </button>
          </div>

          {/* Center Navigation - Absolutely centered to the page */}
          <nav className="absolute left-1/2 transform -translate-x-1/2">
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={onNavigateHome}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Company
              </button>
              <button
                onClick={onContactClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Contact
              </button>
              <button
                onClick={onAboutClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                About
              </button>
            </div>
          </nav>

          {/* Right Side - Login & Get Started Buttons - Positioned absolutely on the right */}
          <div className="absolute right-6 hidden md:flex items-center space-x-4">
            <button
              onClick={() => window.open("https://aurefinancial.com", "_blank")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:scale-105 px-4 py-2"
            >
              Log in
            </button>
            <button
              onClick={() => window.open("https://aurefinancial.com", "_blank")}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-6">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-normal text-gray-900 mb-8">Terms of Use</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              These Terms of Use govern your access to and use of Aure Technologies Inc.'s services and platform.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              By accessing or using our services, you agree to be bound by these Terms of Use and all applicable laws
              and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Use License</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Permission is granted to temporarily access our services for personal, non-commercial transitory viewing
              only. This license shall automatically terminate if you violate any of these restrictions.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Users are responsible for maintaining the confidentiality of their account information and for all
              activities that occur under their account. You agree to notify us immediately of any unauthorized use of
              your account.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Prohibited Uses</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. You
              may not violate any local, state, national, or international law or regulation.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In no event shall Aure Technologies Inc. be liable for any damages arising out of the use or inability to
              use our services, even if we have been notified of the possibility of such damages.
            </p>

            <p className="text-sm text-gray-500 mt-12">Last updated: July 2025</p>
          </div>
        </div>
      </div>

      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
