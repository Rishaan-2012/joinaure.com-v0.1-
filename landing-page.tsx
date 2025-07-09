"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Footer from "./components/footer"

interface LandingPageProps {
  onContactClick: () => void
  onLogoClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function LandingPage({
  onContactClick,
  onLogoClick,
  onAboutClick,
  onFooterLinkClick,
}: LandingPageProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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

    // Simple zoom animation based on scroll
    const handleScroll = () => {
      if (heroImageRef.current) {
        const rect = heroImageRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Calculate zoom based on scroll position
        const scrolled = Math.max(0, windowHeight - rect.top)
        const rate = scrolled * 0.0002
        const scale = 1 + rate

        heroImageRef.current.style.transform = `scale(${Math.min(scale, 1.1)})`
      }
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
        .hero-image {
          perspective: 1000px;
          transition: all 0.1s ease-out;
        }
      `}</style>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-24">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onLogoClick} className="focus:outline-none logo-hover">
              <Image
                src="/images/aure-logo-new.png"
                alt="Aure Logo"
                width={140}
                height={52}
                className="h-14 w-auto"
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
            <button className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50">
              Company
            </button>
            <button
              onClick={onContactClick}
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Contact
            </button>
            <button
              onClick={onAboutClick}
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              About
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="scroll-animate text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Grow your business with everything in one login.
          </h1>

          <p className="scroll-animate text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Combine Banking, Payments, Investing, Taxes, Retirement and Business Compliance. Powering Financial
            Inclusion and Growth for Independent Entrepreneurs Locally and Globally
          </p>

          <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onContactClick}
              className="button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-white px-8 py-4 rounded flex items-center gap-2 font-medium"
            >
              Contact Us
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onAboutClick}
              className="button-hover border border-gray-400 text-gray-900 px-8 py-4 rounded hover:bg-gray-50 font-medium"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image with Progressive 3D Animation */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div ref={heroImageRef} className="relative transition-transform duration-300 ease-out">
            <Image
              src="/images/hero-comparison.png"
              alt="Feature Comparison Dashboard showing Aure's competitive advantages"
              width={1319}
              height={805}
              className="w-full rounded-3xl shadow-2xl"
              quality={100}
              priority
              style={{ imageRendering: "crisp-edges" }}
            />
            <p className="text-xs text-gray-400 text-center mt-4 opacity-60">
              *Features and capabilities shown represent our vision and are not yet guaranteed or fully implemented.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-5xl md:text-6xl font-normal text-gray-900 mb-16 leading-tight tracking-tight">
            Financial management essentials built for entrepreneurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Growth Card */}
            <div className="scroll-animate bg-blue-100 rounded-2xl p-8 relative overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-black bg-opacity-10 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-gray-900 text-sm font-medium">Growth</span>
              </div>

              <h3 className="text-3xl font-normal text-gray-900 mb-4 leading-tight">Grow your Business</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Grow globally, boost cash flow with high-yield accounts or Treasuries, and earn cashback on business
                card purchases.
              </p>

              <Image
                src="/images/growth-dashboard.png"
                alt="Business Growth Dashboard showing scaling from $1M to $100M"
                width={335}
                height={188}
                className="w-full rounded-2xl shadow-lg mb-6"
                quality={100}
                style={{ imageRendering: "crisp-edges" }}
              />

              <button onClick={onAboutClick} className="text-gray-900 font-medium hover:underline">
                Learn more
              </button>
            </div>

            {/* Time Card */}
            <div className="scroll-animate bg-yellow-50 rounded-2xl p-8 relative overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
              <div className="bg-black bg-opacity-10 rounded-full px-4 py-2 inline-block mb-6 w-fit">
                <span className="text-gray-900 text-sm font-medium">Time</span>
              </div>

              <h3 className="text-3xl font-normal text-gray-900 mb-4 leading-tight">Save your time</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                All-in-one platform with powerful tools, tech, and expert support—no coding or setup needed.
              </p>

              <div className="relative mb-6 flex-grow">
                <Image
                  src="/images/global-icon.png"
                  alt="Global Operations Icon"
                  width={193}
                  height={154}
                  className="rounded-lg shadow-lg opacity-60"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
                <Image
                  src="/images/database-icon.png"
                  alt="Database Management Icon"
                  width={209}
                  height={177}
                  className="absolute top-8 right-0 rounded-lg shadow-lg"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>

              <button onClick={onAboutClick} className="text-gray-900 font-medium hover:underline self-start">
                Learn more
              </button>
            </div>

            {/* Money Card */}
            <div className="scroll-animate bg-gray-900 rounded-2xl p-8 relative overflow-hidden text-white transition-transform duration-300 hover:scale-105">
              <div className="bg-white bg-opacity-10 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-white text-sm font-medium">Money</span>
              </div>

              <h3 className="text-3xl font-normal mb-4 leading-tight">Save your money</h3>

              <p className="text-white text-opacity-75 mb-6 leading-relaxed">
                Grow revenue globally, boost cash with high-yield accounts or Treasuries, and earn cashback on every
                purchase.
              </p>

              <Image
                src="/images/save-money-dashboard.png"
                alt="Money Savings Dashboard showing $100,000 potential savings"
                width={315}
                height={176}
                className="w-full rounded-2xl shadow-lg mb-6"
                quality={100}
                style={{ imageRendering: "crisp-edges" }}
              />

              <button onClick={onAboutClick} className="text-white font-medium hover:underline">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-5xl md:text-6xl font-normal text-gray-900 mb-16 leading-tight tracking-tight">
            The Only All-in-One Financial Platform for Small Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* LLC & Compliance */}
            <div className="scroll-animate text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
                <Image
                  src="/images/security-shield.png"
                  alt="Security Shield representing LLC & Compliance services"
                  width={400}
                  height={400}
                  className="rounded-lg max-w-full max-h-full object-contain"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">LLC & Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Form your U.S. business, get an EIN, and stay compliant with automated legal and tax support—built for
                global founders.
              </p>
            </div>

            {/* Business Banking */}
            <div className="scroll-animate text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
                <Image
                  src="/images/bank-building.png"
                  alt="Bank Building representing Business Banking services"
                  width={400}
                  height={400}
                  className="rounded-lg max-w-full max-h-full object-contain"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Business Banking</h3>
              <p className="text-gray-600 leading-relaxed">
                Open a high-yield, FDIC-insured account with no fees. Easily manage money and organize funds in
                sub-accounts.
              </p>
            </div>

            {/* Cards & Cashback */}
            <div className="scroll-animate text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
                <Image
                  src="/images/credit-card.png"
                  alt="Credit Card representing Cards & Cashback services"
                  width={400}
                  height={400}
                  className="rounded-lg max-w-full max-h-full object-contain"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Cards & Cashback</h3>
              <p className="text-gray-600 leading-relaxed">
                Use physical and virtual cards to track spending, earn cashback, and build business credit with every
                purchase.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Payments & Tax */}
            <div className="scroll-animate text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
                <Image
                  src="/images/tax-document.png"
                  alt="Tax Document representing Payments & Tax services"
                  width={400}
                  height={400}
                  className="rounded-lg max-w-full max-h-full object-contain"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Payments & Tax</h3>
              <p className="text-gray-600 leading-relaxed">
                Accept card payments via links or invoices with next-day payouts. Sales tax, VAT, and GST compliance
                handled automatically.
              </p>
            </div>

            {/* Books & Support */}
            <div className="scroll-animate text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
                <Image
                  src="/images/user-profile.png"
                  alt="User Profile representing Books & Support services"
                  width={400}
                  height={400}
                  className="rounded-lg max-w-full max-h-full object-contain"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Books & Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Track income and expenses in real time. We handle tax filing and help you maximize deductions with
                expert support.
              </p>
            </div>

            {/* Invest & Retire */}
            <div className="scroll-animate text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
                <Image
                  src="/images/growth-chart.png"
                  alt="Growth Chart representing Investment & Retirement services"
                  width={400}
                  height={400}
                  className="rounded-lg max-w-full max-h-full object-contain"
                  quality={100}
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Invest & Retire</h3>
              <p className="text-gray-600 leading-relaxed">
                Move idle cash into Treasuries or Money Market funds. Open a Solo 401(k) to grow retirement savings and
                cut taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-5xl md:text-6xl font-normal mb-8 leading-tight tracking-tight">
            Simplify your finances with powerful tools and support built for growth.
          </h2>

          <p className="scroll-animate text-white text-opacity-75 text-lg mb-12">All without hidden costs.</p>

          <button
            onClick={onContactClick}
            className="scroll-animate button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-8 py-4 rounded flex items-center gap-2 font-medium"
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
