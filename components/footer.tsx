import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aure – Smarter Business Banking</title> {/* ✅ Page tab title */}
        <meta name="description" content="Modern banking for modern businesses." />
      </Head>
      <main>
        {/* page content */}
      </main>
    </>
  );
}
"use client"

import { Twitter, Linkedin, Instagram } from "lucide-react"

interface FooterProps {
  onFooterLinkClick: (page: string) => void
}

export default function Footer({ onFooterLinkClick }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">© 2025 Aure Technologies Inc. All rights reserved.</div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <button
              onClick={() => onFooterLinkClick("general-disclosures")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              General Disclosures
            </button>
            <button
              onClick={() => onFooterLinkClick("terms-of-use")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms of Use
            </button>
            <button
              onClick={() => onFooterLinkClick("privacy-policy")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onFooterLinkClick("referral-agreement")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Referral Agreement
            </button>
            <button
              onClick={() => onFooterLinkClick("cookies")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Cookies
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Easter egg in bottom-right corner */}
      <div className="absolute bottom-2 right-4 text-gray-300 text-xs opacity-50">rm</div>
    </footer>
  )
}
