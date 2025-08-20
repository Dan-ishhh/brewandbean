import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const CartSidebar = dynamic(
  () => import("@/components/cart/cart-sidebar").then((m) => m.CartSidebar),
  { ssr: false }
);
import Link from "next/link";
import { ArrowRight, Coffee, Heart, Star, Wifi } from "lucide-react";
import { MenuItemCard } from "@/components/menu/menu-item-card";
import { MenuItemSkeleton } from "@/components/menu/menu-item-skeleton";
import { useTranslation } from "@/contexts/translation-context";
const ReviewsSlider = dynamic(
  () => import("@/components/ui/reviews-slider").then((m) => m.ReviewsSlider),
  { ssr: false, loading: () => <div className="h-48" /> }
);
import { TableAvailabilitySummary } from "@/components/reservation/table-availability-summary";
const TableMap = dynamic(
  () => import("@/components/reservation/table-map").then((m) => m.TableMap),
  { ssr: false }
);
const ReservationModal = dynamic(
  () =>
    import("@/components/reservation/reservation-modal").then(
      (m) => m.ReservationModal
    ),
  { ssr: false }
);
import { useReservation } from "@/contexts/reservation-context";
const ReservationConfirmationModal = dynamic(
  () =>
    import("@/components/reservation/confirmation-modal").then(
      (m) => m.ReservationConfirmationModal
    ),
  { ssr: false }
);
import { ReserveFab } from "@/components/reservation/reserve-fab";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useReservation();
  const { home } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
      customizable: true,
      cheeseOptions: ["Mozzarella", "Cheddar", "Parmesan"],
      crustOptions: ["Thin", "Thick", "Stuffed"],
      toppingsOptions: ["Basil", "Olives", "Mushrooms", "Onions"],
      nutrition: { calories: 270, protein: 12, fat: 8, carbs: 36 },
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
      nutrition: { calories: 320, protein: 15, fat: 14, carbs: 34 },
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
      nutrition: { calories: 250, protein: 10, fat: 7, carbs: 38 },
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
      toppingsOptions: ["BBQ Chicken", "Onions", "Mushrooms", "Peppers"],
      nutrition: { calories: 340, protein: 18, fat: 16, carbs: 35 },
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
      customizable: true,
      milkOptions: ["Whole", "Skim", "Soy", "Oat"],
      coffeeTypeOptions: ["Espresso", "Latte", "Cappuccino"],
      sugarLevelOptions: ["No Sugar", "Less Sugar", "Regular", "Extra"],
      nutrition: { calories: 180, protein: 8, fat: 6, carbs: 22 },
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
      hot: true,
      iced: false,
      nutrition: { calories: 210, protein: 4, fat: 12, carbs: 24 },
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
      customizable: true,
      milkOptions: ["Whole", "Skim", "Soy", "Oat"],
      coffeeTypeOptions: ["Cold Brew", "Latte", "Cappuccino"],
      sugarLevelOptions: ["No Sugar", "Less Sugar", "Regular", "Extra"],
      nutrition: { calories: 15, protein: 1, fat: 0, carbs: 3 },
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
      hot: true,
      iced: false,
      nutrition: { calories: 260, protein: 6, fat: 10, carbs: 32 },
    },
  ];

  return (
    <div
      data-scroll-container
      className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden"
    >
      <section className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] to-[#FAF3E0] dark:from-[#18181c] dark:to-[#232326]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-40 right-40 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000 bg-[#6F4E37]"></div>
            <div className="absolute bottom-10 left-80 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000 bg-[#6F4E37]"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="px-4 py-2 rounded-full text-sm font-medium border-#E6B800 bg-[#FFF8F0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6]">
                ☕ {home.freshlyRoastedDaily}
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#4B2E2B] dark:text-[#e6e6e6]">
                Your Cozy Corner for a
                <span className="text-[#6F4E37] dark:text-[#e6b800]">
                  {" "}
                  Coffee
                </span>
              </h1>
              <p className="text-xl leading-relaxed max-w-lg text-[#4B2E2B] dark:text-[#e6e6e6]">
                {home.welcomeText}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button
                  size="lg"
                  className="bg-[#4B2E2B] text-[#FFF8F0] hover:bg-[#4B2E2B] hover:text-white dark:bg-[#222] dark:text-[#e6e6e6] dark:hover:bg-[#333] dark:hover:text-[#e6b800] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto border-0"
                >
                  Explore Our Menu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-[#4B2E2B] dark:bg-[#222] dark:border-[#e6b800] dark:text-[#e6b800] dark:hover:bg-[#333] dark:hover:text-[#e6b800] bg-white/80 px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
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
                <span className="text-[#4B2E2B] dark:text-[#e6e6e6] font-medium">
                  4.9/5 {home.rating}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-[#6F4E37] dark:text-[#e6e6e6] h-5 w-5" />
                <span className="text-[#4B2E2B] dark:text-[#e6e6e6] font-medium">
                  2000+ {home.happyCustomers}
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/cafe-interior.jpg"
                alt="Cozy cafe interior"
                width={1200}
                height={600}
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>

            <div className="dark:bg-[#222] absolute top-8 -right-4 bg-white p-4 rounded-2xl shadow-lg z-20">
              <div className="flex items-center gap-3 text-[#4B2E2B] dark:text-[#e6e6e6]">
                <div className="bg-[#FFF8F0] dark:bg-[#18181c] w-10 h-10 rounded-xl flex items-center justify-center">
                  <Coffee className=" text-[#6F4E37] dark:text-[#e6b800] h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#4B2E2B] dark:text-[#e6e6e6]">
                    {home.premiumCoffee}
                  </p>
                  <p className="text-xs text-[#6F4E37] dark:text-[#e6b800]">
                    {home.ethicallySourced}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -left-4 bg-white dark:bg-[#222] p-4 rounded-2xl shadow-lg z-20 border border-[#F5F5DC] dark:border-[#333]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FFF8F0] dark:bg-[#18181c]">
                  <Wifi className="h-5 w-5 text-[#6F4E37] dark:text-[#e6b800]" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#4B2E2B] dark:text-[#e6e6e6]">
                    {home.freeWifi}
                  </p>
                  <p className="text-xs text-[#6F4E37] dark:text-[#e6b800]">
                    {home.workFriendly}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFF8F0] dark:bg-[#18181c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6] border-none">
              {home.ourStory}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Crafted with{" "}
              <span className="text-[#6F4E37] dark:text-[#e6b800]">
                Passion
              </span>
              ,
              <br className="hidden sm:block" />
              Served with{" "}
              <span className="text-[#6F4E37] dark:text-[#e6b800]">Love</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-[#4B2E2B] dark:text-[#e6e6e6]">
              {home.since2018}
            </p>
            <Link href="/about">
              <Button className="text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border-0 bg-[#6F4E37] hover:bg-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]">
                {home.learnMore}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#FAF3E0] to-[#F5F5DC] dark:from-[#18181c] dark:to-[#232326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[#FFF8F0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6] border-none">
              {home.ourMenu}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
              <span className="text-[#6F4E37] dark:text-[#e6b800]">
                Signature
              </span>{" "}
              Favorites
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#4B2E2B] dark:text-[#e6e6e6]">
              {home.signatureDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <MenuItemSkeleton key={index} />
                ))
              : homeItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
          </div>

          <div className="text-center mb-12">
            <Badge className="px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[#FFF8F0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6] border-none">
              {home.pizzas}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
              <span className="text-[#6F4E37] dark:text-[#e6b800]">
                Delicious
              </span>{" "}
              Pizzas
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-[#4B2E2B] dark:text-[#e6e6e6]">
              {home.pizzaDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                className="text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-0 bg-[#6F4E37] hover:bg-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]"
              >
                {home.viewFullMenu} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="px-4 py-2 rounded-full text-sm font-medium bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6] border-none hover:bg-[#FAF3E0]">
              {home.reviews}
            </Badge>
          </div>
          <h2 className="mt-6 text-3xl lg:text-4xl font-bold mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
            What our{" "}
            <span className="text-[#6F4E37] dark:text-[#e6b800]">clients</span>{" "}
            say?
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-[#4B2E2B] dark:text-[#e6e6e6]">
            {home.clientsSayDesc}
          </p>
          <div>
            <ReviewsSlider />
          </div>
        </div>
      </section>

      <TableAvailabilitySummary />

      {/* Reservation Components */}
      <div id="reservation" className="scroll-mt-24 md:scroll-mt-28" />
      {state.showTableMap && <TableMap />}
      <ReservationModal />
      <ReservationConfirmationModal />
      <ReserveFab />

      <section className="py-20 text-white bg-gradient-to-br from-[#6F4E37] to-[#4B2E2B] dark:from-[#18181c] dark:to-[#232326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{home.readyToOrder}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {home.orderText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-0 bg-[#FFF8F0] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white dark:bg-[#222] dark:text-[#e6e6e6] dark:hover:bg-[#333] dark:hover:text-[#e6b800]"
              >
                {home.orderOnline} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#4B2E2B] px-8 py-4 rounded-full bg-transparent dark:border-[#e6b800] dark:text-[#e6b800] dark:hover:bg-[#333] dark:hover:text-[#e6b800]"
              >
                {home.visitStore}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CartSidebar />
      <ReserveFab />
    </div>
  );
}
