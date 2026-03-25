import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Hotel Corporate Codes. How we use cookies and similar technologies.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: February 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences, understand how you use the site, and support advertising and analytics. We may also use similar technologies such as local storage, pixels, or scripts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Strictly necessary:</strong> Required for the site to function (e.g., load balancing, security). These do not require your consent.</li>
              <li><strong>Preferences:</strong> To remember your choices (e.g., cookie consent, language).</li>
              <li><strong>Analytics:</strong> To understand how visitors use our site (e.g., page views, traffic sources).</li>
              <li><strong>Advertising:</strong> To deliver relevant ads (e.g., Google AdSense). We only enable advertising cookies if you accept them in our cookie banner.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">3. Third-Party Cookies</h2>
            <p>
              Third-party services we use may set their own cookies:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Google AdSense:</strong> Uses cookies to show ads based on your interests and to measure ad performance. You can manage ad settings at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ad Settings</a>.</li>
              <li><strong>Vercel (Analytics / Speed Insights):</strong> May use cookies or similar tech for performance and analytics.</li>
            </ul>
            <p className="mt-3">
              These parties have their own privacy and cookie policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">4. Your Choices (GDPR / Consent)</h2>
            <p>
              When you first visit our site, we show a cookie consent banner. You can:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Accept all:</strong> We will set analytics and advertising cookies in line with your consent.</li>
              <li><strong>Reject non-essential:</strong> Only strictly necessary and preference cookies (e.g., your consent choice) will be stored.</li>
            </ul>
            <p className="mt-3">
              You can change your mind at any time by clearing cookies for this site in your browser or revisiting the site and updating your preference if we offer a way to do so. You can also block or delete cookies via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookie Duration</h2>
            <p>
              Session cookies are deleted when you close your browser. Persistent cookies remain for a set period (e.g., months or years) unless you delete them. Our consent preference is stored so we can remember your choice on future visits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">6. Updates</h2>
            <p>
              We may update this Cookie Policy from time to time. The &quot;Last updated&quot; date at the top will be revised. Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">7. Contact</h2>
            <p>
              For questions about our use of cookies, see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> or <Link href="/contact" className="text-primary hover:underline">Contact</Link> page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
