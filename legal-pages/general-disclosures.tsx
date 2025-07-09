"use client"

import Image from "next/image"
import Footer from "../components/footer"

interface GeneralDisclosuresProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function GeneralDisclosures({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
}: GeneralDisclosuresProps) {
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
          <h1 className="text-4xl font-normal text-gray-900 mb-8">General Disclosures</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              The following general disclosures apply to all services provided by Aure Technologies Inc. and its
              affiliates. Please note that many features and capabilities shown on our website represent our vision and
              roadmap, and are not yet guaranteed or fully implemented.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Financial Services</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Aure Technologies Inc. provides financial technology services and is not a bank. Banking services are
              provided through our partner financial institutions. All deposits are FDIC insured up to applicable
              limits.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Investment Disclosures</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Investment products and services are not FDIC insured, may lose value, and are not guaranteed by any bank
              or government agency. Past performance does not guarantee future results. All investments involve risk.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Regulatory Information</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Aure Technologies Inc. is registered with appropriate regulatory bodies and complies with all applicable
              federal and state regulations governing financial services.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For questions regarding these disclosures or our services, please contact us through our official channels
              or visit our contact page.
            </p>

            <p className="text-sm text-gray-500 mt-12">Last updated: July 2025</p>
          </div>
        </div>
      </div>

      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
