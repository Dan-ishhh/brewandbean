"use client";
import { Button } from "@/components/ui/button";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { AddToCartModal } from "./add-to-cart-modal";
import { useCart } from "@/contexts/cart-context";

interface AddToCartButtonProps {
  item: {
    id: number;
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
  };
  className?: string;
  size?: "sm" | "default" | "lg";
  showIcon?: boolean;
  onOpenModal?: () => void;
}

export function AddToCartButton({
  item,
  className = "",
  size = "default",
  showIcon = true,
  onOpenModal,
}: AddToCartButtonProps) {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Always open modal for customizable items (coffee or pizza)
  const handleClick = async () => {
    if (item.customizable) {
      if (typeof onOpenModal === "function") {
        onOpenModal();
      }
      return;
    }

    // If not customizable, add directly
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsAdded(true);
    const price = Number.parseFloat(item.price.replace("$", ""));
    let temperature: "hot" | "iced" | undefined = undefined;
    if (item.hot && !item.iced) {
      temperature = "hot";
    } else if (item.iced && !item.hot) {
      temperature = "iced";
    }
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price,
        image: item.image || "/placeholder.svg?height=64&width=64",
        category: item.category,
        options: temperature ? { temperature } : undefined,
      },
    });
    setTimeout(() => {
      setIsAdded(false);
      setIsLoading(false);
    }, 2000);
    dispatch({ type: "OPEN_CART" });
    setTimeout(() => dispatch({ type: "CLOSE_CART" }), 1500);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        disabled={isLoading}
        size={size}
        className={`rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-white border-0 transform hover:scale-105 active:scale-95 ${
          isAdded ? "animate-bounce-in" : ""
        } ${isLoading ? "animate-pulse" : ""} ${className}`}
        style={{
          backgroundColor: isAdded ? "#4B2E2B" : "#6F4E37",
        }}
        onMouseEnter={(e) => {
          if (!isAdded && !isLoading) {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = "#4B2E2B";
          }
        }}
        onMouseLeave={(e) => {
          if (!isAdded && !isLoading) {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = "#6F4E37";
          }
        }}
      >
        {showIcon && (
          <>
            {isLoading ? (
              <div className="h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isAdded ? (
              <Check className="h-4 w-4 mr-2 animate-bounce" />
            ) : (
              <Plus className="h-4 w-4 mr-2 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
            )}
          </>
        )}
        {isLoading ? "Adding..." : isAdded ? "Added!" : "Add to Cart"}
      </Button>

      {/* Modal is now handled globally, not here */}
    </>
  );
}
