"use client"
import { Button } from "@/components/ui/button"
import { Plus, Check } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

interface AddToCartButtonProps {
  item: {
    id: number
    name: string
    price: string
    image: string
    category: string
  }
  className?: string
  size?: "sm" | "default" | "lg"
  showIcon?: boolean
}

export function AddToCartButton({ item, className = "", size = "default", showIcon = true }: AddToCartButtonProps) {
  const { dispatch } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    const price = Number.parseFloat(item.price.replace("$", ""))

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price,
        image: item.image,
        category: item.category,
      },
    })

    // Show success state
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)

    // Open cart briefly to show the item was added
    dispatch({ type: "OPEN_CART" })
    setTimeout(() => dispatch({ type: "CLOSE_CART" }), 1500)
  }

  return (
    <Button
      onClick={handleAddToCart}
      size={size}
      className={`bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all group ${className} ${
        isAdded ? "bg-green-500 hover:bg-green-600" : ""
      }`}
    >
      {showIcon &&
        (isAdded ? (
          <Check className="h-4 w-4 mr-2" />
        ) : (
          <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
        ))}
      {isAdded ? "Added!" : "Add to Cart"}
    </Button>
  )
}
