"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Footer from "../components/footer"

interface CookiesProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function Cookies({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
}: CookiesProps) {
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
          <h1 className="text-4xl font-normal text-gray-900 mb-8">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              This Cookie Policy explains how Aure Technologies Inc. uses cookies and similar technologies on our
              website and services.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">What Are Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and improving our services.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Types of Cookies We Use</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Essential Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies are necessary for our website to function properly and cannot be disabled. They enable
                core functionality such as security, network management, and accessibility.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use analytics cookies to understand how visitors interact with our website, helping us improve our
                services and user experience.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Functional Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences
                and settings.
              </p>
            </div>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You can control and manage cookies through your browser settings. Most browsers allow you to block or
              delete cookies, though this may affect your experience on our website.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may use third-party services that set their own cookies. These services help us analyze website traffic
              and improve our services. We do not control these third-party cookies.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>

            <p className="text-sm text-gray-500 mt-12">Last updated: July 2025</p>
          </div>
        </div>
      </div>

      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
