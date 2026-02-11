import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Hotel Corporate Codes. How we collect, use, and protect your information.",
}

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: February 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Introduction</h2>
            <p>
              Hotel Corporate Codes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully. By using our site, you consent to the practices described below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Usage data:</strong> Pages visited, time spent, referring URLs, and device/browser information.</li>
              <li><strong>Cookies and similar technologies:</strong> As described in our <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.</li>
              <li><strong>Information you provide:</strong> If you contact us, subscribe to a newsletter, or leave a comment, we may store your name, email, and message content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Operate and improve our website and content.</li>
              <li>Analyze traffic and user behavior to improve user experience.</li>
              <li>Display relevant advertising (e.g., through Google AdSense) when you have consented.</li>
              <li>Respond to your inquiries and communicate with you.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
            <p>
              We use third-party services that may collect or process data, including:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Google AdSense:</strong> For advertising. Google uses cookies and similar technologies as described in Google&apos;s Privacy Policy.</li>
              <li><strong>Vercel Analytics / Speed Insights:</strong> For performance and usage analytics.</li>
              <li><strong>Other analytics or advertising partners:</strong> As disclosed on our site or in this policy.</li>
            </ul>
            <p className="mt-3">
              These services have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Retention and Security</h2>
            <p>
              We retain your information only as long as necessary for the purposes described in this policy or as required by law. We implement reasonable technical and organizational measures to protect your data against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights (including GDPR)</h2>
            <p>
              If you are in the European Economic Area or other regions with similar laws, you may have the right to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Data portability.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Lodge a complaint with a supervisory authority.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the details on our <Link href="/contact" className="text-primary hover:underline">Contact</Link> page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed at children under 16. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will be revised, and we encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or your personal data, please visit our <Link href="/contact" className="text-primary hover:underline">Contact</Link> page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
