"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { useEffect, useState } from "react";

export function CartButton() {
  const { state, dispatch } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  // Animate when item count changes
  useEffect(() => {
    if (state.itemCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [state.itemCount]);

  return (
    <Button
      onClick={() => dispatch({ type: "TOGGLE_CART" })}
      className={`relative text-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 active:scale-95 ${
        isAnimating ? "animate-pulse-gentle" : ""
      }`}
      style={{
        backgroundColor: "#6F4E37",
        ":hover": { backgroundColor: "#4B2E2B" },
      }}
      onMouseEnter={(e) => {
        // e.target.style.backgroundColor = "#4B2E2B";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        // e.target.style.backgroundColor = "#6F4E37";
        e.target.style.transform = "scale(1)";
      }}
    >
      <ShoppingCart
        className={`h-5 w-5 transition-transform duration-300 ${
          isAnimating ? "animate-bounce" : ""
        }`}
      />
      {state.itemCount > 0 && (
        <Badge
          className={`absolute -top-2 -right-2 text-xs px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center border-0 transition-all duration-300 ${
            isAnimating ? "animate-bounce-in" : ""
          }`}
          style={{
            backgroundColor: "#FFF8F0",
            color: "#4B2E2B",
          }}
        >
          {state.itemCount}
        </Badge>
      )}
      <span className="ml-2 hidden sm:inline transition-all duration-300">
        ${state.total.toFixed(2)}
      </span>
    </Button>
  );
}
