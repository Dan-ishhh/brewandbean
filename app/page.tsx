"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CartSidebar } from "@/components/cart/cart-sidebar";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import Link from "next/link";
import { ArrowRight, Coffee, Heart, Star, Wifi } from "lucide-react";
import { MenuItemCard } from "@/components/menu/menu-item-card";
import { MenuItemSkeleton } from "@/components/menu/menu-item-skeleton";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  // Customize order
  // Pizzas
  // Desserts
  // Add favicon
  // Change Fonts

  const pizzaItems = [
    {
      id: 101,
      name: "Margherita Pizza",
      price: "$9.99",
      description: "Classic pizza with tomato sauce, mozzarella, and basil.",
      image: "/images/margherita-pizza.jpg",
      badge: "Vegetarian",
      badgeColor: "bg-green-100 text-green-700",
      category: "pizza",
      hot: true,
      iced: false,
    },
    {
      id: 102,
      name: "Pepperoni Pizza",
      price: "$11.99",
      description: "Loaded with pepperoni and mozzarella cheese.",
      image: "/images/pepperoni-pizza.jpg",
      badge: "Popular",
      badgeColor: "bg-red-100 text-red-700",
      category: "pizza",
      hot: true,
      iced: false,
    },
    {
      id: 103,
      name: "Veggie Supreme",
      price: "$10.99",
      description: "Topped with bell peppers, onions, olives, and mushrooms.",
      image: "/images/veggie-supreme-pizza.jpg",
      badge: "Healthy",
      badgeColor: "bg-green-100 text-green-700",
      category: "pizza",
      hot: true,
      iced: false,
    },
    {
      id: 104,
      name: "BBQ Chicken Pizza",
      price: "$12.99",
      description: "Grilled chicken, BBQ sauce, onions, and cheese.",
      image: "/images/bbq-chicken-pizza.jpg",
      badge: "Chef's Special",
      badgeColor: "bg-yellow-100 text-yellow-700",
      category: "pizza",
      hot: true,
      iced: false,
    },
  ];
  const homeItems = [
    {
      id: 1,
      name: "Signature Latte",
      price: "$4.50",
      description: "Rich espresso with steamed milk and our house blend",
      image: "/images/signature-latte.jpg",
      badge: "Popular",
      badgeColor: "bg-red-100 text-red-700",
      category: "coffee",
      hot: true,
      iced: true,
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
      hot: false,
      iced: false,
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
      hot: false,
      iced: true,
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
      hot: false,
      iced: false,
    },
  ];
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Hero Section */}
      <section className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, #FFF8F0, #FAF3E0, #F5F5DC)",
          }}
        >
          <div className="absolute inset-0 opacity-30">
            {/* <div
              className="absolute top-10 left-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
              style={{ backgroundColor: "#6F4E37" }}
            ></div> */}
            <div
              className="absolute top-40 right-40 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"
              style={{ backgroundColor: "#6F4E37" }}
            ></div>
            <div
              className="absolute bottom-10 left-80 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"
              style={{ backgroundColor: "#6F4E37" }}
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
              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: "#4B2E2B" }}
              >
                Your Cozy Corner for a
                <span style={{ color: "#6F4E37" }}> Coffee</span>
              </h1>
              <p
                className="text-xl leading-relaxed max-w-lg"
                style={{ color: "#4B2E2B" }}
              >
                Step into warmth, savor exceptional coffee, and become part of
                our welcoming community where every visit feels like coming
                home.
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
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#4B2E2B")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#6F4E37")
                  }
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
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#F5F5DC")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      "rgba(255, 255, 255, 0.8)")
                  }
                >
                  Find Us
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
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
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#4B2E2B" }}
                  >
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
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#4B2E2B" }}
                  >
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
          <div className="text-center">
            <Badge
              className="px-4 py-2 rounded-full text-sm font-medium mb-6 border-0"
              style={{ backgroundColor: "#FAF3E0", color: "#4B2E2B" }}
            >
              Our Story
            </Badge>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#4B2E2B" }}
            >
              Crafted with <span style={{ color: "#6F4E37" }}>Passion</span>,
              <br className="hidden sm:block" />
              Served with <span style={{ color: "#6F4E37" }}>Love</span>
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed mb-8"
              style={{ color: "#4B2E2B" }}
            >
              Since 2018, Brew & Bean has been the heart of our community,
              creating a warm space where neighbors become friends and great
              ideas are born over exceptional coffee.
            </p>
            <Link href="/about">
              <Button
                className="text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border-0"
                style={{
                  backgroundColor: "#6F4E37",
                  ":hover": { backgroundColor: "#4B2E2B" },
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#4B2E2B")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#6F4E37")
                }
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              className="px-4 py-2 rounded-full text-sm font-medium mb-6 border-0"
              style={{ backgroundColor: "#F5F5DC", color: "#4B2E2B" }}
            >
              Our Menu
            </Badge>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#4B2E2B" }}
            >
              <span style={{ color: "#6F4E37" }}>Signature</span> Favorites
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#4B2E2B" }}
            >
              From classic espresso drinks to innovative seasonal creations,
              each item is crafted with care to bring you the perfect taste
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* {homeItems?.map((item, index) => (
              <Card
                key={item.id}
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
                      className={`absolute top-4 left-4 ${item.badgeColor} hover:${item.badgeColor} border-0 px-3 py-1 text-xs font-medium`}
                    >
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#FFF8F0" }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "#4B2E2B" }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="text-xl font-bold"
                        style={{ color: "#6F4E37" }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#4B2E2B" }}
                    >
                      {item.description}
                    </p>
                    <AddToCartButton item={item} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            ))} */}
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <MenuItemSkeleton key={index} />
                ))
              : homeItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
          </div>

          {/* Pizza Section */}
          <div className="text-center mb-12">
            <Badge
              className="px-4 py-2 rounded-full text-sm font-medium mb-6 border-0"
              style={{ backgroundColor: "#FAF3E0", color: "#4B2E2B" }}
            >
              Pizzas
            </Badge>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ color: "#4B2E2B" }}
            >
              <span style={{ color: "#6F4E37" }}>Delicious</span> Pizzas
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#4B2E2B" }}
            >
              Try our new range of pizzas, baked to perfection with fresh
              ingredients and love.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* {pizzaItems?.map((item) => (
              <Card
                key={item.id}
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
                      className={`absolute top-4 left-4 ${item.badgeColor} hover:${item.badgeColor} border-0 px-3 py-1 text-xs font-medium`}
                    >
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#FFF8F0" }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "#4B2E2B" }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="text-xl font-bold"
                        style={{ color: "#6F4E37" }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#4B2E2B" }}
                    >
                      {item.description}
                    </p>
                    <AddToCartButton item={item} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            ))} */}

            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <MenuItemSkeleton key={index} />
                ))
              : pizzaItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
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
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#4B2E2B")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#6F4E37")
                }
              >
                View Full Menu
              </Button>
            </Link>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visit us in-store or place your order online for pickup. We can't
            wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-0 bg-[#FFF8F0] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white"
              >
                Order Online
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-4 rounded-full bg-transparent"
              >
                Visit Our Store
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CartSidebar />
    </div>
  );
}
