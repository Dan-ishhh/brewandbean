"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Coffee, Clock, Menu, X, Send, MessageCircle } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/components/cart/cart-button"
import { CartSidebar } from "@/components/cart/cart-sidebar"

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

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
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-200 text-white"
                  style={{ backgroundColor: "#6F4E37" }}
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
                    className="block px-4 py-3 rounded-xl font-medium transition-all duration-200 text-white"
                    style={{ backgroundColor: "#6F4E37" }}
                    onClick={() => setIsMobileMenuOpen(false)}
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
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
              Contact <span style={{ color: "#6F4E37" }}>Us</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#4B2E2B" }}>
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, we're here to
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-8" style={{ color: "#4B2E2B" }}>
                  Visit Our Cafe
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                      style={{ backgroundColor: "#FAF3E0" }}
                    >
                      <MapPin className="h-6 w-6" style={{ color: "#6F4E37" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "#4B2E2B" }}>
                        Address
                      </h3>
                      <p style={{ color: "#4B2E2B" }}>123 Coffee Street</p>
                      <p style={{ color: "#4B2E2B" }}>Downtown District, City 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                      style={{ backgroundColor: "#F5F5DC" }}
                    >
                      <Phone className="h-6 w-6" style={{ color: "#6F4E37" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "#4B2E2B" }}>
                        Phone
                      </h3>
                      <p style={{ color: "#4B2E2B" }}>(555) 123-BREW</p>
                      <p className="text-sm" style={{ color: "#6F4E37" }}>
                        Call us for reservations or questions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                      style={{ backgroundColor: "#FAF3E0" }}
                    >
                      <Mail className="h-6 w-6" style={{ color: "#6F4E37" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "#4B2E2B" }}>
                        Email
                      </h3>
                      <p style={{ color: "#4B2E2B" }}>hello@brewandbean.com</p>
                      <p className="text-sm" style={{ color: "#6F4E37" }}>
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
                  Opening Hours
                </h3>
                <div className="space-y-4">
                  <div
                    className="flex justify-between items-center p-4 rounded-xl border"
                    style={{ background: "linear-gradient(to right, #FAF3E0, #F5F5DC)", borderColor: "#F5F5DC" }}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" style={{ color: "#6F4E37" }} />
                      <span className="font-medium" style={{ color: "#4B2E2B" }}>
                        Monday - Friday
                      </span>
                    </div>
                    <span className="font-semibold" style={{ color: "#4B2E2B" }}>
                      6:30 AM - 8:00 PM
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center p-4 rounded-xl border"
                    style={{ background: "linear-gradient(to right, #FAF3E0, #F5F5DC)", borderColor: "#F5F5DC" }}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" style={{ color: "#6F4E37" }} />
                      <span className="font-medium" style={{ color: "#4B2E2B" }}>
                        Saturday
                      </span>
                    </div>
                    <span className="font-semibold" style={{ color: "#4B2E2B" }}>
                      7:00 AM - 9:00 PM
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center p-4 rounded-xl border"
                    style={{ background: "linear-gradient(to right, #FAF3E0, #F5F5DC)", borderColor: "#F5F5DC" }}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" style={{ color: "#6F4E37" }} />
                      <span className="font-medium" style={{ color: "#4B2E2B" }}>
                        Sunday
                      </span>
                    </div>
                    <span className="font-semibold" style={{ color: "#4B2E2B" }}>
                      8:00 AM - 7:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border-0"
                  style={{ backgroundColor: "#6F4E37" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#4B2E2B")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#6F4E37")}
                >
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all bg-transparent"
                  style={{ borderColor: "#F5F5DC", color: "#4B2E2B", backgroundColor: "#FFF8F0" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFF8F0")}
                >
                  Call Now
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 shadow-xl" style={{ borderColor: "#F5F5DC", backgroundColor: "#FFF8F0" }}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="h-6 w-6" style={{ color: "#6F4E37" }} />
                    <h3 className="text-2xl font-bold" style={{ color: "#4B2E2B" }}>
                      Send us a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#4B2E2B" }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:border-transparent"
                          style={
                            {
                              borderColor: "#F5F5DC",
                              backgroundColor: "#FFF8F0",
                              "--tw-ring-color": "#6F4E37",
                            } as React.CSSProperties
                          }
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#4B2E2B" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:border-transparent"
                          style={
                            {
                              borderColor: "#F5F5DC",
                              backgroundColor: "#FFF8F0",
                              "--tw-ring-color": "#6F4E37",
                            } as React.CSSProperties
                          }
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: "#4B2E2B" }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:border-transparent"
                        style={
                          {
                            borderColor: "#F5F5DC",
                            backgroundColor: "#FFF8F0",
                            "--tw-ring-color": "#6F4E37",
                          } as React.CSSProperties
                        }
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#4B2E2B" }}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border rounded-xl transition-colors resize-none focus:outline-none focus:ring-2 focus:border-transparent"
                        style={
                          {
                            borderColor: "#F5F5DC",
                            backgroundColor: "#FFF8F0",
                            "--tw-ring-color": "#6F4E37",
                          } as React.CSSProperties
                        }
                        placeholder="Tell us what's on your mind..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all group border-0"
                      style={{ backgroundColor: "#6F4E37" }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#4B2E2B")}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = "#6F4E37")}
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" style={{ background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#4B2E2B" }}>
              Find <span style={{ color: "#6F4E37" }}>Us</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#4B2E2B" }}>
              Located in the heart of downtown, we're easy to find and even easier to love.
            </p>
          </div>

          <div
            className="rounded-3xl h-96 flex items-center justify-center relative overflow-hidden border-2 shadow-xl"
            style={{
              background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)",
              borderColor: "#F5F5DC",
            }}
          >
            <div className="text-center relative z-10" style={{ color: "#4B2E2B" }}>
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="h-10 w-10" style={{ color: "#6F4E37" }} />
              </div>
              <p className="font-semibold text-lg mb-2" style={{ color: "#4B2E2B" }}>
                Interactive Map
              </p>
              <p style={{ color: "#4B2E2B" }}>Google Maps integration would go here</p>
              <p className="text-sm mt-2" style={{ color: "#6F4E37" }}>
                123 Coffee Street, Downtown District
              </p>
            </div>
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
