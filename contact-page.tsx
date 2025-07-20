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
  onLearnClick: () => void
  onFaqClick: () => void
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
  onLearnClick,
  onFaqClick,
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
      const response = await fetch("https://formsp.io/f/xdkdndnd", {
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
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        .button-hover {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .button-hover:hover {
          transform: scale(1.05);
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

      {/* Contact Section */}
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className={`fade-in ${isLoaded ? "loaded" : ""}`} style={{ transitionDelay: "0.1s" }}>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
                Let's talk about your financial future
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ready to take control of your wealth? Schedule a free consultation to discuss your goals and see how
                Aure can help you achieve them.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d5b36e] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@aurefinancial.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d5b36e] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className={`fade-in ${isLoaded ? "loaded" : ""}`} style={{ transitionDelay: "0.3s" }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-medium text-gray-900 mb-6">Send us a message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d5b36e] focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d5b36e] focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d5b36e] focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d5b36e] focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d5b36e] focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a topic</option>
                          <option value="consultation">Schedule a Consultation</option>
                          <option value="solopreneur">Solopreneur Services</option>
                          <option value="high-earner">High Earner Services</option>
                          <option value="pricing">Pricing Questions</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder="Tell us about your financial goals and how we can help..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d5b36e] focus:border-transparent transition-all duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onFooterLinkClick={onFooterLinkClick} />
    </div>
  )
}
