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
}

export default function LandingPage({
  onContactClick,
  onLogoClick,
  onAboutClick,
  onFooterLinkClick,
  onSolopreneurClick,
  onHighEarnerClick,
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
      .menu-card {
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .menu-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .menu-card:hover .chevron-icon {
        transform: translateX(4px);
      }
      .chevron-icon {
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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
                    <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                      Who we Serve
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[420px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Header */}
                        <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">Choose Your Path</h3>
                          <p className="text-sm text-gray-600">Tailored wealth management for your unique situation</p>
                        </div>

                        {/* Menu Options */}
                        <div className="p-4 space-y-3">
                          <button
                            onClick={onSolopreneurClick}
                            className="menu-card w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#d5b36e] hover:bg-gradient-to-r hover:from-[#d5b36e]/5 hover:to-[#c4a05d]/5 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-[#c4a05d]">Soloprenuer</h4>
                                <p className="text-sm text-gray-600">For solo business owners</p>
                              </div>
                              <ChevronRight className="chevron-icon w-5 h-5 text-gray-400 group-hover:text-[#c4a05d]" />
                            </div>
                          </button>

                          <button
                            onClick={onHighEarnerClick}
                            className="menu-card w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#d5b36e] hover:bg-gradient-to-r hover:from-[#d5b36e]/5 hover:to-[#c4a05d]/5 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-[#c4a05d]">High Earner</h4>
                                <p className="text-sm text-gray-600">For high-income professionals</p>
                              </div>
                              <ChevronRight className="chevron-icon w-5 h-5 text-gray-400 group-hover:text-[#c4a05d]" />
                            </div>
                          </button>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                          <p className="text-xs text-gray-500 mb-2">Need help choosing?</p>
                          <button
                            onClick={onContactClick}
                            className="text-sm text-[#c4a05d] hover:text-[#b8955a] font-medium transition-colors"
                          >
                            Contact our team →
                          </button>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <button
                onClick={onContactClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Contact
              </button>
              <button
                onClick={onAboutClick}
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                About
              </button>
            </div>
          </nav>

          {/* Right Side - Login & Join Waitlist Buttons - Positioned absolutely on the right */}
          <div className="absolute right-6 hidden md:flex items-center space-x-4">
            <button
              onClick={() => window.open("https://aurefinancial.com", "_blank")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:scale-105 px-4 py-2"
            >
              Log in
            </button>
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
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal mb-6 leading-tight">
            Fiduciary advisors you can trust
          </h2>

          <p className="scroll-animate text-3xl md:text-4xl font-normal mb-12 leading-tight text-[#d5b36e]">
            We are registered advisors and legally bound to act in your best interests, always
          </p>
          <p className="scroll-animate text-white text-opacity-75 text-lg mb-12">No hidden fees </p>
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
