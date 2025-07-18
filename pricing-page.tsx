"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Check, ChevronRight } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Footer from "./components/footer"

interface PricingPageProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
  onSolopreneurClick: () => void
  onHighEarnerClick: () => void
  onPricingClick: () => void
}

export default function PricingPage({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
  onSolopreneurClick,
  onHighEarnerClick,
  onPricingClick,
}: PricingPageProps) {
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

    // Much more dramatic scroll animations
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

    // Handle scroll for header background only
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
              <span className="text-gray-900 font-medium px-4 py-2">Pricing</span>
              <button
                onClick={onAboutClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                About Us
              </button>
              <button
                onClick={onContactClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </nav>

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
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="scroll-animate text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
             $12,000 Flat Fee Per Year
          </h1>
          <p className="scroll-animate text-gray-600 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Simple, Transparent Pricing. No AUM percentage fees. No hidden fees. No commissions. <br/>A flat fee minimizes conflicts of interest, meaning all of our advice is tailored to you and your life.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Solopreneur Plan */}
            <div className="scroll-animate bg-blue-50 rounded-2xl p-8 border border-blue-100 transition-transform duration-300 hover:shadow-lg">
              <div className="bg-[#d5b36e] bg-opacity-20 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-gray-900 text-sm font-medium">For Solo Business Owners</span>
              </div>

              <h3 className="text-3xl font-normal text-gray-900 mb-2 leading-tight">Solopreneur Plan</h3>

              <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">$3000</span>
                <span className="text-gray-600 pb-1">billed quarterly</span>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Comprehensive financial planning and wealth management for solo business owners.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">100% tax deductible fees </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Business setup including LLC creation, EIN, Business bank account</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive, personalized financial planning for your business </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Over 4% APR with US Treasuries (U.S. government-backed)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Investment in low-risk, high-liquidity money market funds</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Retirement planning with Solo 401(k)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Cashflow planning and Bookkeeping support</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Proactive Tax planning with business deductions</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Quarterly tax estimates</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Business and Individual Tax Prep and filing by a licensed tax partner</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">Invoicing and Payments for your business (Cards, ACH)</span>
                </div>
              </div>

              <button
                onClick={onSolopreneurClick}
                className="w-full button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-6 py-3 rounded flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* High Earner Plan */}
            <div className="scroll-animate bg-gray-900 rounded-2xl p-8 text-white transition-transform duration-300 hover:shadow-lg">
              <div className="bg-white bg-opacity-10 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-white text-sm font-medium">For High Income Professionals</span>
              </div>

              <h3 className="text-3xl font-normal mb-2 leading-tight">High Earner Plan</h3>

              <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-bold">$3000</span>
                <span className="text-white text-opacity-75 pb-1">billed quarterly</span>
              </div>

              <p className="text-white text-opacity-75 mb-8 leading-relaxed">
                Comprehensive wealth management for high-income professionals with complex financial needs.
              </p>

              <div className="space-y-4 mb-8">
               <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Personalized and commission-free approach from Fiduciary</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Portfolio Analysis & Recommendations</span>
                </div>
                 
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Risk Profile Assessment</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Portfolio management</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90"> over 4% APY on Cash Savings </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Tax Loss Harvesting</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Proactive Tax planning</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Retirement planning</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Covered call strategy for income generation</span>
                
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Diversification for concentrated positions</span>
                
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#d5b36e] mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-opacity-90">Federal and State Tax filing by a licensed tax partner</span>
                </div>
              </div>

              <button
                onClick={onHighEarnerClick}
                className="w-full button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-6 py-3 rounded flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="scroll-animate text-4xl font-normal text-gray-900 mb-12 text-center leading-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="scroll-animate bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-3">What is a fiduciary?</h3>
              <p className="text-gray-600">
                A fiduciary holds a legal and ethical relationship of trust with the person whom they are serving. Therefore, a fiduciary is legally obligated to only make recommendations in the best interest of each person they are giving advice to. Aure is a registered investment advisor and we act as fiduciaries 100% of the time. 
              </p>
            </div>

            <div className="scroll-animate bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Is there a minimum investment requirement?</h3>
              <p className="text-gray-600">
                We don't have strict asset minimums. Our services are specifically designed for solopreneurs and high-income
                professionals who value comprehensive financial planning and wealth management, regardless of their
                current asset level.
              </p>
            </div>

            <div className="scroll-animate bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Can I cancel my plan at any time?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your plan at any time with 30 days' notice. There are no long-term contracts or
                cancellation fees. We believe in earning your business every month through exceptional service.
              </p>
            </div>

            <div className="scroll-animate bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-3">What sets you apart?</h3>
              <p className="text-gray-600">
               We specialize in serving solopreneurs and high-income professionals, and we deeply understand the financial complexities they face.Unlike most advisors who earn commissions or charge a percentage of your assets, we use a simple, flat-fee model — no hidden costs, no lockups, and full transparency. We have partnered with some of the most trusted financial platforms in the U.S. to give you access to institutional-grade tools and the best available rates — while keeping you in full control of your money at all times.
              </p>
            </div>
            <div className="scroll-animate bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-3">I can do this myself, why do I need Aure?</h3>
              <p className="text-gray-600">
                While you may feel confident handling financial tasks independently, Aure provides tailored advice, expertise, objectivity, saves you time, manages risks, and adapts your plan to changing circumstances, ensuring your long-term financial wellness and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="scroll-animate text-4xl font-normal mb-6 leading-tight">
            Ready to take control of your financial future?
          </h2>

          <p className="scroll-animate text-white text-opacity-75 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your financial goals and see how Aure can help you achieve them.
          </p>

          <button
            onClick={onContactClick}
            className="scroll-animate button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-10 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
