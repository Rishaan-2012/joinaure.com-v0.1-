"use client"

import Image from "next/image"
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
