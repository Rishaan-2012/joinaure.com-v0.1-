"use client"

import { useState } from "react"
import LandingPage from "../landing-page"
import SolopreneurPage from "../solopreneur-page"
import HighEarnerPage from "../high-earner-page"
import PricingPage from "../pricing-page"
import ContactPage from "../contact-page"
import AboutPage from "../about-page"
import ThankYouPage from "../thank-you-page"
import LearnPage from "../learn-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<
    "landing" | "solopreneur" | "high-earner" | "pricing" | "contact" | "about" | "thank-you" | "learn" | string
  >("landing")

  const handleLogoClick = () => {
    setCurrentPage("landing")
  }

  const handleNavigateHome = () => {
    setCurrentPage("landing")
  }

  const handleSolopreneurClick = () => {
    setCurrentPage("solopreneur")
  }

  const handleHighEarnerClick = () => {
    setCurrentPage("high-earner")
  }

  const handlePricingClick = () => {
    setCurrentPage("pricing")
  }

  const handleContactClick = () => {
    setCurrentPage("contact")
  }

  const handleAboutClick = () => {
    setCurrentPage("about")
  }

  const handleFooterLinkClick = (page: string) => {
    setCurrentPage(page)
  }

  const handleThankYouClick = () => {
    setCurrentPage("thank-you")
  }

  const handleLearnClick = () => {
    setCurrentPage("learn")
  }

  if (currentPage === "landing") {
    return (
      <LandingPage
        onLogoClick={handleLogoClick}
        onNavigateHome={handleNavigateHome}
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onFooterLinkClick={handleFooterLinkClick}
        onSolopreneurClick={handleSolopreneurClick}
        onHighEarnerClick={handleHighEarnerClick}
        onPricingClick={handlePricingClick}
        onLearnClick={handleLearnClick}
      />
    )
  }

  if (currentPage === "solopreneur") {
    return (
      <SolopreneurPage
        onLogoClick={handleLogoClick}
        onNavigateHome={handleNavigateHome}
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onFooterLinkClick={handleFooterLinkClick}
        onSolopreneurClick={handleSolopreneurClick}
        onHighEarnerClick={handleHighEarnerClick}
        onPricingClick={handlePricingClick}
        onLearnClick={handleLearnClick}
      />
    )
  }

  if (currentPage === "high-earner") {
    return (
      <HighEarnerPage
        onLogoClick={handleLogoClick}
        onNavigateHome={handleNavigateHome}
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onFooterLinkClick={handleFooterLinkClick}
        onSolopreneurClick={handleSolopreneurClick}
        onHighEarnerClick={handleHighEarnerClick}
        onPricingClick={handlePricingClick}
        onLearnClick={handleLearnClick}
      />
    )
  }

  if (currentPage === "pricing") {
    return (
      <PricingPage
        onLogoClick={handleLogoClick}
        onNavigateHome={handleNavigateHome}
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onFooterLinkClick={handleFooterLinkClick}
        onSolopreneurClick={handleSolopreneurClick}
        onHighEarnerClick={handleHighEarnerClick}
        onPricingClick={handlePricingClick}
        onLearnClick={handleLearnClick}
      />
    )
  }

  if (currentPage === "contact") {
    return (
      <ContactPage
        onLogoClick={handleLogoClick}
        onNavigateHome={handleNavigateHome}
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onFooterLinkClick={handleFooterLinkClick}
        onSolopreneurClick={handleSolopreneurClick}
        onHighEarnerClick={handleHighEarnerClick}
        onPricingClick={handlePricingClick}
        onLearnClick={handleLearnClick}
      />
    )
  }

  if (currentPage === "about") {
    return (
      <AboutPage
        onLogoClick={handleLogoClick}
        onNavigateHome={handleNavigateHome}
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onFooterLinkClick={handleFooterLinkClick}
        onSolopreneurClick={handleSolopreneurClick}
        onHighEarnerClick={handleHighEarnerClick}
        onPricingClick={handlePricingClick}
        onLearnClick={handleLearnClick}
      />
    )
  }

  if (currentPage === "thank-you") {
    return (
      <ThankYouPage
        onLogoClick={handleLogoClick}
        onNavigateHome={handleNavigateHome}
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onFooterLinkClick={handleFooterLinkClick}
        onSolopreneurClick={handleSolopreneurClick}
        onHighEarnerClick={handleHighEarnerClick}
        onPricingClick={handlePricingClick}
        onLearnClick={handleLearnClick}
      />
    )
  }

  if (currentPage === "learn") {
    return (
      <LearnPage
        onLogoClick={handleLogoClick}
        onNavigateHome={handleNavigateHome}
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
        onFooterLinkClick={handleFooterLinkClick}
        onSolopreneurClick={handleSolopreneurClick}
        onHighEarnerClick={handleHighEarnerClick}
        onPricingClick={handlePricingClick}
        onLearnClick={handleLearnClick}
      />
    )
  }

  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  )
}
