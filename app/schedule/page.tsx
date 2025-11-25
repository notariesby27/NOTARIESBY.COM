"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone } from "lucide-react"

const serviceMapping: Record<string, string> = {
  document: "general-notary",
  "real-estate": "real-estate",
  "estate-planning": "estate-planning",
  vehicle: "vehicle-docs",
  business: "business-docs",
  apostille: "apostille",
  wedding: "wedding",
  "loan-signing": "loan-signing",
  "power-attorney": "power-attorney",
  "i9-verification": "i9-verification",
  witness: "witness",
}

function BookingForm() {
  const searchParams = useSearchParams()
  const [selectedService, setSelectedService] = useState<string>("")

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      const mappedService = serviceMapping[serviceParam] || serviceParam
      setSelectedService(mappedService)
    }
  }, [searchParams])

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ]

  return (
    <section id="booking-form" className="py-16 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Book Your Service</h2>

              <form action="https://formspree.io/f/XXXXXXXX" method="POST" className="space-y-6">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service">Select Service *</Label>
                  <Select name="service" required value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loan-signing">Loan Document Signing</SelectItem>
                      <SelectItem value="real-estate">Real Estate Services</SelectItem>
                      <SelectItem value="estate-planning">Estate Planning Documents</SelectItem>
                      <SelectItem value="power-attorney">Power of Attorney</SelectItem>
                      <SelectItem value="apostille">Apostille Service</SelectItem>
                      <SelectItem value="general-notary">General Notarization</SelectItem>
                      <SelectItem value="vehicle-docs">Vehicle Documentation</SelectItem>
                      <SelectItem value="business-docs">Business Documents</SelectItem>
                      <SelectItem value="wedding">Wedding Officiant</SelectItem>
                      <SelectItem value="i9-verification">I-9 Verification</SelectItem>
                      <SelectItem value="witness">Witness Services</SelectItem>
                      <SelectItem value="other">Other Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferred_date">Preferred Date *</Label>
                    <Input type="date" id="preferred_date" name="preferred_date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferred_time">Preferred Time *</Label>
                    <Select name="preferred_time" required>
                      <SelectTrigger id="preferred_time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first_name">First Name *</Label>
                    <Input type="text" id="first_name" name="first_name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last_name">Last Name *</Label>
                    <Input type="text" id="last_name" name="last_name" required />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="tel" id="phone" name="phone" />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Please provide any additional details about your notarization needs..."
                    rows={4}
                  />
                </div>

                {/* Hidden Fields for Formspree */}
                <input type="hidden" name="_subject" value="New Booking Request" />
                <input type="hidden" name="_next" value="https://notariesby.com/schedule/thank-you" />

                {/* Honeypot for spam protection */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <Button type="submit" size="lg" className="w-full">
                  Book Your Service
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="underline hover:text-foreground">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Need Urgent Assistance?</h3>
              <p className="text-sm text-gray-700 mb-4">
                For same-day or urgent appointments, please call us directly:
              </p>
              <a
                href="tel:7277105455"
                className="flex items-center gap-2 text-lg font-semibold text-accent hover:text-accent/80"
              >
                <Phone className="w-5 h-5" />
                727-710-5455
              </a>
              <p className="text-xs text-gray-700 mt-2">Mon-Sat: 9AM-7PM</p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">What to Bring</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Valid government-issued photo ID</li>
                <li>• All documents requiring notarization</li>
                <li>• Any additional signers with their IDs</li>
                <li>• Payment method (cash, check, or card)</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <p className="text-sm text-gray-700">
                We provide mobile notary services throughout all 67 Florida counties, with a focus on the Tampa Bay
                area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <PageHero
        title="Schedule Your Appointment"
        subtitle="Book your mobile notary service today. We come to you at your convenience."
        backgroundImage="/images/banners/signing-banner.jpg"
        height="md"
      />

      <Suspense fallback={<div className="py-16 lg:py-24 text-center">Loading booking form...</div>}>
        <BookingForm />
      </Suspense>

      <Footer />
    </div>
  )
}
