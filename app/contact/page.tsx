"use client";
import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
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
  // Locomotive Scroll integration
  useEffect(() => {
    let scrollInstance: LocomotiveScroll | undefined;
    if (typeof window !== "undefined") {
      scrollInstance = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
        lerp: 0.08,
        multiplier: 1,
        class: "is-reveal",
      });
    }
    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);
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
    <div
      data-scroll-container
      className="min-h-screen bg-[#FFF8F0] text-[#4B2E2B] dark:bg-[#18181b] dark:text-[#e6e6e6]"
    >
      {/* Banner Section - Home Style */}
      <section className="pt-24 min-h-[40vh] flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] to-[#FAF3E0] dark:from-[#18181c] dark:to-[#232326]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16">
          <div className="text-center mb-10">
            <Badge className="px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[#FFF8F0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6] border-none">
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Contact{" "}
              <span className="text-[#6F4E37] dark:text-[#e6b800]">Us</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#4B2E2B] dark:text-[#e6e6e6]">
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-[#FFF8F0] dark:bg-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Visit Our Cafe
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 bg-[#FAF3E0] dark:bg-[#18181c]">
                      <MapPin className="h-6 w-6 text-[#6F4E37] dark:text-[#e6b800]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Address
                      </h3>
                      <p className="text-[#4B2E2B] dark:text-[#e6e6e6]">
                        123 Coffee Street
                      </p>
                      <p className="text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Downtown District, City 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 bg-[#F5F5DC] dark:bg-[#18181c]">
                      <Phone className="h-6 w-6 text-[#6F4E37] dark:text-[#e6b800]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Phone
                      </h3>
                      <p className="text-[#4B2E2B] dark:text-[#e6e6e6]">
                        (555) 123-BREW
                      </p>
                      <p className="text-sm text-[#6F4E37] dark:text-[#e6b800]">
                        Call us for reservations or questions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 bg-[#FAF3E0] dark:bg-[#18181c]">
                      <Mail className="h-6 w-6 text-[#6F4E37] dark:text-[#e6b800]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Email
                      </h3>
                      <p className="text-[#4B2E2B] dark:text-[#e6e6e6]">
                        hello@brewandbean.com
                      </p>
                      <p className="text-sm text-[#6F4E37] dark:text-[#e6b800]">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Opening Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl border bg-gradient-to-r from-[#FAF3E0] to-[#F5F5DC] dark:from-[#18181c] dark:to-[#232326] border-[#F5F5DC] dark:border-[#333]">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#6F4E37] dark:text-[#e6b800]" />
                      <span className="font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Monday - Friday
                      </span>
                    </div>
                    <span className="font-semibold text-[#4B2E2B] dark:text-[#e6e6e6]">
                      6:30 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl border bg-gradient-to-r from-[#FAF3E0] to-[#F5F5DC] dark:from-[#18181c] dark:to-[#232326] border-[#F5F5DC] dark:border-[#333]">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#6F4E37] dark:text-[#e6b800]" />
                      <span className="font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Saturday
                      </span>
                    </div>
                    <span className="font-semibold text-[#4B2E2B] dark:text-[#e6e6e6]">
                      7:00 AM - 9:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl border bg-gradient-to-r from-[#FAF3E0] to-[#F5F5DC] dark:from-[#18181c] dark:to-[#232326] border-[#F5F5DC] dark:border-[#333]">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#6F4E37] dark:text-[#e6b800]" />
                      <span className="font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Sunday
                      </span>
                    </div>
                    <span className="font-semibold text-[#4B2E2B] dark:text-[#e6e6e6]">
                      8:00 AM - 7:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#6F4E37] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-200 hover:bg-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333] border-0">
                  Get Directions
                </Button>
                <Button className="bg-[#FFF8F0] text-[#4B2E2B] px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-200 hover:bg-[#F5F5DC] dark:bg-[#222] dark:text-[#e6e6e6] dark:hover:bg-[#333] border-0">
                  Call Now
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 shadow-xl rounded-2xl border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#222]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="h-6 w-6 text-[#6F4E37] dark:text-[#e6b800]" />
                    <h3 className="text-2xl font-bold text-[#4B2E2B] dark:text-[#e6e6e6]">
                      Send us a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:border-transparent border-[#F5F5DC] bg-[#FFF8F0] dark:border-[#333] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:ring-[#6F4E37] dark:focus:ring-[#e6b800]"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:border-transparent border-[#F5F5DC] bg-[#FFF8F0] dark:border-[#333] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:ring-[#6F4E37] dark:focus:ring-[#e6b800]"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:border-transparent border-[#F5F5DC] bg-[#FFF8F0] dark:border-[#333] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:ring-[#6F4E37] dark:focus:ring-[#e6b800]"
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border rounded-xl transition-colors resize-none focus:outline-none focus:ring-2 focus:border-transparent border-[#F5F5DC] bg-[#FFF8F0] dark:border-[#333] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:ring-[#6F4E37] dark:focus:ring-[#e6b800]"
                        placeholder="Tell us what's on your mind..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-[#6F4E37] text-white w-full py-4 rounded-xl shadow-lg hover:shadow-xl transition-all group border-0 font-semibold transition-colors duration-200 hover:bg-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]"
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
      <section className="py-20 bg-gradient-to-br from-[#FAF3E0] to-[#F5F5DC] dark:from-[#18181c] dark:to-[#232326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Find Us On The Map
            </h2>
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
