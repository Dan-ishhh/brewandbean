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
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-orange-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-gray-800">Brew & Bean</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-orange-600 font-semibold">
                About
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Menu
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <CartButton />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-orange-50 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-orange-100 bg-white/95 backdrop-blur-sm">
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-orange-600 transition-colors py-3 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-orange-600 font-semibold py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/menu"
                  className="block text-gray-700 hover:text-orange-600 transition-colors py-3 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-orange-600 transition-colors py-3 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <CartButton />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-orange-600">Brew & Bean</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              More than just a coffee shop, we're a community hub where passion meets purpose, and every cup tells a
              story of quality, sustainability, and connection.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-orange-600">Journey</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our <span className="text-orange-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values that shape our approach to coffee, community, and
              sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quality First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We source only the finest beans from sustainable farms and roast them to perfection, ensuring every
                  cup meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Community Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're more than a cafe—we're a gathering place where neighbors become friends and ideas come to life
                  over great coffee.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Environmental responsibility guides our choices, from ethically sourced beans to eco-friendly
                  packaging and practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our love for coffee and community drives everything we do, from the perfect roast to the warm welcome
                  you receive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for excellence in every aspect, from our carefully crafted beverages to our exceptional
                  customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Consistency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether it's your first visit or your hundredth, you can count on the same high quality and warm
                  service every time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Meet Our <span className="text-orange-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="border-0 hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl bg-white"
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
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Come experience the warmth, quality, and community spirit that makes Brew & Bean special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Explore Our Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full bg-transparent"
              >
                Visit Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                  <Coffee className="h-7 w-7 text-white" />
                </div>
                <span className="text-2xl font-bold">Brew & Bean</span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Your neighborhood cafe where quality meets comfort. Join us for exceptional coffee, warm hospitality,
                and a welcoming community atmosphere.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-orange-300">Quick Links</h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  <Link href="/menu" className="hover:text-orange-300 transition-colors">
                    Menu
                  </Link>
                </p>
                <p>
                  <Link href="/about" className="hover:text-orange-300 transition-colors">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link href="/contact" className="hover:text-orange-300 transition-colors">
                    Contact
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-green-300">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <p>123 Coffee Street</p>
                <p>Downtown District</p>
                <p>(555) 123-BREW</p>
                <p>hello@brewandbean.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Brew & Bean. All rights reserved. Made with ❤️ for coffee lovers.</p>
          </div>
        </div>
      </footer>
      <CartSidebar />
    </div>
  )
}
