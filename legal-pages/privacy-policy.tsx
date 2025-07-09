"use client"

import Image from "next/image"
import Footer from "../components/footer"

interface PrivacyPolicyProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function PrivacyPolicy({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
}: PrivacyPolicyProps) {
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
          <h1 className="text-4xl font-normal text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              This Privacy Policy describes how Aure Technologies Inc. collects, uses, and protects your personal
              information.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services,
              or contact us for support. This may include your name, email address, phone number, and financial
              information.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We use the information we collect to provide, maintain, and improve our services, process transactions,
              send you technical notices and support messages, and communicate with you about our services.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy or as required by law.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You have the right to access, update, or delete your personal information. You may also opt out of certain
              communications from us. Contact us to exercise these rights.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us through our official channels.
            </p>

            <p className="text-sm text-gray-500 mt-12">Last updated: July 2025</p>
          </div>
        </div>
      </div>

      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
