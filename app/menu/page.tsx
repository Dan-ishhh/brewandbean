"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { MenuItemCard } from "@/components/menu/menu-item-card";
import { MenuItemSkeleton } from "@/components/menu/menu-item-skeleton";
import { CartSidebar } from "@/components/cart/cart-sidebar";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    // Coffee
    {
      id: 1,
      category: "coffee",
      name: "Signature Latte",
      price: "$4.50",
      description: "Rich espresso with steamed milk and our house blend",
      image: "/images/signature-latte.jpg",
      badge: "Popular",
      badgeColor: "bg-red-100 text-red-700",
      hot: true,
      iced: true,
      customizable: true,
      milkOptions: ["Whole", "Skim", "Soy", "Oat"],
      coffeeTypeOptions: ["Espresso", "Latte", "Cappuccino"],
      sugarLevelOptions: ["No Sugar", "Less Sugar", "Regular", "Extra"],
    },
    {
      id: 2,
      category: "coffee",
      name: "Cappuccino",
      price: "$4.25",
      description:
        "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
      image: "/images/cappuccino.jpg",
      badge: "Classic",
      badgeColor: "bg-blue-100 text-blue-700",
      hot: true,
      iced: false,
      customizable: true,
      milkOptions: ["Whole", "Skim", "Soy", "Oat"],
      coffeeTypeOptions: ["Espresso", "Latte", "Cappuccino"],
      sugarLevelOptions: ["No Sugar", "Less Sugar", "Regular", "Extra"],
    },
    {
      id: 3,
      category: "coffee",
      name: "Cold Brew",
      price: "$3.75",
      description: "Smooth, refreshing coffee steeped for 12 hours",
      image: "/images/cold-brew.jpg",
      badge: "Refreshing",
      badgeColor: "bg-blue-100 text-blue-700",
      hot: false,
      iced: true,
      customizable: true,
      milkOptions: ["Whole", "Skim", "Soy", "Oat"],
      coffeeTypeOptions: ["Cold Brew", "Latte", "Cappuccino"],
      sugarLevelOptions: ["No Sugar", "Less Sugar", "Regular", "Extra"],
    },
    {
      id: 4,
      category: "coffee",
      name: "Espresso",
      price: "$2.50",
      description: "Pure, intense shot of our premium coffee blend",
      image: "/images/espresso.jpg",
      badge: "Strong",
      badgeColor: "bg-gray-100 text-gray-700",
      hot: true,
      iced: false,
      customizable: true,
    },
    {
      id: 5,
      category: "coffee",
      name: "Americano",
      price: "$3.25",
      description: "Espresso shots with hot water for a clean, bold flavor",
      image: "/images/americano.jpg",
      badge: "Bold",
      badgeColor: "bg-orange-100 text-orange-700",
      hot: true,
      iced: true,
      customizable: true,
    },
    {
      id: 6,
      category: "coffee",
      name: "Mocha",
      price: "$5.25",
      description:
        "Espresso with chocolate syrup, steamed milk, and whipped cream",
      image: "/images/mocha.jpg",
      badge: "Sweet",
      badgeColor: "bg-pink-100 text-pink-700",
      hot: true,
      iced: true,
      customizable: true,
    },
    {
      id: 7,
      category: "coffee",
      name: "Macchiato",
      price: "$4.75",
      description: "Espresso 'marked' with a dollop of foamed milk",
      image: "/images/macchiato.jpg",
      badge: "Traditional",
      badgeColor: "bg-amber-100 text-amber-700",
      hot: true,
      iced: true,
      customizable: true,
    },
    {
      id: 8,
      category: "coffee",
      name: "Flat White",
      price: "$4.50",
      description: "Double shot espresso with microfoam steamed milk",
      image: "/images/flat-white.jpg",
      badge: "Smooth",
      badgeColor: "bg-green-100 text-green-700",
      hot: true,
      iced: false,
      customizable: true,
    },

    // Tea & Others
    {
      id: 9,
      category: "tea",
      name: "Earl Grey Tea",
      price: "$3.25",
      description: "Classic black tea with bergamot oil and cornflower petals",
      image: "/images/earl-grey.jpg",
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
      image: "/images/matcha-latte.jpg",
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
      image: "/images/chai-latte.jpg",
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
      image: "/images/hot-chocolate.jpg",
      badge: "Cozy",
      badgeColor: "bg-amber-100 text-amber-700",
      hot: true,
      iced: false,
    },
    {
      id: 13,
      category: "tea",
      name: "Herbal Tea Selection",
      price: "$3.50",
      description: "Choose from chamomile, peppermint, or lemon ginger",
      image: "/images/herbal-tea.jpg",
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
      image: "/images/fresh-juice.jpg",
      badge: "Fresh",
      badgeColor: "bg-yellow-100 text-yellow-700",
      hot: false,
      iced: true,
    },

    // Pastries
    {
      id: 15,
      category: "pastries",
      name: "Artisan Croissant",
      price: "$3.25",
      description: "Buttery, flaky pastry baked fresh every morning",
      image: "/images/croissant.jpg",
      badge: "Fresh Daily",
      badgeColor: "bg-yellow-100 text-yellow-700",
      hot: true,
      iced: false,
    },
    {
      id: 16,
      category: "pastries",
      name: "Blueberry Muffin",
      price: "$3.75",
      description: "Moist muffin packed with fresh blueberries",
      image: "/images/blueberry-muffin.jpg",
      badge: "Homemade",
      badgeColor: "bg-blue-100 text-blue-700",
      hot: true,
      iced: false,
    },
    {
      id: 17,
      category: "pastries",
      name: "Chocolate Chip Cookie",
      price: "$2.50",
      description: "Warm, chewy cookie with premium chocolate chips",
      image: "/images/chocolate-chip-cookie.jpg",
      badge: "Warm",
      badgeColor: "bg-amber-100 text-amber-700",
      hot: true,
      iced: false,
    },
    {
      id: 18,
      category: "pastries",
      name: "Danish Pastry",
      price: "$4.25",
      description: "Flaky pastry with seasonal fruit or cream cheese filling",
      image: "/images/danish-pastry.jpg",
      badge: "Seasonal",
      badgeColor: "bg-pink-100 text-pink-700",
      hot: false,
      iced: true,
    },
    {
      id: 19,
      category: "pastries",
      name: "Cinnamon Roll",
      price: "$4.50",
      description: "Spiral pastry with cinnamon sugar and cream cheese icing",
      image: "/images/cinnamon-roll.jpg",
      badge: "Indulgent",
      badgeColor: "bg-orange-100 text-orange-700",
      hot: true,
      iced: false,
    },

    // Food
    {
      id: 20,
      category: "food",
      name: "Avocado Toast",
      price: "$8.50",
      description: "Smashed avocado on sourdough with everything seasoning",
      image: "/images/avocado-toast.jpg",
      badge: "Healthy",
      badgeColor: "bg-green-100 text-green-700",
      hot: true,
      iced: false,
    },
    {
      id: 21,
      category: "food",
      name: "Breakfast Sandwich",
      price: "$7.75",
      description:
        "Egg, cheese, and choice of bacon or sausage on English muffin",
      image: "/images/breakfast-sandwich.jpg",
      badge: "Hearty",
      badgeColor: "bg-yellow-100 text-yellow-700",
      hot: true,
      iced: false,
    },
    {
      id: 22,
      category: "food",
      name: "Grilled Panini",
      price: "$9.25",
      description:
        "Choice of turkey, ham, or veggie with cheese on artisan bread",
      image: "/images/grilled-panini.jpg",
      badge: "Grilled",
      badgeColor: "bg-orange-100 text-orange-700",
      hot: true,
      iced: false,
    },
    {
      id: 23,
      category: "food",
      name: "Soup of the Day",
      price: "$6.50",
      description: "Fresh homemade soup served with artisan bread",
      image: "/images/soup.jpg",
      badge: "Homemade",
      badgeColor: "bg-red-100 text-red-700",
      hot: true,
      iced: false,
    },
    {
      id: 24,
      category: "food",
      name: "Greek Yogurt Bowl",
      price: "$7.25",
      description: "Greek yogurt with granola, fresh berries, and honey",
      image: "/images/yogurt-bowl.jpg",
      badge: "Protein Rich",
      badgeColor: "bg-purple-100 text-purple-700",
      hot: false,
      iced: true,
    },
    // Pizzas
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
      customizable: true,
      cheeseOptions: ["Mozzarella", "Cheddar", "Parmesan"],
      crustOptions: ["Thin", "Thick", "Stuffed"],
      toppingsOptions: ["Basil", "Olives", "Mushrooms", "Onions"],
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
      customizable: true,
      cheeseOptions: ["Mozzarella", "Cheddar", "Parmesan"],
      crustOptions: ["Thin", "Thick", "Stuffed"],
      toppingsOptions: ["Pepperoni", "Olives", "Mushrooms", "Onions"],
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
      customizable: true,
      cheeseOptions: ["Mozzarella", "Cheddar", "Parmesan"],
      crustOptions: ["Thin", "Thick", "Stuffed"],
      toppingsOptions: ["Bell Peppers", "Olives", "Mushrooms", "Onions"],
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
      customizable: true,
      cheeseOptions: ["Mozzarella", "Cheddar", "Parmesan"],
      crustOptions: ["Thin", "Thick", "Stuffed"],
      toppingsOptions: ["Olives", "Onions", "Mushrooms", "Peppers"],
    },
  ];

  const categories = [
    { id: "all", name: "All Items", count: menuItems.length },
    {
      id: "coffee",
      name: "Coffee",
      count: menuItems.filter((item) => item.category === "coffee").length,
    },
    {
      id: "tea",
      name: "Tea & Others",
      count: menuItems.filter((item) => item.category === "tea").length,
    },
    {
      id: "pastries",
      name: "Pastries",
      count: menuItems.filter((item) => item.category === "pastries").length,
    },
    {
      id: "food",
      name: "Food",
      count: menuItems.filter((item) => item.category === "food").length,
    },
    {
      id: "pizza",
      name: "Pizza",
      count: menuItems.filter((item) => item.category === "pizza").length,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Hero Section */}
      <section
        className="pt-32 pb-12"
        style={{
          background:
            "linear-gradient(to bottom right, #FFF8F0, #FAF3E0, #F5F5DC)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              className="px-4 py-2 rounded-full text-sm font-medium mb-6 border-#E6B800"
              style={{ backgroundColor: "#F5F5DC", color: "#4B2E2B" }}
            >
              Our Menu
            </Badge>
            <h1
              className="text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "#4B2E2B" }}
            >
              Delicious <span style={{ color: "#6F4E37" }}>Choices</span>
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#4B2E2B" }}
            >
              From expertly crafted coffee to fresh pastries and hearty meals,
              discover your new favorites from our carefully curated menu.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        className="py-8 border-b"
        style={{ backgroundColor: "#FFF8F0", borderColor: "#F5F5DC" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all text-sm sm:text-md md:text-lg ${
                  selectedCategory === category.id
                    ? "text-white shadow-lg"
                    : "hover:bg-opacity-80"
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === category.id ? "#6F4E37" : "#F5F5DC",
                  color: selectedCategory === category.id ? "white" : "#4B2E2B",
                }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section
        className="py-8"
        style={{
          background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex justify-center items-center gap-8 text-sm"
            style={{ color: "#4B2E2B" }}
          >
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

      {/* Menu Items */}
      <section className="py-16" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <MenuItemSkeleton key={index} />
                ))
              : filteredItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
          </div>
        </div>
      </section>

      <CartSidebar />
    </div>
  );
}
