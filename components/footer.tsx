import Link from "next/link"

const categoryLinks = [
  { label: "Marriott Hotels", href: "/category/marriott-hotels" },
  { label: "Hilton Hotels", href: "/category/hilton-hotels" },
  { label: "Hyatt Hotels", href: "/category/hyatt-gold-passport" },
  { label: "Best Western Hotels", href: "/category/best-western-hotels" },
  { label: "Radisson / Carlson Hotels", href: "/category/carlson-hotels" },
  { label: "Wyndham Hotels", href: "/category/wyndham-hotels" },
  { label: "Booking Platforms", href: "/category/third-party-platforms" },
  { label: "Booking Tips & Guides", href: "/category/tips" },
  { label: "Travel Guides", href: "/category/travel-guides" },
]

const popularArticles = [
  { label: "Marriott Corporate Codes 2025", href: "/article/marriott-corporate-codes-2025" },
  { label: "Hilton Corporate Codes 2025", href: "/article/hilton-corporate-codes-2025" },
  { label: "Hyatt Corporate Codes 2025", href: "/article/hyatt-corporate-codes-2025" },
  { label: "Best Western Corporate Codes", href: "/article/bestwestern-corporate-codes-summary" },
  { label: "Wyndham Rewards Guide", href: "/article/wyndham-rewards-savings-guide-2025" },
  { label: "IHG Corporate Codes Guide", href: "/article/ihg-corporate-codes-one-rewards-2025" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Hotel Corporate Codes</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted guide to hotel corporate codes, discount rates, and promotional offers for major hotel chains worldwide. Save more on every stay.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3">Hotel Categories</h3>
            <ul className="space-y-1.5">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Articles */}
          <div>
            <h3 className="text-white font-semibold mb-3">Popular Guides</h3>
            <ul className="space-y-1.5">
              {popularArticles.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Hotel Corporate Codes. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            <li key="email" className="mt-3">
              <a
                href="mailto:contact@hotelcorporatecodes.com"
                className="text-xs text-teal-400 hover:text-teal-300 transition-colors"
              >
                contact@hotelcorporatecodes.com
              </a>
            </li>
          </div>
        </div>
      </div>
    </footer>
  )
}
