"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
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
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
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

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          </nav>

          {/* Right Side - Login & Get Started Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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
          <div className="md:hidden">
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
