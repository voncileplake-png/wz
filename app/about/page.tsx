import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us",
  description: "About Hotel Corporate Codes. We help travelers find corporate and discount codes for major hotel chains.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-primary hover:underline font-semibold">
            ← Hotel Corporate Codes
          </Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p>
            <strong>Hotel Corporate Codes</strong> is a guide site for travelers who want to save on hotel stays. We collect and explain corporate codes, agreement rates, and promotional offers for major hotel chains such as Marriott, Hilton, Hyatt, Best Western, Radisson, and Wyndham, as well as tips for third-party booking platforms like Expedia and Hotels.com.
          </p>
          <p>
            Our goal is to make it easier to find and use legitimate discounts—whether you are a business traveler with access to company rates or a leisure traveler looking for public promo codes and membership deals. We also publish travel guides and practical tips for smarter booking.
          </p>
          <p>
            We do not book hotels ourselves. We only provide information; all reservations are made on the official hotel or booking partner websites. Code availability and terms can change, so we always recommend verifying rates and eligibility before you book.
          </p>
          <p>
            For privacy and cookie practices, please see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>. For questions or feedback, visit our <Link href="/contact" className="text-primary hover:underline">Contact</Link> page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
