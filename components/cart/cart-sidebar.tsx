"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Thermometer,
  Snowflake,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { useEffect, useState } from "react";
import Link from "next/link";

export function CartSidebar() {
  const { state, dispatch } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  // Handle sidebar visibility with animation
  useEffect(() => {
    if (state.isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: "CLOSE_CART" });
      }
    };

    if (state.isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [state.isOpen, dispatch]);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop with fade animation */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-500 ${
          state.isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={() => dispatch({ type: "CLOSE_CART" })}
      />

      {/* Sidebar with slide animation */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md shadow-2xl z-50 transform transition-all duration-500 ease-in-out ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        } bg-[#FFF8F0] dark:bg-[#18181c]`}
      >
        <div className="flex flex-col h-full">
          {/* Header with slide down animation */}
          <div
            className={`flex items-center justify-between p-6 border-b transition-all duration-500 ${
              state.isOpen ? "animate-slide-in-right" : ""
            } border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c]`}
          >
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 animate-pulse-gentle text-[#6F4E37] dark:text-[#e6e6e6]" />
              <h2 className="text-xl font-bold text-[#4B2E2B] dark:text-[#e6e6e6]">
                Your Order
              </h2>
              {state.itemCount > 0 && (
                <Badge className="border-#E6B800 animate-fade-in-scale bg-[#F5F5DC] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800]">
                  {state.itemCount} {state.itemCount === 1 ? "item" : "items"}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="rounded-full p-2 hover:rotate-90 transition-all duration-300"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = "#F5F5DC";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = "transparent";
              }}
            >
              <X className="h-5 w-5 text-[#4B2E2B] dark:text-[#e6e6e6]" />
            </Button>
          </div>

          {/* Cart Items with staggered animations */}
          <div className="flex-1 overflow-y-auto p-6 bg-[#FFF8F0] dark:bg-[#18181c]">
            {state.items.length === 0 ? (
              <div className="text-center py-12 animate-fade-in-up bg-[#FFF8F0] dark:bg-[#18181c]">
                <ShoppingBag className="h-16 w-16 mx-auto mb-4 animate-pulse-gentle text-[#6F4E37] dark:text-[#e6e6e6]" />
                <h3 className="text-lg font-medium mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Your cart is empty
                </h3>
                <p className="mb-6 text-[#6F4E37] dark:text-[#e6b800]">
                  Add some delicious items to get started!
                </p>
                <Link href="/menu">
                  <Button
                    onClick={() => dispatch({ type: "CLOSE_CART" })}
                    className="text-white rounded-full px-6 border-0 transform hover:scale-105 transition-all duration-300 bg-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]"
                  >
                    Browse Menu
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item, index) => {
                  return (
                    <Card
                      key={`${item.id}-${index}`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                      className={`border transform hover:scale-[1.02] border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c]`}
                    >
                      {/* transition-all duration-300 animate-slide-in-right-staggered */}
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="relative overflow-hidden rounded-lg">
                            <img
                              src={
                                item.image ||
                                "/placeholder.svg?height=64&width=64&query=food item"
                              }
                              alt={item.name}
                              className="w-16 h-16 object-cover transition-transform duration-300 hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                  "/placeholder.svg?height=64&width=64";
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1 transition-colors duration-300 text-[#4B2E2B] dark:text-[#e6e6e6]">
                              {item.name}
                            </h3>

                            {item.options?.temperature && (
                              <div className="flex items-center gap-1 text-sm">
                                {item.options?.temperature === "hot" ? (
                                  <Thermometer className="h-3 w-3 text-red-500 animate-pulse" />
                                ) : (
                                  <Snowflake className="h-3 w-3 text-blue-500 animate-pulse" />
                                )}
                                <span className="capitalize text-[#4B2E2B] dark:text-[#e6e6e6]">
                                  {item.options?.temperature}
                                </span>
                              </div>
                            )}

                            {/* Show chosen options for Coffee and Pizza */}
                            {(item.category === "coffee" ||
                              item.category === "pizza") &&
                              item.options && (
                                <div className="mb-1 text-xs text-[#6F4E37] dark:text-[#e6b800] space-y-1">
                                  {(() => {
                                    const opts = item.options as any;
                                    return (
                                      <>
                                        {/* Coffee customizations */}
                                        {item.category === "coffee" && (
                                          <>
                                            {opts.milk && (
                                              <div>
                                                Milk:{" "}
                                                <span className="font-medium">
                                                  {opts.milk}
                                                </span>
                                              </div>
                                            )}
                                            {opts.coffeeType && (
                                              <div>
                                                Coffee Type:{" "}
                                                <span className="font-medium">
                                                  {opts.coffeeType}
                                                </span>
                                              </div>
                                            )}
                                            {opts.sugar && (
                                              <div>
                                                Sugar:{" "}
                                                <span className="font-medium">
                                                  {opts.sugar}
                                                </span>
                                              </div>
                                            )}
                                          </>
                                        )}
                                        {/* Pizza customizations */}
                                        {item.category === "pizza" && (
                                          <>
                                            {opts.cheese && (
                                              <div>
                                                Cheese:{" "}
                                                <span className="font-medium">
                                                  {opts.cheese}
                                                </span>
                                              </div>
                                            )}
                                            {opts.crust && (
                                              <div>
                                                Crust:{" "}
                                                <span className="font-medium">
                                                  {opts.crust}
                                                </span>
                                              </div>
                                            )}
                                            {opts.toppings &&
                                              Array.isArray(opts.toppings) &&
                                              opts.toppings.length > 0 && (
                                                <div>
                                                  Toppings:{" "}
                                                  <span className="font-medium">
                                                    {opts.toppings.join(", ")}
                                                  </span>
                                                </div>
                                              )}
                                          </>
                                        )}
                                      </>
                                    );
                                  })()}
                                </div>
                              )}

                            <p className="text-sm mb-2 transition-colors duration-300 text-[#6F4E37] dark:text-[#e6b800]">
                              ${item.price.toFixed(2)} each
                            </p>

                            {/* Quantity Controls with hover animations */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    dispatch({
                                      type: "UPDATE_QUANTITY",
                                      payload: {
                                        id: item.id,
                                        quantity: item.quantity - 1,
                                      },
                                    })
                                  }
                                  className="h-8 w-8 p-0 rounded-full transform hover:scale-110 active:scale-95 transition-all duration-200"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="font-medium min-w-[2rem] text-center transition-all duration-300 text-[#4B2E2B] dark:text-[#e6e6e6]">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    dispatch({
                                      type: "UPDATE_QUANTITY",
                                      payload: {
                                        id: item.id,
                                        quantity: item.quantity + 1,
                                      },
                                    })
                                  }
                                  className="h-8 w-8 p-0 rounded-full transform hover:scale-110 active:scale-95 transition-all duration-200"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>

                              <div className="flex items-center gap-2">
                                <span className="font-semibold transition-colors duration-300 text-[#4B2E2B] dark:text-[#e6e6e6]">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_ITEM",
                                      payload: {
                                        id: item.id,
                                        options: {
                                          temperature:
                                            item.options?.temperature,
                                        },
                                      },
                                    })
                                  }
                                  className="h-8 w-8 p-0 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50 transform hover:scale-110 active:scale-95 transition-all duration-200"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer with slide up animation */}
          {state.items.length > 0 && (
            <div
              className={`border-t p-6 space-y-4 transition-all duration-500 ${
                state.isOpen ? "animate-slide-in-right" : ""
              } border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c]`}
            >
              {/* Total with emphasis animation */}
              <div className="flex justify-between items-center text-lg font-bold animate-fade-in-scale">
                <span className="text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Total:
                </span>
                <span className="animate-pulse-gentle text-[#6F4E37] dark:text-[#e6b800]">
                  ${state.total.toFixed(2)}
                </span>
              </div>

              {/* Action Buttons with hover effects */}
              <div className="space-y-3">
                <Link href="/checkout" passHref legacyBehavior>
                  <Button
                    className="w-full text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 active:scale-95 bg-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]"
                    onClick={() => dispatch({ type: "CLOSE_CART" })}
                  >
                    Proceed to Checkout
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                  className="w-full py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 bg-transparent transform hover:scale-105 active:scale-95 border-[#F5F5DC] dark:border-[#333] text-[#4B2E2B] dark:text-[#e6e6e6] hover:bg-[#F5F5DC] dark:hover:bg-[#222]"
                >
                  Clear Cart
                </Button>
              </div>

              {/* Pickup Info with gentle animation */}
              <div className="text-center text-sm pt-2 animate-fade-in-up text-[#6F4E37] dark:text-[#e6b800]">
                <p className="animate-pulse-gentle">
                  🕐 Ready for pickup in 10-15 minutes
                </p>
                <p>📍 123 Coffee Street, Downtown District</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
