"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Footer from "./components/footer"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqPageProps {
  onLogoClick: () => void
  onNavigateHome: () => void
  onContactClick: () => void
  onAboutClick: () => void
  onFooterLinkClick: (page: string) => void
  onSolopreneurClick: () => void
  onHighEarnerClick: () => void
  onPricingClick: () => void
  onLearnClick: () => void
  onFaqClick: () => void
}

export default function FaqPage({
  onLogoClick,
  onNavigateHome,
  onContactClick,
  onAboutClick,
  onFooterLinkClick,
  onSolopreneurClick,
  onHighEarnerClick,
  onPricingClick,
  onLearnClick,
  onFaqClick,
}: FaqPageProps) {
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

    // Scroll animations
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

    // Handle scroll for header background
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

  const faqData = [
    {
      question: "What is Aure and how does it work?",
      answer:
        "Aure is a comprehensive financial platform designed specifically for solopreneurs and high earners. We combine wealth management, business compliance, tax optimization, and financial planning into one integrated membership. Our platform helps you manage your business finances, investments, retirement planning, and tax strategies all in one place.",
    },
    {
      question: "Who is Aure designed for?",
      answer:
        "Aure is specifically built for solopreneurs (solo business owners, freelancers, consultants) and high-earning professionals who want to optimize their financial strategy. Whether you're running a one-person business or earning a high income as a professional, Aure provides the tools and expertise to help you maximize your wealth and minimize your taxes.",
    },
    {
      question: "How much does Aure membership cost?",
      answer:
        "Our membership fees are structured to be 100% tax-deductible as a business expense. The exact cost depends on your specific needs and the services you require. Contact us for a personalized quote based on your financial situation and goals. Most clients find that the tax savings alone more than pay for the membership.",
    },
    {
      question: "What services are included in my membership?",
      answer:
        "Your Aure membership includes: LLC setup and compliance support, business bank account assistance, financial planning and cash flow management, business investment accounts with 4%+ yields, Solo 401(k) setup and management, year-round tax strategy support, card payment processing solutions, and dedicated relationship management.",
    },
    {
      question: "How do I get started with Aure?",
      answer:
        "Getting started is simple. Contact us to schedule a consultation where we'll assess your current financial situation and business needs. We'll then create a customized plan and help you set up the necessary accounts and structures. Most clients can get started within a few days of their initial consultation.",
    },
    {
      question: "Is my money and data secure with Aure?",
      answer:
        "Absolutely. We use bank-level security measures including multi-factor authentication, encryption, and granular permissions. Your funds are held at FDIC-insured institutions, and we follow strict compliance protocols. We never have direct access to your funds - you maintain full control of your accounts.",
    },
    {
      question: "Can Aure help me save on taxes?",
      answer:
        "Yes, tax optimization is a core part of our service. We help you implement smart tax-saving strategies including proper business structure setup, Solo 401(k) contributions (which can save thousands annually), business expense optimization, and year-round tax planning. Many clients save more in taxes than they pay in membership fees.",
    },
    {
      question: "What makes Aure different from other financial services?",
      answer:
        "Unlike generic financial services, Aure is specifically designed for solopreneurs and high earners. We understand your unique challenges and provide integrated solutions rather than forcing you to work with multiple vendors. Our membership model means we're aligned with your success, not just selling you products.",
    },
    {
      question: "Do I need to have a business already to use Aure?",
      answer:
        "No, we can help you set up your business from scratch. Whether you're just starting out as a solopreneur or you're an established business owner, we can assist with LLC registration, EIN applications, business bank accounts, and all the compliance requirements to get you started properly.",
    },
    {
      question: "How quickly can I see results with Aure?",
      answer:
        "Many clients see immediate benefits through proper business structure setup and tax optimization strategies. Investment returns and long-term wealth building take time, but our tax-saving strategies often provide immediate value. Most clients recoup their membership investment within the first year through tax savings alone.",
    },
  ]

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
                className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 bg-gray-100"
              >
                FAQ
              </button>
            </div>
          </nav>

          {/* Right Side - Contact Button - Positioned absolutely on the right */}
          <div className="absolute right-6 hidden md:flex items-center space-x-4">
            <button
              onClick={onContactClick}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              Contact Us
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

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="scroll-animate text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Frequently Asked <span className="text-[#d5b36e]">Questions</span>
          </h1>
          <p className="scroll-animate text-gray-600 text-lg leading-relaxed">
            Get answers to common questions about Aure's services, membership, and how we can help optimize your
            financial strategy.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="scroll-animate border border-gray-200 rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-[#d5b36e] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="scroll-animate text-4xl md:text-5xl font-normal mb-8 leading-tight">Still have questions?</h2>
          <p className="scroll-animate text-gray-300 text-lg mb-8 leading-relaxed">
            Our team is here to help you understand how Aure can optimize your financial strategy.
          </p>
          <button
            onClick={onContactClick}
            className="scroll-animate button-hover bg-[#d5b36e] hover:bg-[#c4a05d] text-gray-900 px-8 py-4 rounded flex items-center gap-2 font-medium mx-auto"
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
