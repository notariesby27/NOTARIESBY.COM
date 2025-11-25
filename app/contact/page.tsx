import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { Address } from "@/components/address"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[300px] flex items-center justify-center bg-muted mt-16 lg:mt-20 overflow-hidden">
        <Image src="/images/contact-banner.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-balance">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Get in touch to schedule your notary appointment
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have questions or ready to schedule an appointment? We're here to help. Fill out the form or reach out
                directly using the contact information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700 text-sm">727-710-5455</p>
                    <p className="text-gray-700 text-sm">Mon-Sat: 9AM-7PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-700 text-sm">info@notariesby.com</p>
                    <p className="text-gray-700 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Location</h3>
                    <Address className="text-sm text-gray-700" />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <div className="text-gray-700 text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-card border border-border p-6 lg:p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">Need Emergency Notary Service?</h3>
          <p className="text-primary-foreground/90 mb-4">
            We offer 24/7 emergency mobile notary services for urgent situations.
          </p>
          <p className="text-xl font-semibold">Call: 727-710-5455</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
