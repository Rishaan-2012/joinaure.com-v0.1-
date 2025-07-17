"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Footer from "./components/footer"

interface LandingPageProps {
  onContactClick: () => void
  onLogoClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
  onSolopreneurClick: () => void
  onHighEarnerClick: () => void
  onPricingClick: () => void
}

export default function LandingPage({
  onContactClick,
  onLogoClick,
  onAboutClick,
  onFooterLinkClick,
  onSolopreneurClick,
  onHighEarnerClick,
  onPricingClick,
}: LandingPageProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [waitlistData, setWaitlistData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    companySize: "",
    interests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

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

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("firstName", waitlistData.firstName)
      formData.append("lastName", waitlistData.lastName)
      formData.append("email", waitlistData.email)
      formData.append("companyName", waitlistData.companyName)
      formData.append("jobTitle", waitlistData.jobTitle)
      formData.append("companySize", waitlistData.companySize)
      formData.append("interests", waitlistData.interests)

      const response = await fetch("https://formspree.io/f/xdkdndnd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitMessage("Thank you for joining our waitlist! We'll be in touch soon.")
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsWaitlistOpen(false)
          setSubmitMessage("")
          setWaitlistData({
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            jobTitle: "",
            companySize: "",
            interests: "",
          })
        }, 3000)
      } else {
        setSubmitMessage("There was an error submitting your information. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("There was an error submitting your information. Please try again.")
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setWaitlistData((prev) => ({ ...prev, [field]: value }))
  }

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
                            onClick={onSolopreneurClick}
                            className="block w-full text-left text-gray-900 hover:text-gray-600 transition-colors py-2 px-3 rounded hover:bg-gray-50"
                          >
                            Solopreneur
                          </button>
                          <button
                            onClick={onHighEarnerClick}
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
                onClick={onContactClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Right Side - Login & Join Waitlist Buttons - Positioned absolutely on the right */}
          <div className="absolute right-6 hidden md:flex items-center space-x-4">
            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-md">
                  Join Waitlist
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Join Our Waitlist</DialogTitle>
                </DialogHeader>
                {submitMessage ? (
                  <div className="text-center py-8">
                    <div
                      className={`font-medium ${submitMessage.includes("error") ? "text-red-600" : "text-green-600"}`}
                    >
                      {submitMessage}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={waitlistData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={waitlistData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={waitlistData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={waitlistData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={waitlistData.jobTitle}
                        onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select
                        name="companySize"
                        value={waitlistData.companySize}
                        onValueChange={(value) => handleInputChange("companySize", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="interests">What interests you most about Aure?</Label>
                      <Textarea
                        id="interests"
                        name="interests"
                        value={waitlistData.interests}
                        onChange={(e) => handleInputChange("interests", e.target.value)}
                        placeholder="Tell us what you're looking for..."
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#d5b36e] hover:bg-[#c4a05d] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
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
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="scroll-animate text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Modern Wealth Management for
            <br />
            Solopreneurs and High Earners
          </h1>

          <p className="scroll-animate text-gray-600 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Grow and protect your net worth with personalized investment, retirement, and tax strategies
          </p>

          <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onSolopreneurClick}
              className="button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-8 py-4 rounded flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
            >
              Solo Business Owner
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onHighEarnerClick}
              className="button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-8 py-4 rounded flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
            >
              High Income Professional
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal text-gray-900 mb-16 leading-tight tracking-tight">
            Wealth management with transparent flat-fee pricing.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Growth Card */}
            <div className="scroll-animate bg-blue-100 rounded-2xl p-8 relative overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-black bg-opacity-10 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-gray-900 text-sm font-medium">Investment Management</span>
              </div>

              <h3 className="text-3xl font-normal text-gray-900 mb-4 leading-tight">Grow Wealth</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Customized portfolio management tailored to your financial objectives, time horizon, risk tolerance, and
                liquidity needs
              </p>
            </div>

            {/* Time Card */}
            <div className="scroll-animate bg-yellow-50 rounded-2xl p-8 relative overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
              <div className="bg-black bg-opacity-10 rounded-full px-4 py-2 inline-block mb-6 w-fit">
                <span className="text-gray-900 text-sm font-medium">Tax Management</span>
              </div>

              <h3 className="text-3xl font-normal text-gray-900 mb-4 leading-tight">Preserve Wealth</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Tax strategies to reduce your tax burden including retirement contributions, tax loss harvesting and
                proactive tax planning
              </p>
            </div>

            {/* Money Card */}
            <div className="scroll-animate bg-gray-900 rounded-2xl p-8 relative overflow-hidden text-white transition-transform duration-300 hover:scale-105">
              <div className="bg-white bg-opacity-10 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-white text-sm font-medium">Risk Management </span>
              </div>

              <h3 className="text-3xl font-normal mb-4 leading-tight">Protect Wealth</h3>

              <p className="text-white text-opacity-75 mb-6 leading-relaxed">
                Risk management strategies to shield your wealth from market volatility, concentrated stock exposure,
                lawsuits, and life's uncertainties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal mb-8 leading-tight">
            Fiduciary advisors you can trust
          </h2>

          <p className="scroll-animate text-2xl md:text-3xl font-normal mb-6 leading-tight text-[#d5b36e]">
            We are registered advisors and legally bound to act in your best interests, always
          </p>

          <p className="scroll-animate text-white text-opacity-75 text-lg mb-12 max-w-2xl mx-auto">
            No hidden fees. No conflicts of interest.
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
