"use client"

import Image from "next/image"
import Footer from "../components/footer"

interface ReferralAgreementProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function ReferralAgreement({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
}: ReferralAgreementProps) {
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
          <h1 className="text-4xl font-normal text-gray-900 mb-8">Referral Agreement</h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-normal text-gray-900 mt-0 mb-4">Coming Soon</h2>
              <p className="text-gray-700 leading-relaxed mb-0">
                Our referral program and agreement are currently being developed. We're working on creating an exciting
                program that will reward our users for sharing Aure with their network.
              </p>
            </div>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">What to Expect</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our upcoming referral program will include competitive rewards for successful referrals, clear terms and
              conditions, and an easy-to-use referral system integrated into your Aure dashboard.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Stay Updated</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We'll notify all users when our referral program launches. In the meantime, feel free to share Aure with
              your network - we appreciate your support in helping us grow!
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Questions?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have questions about our upcoming referral program, please don't hesitate to contact us. We'd love
              to hear your feedback and suggestions.
            </p>

            <p className="text-sm text-gray-500 mt-12">Last updated: July 2025</p>
          </div>
        </div>
      </div>

      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
