import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { Address } from "./address"

export function Footer() {
  return (
    <footer className="bg-[#2C3036] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">NotariesBy</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Professional mobile notary services specializing in loan signings and estate planning throughout Florida.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/70">Loan Document Signings</li>
              <li className="text-sm text-white/70">Estate Planning</li>
              <li className="text-sm text-white/70">Power of Attorney</li>
              <li className="text-sm text-white/70">Real Estate Closings</li>
              <li className="text-sm text-white/70">General Notarizations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  727-710-5455
                  <br />
                  <span className="text-xs">Mon-Sat: 9AM-7PM</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  info@notariesby.com
                  <br />
                  <span className="text-xs">We respond within 24hrs</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  <Address className="inline" />
                  <br />
                  Mobile service - we come to you!
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} West Coast Notaries, LLC. All rights reserved.
              </p>
              <p className="text-xs text-white/50 mt-1">NotariesBy is a fictitious name of West Coast Notaries, LLC.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
