"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export function CartButton() {
  const { state, dispatch } = useCart()

  return (
    <Button
      onClick={() => dispatch({ type: "TOGGLE_CART" })}
      className="relative bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all"
    >
      <ShoppingCart className="h-5 w-5" />
      {state.itemCount > 0 && (
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center">
          {state.itemCount}
        </Badge>
      )}
      <span className="ml-2 hidden sm:inline">${state.total.toFixed(2)}</span>
    </Button>
  )
}
