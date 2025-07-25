"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Wifi, Star, Menu, X, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/components/cart/cart-button"
import { CartSidebar } from "@/components/cart/cart-sidebar"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"

export default function HomePage() {
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
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-200 text-white"
                  style={{ backgroundColor: "#6F4E37" }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:bg-opacity-80"
                  style={{ color: "#4B2E2B", ":hover": { backgroundColor: "#F5F5DC" } }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
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
                    className="block px-4 py-3 rounded-xl font-medium transition-all duration-200 text-white"
                    style={{ backgroundColor: "#6F4E37" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-3 rounded-xl font-medium transition-all duration-200"
                    style={{ color: "#4B2E2B" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
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
      <section className="pt-28 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom right, #FFF8F0, #FAF3E0, #F5F5DC)" }}
        >
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute top-20 left-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
              style={{ backgroundColor: "#F5F5DC" }}
            ></div>
            <div
              className="absolute top-40 right-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"
              style={{ backgroundColor: "#6F4E37" }}
            ></div>
            <div
              className="absolute bottom-20 left-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"
              style={{ backgroundColor: "#FAF3E0" }}
            ></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                className="px-4 py-2 rounded-full text-sm font-medium border-0"
                style={{ backgroundColor: "#F5F5DC", color: "#4B2E2B" }}
              >
                ☕ Freshly Roasted Daily
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#4B2E2B" }}>
                Your Cozy Corner for
                <span className="block" style={{ color: "#6F4E37" }}>
                  Perfect Coffee
                </span>
              </h1>
              <p className="text-xl leading-relaxed max-w-lg" style={{ color: "#4B2E2B" }}>
                Step into warmth, savor exceptional coffee, and become part of our welcoming community where every visit
                feels like coming home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button
                  size="lg"
                  className="text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto border-0"
                  style={{
                    backgroundColor: "#6F4E37",
                    ":hover": { backgroundColor: "#4B2E2B" },
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#4B2E2B")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#6F4E37")}
                >
                  Explore Our Menu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/80 px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                  style={{
                    borderColor: "#F5F5DC",
                    color: "#4B2E2B",
                    ":hover": { backgroundColor: "#F5F5DC" },
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)")}
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
                <span className="font-medium" style={{ color: "#4B2E2B" }}>
                  4.9/5 Rating
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5" style={{ color: "#6F4E37" }} />
                <span className="font-medium" style={{ color: "#4B2E2B" }}>
                  2000+ Happy Customers
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/cafe-interior.jpg"
                alt="Cozy cafe interior"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div
              className="absolute top-8 -right-4 bg-white p-4 rounded-2xl shadow-lg z-20"
              style={{ borderColor: "#F5F5DC", borderWidth: "1px" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#FAF3E0" }}
                >
                  <Coffee className="h-5 w-5" style={{ color: "#6F4E37" }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#4B2E2B" }}>
                    Premium Coffee
                  </p>
                  <p className="text-xs" style={{ color: "#6F4E37" }}>
                    Ethically Sourced
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-8 -left-4 bg-white p-4 rounded-2xl shadow-lg z-20"
              style={{ borderColor: "#F5F5DC", borderWidth: "1px" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  <Wifi className="h-5 w-5" style={{ color: "#6F4E37" }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#4B2E2B" }}>
                    Free WiFi
                  </p>
                  <p className="text-xs" style={{ color: "#6F4E37" }}>
                    Work Friendly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-24" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              className="px-4 py-2 rounded-full text-sm font-medium mb-6 border-0"
              style={{ backgroundColor: "#FAF3E0", color: "#4B2E2B" }}
            >
              Our Story
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
              Crafted with <span style={{ color: "#6F4E37" }}>Passion</span>,
              <br className="hidden sm:block" />
              Served with <span style={{ color: "#6F4E37" }}>Love</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: "#4B2E2B" }}>
              Since 2018, Brew & Bean has been the heart of our community, creating a warm space where neighbors become
              friends and great ideas are born over exceptional coffee.
            </p>
            <Link href="/about">
              <Button
                className="text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border-0"
                style={{
                  backgroundColor: "#6F4E37",
                  ":hover": { backgroundColor: "#4B2E2B" },
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#4B2E2B")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#6F4E37")}
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24" style={{ background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              className="px-4 py-2 rounded-full text-sm font-medium mb-6 border-0"
              style={{ backgroundColor: "#F5F5DC", color: "#4B2E2B" }}
            >
              Our Menu
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
              <span style={{ color: "#6F4E37" }}>Signature</span> Favorites
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#4B2E2B" }}>
              From classic espresso drinks to innovative seasonal creations, each item is crafted with care to bring you
              the perfect taste experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                id: 1,
                name: "Signature Latte",
                price: "$4.50",
                description: "Rich espresso with steamed milk and our house blend",
                image: "/images/signature-latte.jpg",
                badge: "Popular",
                badgeColor: "bg-red-100 text-red-700",
                category: "coffee",
              },
              {
                id: 15,
                name: "Artisan Croissant",
                price: "$3.25",
                description: "Buttery, flaky pastry baked fresh every morning",
                image: "/images/croissant.jpg",
                badge: "Fresh Daily",
                badgeColor: "bg-green-100 text-green-700",
                category: "pastries",
              },
              {
                id: 3,
                name: "Cold Brew",
                price: "$3.75",
                description: "Smooth, refreshing coffee steeped for 12 hours",
                image: "/images/cold-brew.jpg",
                badge: "Refreshing",
                badgeColor: "bg-blue-100 text-blue-700",
                category: "coffee",
              },
              {
                id: 20,
                name: "Avocado Toast",
                price: "$8.50",
                description: "Smashed avocado on sourdough with everything seasoning",
                image: "/images/avocado-toast.jpg",
                badge: "Healthy",
                badgeColor: "bg-green-100 text-green-700",
                category: "food",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#FFF8F0" }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${item.badgeColor} border-0 px-3 py-1 text-xs font-medium`}
                    >
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#FFF8F0" }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold" style={{ color: "#4B2E2B" }}>
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold" style={{ color: "#6F4E37" }}>
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B2E2B" }}>
                      {item.description}
                    </p>
                    <AddToCartButton item={item} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-0"
                style={{
                  backgroundColor: "#6F4E37",
                  ":hover": { backgroundColor: "#4B2E2B" },
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#4B2E2B")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#6F4E37")}
              >
                View Full Menu
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
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent rounded-full px-4 border-2"
                  style={{
                    borderColor: "#6F4E37",
                    color: "#6F4E37",
                    ":hover": { backgroundColor: "#6F4E37", color: "white" },
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#6F4E37"
                    e.target.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent"
                    e.target.style.color = "#6F4E37"
                  }}
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent rounded-full px-4 border-2"
                  style={{
                    borderColor: "#F5F5DC",
                    color: "#F5F5DC",
                    ":hover": { backgroundColor: "#F5F5DC", color: "#4B2E2B" },
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#F5F5DC"
                    e.target.style.color = "#4B2E2B"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent"
                    e.target.style.color = "#F5F5DC"
                  }}
                >
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6" style={{ color: "#6F4E37" }}>
                Quick Links
              </h4>
              <div className="space-y-3" style={{ color: "#FAF3E0" }}>
                <p>
                  <Link href="/menu" className="transition-colors hover:text-white">
                    Menu
                  </Link>
                </p>
                <p>
                  <Link href="/about" className="transition-colors hover:text-white">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Contact
                  </Link>
                </p>
                <p>
                  <a href="#" className="transition-colors hover:text-white">
                    Catering
                  </a>
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
