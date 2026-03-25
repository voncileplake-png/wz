import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Hotel Corporate Codes",
  description:
    "Get in touch with Hotel Corporate Codes. Have a question about corporate codes, found an outdated rate, or want to suggest a topic? We'd love to hear from you.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com"}/contact`,
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          We welcome questions, feedback, and suggestions. Use the form below or email us directly.
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          {/* Direct email */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 flex items-start gap-4">
            <div className="text-2xl">✉️</div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Email Us Directly</p>
              <a
                href="mailto:contact@hotelcorporatecodes.com"
                className="text-blue-600 hover:underline font-medium"
              >
                contact@hotelcorporatecodes.com
              </a>
              <p className="text-sm text-gray-500 mt-1">
                We typically respond within 1–2 business days.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4">Send Us a Message</h2>
            <ContactForm />
          </section>

          {/* What to contact about */}
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">What We Can Help With</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Reporting outdated or incorrect corporate codes</li>
              <li>Suggesting new hotel chains or topics to cover</li>
              <li>Questions about how to use corporate rates legally</li>
              <li>Privacy or data-related requests (include "Privacy Request" in your subject)</li>
              <li>Press, partnerships, or advertising enquiries</li>
            </ul>
          </section>

          <p className="mt-4 text-sm text-muted-foreground">
            For our policies, see{" "}
            <Link href="/terms" className="text-primary hover:underline">Terms of Use</Link>,{" "}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, and{" "}
            <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
