import Link from "next/link"
import { Hotel } from "lucide-react"

const navLinks = [
  { label: "Marriott", href: "/category/marriott-hotels" },
  { label: "Best Western", href: "/category/best-western-hotels" },
  { label: "Hyatt", href: "/category/hyatt-gold-passport" },
  { label: "Radisson", href: "/category/carlson-hotels" },
  { label: "Wyndham", href: "/category/wyndham-hotels" },
  { label: "Booking Platforms", href: "/category/third-party-platforms" },
  { label: "Tips & Guides", href: "/category/tips" },
  { label: "Travel Guides", href: "/category/travel-guides" },
]

export function Navbar() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top brand bar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-gray-200 transition-colors">
            <Hotel className="w-5 h-5 text-teal-400" aria-hidden="true" />
            <span>Hotel Corporate Codes</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <nav aria-label="Main navigation" className="bg-white">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {navLinks.map((link) => (
              <li key={link.href} className="flex-shrink-0">
                <Link
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors whitespace-nowrap block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
