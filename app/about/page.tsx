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
  <h1 className="text-3xl font-bold mb-6">About Hotel Codes Hub</h1>

  <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
    <p>
      <strong>Hotel Codes Hub</strong> (hotelcodeshub.com) is an independent travel research site
      dedicated to helping travelers find and use legitimate hotel corporate codes, discount rates,
      and promotional offers. We cover major hotel chains including Marriott, Hilton, Hyatt,
      IHG, Best Western, Radisson, and Wyndham.
    </p>

    <section>
      <h2 className="text-xl font-semibold mt-8 mb-3">Who We Are</h2>
      <p>
        Hotel Codes Hub was founded by a team of frequent business travelers frustrated by how
        hard it was to find accurate, consolidated information about hotel corporate codes in
        one place. We spent years traveling for work — staying at Marriott, Hilton, and IHG
        properties across North America, Europe, and Asia — and built this site to share what
        we learned about accessing legitimate discounts.
      </p>
      <p className="mt-3">
        Our editorial team researches and verifies codes regularly. Every guide on this site
        is written to help you save money through legitimate, authorized discount programmes —
        not workarounds or shortcuts.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mt-8 mb-3">Our Editorial Standards</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>We only publish codes and discounts that are publicly documented or widely reported</li>
        <li>We clearly distinguish between employer-specific codes (require affiliation) and public codes (AAA, AARP, GOV) that anyone can use</li>
        <li>We update our code lists regularly and date-stamp each article with its last verification date</li>
        <li>We do not accept payment to feature specific codes or hotel brands</li>
        <li>We do not encourage or endorse misuse of codes that require employer verification</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mt-8 mb-3">What We Cover</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Complete corporate code lists for Marriott, Hilton, IHG, Hyatt, Best Western, Wyndham, and Radisson</li>
        <li>Publicly available discount codes — AAA, AARP, government, and military rates</li>
        <li>Hotel loyalty programme guides (Marriott Bonvoy, Hilton Honors, World of Hyatt, IHG One Rewards)</li>
        <li>Booking platform promo codes for Expedia and Hotels.com</li>
        <li>Practical travel guides for business and leisure travellers</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mt-8 mb-3">Disclaimer</h2>
      <p>
        Hotel Codes Hub provides informational content only. We are not affiliated with any hotel
        chain or booking platform. Code availability, discount amounts, and verification requirements
        can change at any time — always confirm rates on the official hotel website before booking.
        Corporate codes intended for specific employer groups should only be used by authorized
        individuals.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
      <p>
        For questions, feedback, or to report an outdated code, please visit our{" "}
        <Link href="/contact" className="text-teal-600 hover:underline">Contact page</Link> or
        email us at{" "}
        <a href="mailto:contact@hotelcodeshub.com" className="text-teal-600 hover:underline">
          contact@hotelcodeshub.com
        </a>.
      </p>
    </section>
  </div>
</main>
      <Footer />
    </div>
  )
}
