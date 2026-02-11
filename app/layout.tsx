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
  authors: [{ name: "Travel Deals Hub" }],
  creator: "Hotel Corporate Codes",
  publisher: "Hotel Corporate Codes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hotel Corporate Codes",
    title: "Hotel Corporate Codes | Discount Rates & Promo Codes Guide",
    description: "Find corporate codes, discount rates, and promotional codes for major hotel chains. Complete guide to saving on hotel bookings.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Corporate Codes | Discount Rates & Promo Codes Guide",
    description: "Find corporate codes, discount rates, and promotional codes for major hotel chains. Complete guide to saving on hotel bookings.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="verify-convergexperts" content="371fa65d8a6d" />
        <meta name='impact-site-verification' value='8592d191-0da4-4f19-b859-ac9faadb655b' />
        <meta name="partnerboostverifycode" content="32dc01246faccb7f5b3cad5016dd5033" />
        <meta name="verify-yeahpromos" content="5d511b4a2ac6" />
        <script
          data-noptimize="1"
          data-cfasync="false"
          data-wpfc-render="false"
          dangerouslySetInnerHTML={{
            __html: `(function(){var script=document.createElement("script");script.async=1;script.src='https://emrld.cc/NDc4MjM2.js?t=478236';document.head.appendChild(script);})();`,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieConsentBanner />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Suspense fallback={null}>
          <SpeedInsights />
        </Suspense>
        {/* Google AdSense - 延迟加载以提升首屏性能，不阻塞关键渲染路径 */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4502547559187668"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
