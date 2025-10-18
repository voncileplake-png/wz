import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hotel Corporate Codes",
  description: "Find corporate codes and discount rates for hotels",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name='impact-site-verification' value='8592d191-0da4-4f19-b859-ac9faadb655b' />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4502547559187668" crossOrigin="anonymous"></script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={null}>{children}</Suspense>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Suspense fallback={null}>
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
