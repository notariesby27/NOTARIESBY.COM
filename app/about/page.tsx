import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Clock, Heart, Shield, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in every notarization, ensuring legal compliance and trust.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We provide personalized service with attention to detail.",
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Precision in every document. We ensure all notarizations meet legal requirements perfectly.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Dependable service when you need it. We respect your time and meet all deadlines.",
    },
  ]

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "10,000+", label: "Documents Notarized" },
    { number: "5,000+", label: "Satisfied Clients" },
    { number: "24/7", label: "Emergency Service" },
  ]

  const teamMembers = [
    {
      name: "Jill Munoz",
      title: "Founder & Lead Notary",
      bio: "With over 20 years of experience in the notary industry, Jill founded NotariesBy to provide exceptional mobile notary services throughout Florida. She specializes in real estate transactions and estate planning documents, bringing professionalism and reliability to every appointment.",
      image: "/images/team/jill33.png",
    },
    {
      name: "Natalie Kolaxis",
      title: "Senior Notary Public",
      bio: "Natalie brings 8 years of notary experience with expertise in loan signings and complex document preparation. Her attention to detail and commitment to client satisfaction makes her an invaluable member of our team, serving clients across the Tampa Bay area.",
      image: "/images/team/natalie.png",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-muted mt-16 lg:mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/banner41600x500.jpg"
            alt="Professional notary office"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.4)" }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 text-balance">
              About NotariesBy
            </h1>

            {/* Mission Statement */}
            <div className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-lg p-8 lg:p-12 mb-6">
              <h2 className="text-2xl lg:text-3xl font-serif font-light mb-6 text-gray-900">Our Mission</h2>
              <p className="text-base lg:text-lg text-gray-800 leading-relaxed text-pretty">
                At Notaries By, our mission is to provide dependable, precise, and compassionate notary and closing
                services that make every signature matter. As a proud woman-owned business and advocate for our nation's
                veterans, we partner with real-estate professionals, legal and financial teams, and everyday clients to
                ensure each transaction is handled with integrity, efficiency, and respect. From real-estate closings to
                estate planning, business contracts, and personal documents, we create seamless experiences that build
                trust, foster lasting relationships, and strengthen our community.
              </p>
            </div>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner for professional notary services since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p>
                  Founded in 2009, NotaryPro was established with a simple mission: to provide reliable, professional
                  notary services that people can trust. What started as a small office has grown into a full-service
                  notary practice serving thousands of clients across the region.
                </p>
                <p>
                  Our founder, with over 20 years of experience in legal document services, recognized the need for a
                  notary service that combines expertise with exceptional customer care. Today, we continue that
                  tradition, serving individuals, businesses, and legal professionals with the same dedication to
                  excellence.
                </p>
                <p>
                  We pride ourselves on staying current with all legal requirements and best practices in notarization.
                  Our team regularly participates in continuing education to ensure we provide the most accurate and
                  up-to-date service possible.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px]">
              <img src="/placeholder.svg?height=500&width=600" alt="Our team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Duplicate Mission Statement Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-8 lg:p-12 shadow-md">
            <h2 className="text-2xl lg:text-3xl font-serif font-light mb-6 text-gray-900 text-center">Our Mission</h2>
            <p className="text-base lg:text-lg text-gray-800 leading-relaxed text-center">
              At Notaries By, our mission is to provide dependable, precise, and compassionate notary and closing
              services that make every signature matter. As a proud woman-owned business and advocate for our nation's
              veterans, we partner with real-estate professionals, legal and financial teams, and everyday clients to
              ensure each transaction is handled with integrity, efficiency, and respect. From real-estate closings to
              estate planning, business contracts, and personal documents, we create seamless experiences that build
              trust, foster lasting relationships, and strengthen our community.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-serif font-light mb-2">{stat.number}</div>
                <div className="text-sm text-primary-foreground/80 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Notary Professionals */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Our Notary Professionals</h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Our experienced professionals are dedicated to providing you with exceptional notary services and
              personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background p-8 rounded-lg border border-border text-center">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-muted border-4 border-accent/20">
                  {member.image ? (
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground text-sm">Coming Soon</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-4 text-sm">{member.title}</p>
                <p className="text-gray-800 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Certified & Licensed</h2>
              <p className="text-gray-700 leading-relaxed">
                Our notaries are fully licensed, bonded, and insured, meeting all state requirements for professional
                notary services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 border border-border">
                <h3 className="font-semibold mb-2">State Licensed Notaries</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  All our notaries are commissioned by the state and maintain active licenses in good standing.
                </p>
              </div>

              <div className="bg-background p-6 border border-border">
                <h3 className="font-semibold mb-2">Bonded & Insured</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We carry comprehensive bonding and insurance to protect our clients and their documents.
                </p>
              </div>

              <div className="bg-background p-6 border border-border">
                <h3 className="font-semibold mb-2">Background Checked</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Every notary on our team has passed thorough background checks and screening processes.
                </p>
              </div>

              <div className="bg-background p-6 border border-border">
                <h3 className="font-semibold mb-2">Continuing Education</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We stay current with ongoing training and education in notary law and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the difference of working with a professional notary service that truly cares about your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
