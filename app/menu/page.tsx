"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { MenuItemCard } from "@/components/menu/menu-item-card";
import { MenuItemSkeleton } from "@/components/menu/menu-item-skeleton";
import { CartSidebar } from "@/components/cart/cart-sidebar";
import LocomotiveScroll from "locomotive-scroll";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  // Switch to All Items tab when searching
  useEffect(() => {
    if (searchTerm && selectedCategory !== "all") {
      setSelectedCategory("all");
    }
  }, [searchTerm]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // ...existing code...

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
      nutrition: { calories: 180, protein: 8, fat: 6, carbs: 22 },
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
      nutrition: { calories: 120, protein: 6, fat: 4, carbs: 12 },
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
      nutrition: { calories: 15, protein: 1, fat: 0, carbs: 3 },
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
      nutrition: { calories: 5, protein: 0, fat: 0, carbs: 1 },
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
      nutrition: { calories: 10, protein: 0, fat: 0, carbs: 2 },
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
      nutrition: { calories: 220, protein: 7, fat: 8, carbs: 32 },
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
      nutrition: { calories: 30, protein: 1, fat: 1, carbs: 4 },
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
      nutrition: { calories: 140, protein: 6, fat: 5, carbs: 16 },
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
      nutrition: { calories: 0, protein: 0, fat: 0, carbs: 0 },
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
      nutrition: { calories: 90, protein: 4, fat: 2, carbs: 14 },
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
      nutrition: { calories: 110, protein: 3, fat: 2, carbs: 18 },
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
      nutrition: { calories: 200, protein: 5, fat: 7, carbs: 28 },
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
      nutrition: { calories: 0, protein: 0, fat: 0, carbs: 0 },
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
      nutrition: { calories: 120, protein: 2, fat: 0, carbs: 28 },
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
      nutrition: { calories: 230, protein: 5, fat: 12, carbs: 26 },
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
      nutrition: { calories: 210, protein: 4, fat: 7, carbs: 32 },
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
      nutrition: { calories: 160, protein: 2, fat: 8, carbs: 22 },
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
      nutrition: { calories: 250, protein: 5, fat: 13, carbs: 29 },
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
      nutrition: { calories: 320, protein: 6, fat: 14, carbs: 42 },
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
      nutrition: { calories: 280, protein: 7, fat: 14, carbs: 32 },
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
      nutrition: { calories: 350, protein: 15, fat: 18, carbs: 32 },
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
      nutrition: { calories: 400, protein: 20, fat: 16, carbs: 38 },
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
      nutrition: { calories: 180, protein: 6, fat: 4, carbs: 28 },
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
      nutrition: { calories: 220, protein: 12, fat: 4, carbs: 28 },
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
      nutrition: { calories: 320, protein: 14, fat: 10, carbs: 38 },
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
      nutrition: { calories: 380, protein: 16, fat: 16, carbs: 40 },
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
      nutrition: { calories: 300, protein: 12, fat: 8, carbs: 36 },
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
      nutrition: { calories: 420, protein: 18, fat: 18, carbs: 44 },
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

  const filteredItems = (
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)
  ).filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      data-scroll-container
      className="min-h-screen bg-[#FFF8F0] text-[#4B2E2B] dark:bg-[#18181b] dark:text-[#e6e6e6]"
    >
      {/* Banner Section - Home Style */}
      <section className="pt-24 min-h-[40vh] flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF3E0] to-[#F5F5DC] dark:from-[#18181c] dark:to-[#232326]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16">
          <div className="text-center mb-10">
            <Badge className="px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6] border-none">
              Our Menu
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Delicious{" "}
              <span className="text-[#6F4E37] dark:text-[#e6b800]">
                Choices
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#4B2E2B] dark:text-[#e6e6e6]">
              From expertly crafted coffee to fresh pastries and hearty meals,
              discover your new favorites from our carefully curated menu.
            </p>
          </div>
          {/* Search Bar */}
          <div className="flex justify-center items-center mb-8 w-full">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search menu items..."
                className="w-full px-6 py-3 rounded-full border border-[#e6e6e6] dark:border-[#333] bg-[#FAF3E0] dark:bg-[#222] text-[#4B2E2B] dark:text-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#6F4E37] dark:focus:ring-[#e6b800] transition-all text-base sm:text-lg shadow-sm pr-12"
                style={{ minWidth: "0" }}
              />
              {searchTerm && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B2E2B] dark:text-[#e6e6e6] bg-transparent hover:bg-[#e6e6e6] dark:hover:bg-[#333] rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] dark:focus:ring-[#e6b800]"
                  style={{ lineHeight: 0 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6L14 14M14 6L6 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all text-sm sm:text-md md:text-lg focus:outline-none focus:ring-2 focus:ring-[#6F4E37] dark:focus:ring-[#e6b800]
                  ${
                    selectedCategory === category.id
                      ? "bg-[#6F4E37] text-[#FFF8F0] dark:bg-[#e6b800] dark:text-[#222] shadow-lg"
                      : "bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6] hover:bg-[#6F4E37] hover:text-[#FFF8F0] dark:hover:bg-[#e6b800] dark:hover:text-[#222]"
                  }
                `}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* dark:bg-[#222] */}
      {/* Legend */}
      <section className="py-4  rounded-3xl mx-auto w-full max-w-xs mt-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center gap-2 text-sm text-[#4B2E2B] dark:text-[#e6e6e6]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 dark:bg-[#442222] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 dark:bg-[#e6b8b8] rounded-full"></div>
              </div>
              <span>Available Hot</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 dark:bg-[#223344] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 dark:bg-[#b8c8e6] rounded-full"></div>
              </div>
              <span>Available Iced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-10 text-[#4B2E2B] dark:text-[#e6e6e6] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <MenuItemSkeleton key={index} />
              ))
            ) : filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-lg text-[#4B2E2B] dark:text-[#e6e6e6]">
                No menu items found for "{searchTerm}".
              </div>
            )}
          </div>
        </div>
      </section>

      <CartSidebar />
    </div>
  );
}
