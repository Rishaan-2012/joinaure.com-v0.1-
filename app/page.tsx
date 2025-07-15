"use client"

import { useState, useEffect } from "react"
import Head from "next/head"

import LandingPage from "../landing-page"
import ContactPage from "../contact-page"
import ThankYouPage from "../thank-you-page"
import AboutPage from "../about-page"
import GeneralDisclosures from "../legal-pages/general-disclosures"
import TermsOfUse from "../legal-pages/terms-of-use"
import PrivacyPolicy from "../legal-pages/privacy-policy"
import ReferralAgreement from "../legal-pages/referral-agreement"
import Cookies from "../legal-pages/cookies"
import SolopreneurPage from "../solopreneur-page"
import HighEarnerPage from "../high-earner-page"

export default function Page() {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "contact"
    | "thank-you"
    | "about"
    | "solopreneur"
    | "high-earner"
    | "general-disclosures"
    | "terms-of-use"
    | "privacy-policy"
    | "referral-agreement"
    | "cookies"
  >("home")

  // Update URL path based on current page
  useEffect(() => {
    const path = currentPage === "home" ? "/" : `/${currentPage}`
    window.history.replaceState({}, "", path)
  }, [currentPage])

  const handleContactClick = () => {
    setCurrentPage("contact")
  }

  const handleLogoClick = () => {
    setCurrentPage("home")
    window.scrollTo(0, 0)
  }

  const handleNavigateHome = () => {
    setCurrentPage("home")
  }

  const handleAboutClick = () => {
    setCurrentPage("about")
  }

  const handleFormSubmit = () => {
    setCurrentPage("thank-you")
  }

  const handleFooterLinkClick = (page: string) => {
    setCurrentPage(page as any)
    window.scrollTo(0, 0)
  }

  const handleSolopreneurClick = () => {
    setCurrentPage("solopreneur")
  }

  const handleHighEarnerClick = () => {
    setCurrentPage("high-earner")
  }

  const renderPage = () => {
    switch (currentPage) {
      case "thank-you":
        return (
          <ThankYouPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onFooterLinkClick={handleFooterLinkClick}
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
          />
        )
      case "about":
        return (
          <AboutPage
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "general-disclosures":
        return (
          <GeneralDisclosures
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "terms-of-use":
        return (
          <TermsOfUse
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "privacy-policy":
        return (
          <PrivacyPolicy
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "referral-agreement":
        return (
          <ReferralAgreement
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
          />
        )
      case "cookies":
        return (
          <Cookies
            onLogoClick={handleLogoClick}
            onNavigateHome={handleNavigateHome}
            onContactClick={handleContactClick}
            onAboutClick={handleAboutClick}
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
            onBackClick={handleNavigateHome}
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
            onBackClick={handleNavigateHome}
          />
        )
      default:
        return (
          <LandingPage
            onContactClick={handleContactClick}
            onLogoClick={handleLogoClick}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
            onSolopreneurClick={handleSolopreneurClick}
            onHighEarnerClick={handleHighEarnerClick}
          />
        )
    }
  }

  return (
    <>
      <Head>
        <title>Aure – Modern Money Management</title>
      </Head>
      {renderPage()}
    </>
  )
}
