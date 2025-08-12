"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Check, Thermometer, Snowflake, Minus } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import Image from "next/image";

interface AddToCartModalProps {
  item: {
    id: any;
    name: string;
    price: string;
    image: string;
    category: string;
    description?: string;
    hot?: boolean;
    iced?: boolean;
    badge?: string;
    badgeColor?: string;
    customizable?: boolean;
    milkOptions?: string[];
    coffeeTypeOptions?: string[];
    sugarLevelOptions?: string[];
    toppingsOptions?: string[];
    cheeseOptions?: string[];
    crustOptions?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function AddToCartModal({ item, isOpen, onClose }: AddToCartModalProps) {
  // Customization states
  const [selectedMilk, setSelectedMilk] = useState<string>("");
  const [selectedCoffeeType, setSelectedCoffeeType] = useState<string>("");
  const [selectedSugar, setSelectedSugar] = useState<string>("");
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedCheese, setSelectedCheese] = useState<string>("");
  const [selectedCrust, setSelectedCrust] = useState<string>("");
  // Cost per extra topping for pizza
  const toppingCost = 0.5;

  const { dispatch } = useCart();
  const [selectedTemperature, setSelectedTemperature] = useState<
    "hot" | "iced" | null
  >(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // All hooks must be called before any return
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setSelectedTemperature(null);
      setQuantity(1);
      setIsAdding(false);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const hasTemperatureOptions = Boolean(item.hot) && Boolean(item.iced);
  const isCoffeeCustom = item.category === "coffee" && item.customizable;
  // Provide defaults if options are missing for customizable coffee
  const milkOptions = item.milkOptions ?? ["Whole", "Skim", "Soy", "Oat"];
  const coffeeTypeOptions = item.coffeeTypeOptions ?? [
    "Espresso",
    "Latte",
    "Cappuccino",
  ];
  const sugarLevelOptions = item.sugarLevelOptions ?? [
    "No Sugar",
    "Less Sugar",
    "Regular",
    "Extra",
  ];
  const isPizzaCustom = item.category === "pizza" && item.customizable;
  const isTeaWithTemp = item.category === "tea" && item.hot && item.iced;

  // For coffee and tea, require temperature only if both hot and iced are available
  let requiredTemperature = false;
  if ((item.category === "coffee" && item.customizable) || isTeaWithTemp) {
    requiredTemperature = hasTemperatureOptions;
  }

  useEffect(() => {
    if (
      isOpen &&
      ((item.category === "coffee" && item.customizable) || isTeaWithTemp) &&
      !hasTemperatureOptions
    ) {
      if (item.hot && !item.iced) setSelectedTemperature("hot");
      else if (!item.hot && item.iced) setSelectedTemperature("iced");
    }
  }, [isOpen, item, hasTemperatureOptions, isTeaWithTemp]);

  if (!isVisible) return null;

  // For coffee, require all customizations
  const canCustomizeCoffee = isCoffeeCustom
    ? selectedMilk && selectedCoffeeType && selectedSugar
    : true;
  // For pizza, require all customizations
  const canCustomizePizza = isPizzaCustom ? selectedCrust : true;

  // For coffee and tea, require temperature only if both hot and iced
  const canAddToCart = requiredTemperature
    ? selectedTemperature !== null
    : true;
  const canAddCustomToCart =
    canAddToCart && canCustomizeCoffee && canCustomizePizza;

  const handleAddToCart = async () => {
    if (!canAddCustomToCart) return;

    setIsAdding(true);
    const price = Number.parseFloat(item.price.replace("$", ""));

    // Generate a unique customization key for coffee and pizza
    const customizationKey = JSON.stringify({
      temperature: selectedTemperature,
      ...(isCoffeeCustom && {
        milk: selectedMilk,
        coffeeType: selectedCoffeeType,
        sugar: selectedSugar,
      }),
      ...(isPizzaCustom && {
        cheese: selectedCheese,
        crust: selectedCrust,
        toppings: selectedToppings,
      }),
    });

    // Add each quantity as separate dispatch calls to handle quantity properly
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          // Use a composite id for coffee/pizza: base id + customizationKey
          id:
            isCoffeeCustom || isPizzaCustom
              ? `${item.id}-${customizationKey}`
              : item.id,
          name: item.name,
          price,
          image: item.image || "/placeholder.svg",
          category: item.category,
          options: {
            temperature: selectedTemperature!,
            ...(isCoffeeCustom && {
              milk: selectedMilk,
              coffeeType: selectedCoffeeType,
              sugar: selectedSugar,
            }),
            ...(isPizzaCustom && {
              cheese: selectedCheese,
              crust: selectedCrust,
              toppings: selectedToppings,
            }),
          } as any,
        },
      });
    }

    // Show success state briefly
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Open cart briefly to show the item was added
    dispatch({ type: "OPEN_CART" });
    setTimeout(() => dispatch({ type: "CLOSE_CART" }), 2000);

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 transition-colors duration-300"
      onClick={onClose}
    >
      <Card
        className={`w-full max-w-md shadow-2xl border-0 rounded-2xl overflow-hidden transform transition-all duration-300 bg-[#FFF8F0] dark:bg-[#222] ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <CardContent
          className="p-0"
          style={{ maxHeight: "700px", height: "100%", overflowY: "scroll" }}
        >
          {/* Header with image and close button */}
          <div className="relative overflow-hidden">
            <Image
              src={
                item.image ||
                "/placeholder.svg?height=192&width=384&query=food item"
              }
              alt={item.name}
              width={384} // or your desired width
              height={192} // or your desired height
              className="w-full h-48 object-cover transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg?height=192&width=384";
              }}
            />
            {item.badge && (
              <Badge
                className={`absolute top-4 left-4 border-0 px-3 py-1 text-xs font-medium animate-fade-in-scale ${item.badgeColor}`}
              >
                {item.badge}
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-2 bg-white/90 hover:bg-white dark:bg-[#222] dark:hover:bg-[#333] shadow-md transform hover:scale-110 hover:rotate-90 transition-all duration-300"
            >
              <X className="h-4 w-4 dark:text-[#e6e6e6]" />
            </Button>
          </div>

          <div className="p-6 space-y-6 bg-[#FFF8F0] dark:bg-[#222]">
            {/* Item Info */}
            <div className="animate-fade-in-up">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold transition-colors duration-300 text-[#4B2E2B] dark:text-[#e6e6e6]">
                  {item.name}
                </h3>
                <span className="text-xl font-bold animate-pulse-gentle text-[#6F4E37] dark:text-[#e6b800]">
                  {item.price}
                </span>
              </div>
              {item.description && (
                <p className="text-sm leading-relaxed transition-colors duration-300 text-[#4B2E2B] dark:text-[#e6e6e6]">
                  {item.description}
                </p>
              )}
            </div>

            {/* Content with staggered animations */}
            <div>
              {/* Coffee Customization */}
              {isCoffeeCustom && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="mb-2">
                    <label className="block mb-1 font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                      Milk <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {milkOptions.map((milk) => (
                        <Button
                          key={milk}
                          size="sm"
                          className={`rounded-full px-4 py-2 border-2 hover:text-white transition-colors duration-200 ${
                            selectedMilk === milk
                              ? "border-[#6F4E37] bg-[#FAF3E0] text-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:border-[#e6b800]"
                              : "border-[#F5F5DC] bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#18181c] dark:text-[#e6e6e6] dark:border-[#333]"
                          }`}
                          onClick={() => setSelectedMilk(milk)}
                        >
                          {milk}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                      Coffee Type <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {coffeeTypeOptions.map((type) => (
                        <Button
                          key={type}
                          size="sm"
                          className={`rounded-full px-4 py-2 border-2 hover:text-white transition-colors duration-200 ${
                            selectedCoffeeType === type
                              ? "border-[#6F4E37] bg-[#FAF3E0] text-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:border-[#e6b800]"
                              : "border-[#F5F5DC] bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#18181c] dark:text-[#e6e6e6] dark:border-[#333]"
                          }`}
                          onClick={() => setSelectedCoffeeType(type)}
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                      Sugar Level <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {sugarLevelOptions.map((level) => (
                        <Button
                          key={level}
                          size="sm"
                          className={`rounded-full px-4 py-2 border-2 hover:text-white transition-colors duration-200 ${
                            selectedSugar === level
                              ? "border-[#6F4E37] bg-[#FAF3E0] text-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:border-[#e6b800]"
                              : "border-[#F5F5DC] bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#18181c] dark:text-[#e6e6e6] dark:border-[#333]"
                          }`}
                          onClick={() => setSelectedSugar(level)}
                        >
                          {level}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* Pizza Customization */}
              {isPizzaCustom && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="mb-2">
                    <label className="block mb-1 font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                      Crust <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {item.crustOptions?.map((crust) => (
                        <Button
                          key={crust}
                          size="sm"
                          className={`rounded-full px-4 py-2 border-2 hover:text-white transition-colors duration-200 ${
                            selectedCrust === crust
                              ? "border-[#6F4E37] bg-[#FAF3E0] text-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:border-[#e6b800]"
                              : "border-[#F5F5DC] bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#18181c] dark:text-[#e6e6e6] dark:border-[#333]"
                          }`}
                          onClick={() => setSelectedCrust(crust)}
                        >
                          {crust}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                      Extra Cheese
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {item.cheeseOptions?.map((cheese) => (
                        <Button
                          key={cheese}
                          size="sm"
                          className={`rounded-full px-4 py-2 border-2 hover:text-white transition-colors duration-200 ${
                            selectedCheese === cheese
                              ? "border-[#6F4E37] bg-[#FAF3E0] text-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:border-[#e6b800]"
                              : "border-[#F5F5DC] bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#18181c] dark:text-[#e6e6e6] dark:border-[#333]"
                          }`}
                          onClick={() => setSelectedCheese(cheese)}
                        >
                          {cheese}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                      Toppings
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {item.toppingsOptions?.map((topping) => (
                        <Button
                          key={topping}
                          size="sm"
                          className={`rounded-full px-4 py-2 border-2 hover:text-white ${
                            selectedToppings.includes(topping)
                              ? "border-[#6F4E37] bg-[#FAF3E0] text-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:border-[#e6b800]"
                              : "border-[#F5F5DC] bg-[#FAF3E0] text-[#4B2E2B] dark:bg-[#18181c] dark:text-[#e6e6e6] dark:border-[#333]"
                          }`}
                          onClick={() =>
                            setSelectedToppings((prev) =>
                              prev.includes(topping)
                                ? prev.filter((t) => t !== topping)
                                : [...prev, topping]
                            )
                          }
                        >
                          {topping}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Temperature */}
            {hasTemperatureOptions && (
              <>
                <h4 className="block mb-3 text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Choose Temperature <span className="text-red-500"> *</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedTemperature("hot")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                      selectedTemperature === "hot"
                        ? "animate-bounce-in border-[#6F4E37] bg-[#FAF3E0] dark:bg-[#222] dark:border-[#e6b800]"
                        : "border-[#F5F5DC] bg-transparent dark:bg-[#18181c] dark:border-[#333]"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Thermometer
                        className={`h-6 w-6 transition-all duration-300 ${
                          selectedTemperature === "hot"
                            ? "animate-pulse text-red-500"
                            : ""
                        }`}
                      />
                      <span className="font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Hot
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedTemperature("iced")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                      selectedTemperature === "iced"
                        ? "animate-bounce-in border-[#6F4E37] bg-[#FAF3E0] dark:bg-[#222] dark:border-[#e6b800]"
                        : "border-[#F5F5DC] bg-transparent dark:bg-[#18181c] dark:border-[#333]"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Snowflake
                        className={`h-6 w-6 transition-all duration-300 ${
                          selectedTemperature === "iced"
                            ? "animate-pulse text-blue-500"
                            : ""
                        }`}
                      />
                      <span className="font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                        Iced
                      </span>
                    </div>
                  </button>
                </div>
              </>
            )}

            {/* Quantity */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <h4 className="font-semibold mb-3 text-[#4B2E2B] dark:text-[#e6e6e6]">
                Quantity
              </h4>
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 p-0 rounded-full transform hover:scale-110 active:scale-95 transition-all duration-200 border-[#F5F5DC] text-[#4B2E2B] dark:border-[#333] dark:text-[#e6e6e6]"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-bold text-xl min-w-[3rem] text-center transition-all duration-300 text-[#4B2E2B] dark:text-[#e6e6e6]">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 p-0 rounded-full transform hover:scale-110 active:scale-95 transition-all duration-200 border-[#F5F5DC] text-[#4B2E2B] dark:border-[#333] dark:text-[#e6e6e6]"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Total Price */}
            <div
              className="rounded-xl p-4 animate-fade-in-up bg-[#FAF3E0] dark:bg-[#222]"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Total:
                </span>
                <span className="font-bold text-xl animate-pulse-gentle text-[#6F4E37] dark:text-[#e6b800]">
                  $
                  {(
                    Number.parseFloat(item.price.replace("$", "")) * quantity
                  ).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isAdding || !canAddCustomToCart}
              className={`w-full py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-white border-0 transform hover:scale-105 active:scale-95 bg-[#6F4E37] hover:bg-[#4B2E2B] dark:bg-[#222] dark:hover:bg-[#333] dark:text-[#e6b800] ${
                isAdding ? "animate-pulse-gentle" : ""
              }`}
            >
              {isAdding ? (
                <>
                  <Check className="h-5 w-5 mr-2 animate-bounce" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <Plus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Add to Cart
                  {quantity > 1 && ` (${quantity})`}
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    // removed leftover fragment closing tag
  );
}
