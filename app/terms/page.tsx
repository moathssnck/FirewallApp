import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - TelecomInsider",
  description: "Terms and conditions for using TelecomInsider website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: December 4, 2024</p>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to TelecomInsider. By accessing or using our website located at telecominsider.com (the "Site"),
              you agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and our Cookie Policy. If
              you do not agree to these Terms, you must not access or use the Site.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              on the Site. Your continued use of the Site after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              TelecomInsider provides telecommunications industry news, analysis, educational content, and related
              information through our website. Our services include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>Blog articles and news updates</li>
              <li>Industry analysis and insights</li>
              <li>Newsletter subscriptions</li>
              <li>Educational resources about telecommunications technology</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">By using our Site, you agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information when required</li>
              <li>Use the Site only for lawful purposes</li>
              <li>Not engage in any activity that disrupts or interferes with the Site</li>
              <li>Not attempt to gain unauthorized access to any part of the Site</li>
              <li>Not use the Site to transmit spam, malware, or harmful content</li>
              <li>Respect the intellectual property rights of TelecomInsider and third parties</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this Site, including but not limited to text, graphics, logos, images, audio clips, video
              clips, data compilations, and software, is the property of TelecomInsider or its content suppliers and is
              protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly
              perform, republish, download, store, or transmit any content on our Site without prior written consent,
              except for:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>Temporary storage in your computer's RAM incident to viewing</li>
              <li>Storing files automatically cached by your web browser</li>
              <li>Printing pages for personal, non-commercial use</li>
              <li>Sharing links to our content on social media platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. User-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you submit comments, feedback, or other content to our Site, you grant TelecomInsider a non-exclusive,
              royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt,
              publish, translate, create derivative works from, distribute, and display such content worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You represent and warrant that you own or control all rights to the content you post and that the content
              does not violate these Terms or any applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Links and Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site may contain links to third-party websites or services that are not owned or controlled by
              TelecomInsider. We have no control over and assume no responsibility for the content, privacy policies, or
              practices of any third-party websites or services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The inclusion of any link does not imply endorsement by TelecomInsider. You acknowledge and agree that
              TelecomInsider shall not be responsible or liable for any damage or loss caused by the use of any
              third-party content, goods, or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Advertising</h2>
            <p className="text-muted-foreground leading-relaxed">
              We display third-party advertisements on our Site through advertising partners, including Google AdSense.
              These advertisements may use cookies and similar tracking technologies to deliver targeted advertising
              based on your interests.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              TelecomInsider is not responsible for the content of third-party advertisements. Any transactions you
              conduct with advertisers are solely between you and the advertiser. We encourage you to review the
              advertiser's terms and privacy policies before engaging in any transaction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              THE SITE AND ALL CONTENT, PRODUCTS, AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
              WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">TelecomInsider does not warrant that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>The Site will be available at all times or operate without interruption</li>
              <li>The information on the Site is accurate, complete, or current</li>
              <li>The Site is free of viruses or other harmful components</li>
              <li>Any errors or defects will be corrected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, TELECOMINSIDER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>Your access to or use of (or inability to access or use) the Site</li>
              <li>Any conduct or content of any third party on the Site</li>
              <li>Any content obtained from the Site</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless TelecomInsider and its officers, directors, employees,
              agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
              violation of these Terms or your use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of California,
              United States, without regard to its conflict of law provisions. You agree to submit to the personal and
              exclusive jurisdiction of the courts located in San Francisco, California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall
              continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum
              extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between
              you and TelecomInsider regarding your use of the Site and supersede all prior agreements and
              understandings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <p className="text-foreground font-medium">TelecomInsider</p>
              <p className="text-muted-foreground">Email: legal@telecominsider.com</p>
              <p className="text-muted-foreground">Address: 123 Tech Boulevard, Suite 456, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
