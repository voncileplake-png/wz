"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const CONSENT_KEY = "hotel-corporate-codes-cookie-consent"

type ConsentStatus = "pending" | "accepted" | "rejected"

export function CookieConsentBanner() {
  const [status, setStatus] = useState<ConsentStatus | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus | null
    if (stored === "accepted" || stored === "rejected") {
      setStatus(stored)
      return
    }
    setStatus("pending")
  }, [])

  const save = (value: ConsentStatus) => {
    localStorage.setItem(CONSENT_KEY, value)
    setStatus(value)
    if (value === "accepted") {
      // Optional: trigger loading of ad scripts or analytics here if you load them only after consent
      window.dispatchEvent(new CustomEvent("cookie-consent-accepted"))
    }
  }

  if (status !== "pending") return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground">
            We use cookies and similar technologies to improve your experience, analyze traffic, and show relevant ads. 
            By clicking &quot;Accept,&quot; you consent to our use of cookies. See our{" "}
            <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link> and{" "}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
          <div className="flex flex-shrink-0 gap-2">
            <button
              type="button"
              onClick={() => save("rejected")}
              className="px-4 py-2 text-sm font-medium rounded-md border border-border bg-background text-foreground hover:bg-muted"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => save("accepted")}
              className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
