"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import {
  Check,
  ChevronDown,
  FileText,
  Home,
  ScrollText,
  Globe,
  Car,
  Briefcase,
  Languages,
  Heart,
  Clock,
  MapPin,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900">Our Services</h1>
        </div>
      </section>

      {/* Service Tabs Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b-0 rounded-none gap-0">
              <TabsTrigger
                value="all"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="notary"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Notary
              </TabsTrigger>
              <TabsTrigger
                value="real-estate"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Real Estate
              </TabsTrigger>
              <TabsTrigger
                value="estate-planning"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Estate Planning
              </TabsTrigger>
              <TabsTrigger
                value="vehicle"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Vehicle
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Business
              </TabsTrigger>
              <TabsTrigger
                value="apostille"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Apostille
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <ServicesGrid />
            </TabsContent>
            <TabsContent value="notary" className="mt-0">
              <ServicesGrid filter="notary" />
            </TabsContent>
            <TabsContent value="real-estate" className="mt-0">
              <ServicesGrid filter="real-estate" />
            </TabsContent>
            <TabsContent value="estate-planning" className="mt-0">
              <ServicesGrid filter="estate-planning" />
            </TabsContent>
            <TabsContent value="vehicle" className="mt-0">
              <ServicesGrid filter="vehicle" />
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              <ServicesGrid filter="business" />
            </TabsContent>
            <TabsContent value="apostille" className="mt-0">
              <ServicesGrid filter="apostille" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Categories Icon Grid */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Service Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Document Services</h3>
              <p className="text-sm text-gray-600">Professional notarization and apostille services</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Real Estate</h3>
              <p className="text-sm text-gray-600">Expert notarization for real estate transactions</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <ScrollText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Estate Planning</h3>
              <p className="text-sm text-gray-600">Secure your legacy with proper documentation</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Apostille Services</h3>
              <p className="text-sm text-gray-600">International document authentication</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Vehicle Documentation</h3>
              <p className="text-sm text-gray-600">Vehicle-related verification and documentation</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Business Services</h3>
              <p className="text-sm text-gray-600">Services for businesses and employers</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Languages className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Bilingual Services</h3>
              <p className="text-sm text-gray-600">Services in English and Spanish</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Wedding Officiant</h3>
              <p className="text-sm text-gray-600">Elegant wedding ceremony services</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Cards (Availability, Service Area, Pricing) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Availability */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Availability</h3>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p>We offer flexible scheduling to accommodate your needs:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Monday - Friday: 8AM - 7PM</li>
                  <li>Saturday: 10AM - 5PM</li>
                  <li>Sunday: By appointment</li>
                  <li>Extended hours available (fee applies)</li>
                </ul>
              </div>
            </Card>

            {/* Service Area */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Service Area</h3>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p>We provide mobile notary services throughout:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>All 67 Florida counties</li>
                  <li>Tampa Bay area</li>
                  <li>St. Petersburg</li>
                  <li>Clearwater and surrounding areas</li>
                </ul>
              </div>
            </Card>

            {/* Pricing */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Pricing</h3>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p>Our competitive pricing structure:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Standard notarization: $10/signature</li>
                  <li>Travel fees vary by location</li>
                  <li>Apostille services: Custom pricing based on needs</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Ready to Schedule a Notary Service?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Book an appointment today and experience our professional, convenient mobile notary services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button size="lg" className="min-w-[200px]">
                Book an Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-4">Service Areas</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We provide mobile notary services throughout all 67 Florida counties, including:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-gray-50 rounded">Tampa</div>
            <div className="text-center p-4 bg-gray-50 rounded">St. Petersburg</div>
            <div className="text-center p-4 bg-gray-50 rounded">Clearwater</div>
            <div className="text-center p-4 bg-gray-50 rounded">Largo</div>
            <div className="text-center p-4 bg-gray-50 rounded">Pinellas Park</div>
            <div className="text-center p-4 bg-gray-50 rounded">Seminole</div>
            <div className="text-center p-4 bg-gray-50 rounded">Palm Harbor</div>
            <div className="text-center p-4 bg-gray-50 rounded">Wesley Chapel</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ServicesGrid({ filter }: { filter?: string }) {
  const services = [
    {
      category: "notary",
      title: "Document Services",
      description: "Professional notarization and apostille services",
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
      category: "real-estate",
      title: "Real Estate Services",
      description: "Expert notarization for real estate transactions",
      features: [
        "Real estate document notarization and preparation",
        "Seller documents",
        "New home purchase documents",
        "Loan signing agent services (NNA and LSS Certified)",
      ],
    },
    {
      category: "estate-planning",
      title: "Estate Planning",
      description: "Secure your legacy with proper documentation",
      features: [
        "Last Will and Testament",
        "Living Will/Advance Healthcare Directive",
        "Durable Power of Attorney",
        "Full estate planning packages",
        "Testamentos, Directivas, Carta de Poder (Spanish services)",
      ],
    },
    {
      category: "apostille",
      title: "Apostille Services",
      description: "International document authentication through the US State Department",
      customPricing: "Custom pricing based on document requirements",
      features: [
        "US State Department apostille processing",
        "International document authentication",
        "Document shipping to over 200 countries",
        "Expedited processing available",
      ],
      detailsFeatures: [
        "Birth certificates",
        "Marriage licenses and divorce decrees",
        "Out-of-state vehicle registration",
        "Dealer verification",
        "Trailer, RV, and motorcycle documentation",
      ],
    },
    {
      category: "vehicle",
      title: "Vehicle Documentation",
      description: "Vehicle-related verification and documentation",
      features: [
        "VIN verification",
        "Odometer verification",
        "Out-of-state vehicle registration assistance",
        "Trailer, RV, and motorcycle documentation",
      ],
    },
    {
      category: "business",
      title: "Business & Employment",
      description: "Services for businesses and employers",
      features: [
        "I-9 Form verification (Employment Eligibility Verification)",
        "Authorized representative services for remote worker verification",
      ],
    },
  ]

  const filteredServices = filter ? services.filter((s) => s.category === filter) : services

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: any }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        {service.customPricing && <p className="text-sm font-medium text-primary mb-2">{service.customPricing}</p>}
        <CardDescription className="text-sm">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 mb-4 flex-1">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {service.detailsFeatures && (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-4">
            <CollapsibleTrigger className="flex items-center gap-2 text-sm text-primary hover:underline">
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              Show More Details
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3">
              <p className="text-sm font-medium mb-2">Documents We Authenticate:</p>
              <ul className="space-y-2">
                {service.detailsFeatures.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )}

        <Link href="/schedule">
          <Button className="w-full">Book {service.title}</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
