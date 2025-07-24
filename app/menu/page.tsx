"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Menu, X } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/components/cart/cart-button"
import { CartSidebar } from "@/components/cart/cart-sidebar"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"

export default function MenuPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Items", count: 24 },
    { id: "coffee", name: "Coffee", count: 8 },
    { id: "tea", name: "Tea & Others", count: 6 },
    { id: "pastries", name: "Pastries", count: 5 },
    { id: "food", name: "Food", count: 5 },
  ]

  const menuItems = [
    // Coffee
    {
      id: 1,
      category: "coffee",
      name: "Signature Latte",
      price: "$4.50",
      description: "Rich espresso with steamed milk and our house blend",
      image: "beautiful latte art heart design in white ceramic cup",
      badge: "Popular",
      badgeColor: "bg-red-100 text-red-700",
      hot: true,
      iced: true,
    },
    {
      id: 2,
      category: "coffee",
      name: "Cappuccino",
      price: "$4.25",
      description: "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
      image: "cappuccino with foam art in ceramic cup",
      badge: "Classic",
      badgeColor: "bg-blue-100 text-blue-700",
      hot: true,
      iced: false,
    },
    {
      id: 3,
      category: "coffee",
      name: "Cold Brew",
      price: "$3.75",
      description: "Smooth, refreshing coffee steeped for 12 hours",
      image: "iced cold brew coffee in tall glass with ice cubes",
      badge: "Refreshing",
      badgeColor: "bg-blue-100 text-blue-700",
      hot: false,
      iced: true,
    },
    {
      id: 4,
      category: "coffee",
      name: "Espresso",
      price: "$2.50",
      description: "Pure, intense shot of our premium coffee blend",
      image: "espresso shot in small white cup with crema",
      badge: "Strong",
      badgeColor: "bg-gray-100 text-gray-700",
      hot: true,
      iced: false, // Espresso is typically only served hot
    },
    {
      id: 5,
      category: "coffee",
      name: "Americano",
      price: "$3.25",
      description: "Espresso shots with hot water for a clean, bold flavor",
      image: "americano coffee in large white mug",
      badge: "Bold",
      badgeColor: "bg-orange-100 text-orange-700",
      hot: true,
      iced: true,
    },
    {
      id: 6,
      category: "coffee",
      name: "Mocha",
      price: "$5.25",
      description: "Espresso with chocolate syrup, steamed milk, and whipped cream",
      image: "mocha coffee with whipped cream and chocolate drizzle",
      badge: "Sweet",
      badgeColor: "bg-pink-100 text-pink-700",
      hot: true,
      iced: true,
    },
    {
      id: 7,
      category: "coffee",
      name: "Macchiato",
      price: "$4.75",
      description: "Espresso 'marked' with a dollop of foamed milk",
      image: "macchiato with foam dot on top in glass cup",
      badge: "Traditional",
      badgeColor: "bg-amber-100 text-amber-700",
      hot: true,
      iced: true,
    },
    {
      id: 8,
      category: "coffee",
      name: "Flat White",
      price: "$4.50",
      description: "Double shot espresso with microfoam steamed milk",
      image: "flat white coffee with smooth microfoam",
      badge: "Smooth",
      badgeColor: "bg-green-100 text-green-700",
      hot: true,
      iced: false, // Flat White is traditionally only served hot
    },

    // Tea & Others
    {
      id: 9,
      category: "tea",
      name: "Earl Grey Tea",
      price: "$3.25",
      description: "Classic black tea with bergamot oil and cornflower petals",
      image: "earl grey tea in elegant teacup with saucer",
      badge: "Classic",
      badgeColor: "bg-purple-100 text-purple-700",
      hot: true,
      iced: true,
    },
    {
      id: 10,
      category: "tea",
      name: "Green Tea Latte",
      price: "$4.75",
      description: "Matcha powder with steamed milk and a touch of sweetness",
      image: "green matcha latte with foam art",
      badge: "Healthy",
      badgeColor: "bg-green-100 text-green-700",
      hot: true,
      iced: true,
    },
    {
      id: 11,
      category: "tea",
      name: "Chai Latte",
      price: "$4.50",
      description: "Spiced tea blend with steamed milk and warming spices",
      image: "chai latte with cinnamon sprinkle",
      badge: "Spiced",
      badgeColor: "bg-orange-100 text-orange-700",
      hot: true,
      iced: true,
    },
    {
      id: 12,
      category: "tea",
      name: "Hot Chocolate",
      price: "$4.25",
      description: "Rich chocolate with steamed milk and whipped cream",
      image: "hot chocolate with marshmallows and whipped cream",
      badge: "Cozy",
      badgeColor: "bg-brown-100 text-brown-700",
      hot: true,
      iced: false, // Hot chocolate is only served hot
    },
    {
      id: 13,
      category: "tea",
      name: "Herbal Tea Selection",
      price: "$3.50",
      description: "Choose from chamomile, peppermint, or lemon ginger",
      image: "herbal tea selection with fresh herbs",
      badge: "Caffeine Free",
      badgeColor: "bg-green-100 text-green-700",
      hot: true,
      iced: true,
    },
    {
      id: 14,
      category: "tea",
      name: "Fresh Juice",
      price: "$4.75",
      description: "Orange, apple, or seasonal fruit juice pressed fresh daily",
      image: "fresh orange juice in glass with orange slice",
      badge: "Fresh",
      badgeColor: "bg-yellow-100 text-yellow-700",
      hot: false,
      iced: true, // Fresh juice is only served cold
    },

    // Pastries
    {
      id: 15,
      category: "pastries",
      name: "Artisan Croissant",
      price: "$3.25",
      description: "Buttery, flaky pastry baked fresh every morning",
      image: "golden flaky croissant on rustic wooden board",
      badge: "Fresh Daily",
      badgeColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 16,
      category: "pastries",
      name: "Blueberry Muffin",
      price: "$3.75",
      description: "Moist muffin packed with fresh blueberries",
      image: "blueberry muffin with visible berries on top",
      badge: "Homemade",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 17,
      category: "pastries",
      name: "Chocolate Chip Cookie",
      price: "$2.50",
      description: "Warm, chewy cookie with premium chocolate chips",
      image: "chocolate chip cookie with melted chocolate",
      badge: "Warm",
      badgeColor: "bg-brown-100 text-brown-700",
    },
    {
      id: 18,
      category: "pastries",
      name: "Danish Pastry",
      price: "$4.25",
      description: "Flaky pastry with seasonal fruit or cream cheese filling",
      image: "danish pastry with fruit filling and glaze",
      badge: "Seasonal",
      badgeColor: "bg-pink-100 text-pink-700",
    },
    {
      id: 19,
      category: "pastries",
      name: "Cinnamon Roll",
      price: "$4.50",
      description: "Spiral pastry with cinnamon sugar and cream cheese icing",
      image: "cinnamon roll with white icing drizzle",
      badge: "Indulgent",
      badgeColor: "bg-orange-100 text-orange-700",
    },

    // Food
    {
      id: 20,
      category: "food",
      name: "Avocado Toast",
      price: "$8.50",
      description: "Smashed avocado on sourdough with everything seasoning",
      image: "avocado toast with seeds herbs on artisan bread",
      badge: "Healthy",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      id: 21,
      category: "food",
      name: "Breakfast Sandwich",
      price: "$7.75",
      description: "Egg, cheese, and choice of bacon or sausage on English muffin",
      image: "breakfast sandwich with egg and cheese",
      badge: "Hearty",
      badgeColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 22,
      category: "food",
      name: "Grilled Panini",
      price: "$9.25",
      description: "Choice of turkey, ham, or veggie with cheese on artisan bread",
      image: "grilled panini sandwich cut in half",
      badge: "Grilled",
      badgeColor: "bg-orange-100 text-orange-700",
    },
    {
      id: 23,
      category: "food",
      name: "Soup of the Day",
      price: "$6.50",
      description: "Fresh homemade soup served with artisan bread",
      image: "bowl of soup with bread on side",
      badge: "Homemade",
      badgeColor: "bg-red-100 text-red-700",
    },
    {
      id: 24,
      category: "food",
      name: "Greek Yogurt Bowl",
      price: "$7.25",
      description: "Greek yogurt with granola, fresh berries, and honey",
      image: "yogurt bowl with berries granola and honey",
      badge: "Protein Rich",
      badgeColor: "bg-purple-100 text-purple-700",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

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
              <Link href="/menu" className="text-orange-600 font-semibold">
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
                  className="block text-gray-700 hover:text-orange-600 transition-colors py-3 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/menu"
                  className="block text-orange-600 font-semibold py-3"
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
      <section className="pt-24 pb-12 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Menu
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Delicious <span className="text-orange-600">Choices</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From expertly crafted coffee to fresh pastries and hearty meals, discover your new favorites from our
              carefully curated menu.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
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
                    {(item.hot || item.iced) && (
                      <div className="absolute top-4 right-4 flex gap-2">
                        {item.hot && (
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                        )}
                        {item.iced && (
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                      <span className="text-xl font-bold text-orange-600">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                    <AddToCartButton item={item} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <span>Available Hot</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span>Available Iced</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visit us in-store or place your order online for pickup. We can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Order Online
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full bg-transparent"
              >
                Visit Our Store
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
