import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 lg:py-24 mt-16 lg:mt-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-8">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services provided by West Coast Notaries, LLC, doing business as NotariesBy
                ("NotariesBy," "we," "our," or "us"), you agree to be bound by these Terms of Service and all applicable
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using our
                services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm italic">
                NotariesBy is a fictitious name duly registered under West Coast Notaries, LLC. Upon approval and
                registration of the fictitious name, the business is authorized to conduct business, market, and operate
                under the name NotariesBy in accordance with all state and local fictitious name registration
                requirements and business regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                West Coast Notaries, LLC d/b/a NotariesBy provides professional notary public services, including but
                not limited to document notarization, mobile notary services, apostille services, and real estate
                closing services. All services are performed in accordance with state laws and regulations governing
                notarial acts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide valid, government-issued identification</li>
                <li>Present documents that are complete and ready for notarization</li>
                <li>Appear in person (or via approved remote methods) for notarization</li>
                <li>Provide accurate and truthful information</li>
                <li>Pay all applicable fees for services rendered</li>
                <li>Not use our services for any illegal or fraudulent purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Fees and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notary fees are established in accordance with state law. Additional fees may apply for mobile services,
                after-hours appointments, or expedited services. Payment is due at the time services are rendered. We
                accept cash, credit cards, and other approved payment methods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Appointments may be cancelled or rescheduled with at least 24 hours notice. Cancellations made with less
                than 24 hours notice or no-shows may be subject to a cancellation fee, particularly for mobile notary
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refusal of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to refuse notarization services if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The signer cannot provide proper identification</li>
                <li>The signer appears to be under duress or lacks understanding</li>
                <li>The document is incomplete or appears fraudulent</li>
                <li>The notarization would violate state law or notarial ethics</li>
                <li>There is a conflict of interest</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                West Coast Notaries, LLC d/b/a NotariesBy's liability is limited to the amount paid for the specific
                service in question. We are not responsible for the legal effect or validity of any document notarized.
                We do not provide legal advice and recommend consulting with an attorney for legal questions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We maintain the confidentiality of all client information and documents in accordance with professional
                standards and legal requirements. Notarial records are maintained as required by state law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of West Coast
                Notaries, LLC d/b/a NotariesBy and protected by copyright laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting to this website. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service are governed by the laws of the state in which our services are provided. Any
                disputes shall be resolved in the appropriate courts of that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
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
