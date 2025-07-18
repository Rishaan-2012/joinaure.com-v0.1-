"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Footer from "./components/footer"

interface ContactPageProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onFormSubmit: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
  onSolopreneurClick: () => void
  onHighEarnerClick: () => void
  onPricingClick: () => void
}

export default function ContactPage({
  onLogoClick,
  onNavigateHome,
  onFormSubmit,
  onAboutClick,
  onFooterLinkClick,
  onSolopreneurClick,
  onHighEarnerClick,
  onPricingClick,
}: ContactPageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Handle scroll for header background
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 10) // Changed from 50 to 10 for quicker fade
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xqabvrow", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSuccess(true)
        form.reset()
        onFormSubmit()
      } else {
        console.error("Submission failed")
      }
    } catch (err) {
      console.error("Unexpected error", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
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

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-24 header-transition ${
          isScrolled ? "bg-white shadow-lg" : "bg-gray-100"
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
              <span className="text-gray-900 font-medium px-4 py-2">Contact</span>
            </div>
          </nav>

          {/* Right Side - Login & Get Started Buttons - Positioned absolutely on the right */}
          <div className="absolute right-6 hidden md:flex items-center space-x-4">
            
            <button
              onClick={() => window.open("https://aurefinancial.com", "_blank")}
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

      {/* Contact Content */}
      <div className="flex-1 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div className={`space-y-6 page-animate ${isLoaded ? "loaded" : ""}`}>
              <h1 className="text-4xl font-normal text-gray-900 leading-tight">Get in touch</h1>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                Make your money work harder — with Aure's flat-fee, commission-free approach.
              </p>

              

              <div className="pt-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Ready to get started?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form and our team will reach out to discuss how Aure can help streamline your business
                  finances and accelerate your growth.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className={`bg-white rounded-2xl shadow-lg p-8 page-animate ${isLoaded ? "loaded" : ""}`}>
              <p className="text-gray-600 mb-6 text-sm">
                Please fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                  />
                </div>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                />
                <textarea
                  name="description"
                  placeholder="Tell us about your business and how we can help"
                  rows={4}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-hover bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {success && (
                  <p className="text-green-600 text-sm pt-2">
                    ✅ Your message was sent successfully. We'll get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
