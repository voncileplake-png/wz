import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Hotel Corporate Codes. Rules and conditions for using our website.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: February 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Hotel Corporate Codes (&quot;the Site&quot;), you agree to be bound by these Terms of Use and our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">2. Use of the Site</h2>
            <p>
              The Site provides information about hotel corporate codes, discount codes, and travel booking tips for general informational purposes. You may use the Site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the Site.
            </p>
            <p className="mt-3">
              You agree not to: use the Site for any illegal purpose; attempt to gain unauthorized access to our systems or data; scrape, copy, or automate access in a way that overloads or harms the Site; or use the content for commercial redistribution without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">3. Accuracy of Information</h2>
            <p>
              We strive to provide accurate and up-to-date information, but we do not guarantee that all codes, rates, or details are current, complete, or valid. Hotel programs and codes change frequently. Always verify rates and terms on the official hotel or booking site before making a booking. We are not responsible for any loss or inconvenience resulting from reliance on our content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">4. No Professional Advice</h2>
            <p>
              The content on the Site is for general information only and does not constitute legal, financial, or travel advice. Use of corporate or promotional codes may be subject to hotel policies and eligibility rules. You are responsible for ensuring your use of any code complies with applicable terms and laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">5. Intellectual Property</h2>
            <p>
              The Site and its content (text, layout, design, logos) are owned by us or our licensors and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent, except for personal, non-commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">6. Third-Party Links and Services</h2>
            <p>
              The Site may contain links to third-party websites (e.g., hotel or booking sites). We are not responsible for the content, privacy practices, or terms of those sites. Your use of third-party services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, the Site and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or reliance on its content. Our total liability shall not exceed the amount you paid to us, if any, in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">8. Changes</h2>
            <p>
              We may modify these Terms at any time. The &quot;Last updated&quot; date will be revised. Continued use of the Site after changes constitutes acceptance of the new Terms. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact</h2>
            <p>
              For questions about these Terms of Use, please see our <Link href="/contact" className="text-primary hover:underline">Contact</Link> page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
