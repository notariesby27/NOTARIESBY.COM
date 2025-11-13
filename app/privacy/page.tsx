import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 lg:py-24 mt-16 lg:mt-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-8">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                West Coast Notaries, LLC, doing business as NotariesBy ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our notary services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm italic">
                NotariesBy is a fictitious name registered under West Coast Notaries, LLC. Upon approval of the
                fictitious name registration, the business operates and markets under the name NotariesBy in full
                compliance with all applicable state and local regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Government-issued identification for notarization services</li>
                <li>Document information related to notarization requests</li>
                <li>Payment information for services rendered</li>
                <li>Communication preferences and correspondence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our notary services</li>
                <li>Process your requests and transactions</li>
                <li>Send you confirmations, updates, and administrative messages</li>
                <li>Respond to your comments and questions</li>
                <li>Comply with legal obligations and maintain required records</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>With your consent or at your direction</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Record Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                As required by state law, we maintain notarial records for the legally mandated period. Other personal
                information is retained only as long as necessary to fulfill the purposes outlined in this policy or as
                required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal retention requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p className="font-semibold">West Coast Notaries, LLC d/b/a NotariesBy</p>
                <p>Tampa Bay Area, FL</p>
                <p>Email: info@notariesby.com</p>
                <p>Phone: (727) 710-5455</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
