"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Hotel } from "lucide-react"

const navCategories = [
  { label: "Marriott", href: "/category/marriott-hotels" },
  { label: "Hilton", href: "/category/hilton-hotels" },
  { label: "Hyatt", href: "/category/hyatt-gold-passport" },
  { label: "Best Western", href: "/category/best-western-hotels" },
  { label: "Radisson / Carlson", href: "/category/carlson-hotels" },
  { label: "Wyndham", href: "/category/wyndham-hotels" },
  { label: "Booking Platforms", href: "/category/third-party-platforms" },
  { label: "Booking Tips", href: "/category/tips" },
  { label: "Travel Guides", href: "/category/travel-guides" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-teal-600 transition-colors">
            <Hotel className="w-6 h-6 text-teal-600" aria-hidden="true" />
            <span>Hotel Corporate Codes</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 px-3 py-2 rounded-md transition-colors whitespace-nowrap"
              >
                {cat.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-border py-3 pb-4"
          >
            <div className="grid grid-cols-2 gap-1">
              {navCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 px-3 py-2 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
