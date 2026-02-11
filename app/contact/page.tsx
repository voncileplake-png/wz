import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Hotel Corporate Codes. Get in touch for questions or feedback.",
}

export default function ContactPage() {
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
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p>
            We welcome questions, feedback, and suggestions about Hotel Corporate Codes. Whether you have found an outdated code, want to suggest a new topic, or need help with our <Link href="/privacy" className="text-primary hover:underline">Privacy</Link> or <Link href="/cookies" className="text-primary hover:underline">Cookie</Link> policies, we would like to hear from you.
          </p>
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">How to Reach Us</h2>
            <p>
              At this time we do not list a direct email address on the site to reduce spam. You can reach us through the following options:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Use the contact or feedback form if we add one to this page in the future.</li>
              <li>Comment on relevant articles where commenting is enabled (please do not share personal data in comments).</li>
              <li>If you are a business or partner, look for a dedicated contact or partnership link in the site footer or on the About page when available.</li>
            </ul>
            <p className="mt-3">
              We aim to respond to legitimate inquiries as soon as we can. For urgent matters related to your personal data or privacy rights, please mention &quot;Privacy&quot; or &quot;Data Request&quot; in your message so we can prioritize it.
            </p>
          </section>
          <p>
            Thank you for using Hotel Corporate Codes. For our terms and policies, see <Link href="/terms" className="text-primary hover:underline">Terms of Use</Link>, <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, and <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
