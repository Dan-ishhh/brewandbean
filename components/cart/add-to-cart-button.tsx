"use client"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { AddToCartModal } from "./add-to-cart-modal"

interface AddToCartButtonProps {
  item: {
    id: number
    name: string
    price: string
    image: string
    category: string
    description?: string
    hot?: boolean
    iced?: boolean
    badge?: string
    badgeColor?: string
  }
  className?: string
  size?: "sm" | "default" | "lg"
  showIcon?: boolean
}

export function AddToCartButton({ item, className = "", size = "default", showIcon = true }: AddToCartButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Button
        onClick={handleClick}
        size={size}
        className={`bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all group ${className}`}
      >
        {showIcon && <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />}
        Add to Cart
      </Button>

      <AddToCartModal item={item} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
