import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "Document Services",
      description: "Professional notarization and document authentication",
      price: null,
      features: [
        "General document notarization",
        "Mobile notary services covering all 67 Florida counties",
        "Witnesses for document signing",
        "Extended hours notary services (with convenience fee)",
        "LegalZoom document notarization",
        "Apostille document authentication for international use",
      ],
    },
    {
      title: "Real Estate Services",
      description: "Expert notarization for real estate transactions",
      price: null,
      features: [
        "Real estate document notarization and preparation",
        "Seller documents",
        "New home purchase documents",
        "Loan signing agent services (NNA and LSS Certified)",
      ],
    },
    {
      title: "Estate Planning",
      description: "Secure your legacy with proper documentation",
      price: null,
      features: [
        "Last Will and Testament",
        "Living Will/Advance Healthcare Directive",
        "Durable Power of Attorney",
        "Full estate planning packages",
        "Testamentos, Directivas, Carta de Poder (Spanish services)",
      ],
    },
    {
      title: "Apostille Services",
      description: "International document authentication",
      price: null,
      features: [
        "Birth certificates",
        "Death certificates",
        "Marriage certificates",
        "Divorce certificates",
        "State background checks",
        "Document translations",
        "Customized document fees applied to each specific client need",
      ],
      showImage: true,
    },
    {
      title: "Vehicle Documentation",
      description: "Notarization for vehicle-related paperwork",
      price: null,
      features: ["Vehicle title transfers", "Bill of sale", "Power of attorney for vehicles", "Odometer disclosures"],
    },
    {
      title: "Business Services",
      description: "Corporate and business document notarization",
      price: null,
      features: ["Corporate resolutions", "Business contracts", "Partnership agreements", "Commercial leases"],
    },
    {
      title: "Wedding Officiant",
      description: "Personalized wedding ceremonies",
      price: null,
      features: [
        "Traditional wedding ceremonies",
        "Intimate elopements",
        "Non-denominational ceremonies",
        "Personalized vow writing assistance",
        "Marriage license guidance",
      ],
    },
    {
      title: "I-9 Verification",
      description: "Employment eligibility verification",
      price: null,
      features: ["I-9 form completion assistance", "Document verification", "Employer compliance support"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <PageHero
        title="Our Services"
        subtitle="Comprehensive notary and document services tailored to meet all your authentication needs"
        backgroundImage="/images/banners/banner10-1600x500.jpg"
        height="md"
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">What We Offer</h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Professional notarization services for individuals, businesses, and legal professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  {service.price && <p className="text-2xl font-bold text-accent">{service.price}</p>}
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {service.showImage && (
                    <div className="mb-6 flex justify-center">
                      <Image
                        src="/images/florida-apostille.png"
                        alt="Florida Apostille - International Document Authentication"
                        width={200}
                        height={300}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/schedule">
                    <Button className="w-full">Book {service.title}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">How It Works</h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Getting your documents notarized is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Appointment</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Contact us to schedule an appointment at our office or request mobile service to your location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Bring Your Documents</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Bring your documents and valid government-issued ID. We'll review everything with you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Notarized</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We'll notarize your documents quickly and professionally, ensuring legal compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Need Notary Services?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today to schedule your appointment. We're ready to help with all your notarization needs.
            </p>
            <div className="flex justify-center">
              <Link href="/schedule">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Schedule Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
