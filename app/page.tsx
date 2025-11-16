import React from "react"
import { CategorySection } from "@/components/category-section"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { SearchBanner } from "@/components/search-banner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Corporate Codes | Discount Rates & Promo Codes Guide 2025",
  description: "Find corporate codes, discount rates, and promotional codes for major hotel chains including Marriott, Hilton, Hyatt, Best Western, and more. Complete guide to saving on hotel bookings in 2025.",
  keywords: ["hotel corporate codes", "hotel discount codes", "corporate rate hotels", "hotel promo codes", "hotel booking discounts", "travel savings"],
  openGraph: {
    title: "Hotel Corporate Codes | Discount Rates & Promo Codes Guide 2025",
    description: "Find corporate codes, discount rates, and promotional codes for major hotel chains. Complete guide to saving on hotel bookings in 2025.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com",
    siteName: "Hotel Corporate Codes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Corporate Codes | Discount Rates & Promo Codes Guide 2025",
    description: "Find corporate codes, discount rates, and promotional codes for major hotel chains. Complete guide to saving on hotel bookings in 2025.",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com",
  },
}

// 启用静态生成和缓存，每1小时重新验证一次
export const revalidate = 3600 // 1 hour

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com"
  
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hotel Corporate Codes",
    "description": "Find corporate codes, discount rates, and promotional codes for major hotel chains",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hotel Corporate Codes",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Your guide to hotel corporate codes and discount rates"
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      
      <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-center">Hotel Corporate Codes</h1>
        </div>
      </header>

      <SearchBanner />

      {/* Main Content */}
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            {/* Left Column - Categories */}
            <CategorySection />

            {/* Right Column - Sidebar */}
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}
