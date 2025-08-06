"use client";
import { useState } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CartSidebar } from "@/components/cart/cart-sidebar";
import {
  Clock,
  Coffee,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { GoogleMapLocations } from "@/components/ui/google-map";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20"
        style={{
          background:
            "linear-gradient(to bottom right, #FFF8F0, #FAF3E0, #F5F5DC)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              className="px-4 py-2 rounded-full text-sm font-medium mb-6 border-#E6B800"
              style={{ backgroundColor: "#F5F5DC", color: "#4B2E2B" }}
            >
              Get In Touch
            </Badge>
            <h1
              className="text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "#4B2E2B" }}
            >
              Contact <span style={{ color: "#6F4E37" }}>Us</span>
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#4B2E2B" }}
            >
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, we're here to help.
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
                <h2
                  className="text-3xl font-bold mb-8"
                  style={{ color: "#4B2E2B" }}
                >
                  Visit Our Cafe
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                      style={{ backgroundColor: "#FAF3E0" }}
                    >
                      <MapPin
                        className="h-6 w-6"
                        style={{ color: "#6F4E37" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-semibold mb-1"
                        style={{ color: "#4B2E2B" }}
                      >
                        Address
                      </h3>
                      <p style={{ color: "#4B2E2B" }}>123 Coffee Street</p>
                      <p style={{ color: "#4B2E2B" }}>
                        Downtown District, City 12345
                      </p>
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
                      <h3
                        className="font-semibold mb-1"
                        style={{ color: "#4B2E2B" }}
                      >
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
                      <h3
                        className="font-semibold mb-1"
                        style={{ color: "#4B2E2B" }}
                      >
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
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#4B2E2B" }}
                >
                  Opening Hours
                </h3>
                <div className="space-y-4">
                  <div
                    className="flex justify-between items-center p-4 rounded-xl border"
                    style={{
                      background: "linear-gradient(to right, #FAF3E0, #F5F5DC)",
                      borderColor: "#F5F5DC",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" style={{ color: "#6F4E37" }} />
                      <span
                        className="font-medium"
                        style={{ color: "#4B2E2B" }}
                      >
                        Monday - Friday
                      </span>
                    </div>
                    <span
                      className="font-semibold"
                      style={{ color: "#4B2E2B" }}
                    >
                      6:30 AM - 8:00 PM
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center p-4 rounded-xl border"
                    style={{
                      background: "linear-gradient(to right, #FAF3E0, #F5F5DC)",
                      borderColor: "#F5F5DC",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" style={{ color: "#6F4E37" }} />
                      <span
                        className="font-medium"
                        style={{ color: "#4B2E2B" }}
                      >
                        Saturday
                      </span>
                    </div>
                    <span
                      className="font-semibold"
                      style={{ color: "#4B2E2B" }}
                    >
                      7:00 AM - 9:00 PM
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center p-4 rounded-xl border"
                    style={{
                      background: "linear-gradient(to right, #FAF3E0, #F5F5DC)",
                      borderColor: "#F5F5DC",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" style={{ color: "#6F4E37" }} />
                      <span
                        className="font-medium"
                        style={{ color: "#4B2E2B" }}
                      >
                        Sunday
                      </span>
                    </div>
                    <span
                      className="font-semibold"
                      style={{ color: "#4B2E2B" }}
                    >
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
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#4B2E2B")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#6F4E37")
                  }
                >
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all bg-transparent"
                  style={{
                    borderColor: "#F5F5DC",
                    color: "#4B2E2B",
                    backgroundColor: "#FFF8F0",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#F5F5DC")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#FFF8F0")
                  }
                >
                  Call Now
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card
                className="border-2 shadow-xl"
                style={{ borderColor: "#F5F5DC", backgroundColor: "#FFF8F0" }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle
                      className="h-6 w-6"
                      style={{ color: "#6F4E37" }}
                    />
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#4B2E2B" }}
                    >
                      Send us a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#4B2E2B" }}
                        >
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
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#4B2E2B" }}
                        >
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
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#4B2E2B" }}
                      >
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
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#4B2E2B" }}
                      >
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
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#4B2E2B")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#6F4E37")
                      }
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
      <section
        className="py-20"
        style={{
          background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#4B2E2B" }}
            >
              Find <span style={{ color: "#6F4E37" }}>Us</span>
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "#4B2E2B" }}
            >
              Located in the heart of downtown, we're easy to find and even
              easier to love.
            </p>
          </div>

          <div
            className="rounded-3xl h-96 overflow-hidden border-2 shadow-xl"
            style={{
              background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)",
              borderColor: "#F5F5DC",
            }}
          >
            <GoogleMapLocations />
          </div>
        </div>
      </section>

      <CartSidebar />
    </div>
  );
}
