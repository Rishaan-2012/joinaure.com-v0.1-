"use client"

import Image from "next/image"
import { ChevronRight, ArrowLeft } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Footer from "./components/footer"

interface HighEarnerPageProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
  onBackClick: () => void
}

export default function HighEarnerPage({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
  onBackClick,
}: HighEarnerPageProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Reset all animations when component mounts
    const resetAnimations = () => {
      const elements = document.querySelectorAll(".scroll-animate")
      elements.forEach((el) => {
        el.classList.remove("animate-fade-in")
        el.classList.add("opacity-0", "translate-y-16", "scale-95")
      })
    }

    resetAnimations()

    // Scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            entry.target.classList.remove("opacity-0", "translate-y-16", "scale-95")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    // Handle scroll for header background
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 10)
    }

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    // Add scroll listener
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
        .button-hover {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .button-hover:hover {
          transform: scale(1.05) !important;
        }
        button {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        button:hover {
          transform: scale(1.05);
        }
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
          isScrolled ? "bg-white shadow-lg" : "bg-gray-50"
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
              <button className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
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

          {/* Right Side - Login & Join Waitlist Buttons - Positioned absolutely on the right */}
          <div className="absolute right-6 hidden md:flex items-center space-x-4">
            <button
              onClick={() => window.open("https://aurefinancial.com", "_blank")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:scale-105 px-4 py-2"
            >
              Log in
            </button>
            <button
              onClick={() => window.open("https://aurefinancial.com/waitlist", "_blank")}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              Join Waitlist
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

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={onBackClick}
            className="scroll-animate flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="text-center">
            <h1 className="scroll-animate text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Built for <span className="text-[#d5b36e]">High Earners</span>
            </h1>

            <p className="scroll-animate text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              Advanced financial tools for successful entrepreneurs. Optimize your taxes, grow your wealth, and scale
              your business with sophisticated financial strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal text-gray-900 mb-16 text-center leading-tight">
            Advanced tools for high earners
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Tax Optimization */}
            <div className="scroll-animate text-center">
              <div className="bg-blue-50 rounded-2xl p-8 mb-6">
                <Image
                  src="/images/tax-document.png"
                  alt="Tax Optimization"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Tax Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced tax strategies to minimize your liability. Solo 401(k), SEP-IRA, and other retirement vehicles.
              </p>
            </div>

            {/* Wealth Management */}
            <div className="scroll-animate text-center">
              <div className="bg-green-50 rounded-2xl p-8 mb-6">
                <Image
                  src="/images/growth-chart.png"
                  alt="Wealth Management"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Wealth Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Invest idle cash in Treasuries and Money Market funds. Build long-term wealth with diversified
                portfolios.
              </p>
            </div>

            {/* Business Scaling */}
            <div className="scroll-animate text-center">
              <div className="bg-yellow-50 rounded-2xl p-8 mb-6">
                <Image
                  src="/images/growth-dashboard.png"
                  alt="Business Scaling"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Business Scaling</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-entity structures, international banking, and advanced compliance for growing businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal text-gray-900 mb-16 text-center leading-tight">
            Why high earners choose Aure
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Maximize Returns */}
            <div className="scroll-animate text-center">
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <Image
                  src="/images/save-money-dashboard.png"
                  alt="Maximize Returns"
                  width={200}
                  height={150}
                  className="w-full h-32 object-contain rounded-lg mx-auto"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Maximize Returns</h3>
              <p className="text-gray-600 leading-relaxed">
                High-yield accounts, Treasury investments, and cashback rewards to maximize every dollar you earn.
              </p>
            </div>

            {/* Minimize Taxes */}
            <div className="scroll-animate text-center">
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <Image
                  src="/images/user-profile.png"
                  alt="Minimize Taxes"
                  width={200}
                  height={150}
                  className="w-full h-32 object-contain rounded-lg mx-auto"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Minimize Taxes</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced tax planning and strategies to legally minimize your tax burden and keep more of what you earn.
              </p>
            </div>

            {/* Scale Globally */}
            <div className="scroll-animate text-center">
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <Image
                  src="/images/global-icon.png"
                  alt="Scale Globally"
                  width={200}
                  height={150}
                  className="w-full h-32 object-contain rounded-lg mx-auto"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Scale Globally</h3>
              <p className="text-gray-600 leading-relaxed">
                International banking, multi-currency support, and global compliance for businesses that think big.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal mb-8 leading-tight">
            Ready to optimize your wealth?
          </h2>

          <p className="scroll-animate text-white text-opacity-75 text-lg mb-12 max-w-2xl mx-auto">
            Join successful entrepreneurs who've maximized their financial potential with Aure's advanced tools.
          </p>

          <button
            onClick={onContactClick}
            className="scroll-animate button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-8 py-4 rounded flex items-center gap-2 font-medium mx-auto"
          >
            Contact Us
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
