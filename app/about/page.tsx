import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "About Us | Hotel Corporate Codes",
  description:
    "About Hotel Corporate Codes — an independent guide helping travelers find and use legitimate corporate codes and discount rates for major hotel chains worldwide.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com"}/about`,
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p>
            <strong>Hotel Corporate Codes</strong> is an independent guide site for travelers who
            want to save on hotel stays. We research, compile, and explain corporate codes,
            agreement rates, and promotional offers for major hotel chains such as Marriott, Hilton,
            Hyatt, Best Western, Radisson, and Wyndham — as well as tips for third-party booking
            platforms like Expedia and Hotels.com.
          </p>
          <p>
            Our mission is to make legitimate hotel discounts accessible to everyone — whether
            you're a business traveler with access to employer rates, a professional association
            member, a government employee, or a leisure traveler looking for public promo codes and
            loyalty program deals.
          </p>
          <p>
            We are committed to providing accurate, up-to-date, and ethical guidance. All the
            strategies and codes we cover are legal and legitimate. We do not endorse or encourage
            misuse of corporate codes or any activity that violates hotel policies.
          </p>
          <p>
            We do not book hotels ourselves — we only provide information. All reservations are
            made on the official hotel or booking partner websites. Code availability and terms can
            change, so we always recommend verifying rates and eligibility before you book.
          </p>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">What We Cover</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Corporate and agreement rate codes for major hotel chains</li>
              <li>Publicly available discount codes (AAA, AARP, government, military)</li>
              <li>Hotel loyalty program guides and tips</li>
              <li>Booking platform promo codes (Expedia, Hotels.com, and more)</li>
              <li>Practical travel tips and budget travel strategies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">Contact &amp; Policies</h2>
            <p>
              For questions or feedback, visit our{" "}
              <Link href="/contact" className="text-teal-600 hover:underline">
                Contact
              </Link>{" "}
              page. For privacy and cookie practices, see our{" "}
              <Link href="/privacy" className="text-teal-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookies" className="text-teal-600 hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
