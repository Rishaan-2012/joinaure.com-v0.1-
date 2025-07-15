"use client"

import Image from "next/image"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Footer from "./components/footer"

interface SolopreneurPageProps {
  onBackClick: () => void
  onLogoClick: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function SolopreneurPage({
  onBackClick,
  onLogoClick,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
}: SolopreneurPageProps) {
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
          <button
            onClick={onBackClick}
            className="scroll-animate flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="text-center">
            <h1 className="scroll-animate text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Built for Solopreneurs
            </h1>

            <p className="scroll-animate text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              Everything you need to start, run, and grow your solo business. From business formation to banking,
              payments to taxes—all in one platform designed for independent entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal text-gray-900 mb-16 text-center leading-tight">
            Everything you need to succeed as a solopreneur
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Quick Setup */}
            <div className="scroll-animate">
              <div className="bg-blue-50 rounded-2xl p-8 mb-6">
                <Image
                  src="/images/security-shield.png"
                  alt="Quick Business Setup"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Quick Business Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Form your LLC, get your EIN, and open a business bank account in minutes. We handle all the paperwork so
                you can focus on what you do best.
              </p>
            </div>

            {/* Simple Banking */}
            <div className="scroll-animate">
              <div className="bg-green-50 rounded-2xl p-8 mb-6">
                <Image
                  src="/images/bank-building.png"
                  alt="Simple Banking"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Simple Banking</h3>
              <p className="text-gray-600 leading-relaxed">
                High-yield business accounts with no monthly fees. Separate your personal and business finances with
                ease and earn more on your cash.
              </p>
            </div>

            {/* Easy Payments */}
            <div className="scroll-animate">
              <div className="bg-yellow-50 rounded-2xl p-8 mb-6">
                <Image
                  src="/images/credit-card.png"
                  alt="Easy Payments"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Easy Payments</h3>
              <p className="text-gray-600 leading-relaxed">
                Accept payments from clients with simple invoicing and payment links. Get paid faster with next-day
                deposits and automatic follow-ups.
              </p>
            </div>

            {/* Tax Made Simple */}
            <div className="scroll-animate">
              <div className="bg-purple-50 rounded-2xl p-8 mb-6">
                <Image
                  src="/images/tax-document.png"
                  alt="Tax Made Simple"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain rounded-lg"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Tax Made Simple</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatic expense tracking and tax preparation. We categorize your expenses and maximize deductions so
                you keep more of what you earn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal text-gray-900 mb-16 text-center leading-tight">
            Why solopreneurs choose Aure
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Save Time */}
            <div className="scroll-animate text-center">
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <Image
                  src="/images/global-icon.png"
                  alt="Save Time"
                  width={200}
                  height={150}
                  className="w-full h-32 object-contain rounded-lg mx-auto"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Save 10+ Hours Per Week</h3>
              <p className="text-gray-600 leading-relaxed">
                Stop juggling multiple platforms. Everything you need is in one place, saving you time for what matters
                most—growing your business.
              </p>
            </div>

            {/* Save Money */}
            <div className="scroll-animate text-center">
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <Image
                  src="/images/growth-chart.png"
                  alt="Save Money"
                  width={200}
                  height={150}
                  className="w-full h-32 object-contain rounded-lg mx-auto"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Save $3,000+ Per Year</h3>
              <p className="text-gray-600 leading-relaxed">
                Replace expensive accounting software, multiple bank accounts, and various business tools with one
                affordable platform.
              </p>
            </div>

            {/* Stay Compliant */}
            <div className="scroll-animate text-center">
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <Image
                  src="/images/user-profile.png"
                  alt="Stay Compliant"
                  width={200}
                  height={150}
                  className="w-full h-32 object-contain rounded-lg mx-auto"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Stay 100% Compliant</h3>
              <p className="text-gray-600 leading-relaxed">
                Never worry about missing deadlines or filing requirements. We handle all compliance automatically so
                you can sleep easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="scroll-animate">
            <Image
              src="/images/founder-speaking.png"
              alt="Happy Solopreneur"
              width={120}
              height={120}
              className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              quality={100}
              style={{ imageRendering: "crisp-edges" }}
            />
            <blockquote className="text-2xl md:text-3xl font-light text-gray-900 mb-6 leading-relaxed">
              "Aure transformed how I run my consulting business. What used to take me hours of admin work now happens
              automatically. I can focus on serving my clients instead of managing paperwork."
            </blockquote>
            <cite className="text-gray-600 font-medium">Sarah Chen, Marketing Consultant</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal mb-8 leading-tight">
            Ready to simplify your solo business?
          </h2>

          <p className="scroll-animate text-white text-opacity-75 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of solopreneurs who've streamlined their business operations with Aure. Start your journey
            today.
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
