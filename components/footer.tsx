export function Footer() {
  const tags = [
    "Accor Hotels rewards club",
    "rental corporate codes",
    "corporate rates",
    "Carlson's Hilton",
    "Hyatt Inc Marriott",
    "Starwood Hotels",
    "IHG Rewards",
  ]

  const bookmarks = ["Hot Coupons Flights", "Hotel BRG Tools", "Hotel Coupons and Promotion Codes"]


  const footerLinks = [
    "Hilton - HHonors",
    "IHIs",
    "SPG - Starwood Preferred Guest",
    "Marriott - Marriott Rewards",
    "Hyatt Gold Passport",
    "Car Rental Corporate Codes",
    "Accor Hotels - Le Club",
    "Carlson Hotels - Club Carlson",
    "Best Western Rewards",
  ]

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Tags */}
          <div>
            <h3 className="font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <a key={index} href="#" className="text-xs text-muted-foreground hover:underline">
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Bookmarks */}
          <div>
            <h3 className="font-semibold mb-3">Bookmarks</h3>
            <ul className="space-y-1">
              {bookmarks.map((bookmark, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-muted-foreground hover:underline">
                    {bookmark}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages removed per request */}
        </div>

        {/* Legal & Info Links */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-4">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/cookies" className="hover:underline">Cookie Policy</a>
            <a href="/terms" className="hover:underline">Terms of Use</a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
            {footerLinks.map((link, index) => (
              <a key={index} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
