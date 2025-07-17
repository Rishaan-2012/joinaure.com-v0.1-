"use client"

import { useState } from "react"
import LandingPage from "../landing-page"
import SolopreneurPage from "../solopreneur-page"
import HighEarnerPage from "../high-earner-page"
import ContactPage from "../contact-page"
import AboutPage from "../about-page"
import ThankYouPage from "../thank-you-page"
import PricingPage from "../pricing-page"
import PrivacyPolicyPage from "../legal-pages/privacy-policy"
import TermsOfUsePage from "../legal-pages/terms-of-use"
import CookiesPage from "../legal-pages/cookies"
import GeneralDisclosuresPage from "../legal-pages/general-disclosures"
import ReferralAgreementPage from "../legal-pages/referral-agreement"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("landing")

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

  const handleContactClick = () => {
    setCurrentPage("contact")
  }

  const handleAboutClick = () => {
    setCurrentPage("about")
  }

  const handlePricingClick = () => {
    setCurrentPage("pricing")
  }

  const handleFormSubmit = () => {
    setCurrentPage("thank-you")
  }

  const handleFooterLinkClick = (page: string) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return (
          <LandingPage
            onLogoClick={handleLogoClick}
            onSolopreneurClick={handleSolopreneurClick}
            onHighEarnerClick={handleHighEarnerClick}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
            onPricingClick={handlePricingClick}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "solopreneur":
        return (
          <SolopreneurPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
            onBackClick={() => setCurrentPage("landing")}
            onSolopreneurClick={handleSolopreneurClick}
            onHighEarnerClick={handleHighEarnerClick}
            onPricingClick={handlePricingClick}
          />
        )
      case "high-earner":
        return (
          <HighEarnerPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
            onBackClick={() => setCurrentPage("landing")}
            onSolopreneurClick={handleSolopreneurClick}
            onHighEarnerClick={handleHighEarnerClick}
            onPricingClick={handlePricingClick}
          />
        )
      case "contact":
        return (
          <ContactPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onFormSubmit={handleFormSubmit}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
            onSolopreneurClick={handleSolopreneurClick}
            onHighEarnerClick={handleHighEarnerClick}
            onPricingClick={handlePricingClick}
          />
        )
      case "about":
        return (
          <AboutPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onFooterLinkClick={handleFooterLinkClick}
            onSolopreneurClick={handleSolopreneurClick}
            onHighEarnerClick={handleHighEarnerClick}
            onPricingClick={handlePricingClick}
          />
        )
      case "pricing":
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
          />
        )
      case "thank-you":
        return (
          <ThankYouPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "privacy-policy":
        return (
          <PrivacyPolicyPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "terms-of-use":
        return (
          <TermsOfUsePage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "cookies":
        return (
          <CookiesPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "general-disclosures":
        return (
          <GeneralDisclosuresPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "referral-agreement":
        return (
          <ReferralAgreementPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      default:
        return (
          <LandingPage
            onLogoClick={handleLogoClick}
            onSolopreneurClick={handleSolopreneurClick}
            onHighEarnerClick={handleHighEarnerClick}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
            onPricingClick={handlePricingClick}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
    }
  }

  return <div className="min-h-screen">{renderPage()}</div>
}
