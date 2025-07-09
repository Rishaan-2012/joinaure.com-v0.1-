"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Footer from "./components/footer"

interface ContactPageProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onFormSubmit: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
}

export default function ContactPage({
  onLogoClick,
  onNavigateHome,
  onFormSubmit,
  onAboutClick,
  onFooterLinkClick,
}: ContactPageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <style jsx>{`
        .page-animate {
          opacity: 0;
          transform: translateY(16px);
          transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .page-animate.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        .button-hover {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .button-hover:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-24">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button onClick={onLogoClick}>
            <Image
              src="/images/aure-logo-new.png"
              alt="Aure Logo"
              width={140}
              height={52}
              className="h-14 w-auto hover:opacity-90"
              quality={100}
              priority
              unoptimized
            />
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={onNavigateHome} className="text-gray-600 hover:text-gray-900 font-medium">
              Company
            </button>
            <span className="text-gray-900 font-medium">Contact</span>
            <button onClick={onAboutClick} className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </button>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div className={`space-y-4 page-animate ${isLoaded ? "loaded" : ""}`}>
              <h1 className="text-4xl font-normal text-gray-900 leading-tight">Get in touch</h1>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                Running a business is hard enough. Don't lose momentum chasing capital when you could be building what
                matters. Aure gives you the modern financing support you need.
              </p>
            </div>

            {/* Right Side - Formspree */}
            <div className={`bg-white rounded-2xl shadow-lg p-6 page-animate ${isLoaded ? "loaded" : ""}`}>
              <p className="text-gray-600 mb-6 text-sm">
                Please fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form
                action="https://formspree.io/f/xqabvrow"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm"
                  required
                />

                <textarea
                  name="description"
                  placeholder="Description"
                  rows={3}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg resize-none text-sm"
                  required
                />

                <button
                  type="submit"
                  className="button-hover bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium text-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}

