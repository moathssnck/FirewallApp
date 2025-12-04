import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Policy - TelecomInsider",
  description: "Learn about how TelecomInsider uses cookies and similar tracking technologies.",
}

export default function CookiePolicyPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Cookie Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: December 4, 2024</p>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and to provide information to the website
              owners.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Cookies allow a website to recognize your device and remember information about your visit, such as your
              preferences and settings. This helps improve your browsing experience and allows us to provide you with
              relevant content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>

            <h3 className="text-xl font-medium text-foreground mb-3">2.1 Essential Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies are necessary for the website to function properly. They enable basic functions like page
              navigation, access to secure areas, and remembering your cookie consent preferences. The website cannot
              function properly without these cookies.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border border-border">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-4 py-2 text-left text-foreground">Cookie Name</th>
                    <th className="px-4 py-2 text-left text-foreground">Purpose</th>
                    <th className="px-4 py-2 text-left text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">cookie-consent</td>
                    <td className="px-4 py-2 text-muted-foreground">Stores your cookie consent preferences</td>
                    <td className="px-4 py-2 text-muted-foreground">1 year</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">session_id</td>
                    <td className="px-4 py-2 text-muted-foreground">Maintains your session state</td>
                    <td className="px-4 py-2 text-muted-foreground">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">2.2 Analytics Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies help us understand how visitors interact with our website by collecting and reporting
              information anonymously. This helps us improve the website and your browsing experience.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border border-border">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-4 py-2 text-left text-foreground">Cookie Name</th>
                    <th className="px-4 py-2 text-left text-foreground">Purpose</th>
                    <th className="px-4 py-2 text-left text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">_ga</td>
                    <td className="px-4 py-2 text-muted-foreground">Google Analytics - Distinguishes users</td>
                    <td className="px-4 py-2 text-muted-foreground">2 years</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">_ga_*</td>
                    <td className="px-4 py-2 text-muted-foreground">Google Analytics - Maintains session state</td>
                    <td className="px-4 py-2 text-muted-foreground">2 years</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">_gid</td>
                    <td className="px-4 py-2 text-muted-foreground">Google Analytics - Distinguishes users</td>
                    <td className="px-4 py-2 text-muted-foreground">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">2.3 Advertising Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies are used to deliver advertisements that are relevant to you and your interests. They are
              also used to limit the number of times you see an advertisement and help measure the effectiveness of
              advertising campaigns.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border border-border">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-4 py-2 text-left text-foreground">Cookie Name</th>
                    <th className="px-4 py-2 text-left text-foreground">Purpose</th>
                    <th className="px-4 py-2 text-left text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">__gads</td>
                    <td className="px-4 py-2 text-muted-foreground">Google AdSense - Ad serving</td>
                    <td className="px-4 py-2 text-muted-foreground">2 years</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">__gpi</td>
                    <td className="px-4 py-2 text-muted-foreground">Google AdSense - Publisher interests</td>
                    <td className="px-4 py-2 text-muted-foreground">2 years</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">DSID</td>
                    <td className="px-4 py-2 text-muted-foreground">Google - Ad personalization</td>
                    <td className="px-4 py-2 text-muted-foreground">2 weeks</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-muted-foreground">IDE</td>
                    <td className="px-4 py-2 text-muted-foreground">Google DoubleClick - Ad targeting</td>
                    <td className="px-4 py-2 text-muted-foreground">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">2.4 Functional Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies enable enhanced functionality and personalization, such as remembering your preferences,
              language settings, and region. They may be set by us or by third-party providers whose services we use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics,
              deliver advertisements, and provide other services:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Google Analytics:</strong> Helps us understand how visitors use our
                site
              </li>
              <li>
                <strong className="text-foreground">Google AdSense:</strong> Delivers personalized advertisements
              </li>
              <li>
                <strong className="text-foreground">Google Tag Manager:</strong> Manages tracking scripts and tags
              </li>
              <li>
                <strong className="text-foreground">Vercel Analytics:</strong> Provides website performance insights
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. How to Manage Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies may
              impact your user experience and some functionality may no longer be available.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">4.1 Browser Settings</h3>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can typically find these
              settings in the "Options" or "Preferences" menu of your browser:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">4.2 Opt-Out of Interest-Based Advertising</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can opt out of interest-based advertising from participating companies through:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://optout.aboutads.info/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Digital Advertising Alliance (DAA)
                </a>
              </li>
              <li>
                <a
                  href="https://optout.networkadvertising.org/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Network Advertising Initiative (NAI)
                </a>
              </li>
              <li>
                <a
                  href="https://adssettings.google.com/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ad Settings
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">4.3 Our Cookie Consent Tool</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you first visit our website, you will see a cookie consent banner that allows you to accept all
              cookies or only essential cookies. You can change your preferences at any time by clearing your browser
              cookies and revisiting our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Do Not Track Signals</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that sends a signal to websites you visit indicating
              you do not want to be tracked. Our website does not currently respond to DNT signals. However, you can
              still manage your cookie preferences using the methods described above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Updates to This Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
              data practices. We will post any changes on this page and update the "Last updated" date. We encourage you
              to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <p className="text-foreground font-medium">TelecomInsider</p>
              <p className="text-muted-foreground">Email: privacy@telecominsider.com</p>
              <p className="text-muted-foreground">Address: 123 Tech Boulevard, Suite 456, San Francisco, CA 94105</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Related Policies</h2>
            <p className="text-muted-foreground leading-relaxed">
              For more information about how we collect and use your data, please refer to our:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
