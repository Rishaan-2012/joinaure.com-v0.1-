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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
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
            <span className="text-gray-900 font-medium">Contact</span>
            <button onClick={onAboutClick} className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </button>
          </nav>
        </div>
      </header>

      {/* Contact Content */}
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

            {/* Right Side - Form */}
            <div className={`bg-white rounded-2xl shadow-lg p-6 page-animate ${isLoaded ? "loaded" : ""}`}>
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
                  placeholder="Description"
                  rows={3}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-hover bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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




