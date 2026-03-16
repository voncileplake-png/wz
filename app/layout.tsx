import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import { Suspense } from "react"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Hotel Corporate Codes",
    template: "%s | Hotel Corporate Codes",
  },
  description: "Find corporate codes, discount rates, and promotional codes for major hotel chains including Marriott, Hilton, Hyatt, Best Western, and more. Complete guide to saving on hotel bookings.",
  keywords: ["hotel corporate codes", "hotel discount codes", "corporate rate hotels", "hotel promo codes", "hotel booking discounts"],
  authors: [{ name: "Hotel Corporate Codes" }],
  creator: "Hotel Corporate Codes",
  publisher: "Hotel Corporate Codes",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcodeshub.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hotel Corporate Codes",
    title: "Hotel Corporate Codes | Discount Rates & Promo Codes Guide",
    description: "Find corporate codes, discount rates, and promotional codes for major hotel chains. Complete guide to saving on hotel bookings.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hotel Corporate Codes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Corporate Codes | Discount Rates & Promo Codes Guide",
    description: "Find corporate codes, discount rates, and promotional codes for major hotel chains.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console verification - replace YOUR_TOKEN with actual token */}
        {/* <meta name="google-site-verification" content="YOUR_TOKEN_HERE" /> */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieConsentBanner />
        <Suspense fallback={null}><Analytics /></Suspense>
        <Suspense fallback={null}><SpeedInsights /></Suspense>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4502547559187668"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
