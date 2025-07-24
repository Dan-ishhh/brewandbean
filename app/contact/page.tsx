"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Coffee, Clock, Menu, X, Send, MessageCircle } from "lucide-react"
import Link from "next/link"

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
              <Link href="/contact" className="text-orange-600 font-semibold">
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
                  className="block text-orange-600 font-semibold py-3"
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
      <section className="pt-24 pb-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Contact <span className="text-orange-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, we're here to
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Visit Our Cafe</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600">123 Coffee Street</p>
                      <p className="text-gray-600">Downtown District, City 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">(555) 123-BREW</p>
                      <p className="text-sm text-gray-500">Call us for reservations or questions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">hello@brewandbean.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Opening Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <span className="text-gray-700 font-medium">Monday - Friday</span>
                    </div>
                    <span className="text-gray-800 font-semibold">6:30 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Saturday</span>
                    </div>
                    <span className="text-gray-800 font-semibold">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">Sunday</span>
                    </div>
                    <span className="text-gray-800 font-semibold">8:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-green-300 text-green-700 hover:bg-green-50 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  Call Now
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-orange-100 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="h-6 w-6 text-orange-600" />
                    <h3 className="text-2xl font-bold text-gray-800">Send us a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                        placeholder="Tell us what's on your mind..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all group"
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
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Find <span className="text-orange-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of downtown, we're easy to find and even easier to love.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden border-2 border-orange-200 shadow-xl">
            <div className="text-center text-gray-600 relative z-10">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="h-10 w-10 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg mb-2">Interactive Map</p>
              <p className="text-gray-600">Google Maps integration would go here</p>
              <p className="text-sm text-gray-500 mt-2">123 Coffee Street, Downtown District</p>
            </div>
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
    </div>
  )
}
