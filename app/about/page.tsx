"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Users, Heart, Award, Leaf, Clock, Menu, X } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/components/cart/cart-button"
import { CartSidebar } from "@/components/cart/cart-sidebar"

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border" style={{ borderColor: "#F5F5DC" }}>
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(to bottom right, #6F4E37, #4B2E2B)" }}
                  >
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#F5F5DC" }}
                  ></div>
                </div>
                <span className="text-xl font-bold" style={{ color: "#4B2E2B" }}>
                  Brew & Bean
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-opacity-80"
                  style={{ color: "#4B2E2B", ":hover": { backgroundColor: "#F5F5DC" } }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-200 text-white"
                  style={{ backgroundColor: "#6F4E37" }}
                >
                  About
                </Link>
                <Link
                  href="/menu"
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-opacity-80"
                  style={{ color: "#4B2E2B", ":hover": { backgroundColor: "#F5F5DC" } }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  Menu
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-opacity-80"
                  style={{ color: "#4B2E2B", ":hover": { backgroundColor: "#F5F5DC" } }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  Contact
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <CartButton />

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-xl transition-colors"
                  style={{
                    backgroundColor: isMobileMenuOpen ? "#F5F5DC" : "transparent",
                    color: "#4B2E2B",
                  }}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t py-4" style={{ borderColor: "#F5F5DC" }}>
                <div className="space-y-2">
                  <Link
                    href="/"
                    className="block px-4 py-3 rounded-xl font-medium transition-all duration-200"
                    style={{ color: "#4B2E2B" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-3 rounded-xl font-medium transition-all duration-200 text-white"
                    style={{ backgroundColor: "#6F4E37" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/menu"
                    className="block px-4 py-3 rounded-xl font-medium transition-all duration-200"
                    style={{ color: "#4B2E2B" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    Menu
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 rounded-xl font-medium transition-all duration-200"
                    style={{ color: "#4B2E2B" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    Contact
                  </Link>
                  <div className="pt-2">
                    <CartButton />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20"
        style={{ background: "linear-gradient(to bottom right, #FFF8F0, #FAF3E0, #F5F5DC)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              className="px-4 py-2 rounded-full text-sm font-medium mb-6 border-0"
              style={{ backgroundColor: "#F5F5DC", color: "#4B2E2B" }}
            >
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
              About <span style={{ color: "#6F4E37" }}>Brew & Bean</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#4B2E2B" }}>
              More than just a coffee shop, we're a community hub where passion meets purpose, and every cup tells a
              story of quality, sustainability, and connection.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
                Our <span style={{ color: "#6F4E37" }}>Journey</span>
              </h2>
              <div className="space-y-6 leading-relaxed" style={{ color: "#4B2E2B" }}>
                <p>
                  Founded in 2018 by coffee enthusiasts Maria and James, Brew & Bean started as a dream to create a
                  space where exceptional coffee meets genuine community connection. What began as a small neighborhood
                  cafe has grown into the heart of our local community.
                </p>
                <p>
                  We believe that great coffee is more than just a beverage—it's a catalyst for conversation,
                  creativity, and connection. Every morning, we carefully roast our beans to perfection, ensuring that
                  each cup delivers not just exceptional flavor, but a moment of joy in your day.
                </p>
                <p>
                  Our commitment extends beyond great coffee. We're dedicated to sustainable practices, fair trade
                  partnerships, and supporting local artists and musicians who regularly showcase their talents in our
                  cozy space.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our founders roasting coffee"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
              Our <span style={{ color: "#6F4E37" }}>Values</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4B2E2B" }}>
              Everything we do is guided by our core values that shape our approach to coffee, community, and
              sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "Quality First",
                description:
                  "We source only the finest beans from sustainable farms and roast them to perfection, ensuring every cup meets our high standards.",
                gradient: "from-emerald-700 to-green-800",
              },
              {
                icon: Users,
                title: "Community Focus",
                description:
                  "We're more than a cafe—we're a gathering place where neighbors become friends and ideas come to life over great coffee.",
                gradient: "from-teal-500 to-emerald-600",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description:
                  "Environmental responsibility guides our choices, from ethically sourced beans to eco-friendly packaging and practices.",
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                icon: Heart,
                title: "Passion",
                description:
                  "Our love for coffee and community drives everything we do, from the perfect roast to the warm welcome you receive.",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect, from our carefully crafted beverages to our exceptional customer service.",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: Clock,
                title: "Consistency",
                description:
                  "Whether it's your first visit or your hundredth, you can count on the same high quality and warm service every time.",
                gradient: "from-red-400 to-pink-500",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: "#F5F5DC", backgroundColor: "#FFF8F0" }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    style={{ background: "linear-gradient(to bottom right, #6F4E37, #4B2E2B)" }}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#4B2E2B" }}>
                    {value.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#4B2E2B" }}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
              Meet Our <span style={{ color: "#6F4E37" }}>Team</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4B2E2B" }}>
              The passionate people behind every perfect cup and warm smile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                role: "Co-Founder & Head Roaster",
                image: "professional woman with warm smile in coffee shop apron",
                description:
                  "Maria's passion for coffee started in Colombia and brought her expertise to our community.",
              },
              {
                name: "James Chen",
                role: "Co-Founder & Operations",
                image: "friendly man with beard in coffee shop setting",
                description:
                  "James ensures every detail of your experience exceeds expectations, from service to ambiance.",
              },
              {
                name: "Sarah Johnson",
                role: "Head Barista",
                image: "skilled barista creating latte art",
                description: "Sarah's artistic flair and technical skill create the beautiful drinks you love.",
              },
              {
                name: "Alex Thompson",
                role: "Community Manager",
                image: "enthusiastic person organizing community event",
                description: "Alex coordinates our events and ensures our cafe remains the heart of the community.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-0 hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#FFF8F0" }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=300&width=300&query=${member.image}`}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-1" style={{ color: "#4B2E2B" }}>
                      {member.name}
                    </h3>
                    <p className="font-medium mb-3" style={{ color: "#6F4E37" }}>
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#4B2E2B" }}>
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(to bottom right, #6F4E37, #4B2E2B)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Come experience the warmth, quality, and community spirit that makes Brew & Bean special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-0"
                style={{ backgroundColor: "#FFF8F0", color: "#4B2E2B" }}
              >
                Explore Our Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white px-8 py-4 rounded-full bg-transparent"
                style={{ ":hover": { color: "#4B2E2B" } }}
                onMouseEnter={(e) => (e.target.style.color = "#4B2E2B")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Visit Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-16" style={{ backgroundColor: "#4B2E2B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(to bottom right, #6F4E37, #4B2E2B)" }}
                >
                  <Coffee className="h-7 w-7 text-white" />
                </div>
                <span className="text-2xl font-bold">Brew & Bean</span>
              </Link>
              <p className="mb-6 leading-relaxed max-w-md" style={{ color: "#FAF3E0" }}>
                Your neighborhood cafe where quality meets comfort. Join us for exceptional coffee, warm hospitality,
                and a welcoming community atmosphere.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6" style={{ color: "#6F4E37" }}>
                Quick Links
              </h4>
              <div className="space-y-3" style={{ color: "#FAF3E0" }}>
                <p>
                  <Link href="/menu" className="hover:text-white transition-colors">
                    Menu
                  </Link>
                </p>
                <p>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6" style={{ color: "#F5F5DC" }}>
                Contact Info
              </h4>
              <div className="space-y-3" style={{ color: "#FAF3E0" }}>
                <p>123 Coffee Street</p>
                <p>Downtown District</p>
                <p>(555) 123-BREW</p>
                <p>hello@brewandbean.com</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: "#6F4E37", color: "#FAF3E0" }}>
            <p>&copy; 2024 Brew & Bean. All rights reserved. Made with ❤️ for coffee lovers.</p>
          </div>
        </div>
      </footer>
      <CartSidebar />
    </div>
  )
}
