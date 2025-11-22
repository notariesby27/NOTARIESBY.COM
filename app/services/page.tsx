"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Check, ChevronDown, FileText, Home, ScrollText, Globe, Car, Briefcase, Languages, Heart, Clock, MapPin, DollarSign } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Component */}
      <Hero
        title="Professional Notary Services"
        subtitle="Trusted & Reliable — Mobile service across all 67 Florida counties. Book in minutes."
        ctaPrimary={{ href: "/schedule", label: "Book Now" }}
        ctaSecondary={{ href: "/contact", label: "Contact Us" }}
      />

      {/* Service Tabs Navigation */}
      <section className="bg-white border-b border-gray-200 mt-8 md:mt-12 lg:mt-16">
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
              <TabsTrigger
                value="wedding"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Wedding Officiant
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
            <TabsContent value="wedding" className="mt-0">
              <ServicesGrid filter="wedding" />
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
      icon: FileText,
      features: [
        "General document notarization",
        "Mobile notary services covering all 67 Florida counties",
        "Witnesses for document signing",
        "Extended hours notary services (with convenience fee)",
        "LegalZoom document notarization",
        "Apostille document authentication for international use",
      ],
      detailedServices: [
        {
          name: "General Document Notarization",
          description: "Professional notarization of legal documents, contracts, affidavits, and personal papers with proper identification verification and record keeping."
        },
        {
          name: "Mobile Notary Services",
          description: "On-site notarization services available throughout all 67 Florida counties for your convenience at home, office, or any location."
        },
        {
          name: "Witness Services",
          description: "Qualified witnesses provided when required by law for document execution and notarization."
        },
        {
          name: "Extended Hours Service",
          description: "After-hours and weekend notary services available with convenience fee for urgent document needs."
        },
        {
          name: "Apostille Services",
          description: "Complete apostille processing through the US State Department for international document authentication and legalization."
        },
      ],
    },
    {
      category: "real-estate",
      title: "Real Estate Services",
      description: "Expert notarization for real estate transactions",
      icon: Home,
      features: [
        "Real estate document notarization and preparation",
        "Seller documents",
        "New home purchase documents",
        "Loan signing agent services (NNA and LSS Certified)",
      ],
      detailedServices: [
        {
          name: "Purchase Agreements",
          description: "Complete notarization of home purchase contracts, ensuring all signatures and documents meet legal requirements for real estate transactions."
        },
        {
          name: "Refinancing Documents",
          description: "Professional handling of mortgage refinancing paperwork with attention to detail and timely completion for smooth closing processes."
        },
        {
          name: "Seller Document Packages",
          description: "Comprehensive notarization of all seller-required documents including deeds, affidavits, and disclosure forms."
        },
        {
          name: "Closing Services",
          description: "Full-service loan signing agent certified by NNA and LSS, providing complete closing services for buyers, sellers, and lenders."
        },
      ],
    },
    {
      category: "estate-planning",
      title: "Estate Planning",
      description: "Secure your legacy with proper documentation",
      icon: ScrollText,
      features: [
        "Last Will and Testament",
        "Living Will/Advance Healthcare Directive",
        "Durable Power of Attorney",
        "Full estate planning packages",
        "Testamentos, Directivas, Carta de Poder (Spanish services)",
      ],
      detailedServices: [
        {
          name: "Last Will and Testament",
          description: "Comprehensive will preparation and notarization to ensure your assets are distributed according to your wishes with proper legal documentation."
        },
        {
          name: "Healthcare Directives",
          description: "Living wills and advance healthcare directives that document your medical care preferences and end-of-life decisions."
        },
        {
          name: "Power of Attorney Documents",
          description: "Durable and limited power of attorney for financial, legal, and healthcare decisions, allowing trusted individuals to act on your behalf."
        },
        {
          name: "Spanish Estate Services",
          description: "Complete estate planning services in Spanish including Testamentos, Directivas, and Carta de Poder for Spanish-speaking clients."
        },
      ],
    },
    {
      category: "apostille",
      title: "Apostille Services",
      description: "International document authentication through the US State Department",
      icon: Globe,
      customPricing: "Custom pricing based on document requirements",
      features: [
        "US State Department apostille processing",
        "International document authentication",
        "Document shipping to over 200 countries",
        "Expedited processing available",
      ],
      detailedServices: [
        {
          name: "Birth Certificate Apostilles",
          description: "Authentication of birth certificates for dual citizenship applications, overseas employment, international adoptions, and immigration processes."
        },
        {
          name: "Marriage License Apostilles",
          description: "International recognition of marriage licenses for legal proceedings abroad, immigration applications, and establishing marital status overseas."
        },
        {
          name: "Educational Document Apostilles",
          description: "Apostille services for diplomas, transcripts, and degrees for international study programs, overseas employment, and professional licensing."
        },
        {
          name: "Business Document Apostilles",
          description: "Authentication of corporate documents, articles of incorporation, certificates of good standing, and business licenses for international operations."
        },
      ],
    },
    {
      category: "vehicle",
      title: "Vehicle Documentation",
      description: "Vehicle-related verification and documentation",
      icon: Car,
      features: [
        "VIN verification",
        "Odometer verification",
        "Out-of-state vehicle registration assistance",
        "Trailer, RV, and motorcycle documentation",
      ],
      detailedServices: [
        {
          name: "VIN Verification Services",
          description: "Official vehicle identification number verification for title transfers, registration, and legal documentation requirements."
        },
        {
          name: "Odometer Certification",
          description: "Legal odometer reading verification and certification for vehicle sales, title transfers, and state registration compliance."
        },
        {
          name: "Registration Assistance",
          description: "Complete assistance with out-of-state vehicle registration including all required documentation, verification, and notarization services."
        },
      ],
    },
    {
      category: "business",
      title: "Business & Employment",
      description: "Services for businesses and employers",
      icon: Briefcase,
      features: [
        "I-9 Form verification (Employment Eligibility Verification)",
        "Authorized representative services for remote worker verification",
      ],
      detailedServices: [
        {
          name: "I-9 Employment Verification",
          description: "Complete I-9 form verification services ensuring federal compliance with employment eligibility requirements and proper documentation for new hires."
        },
        {
          name: "Remote Employee Verification",
          description: "Authorized representative services for verifying identity and employment documents for remote employees, ensuring compliance across all locations."
        },
      ],
    },
    {
      category: "wedding",
      title: "Wedding Officiant",
      description: "Personalized wedding ceremonies for your special day",
      icon: Heart,
      features: [
        "Personalized wedding ceremonies",
        "Civil and religious ceremonies",
        "Vow renewal services",
        "Same-day ceremony availability",
        "Custom ceremony scripts",
        "Bilingual ceremony options (English/Spanish)",
      ],
      detailedServices: [
        {
          name: "Custom Ceremony Design",
          description: "Personalized ceremonies crafted to reflect your unique love story, values, and relationship, creating an unforgettable experience for you and your guests."
        },
        {
          name: "Flexible Ceremony Styles",
          description: "Traditional, contemporary, religious, spiritual, or secular ceremonies tailored to your preferences and cultural traditions."
        },
        {
          name: "Vow Assistance",
          description: "Professional guidance in crafting meaningful personal vows that express your commitment and love in your own words."
        },
        {
          name: "Same-Day Services",
          description: "Emergency wedding services available with minimal notice for last-minute ceremonies and urgent marriage needs."
        },
        {
          name: "Bilingual Ceremonies",
          description: "Full wedding ceremony services conducted in English or Spanish, or a blend of both languages for multicultural celebrations."
        },
      ],
    },
  ]

  const filteredServices = filter ? services.filter((s) => s.category === filter) : services

  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {!filter && (
        <section className="py-12 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Languages className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold">
                Bilingual Services Available
              </h2>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
              All of our notary services are available in both English and Spanish. 
              Our bilingual notaries provide seamless communication and culturally 
              sensitive service delivery across every category—from estate planning 
              (Testamentos, Directivas, Carta de Poder) to real estate transactions, 
              business documents, and wedding ceremonies.
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto mt-4 opacity-90">
              Todos nuestros servicios notariales están disponibles en inglés y español.
            </p>
          </div>
        </section>
      )}
    </>
  )
}

function ServiceCard({ service }: { service: any }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-2 border-slate-200/20 h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <h3 className="font-heading text-lg md:text-xl text-slate-800 mb-2">{service.title}</h3>
        {service.customPricing && (
          <div className="text-lg font-semibold text-slate-700 mb-2">{service.customPricing}</div>
        )}
        <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow flex flex-col">
        <ul className="space-y-3 mb-4 flex-grow">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="outline" 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="w-full mb-4 border-slate-200"
        >
          <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          {isExpanded ? "Show Less Details" : "Show More Details"}
        </Button>
        
        {isExpanded && service.detailedServices && (
          <div className="space-y-4 mb-4 p-3 md:p-4 bg-slate-50 rounded-lg">
            {service.detailedServices.map((detail: any, idx: number) => (
              <div key={idx} className="border-l-4 border-slate-200 pl-3 md:pl-4">
                <h5 className="font-medium text-slate-700 mb-1">{detail.name}</h5>
                <p className="text-xs md:text-sm text-slate-600">{detail.description}</p>
              </div>
            ))}
          </div>
        )}
        
        <Link href={`/schedule?service=${service.category}`}>
          <Button className="w-full bg-slate-700 text-white border border-black mt-auto">
            Book {service.title}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
