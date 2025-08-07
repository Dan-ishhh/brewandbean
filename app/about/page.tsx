"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CartSidebar } from "@/components/cart/cart-sidebar";
import Link from "next/link";
import { Coffee, Users, Heart, Award, Leaf, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Our Story */}
      <section className="py-20" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "#4B2E2B" }}
              >
                Our <span style={{ color: "#6F4E37" }}>Journey</span>
              </h2>
              <div
                className="space-y-6 leading-relaxed"
                style={{ color: "#4B2E2B" }}
              >
                <p>
                  Founded in 2018 by coffee enthusiasts Maria and James, Brew &
                  Bean started as a dream to create a space where exceptional
                  coffee meets genuine community connection. What began as a
                  small neighborhood cafe has grown into the heart of our local
                  community.
                </p>
                <p>
                  We believe that great coffee is more than just a beverage—it's
                  a catalyst for conversation, creativity, and connection. Every
                  morning, we carefully roast our beans to perfection, ensuring
                  that each cup delivers not just exceptional flavor, but a
                  moment of joy in your day.
                </p>
                <p>
                  Our commitment extends beyond great coffee. We're dedicated to
                  sustainable practices, fair trade partnerships, and supporting
                  local artists and musicians who regularly showcase their
                  talents in our cozy space.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                // src="/placeholder.svg?height=500&width=600"
                src="/images/about.jpg"
                alt="Our founders roasting coffee"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#4B2E2B" }}
            >
              Our <span style={{ color: "#6F4E37" }}>Values</span>
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#4B2E2B" }}
            >
              Everything we do is guided by our core values that shape our
              approach to coffee, community, and sustainability.
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
                className="border-2 hover:shadow-xl transition-all duration-300 group rounded-2xl"
                style={{ borderColor: "#F5F5DC", backgroundColor: "#FFF8F0" }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    style={{
                      background:
                        "linear-gradient(to bottom right, #6F4E37, #4B2E2B)",
                    }}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "#4B2E2B" }}
                  >
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
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#4B2E2B" }}
            >
              Meet Our <span style={{ color: "#6F4E37" }}>Team</span>
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#4B2E2B" }}
            >
              The passionate people behind every perfect cup and warm smile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                img: "images/2.jpg",
                role: "Co-Founder & Head Roaster",
                image:
                  "professional woman with warm smile in coffee shop apron",
                description:
                  "Maria's passion for coffee started in Colombia and brought her expertise to our community.",
              },
              {
                name: "James Chen",
                img: "images/1.jpg",
                role: "Co-Founder & Operations",
                image: "friendly man with beard in coffee shop setting",
                description:
                  "James ensures every detail of your experience exceeds expectations, from service to ambiance.",
              },
              {
                name: "Sarah Johnson",
                img: "images/3.jpg",
                role: "Head Barista",
                image: "skilled barista creating latte art",
                description:
                  "Sarah's artistic flair and technical skill create the beautiful drinks you love.",
              },
              {
                name: "Alex Thompson",
                img: "images/4.jpg",
                role: "Community Manager",
                image: "enthusiastic person organizing community event",
                description:
                  "Alex coordinates our events and ensures our cafe remains the heart of the community.",
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
                      src={member.img}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: "#4B2E2B" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="font-medium mb-3"
                      style={{ color: "#6F4E37" }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#4B2E2B" }}
                    >
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
        style={{
          background: "linear-gradient(to bottom right, #6F4E37, #4B2E2B)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Come experience the warmth, quality, and community spirit that makes
            Brew & Bean special.
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

      <CartSidebar />
    </div>
  );
}
