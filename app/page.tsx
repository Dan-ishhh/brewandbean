"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Wifi, Star, Menu, X, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
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
              <Button className="hidden sm:block bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                Order Online
              </Button>

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
                  className="block text-gray-700 hover:text-orange-600 transition-colors py-3 font-medium"
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
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full mt-4 shadow-lg">
                  Order Online
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2 rounded-full text-sm font-medium">
                ☕ Freshly Roasted Daily
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Your Cozy Corner for
                <span className="text-orange-600 block">Perfect Coffee</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Step into warmth, savor exceptional coffee, and become part of our welcoming community where every visit
                feels like coming home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
                >
                  Explore Our Menu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 bg-white/80 px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  Find Us
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-red-400" />
                <span className="text-gray-700 font-medium">2000+ Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Cozy cafe interior"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-orange-100 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Coffee className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Premium Coffee</p>
                  <p className="text-xs text-gray-600">Ethically Sourced</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-orange-100 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Wifi className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Free WiFi</p>
                  <p className="text-xs text-gray-600">Work Friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Story
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Crafted with <span className="text-orange-600">Passion</span>,
              <br className="hidden sm:block" />
              Served with <span className="text-green-600">Love</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Since 2018, Brew & Bean has been the heart of our community, creating a warm space where neighbors become
              friends and great ideas are born over exceptional coffee.
            </p>
            <Link href="/about">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Menu
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-orange-600">Signature</span> Favorites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From classic espresso drinks to innovative seasonal creations, each item is crafted with care to bring you
              the perfect taste experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "Signature Latte",
                price: "$4.50",
                description: "Rich espresso with steamed milk and our house blend",
                image: "beautiful latte art heart design in white ceramic cup on wooden table",
                badge: "Popular",
                badgeColor: "bg-red-100 text-red-700",
              },
              {
                name: "Artisan Croissant",
                price: "$3.25",
                description: "Buttery, flaky pastry baked fresh every morning",
                image: "golden flaky croissant on rustic wooden board with butter",
                badge: "Fresh Daily",
                badgeColor: "bg-green-100 text-green-700",
              },
              {
                name: "Cold Brew",
                price: "$3.75",
                description: "Smooth, refreshing coffee steeped for 12 hours",
                image: "iced cold brew coffee in tall glass with ice cubes and straw",
                badge: "Refreshing",
                badgeColor: "bg-blue-100 text-blue-700",
              },
              {
                name: "Avocado Toast",
                price: "$8.50",
                description: "Smashed avocado on sourdough with everything seasoning",
                image: "avocado toast with seeds herbs on artisan sourdough bread",
                badge: "Healthy",
                badgeColor: "bg-green-100 text-green-700",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white border-0 hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-2xl"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=240&width=320&query=${item.image}`}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${item.badgeColor} border-0 px-3 py-1 text-xs font-medium`}
                    >
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                      <span className="text-xl font-bold text-orange-600">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                View Full Menu
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
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white bg-transparent rounded-full px-4"
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-400 text-green-300 hover:bg-green-400 hover:text-white bg-transparent rounded-full px-4"
                >
                  Instagram
                </Button>
              </div>
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
                <p>
                  <a href="#" className="hover:text-orange-300 transition-colors">
                    Catering
                  </a>
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
    </div>
  )
}
