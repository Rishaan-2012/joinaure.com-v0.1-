
"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect } from "react"
import { sendContactEmail } from "./actions/send-email"
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
  })

  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Trigger page entry animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      const result = await sendContactEmail(formDataObj)

      if (result.success) {
        onFormSubmit()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      // You could add error handling here
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
            {/* Left Side - Content */}
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
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <textarea
                    name="description"
                    placeholder="Description"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none text-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-hover bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
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
