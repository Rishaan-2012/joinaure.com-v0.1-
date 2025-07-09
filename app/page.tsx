export const metadata = {
  title: "Aure – Modern Money Management",
}

"use client"

import { useState } from "react"
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

export default function Page() {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "contact"
    | "thank-you"
    | "about"
    | "general-disclosures"
    | "terms-of-use"
    | "privacy-policy"
    | "referral-agreement"
    | "cookies"
  >("home")

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
      default:
        return (
          <LandingPage
            onContactClick={handleContactClick}
            onLogoClick={handleLogoClick}
            onAboutClick={handleAboutClick}
            onFooterLinkClick={handleFooterLinkClick}
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
