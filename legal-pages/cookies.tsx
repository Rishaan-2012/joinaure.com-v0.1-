"use client"

import Image from "next/image"
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
  return (
    <div className="min-h-screen bg-white">
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
            <button onClick={onContactClick} className="text-gray-600 hover:text-gray-900 font-medium">
              Contact
            </button>
            <button onClick={onAboutClick} className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </button>
          </nav>
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
