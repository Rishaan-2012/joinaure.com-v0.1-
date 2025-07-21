"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Footer from "./components/footer"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface SolopreneurPageProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
  onBackClick: () => void
  onSolopreneurClick: () => void
  onHighEarnerClick: () => void
  onPricingClick: () => void
  onLearnClick: () => void
  onFaqClick: () => void
}

export default function SolopreneurPage({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
  onBackClick,
  onSolopreneurClick,
  onHighEarnerClick,
  onPricingClick,
  onLearnClick,
  onFaqClick,
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

        /* Hide all NavigationMenuTrigger arrows completely */
        [data-radix-navigation-menu-trigger] svg,
        [data-radix-navigation-menu-trigger]::after,
        [data-radix-navigation-menu-trigger]::before,
        .navigation-menu-trigger-arrow,
        [data-radix-navigation-menu-trigger] [data-radix-navigation-menu-indicator] {
          display: none !important;
          visibility: hidden !important;
        }

        /* Ensure NavigationMenuTrigger matches regular buttons exactly */
        [data-radix-navigation-menu-trigger] {
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          padding: 0.5rem 1rem !important;
          border: none !important;
          background: transparent !important;
        }

        /* Remove any default NavigationMenu styling that might affect size */
        [data-radix-navigation-menu-root],
        [data-radix-navigation-menu-list],
        [data-radix-navigation-menu-item] {
          font-size: inherit !important;
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
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 bg-transparent data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900"
                      style={{ fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit" }}
                    >
                      Who We Serve
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                        <div className="space-y-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              onSolopreneurClick()
                            }}
                            className="block w-full text-left text-gray-900 hover:text-gray-600 transition-colors py-2 px-3 rounded hover:bg-gray-50"
                          >
                            Solopreneur
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              onHighEarnerClick()
                            }}
                            className="block w-full text-left text-gray-900 hover:text-gray-600 transition-colors py-2 px-3 rounded hover:bg-gray-50"
                          >
                            High Earner
                          </button>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <button
                onClick={onPricingClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Pricing
              </button>
              <button
                onClick={onAboutClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                About Us
              </button>
              <button
                onClick={onLearnClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Learn
              </button>
              <button
                onClick={onFaqClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                FAQ
              </button>
            </div>
          </nav>

          {/* Right Side  Contact & Join Waitlist Buttons - Positioned absolutely on the right */}
          <div className="absolute right-6 hidden md:flex items-center space-x-4">
            <button
              onClick={onContactClick}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              Contact Us
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
          <div className="text-center">
            <h1 className="scroll-animate text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Built for <span className="text-[#d5b36e]">Solopreneurs</span>
            </h1>

            <p className="scroll-animate text-gray-600 text-lg max-w-4xl mx-auto mb-12 leading-relaxed">
              Simplify your solo business by combining Wealth, Finance and Business Compliance management under one
              membership
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-5xl md:text-5xl font-normal text-gray-900 mb-16 leading-tight tracking-tight">
            Fees are 100% tax deductible, plus with the tax savings, Aure membership quite literally pays for itself
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* LLC & Compliance */}
            <div className="scroll-animate">
              <div className="relative w-full h-64 mb-8 bg-gray-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Geometric illustration for Setup & Compliance */}
                    <div className="absolute top-8 left-8 w-32 h-24 bg-[#d5b36e] rounded-lg opacity-80"></div>
                    <div className="absolute top-16 left-16 w-24 h-16 bg-gray-300 rounded-lg"></div>
                    <div className="absolute top-20 left-20 w-16 h-8 bg-gray-800 rounded"></div>
                    <div className="absolute bottom-16 right-8 w-8 h-8 bg-white rounded-full border-2 border-[#d5b36e]"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Setup & Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                We can help launch your new business with LLC regsitration, EIN and Business bank account to separate
                your personal and business finances
              </p>
            </div>

            {/* Financial Planning */}
            <div className="scroll-animate">
              <div className="relative w-full h-64 mb-8 bg-gray-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Geometric illustration for Financial Planning */}
                    <div className="absolute top-12 left-12 w-24 h-24 bg-gray-300 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-16 h-32 bg-[#d5b36e] rounded-lg transform rotate-45"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-12 bg-gray-800 rounded-lg"></div>
                    <div className="absolute bottom-12 right-12 w-12 h-12 bg-[#c4a05d] rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Financial Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized financial planning to help you take control of cash flow, manage business expenses, and
                build toward long-term goals
              </p>
            </div>

            {/* Business Investment Account */}
            <div className="scroll-animate">
              <div className="relative w-full h-64 mb-8 bg-gray-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Geometric illustration for Investment Account */}
                    <div className="absolute top-8 right-8 w-28 h-20 bg-gray-300 rounded-2xl"></div>
                    <div className="absolute top-12 right-12 w-20 h-12 bg-[#d5b36e] rounded-xl"></div>
                    <div className="absolute bottom-8 left-8 w-24 h-16 bg-[#c4a05d] rounded-lg"></div>
                    <div className="absolute bottom-12 left-12 w-16 h-8 bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Business Investment Account</h3>
              <p className="text-gray-600 leading-relaxed">
                We help you earn over 4% yield on idle cash by investing in low-risk, high-liquidity, state tax-exempt
                U.S. Treasuries or money market funds
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Solo 401K */}
            <div className="scroll-animate">
              <div className="relative w-full h-64 mb-8 bg-gray-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Geometric illustration for Solo 401K */}
                    <div className="absolute top-8 left-8 w-32 h-32 bg-gray-300 rounded-full"></div>
                    <div className="absolute top-16 left-16 w-16 h-16 bg-[#d5b36e] rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-20 h-12 bg-gray-800 rounded-lg"></div>
                    <div className="absolute bottom-12 right-12 w-12 h-4 bg-[#c4a05d] rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Solo 401K</h3>
              <p className="text-gray-600 leading-relaxed">
                We help open your Solo 401(k) account to grow your retirement savings and reduce your taxes. Contribute
                both as an employee and an Employer.
              </p>
            </div>

            {/* Taxes */}
            <div className="scroll-animate">
              <div className="relative w-full h-64 mb-8 bg-gray-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Geometric illustration for Taxes */}
                    <div className="absolute top-8 left-8 w-28 h-32 bg-[#d5b36e] rounded-lg"></div>
                    <div className="absolute top-12 left-12 w-20 h-24 bg-gray-300 rounded-lg"></div>
                    <div className="absolute top-16 left-16 w-12 h-16 bg-gray-800 rounded"></div>
                    <div className="absolute bottom-8 right-8 w-16 h-8 bg-[#c4a05d] rounded-lg"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4"> Taxes </h3>
              <p className="text-gray-600 leading-relaxed">
                We support you year round to get the most tax savings with smart tax saving strategies. We also support
                tax filing through our trusted partner
              </p>
            </div>

            {/* Card Payment Processing */}
            <div className="scroll-animate">
              <div className="relative w-full h-64 mb-8 bg-gray-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Geometric illustration for Card Payment Processing */}
                    <div className="absolute top-8 right-8 w-24 h-28 bg-gray-300 rounded-2xl"></div>
                    <div className="absolute top-12 right-12 w-16 h-20 bg-[#d5b36e] rounded-xl"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-16 bg-[#c4a05d] rounded-lg"></div>
                    <div className="absolute bottom-16 left-16 w-8 h-8 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Card Payment Processing </h3>
              <p className="text-gray-600 leading-relaxed">
                We can help you with Invoicing and allowing your clients to pay via credit cards, debit cards or digital
                wallets with low processing fees (through our trusted partners)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal text-gray-900 mb-16 text-center leading-tight">
            Why solopreneurs love Aure
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Reason 1 */}
            <div className="scroll-animate text-center">
              <div className="w-16 h-16 bg-[#d5b36e] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Save Money and Stay Compliant</h3>
              <p className="text-gray-600 leading-relaxed">
                Our membership fees are 100% tax deductible as a business expense. Plus, with Solo 401K contributions,
                you'll save thousands in taxes annually. We provide year round support for business compliance
              </p>
            </div>

            {/* Reason 2 */}
            <div className="scroll-animate text-center">
              <div className="w-16 h-16 bg-[#d5b36e] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Everything in One Place</h3>
              <p className="text-gray-600 leading-relaxed">
                Stop juggling multiple platforms and vendors. From business formation to investments, cash flow
                management, Taxes and compliance - we handle it all so you can focus on growing your business
              </p>
            </div>

            {/* Reason 3 */}
            <div className="scroll-animate text-center">
              <div className="w-16 h-16 bg-[#d5b36e] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Built for Solo Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike generic business solutions, Aure is specifically designed for solopreneurs. We understand your
                unique challenges and provide tailored solutions that scale with your solo business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal mb-8 leading-tight">
            Ready to simplify your solo business?
          </h2>

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
