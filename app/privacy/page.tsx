import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - TelecomInsider",
  description: "Learn how TelecomInsider collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: December 4, 2024</p>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to TelecomInsider ("we," "our," or "us"). We are committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By accessing or using our website, you agree to this Privacy Policy. If you do not agree with the terms of
              this policy, please do not access the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>Subscribe to our newsletter</li>
              <li>Fill out a contact form</li>
              <li>Leave comments on our blog posts</li>
              <li>Register for an account</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">This information may include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>Name and email address</li>
              <li>Phone number (optional)</li>
              <li>Company name and job title (optional)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you visit our website, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs and pages visited</li>
              <li>Time and date of visits</li>
              <li>Device information (desktop, mobile, tablet)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>Providing and maintaining our website and services</li>
              <li>Sending newsletters and marketing communications (with your consent)</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Analyzing website usage to improve our content and services</li>
              <li>Personalizing your experience on our website</li>
              <li>Detecting and preventing fraud and security threats</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to collect and store information about your interactions
              with our website. These technologies help us:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Provide personalized content and advertisements</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For detailed information about the cookies we use, please see our{" "}
              <a href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Advertising</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use third-party advertising companies, including Google AdSense, to serve ads on our website. These
              companies may use cookies and similar technologies to collect information about your visits to this and
              other websites to provide relevant advertisements about goods and services of interest to you.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie
              enables it to serve ads to users based on their visit to our site and other sites on the Internet. You may
              opt out of the use of the DART cookie by visiting the{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ad and Content Network Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Service Providers:</strong> We may share information with
                third-party vendors who provide services on our behalf (e.g., email marketing, analytics, hosting).
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong> We may disclose information if required
                by law or in response to valid requests by public authorities.
              </li>
              <li>
                <strong className="text-foreground">Business Transfers:</strong> In connection with any merger,
                acquisition, or sale of assets, your information may be transferred as a business asset.
              </li>
              <li>
                <strong className="text-foreground">With Your Consent:</strong> We may share information for any other
                purpose with your explicit consent.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
              to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Access:</strong> Request access to the personal information we hold
                about you.
              </li>
              <li>
                <strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete
                information.
              </li>
              <li>
                <strong className="text-foreground">Deletion:</strong> Request deletion of your personal information
                (subject to legal requirements).
              </li>
              <li>
                <strong className="text-foreground">Opt-Out:</strong> Opt out of marketing communications at any time.
              </li>
              <li>
                <strong className="text-foreground">Data Portability:</strong> Request a copy of your data in a
                structured, machine-readable format.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not intended for children under the age of 16. We do not knowingly collect personal
              information from children under 16. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence.
              These countries may have different data protection laws. By using our website, you consent to the transfer
              of your information to these countries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of any material changes by posting the new policy on this page and
              updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <p className="text-foreground font-medium">TelecomInsider</p>
              <p className="text-muted-foreground">Email: privacy@telecominsider.com</p>
              <p className="text-muted-foreground">Address: 123 Tech Boulevard, Suite 456, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
