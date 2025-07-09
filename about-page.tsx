import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aure – Smarter Business Banking</title> {/* ✅ Page tab title */}
        <meta name="description" content="Modern banking for modern businesses." />
      </Head>
      <main>
        {/* page content */}
      </main>
    </>
  );
}
"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import Footer from "./components/footer"

interface AboutPageProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function AboutPage({ onLogoClick, onNavigateHome, onContactClick, onFooterLinkClick }: AboutPageProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Apple-level smooth animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            entry.target.classList.remove("opacity-0", "translate-y-4")
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    )

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(16px);
          transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .button-hover, button {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .button-hover:hover, button:hover {
          transform: scale(1.05);
        }
      `}</style>

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
            <span className="text-gray-900 font-medium">About</span>
          </nav>
        </div>
      </header>

      {/* Mission Section - Now first with dark background */}
      <section className="pt-32 pb-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <p className="scroll-animate text-sm font-medium text-gray-400 mb-6 tracking-wide uppercase">Our Mission</p>

            <h2 className="scroll-animate text-4xl md:text-5xl font-normal mb-8 leading-tight">
              Aure is leading the future of AI driven finance.
            </h2>

            <p className="scroll-animate text-gray-300 text-lg leading-relaxed">
              Today, Aure is building a smarter, founder-first approach to financing—helping modern businesses access
              capital without giving up equity or taking on rigid debt. Tomorrow, we aim to become the financial
              operating system for ambitious companies. With Aure, founders will be able to borrow, save, invest, and
              manage cash flow in one seamless platform—built for transparency, intelligence, and long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section - Now second */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h1 className="scroll-animate text-5xl md:text-6xl font-normal text-gray-900 leading-tight">
                Built for modern businesses
              </h1>

              <p className="scroll-animate text-gray-600 text-lg leading-relaxed max-w-lg">
                Aure delivers smart financial infrastructure for founders and operators. Manage cash, earn more on idle
                funds, and access tailored capital solutions—all in one seamless platform.
              </p>

              <button
                onClick={onContactClick}
                className="scroll-animate button-hover bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium"
              >
                Contact Us
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div className="scroll-animate">
              <Image
                src="/images/financial-illustration.png"
                alt="Financial tools illustration showing banking, analytics, and growth"
                width={900}
                height={600}
                className="w-full h-auto"
                quality={100}
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal mb-6 leading-tight">
            Join forward-thinking founders
          </h2>

          <p className="scroll-animate text-3xl md:text-4xl font-normal mb-12 leading-tight text-[#d5b36e]">
            using Aure to run smarter, faster business finance
          </p>

          <button
            onClick={onContactClick}
            className="scroll-animate button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-8 py-4 rounded-lg font-medium"
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
