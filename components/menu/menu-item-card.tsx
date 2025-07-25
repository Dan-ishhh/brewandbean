"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"

interface MenuItemCardProps {
  item: {
    id: number
    category: string
    name: string
    price: string
    description: string
    image: string
    badge: string
    badgeColor: string
    hot?: boolean
    iced?: boolean
  }
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card
      className="border-0 hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-2xl"
      style={{ backgroundColor: "#FFF8F0" }}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={imageError ? "/placeholder.svg?height=240&width=320" : item.image}
            alt={item.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
            loading="lazy"
          />
          <Badge className={`absolute top-4 left-4 ${item.badgeColor} border-0 px-3 py-1 text-xs font-medium`}>
            {item.badge}
          </Badge>
          {(item.hot || item.iced) && (
            <div className="absolute top-4 right-4 flex gap-2">
              {item.hot && (
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              )}
              {item.iced && (
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="p-6" style={{ backgroundColor: "#FFF8F0" }}>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold" style={{ color: "#4B2E2B" }}>
              {item.name}
            </h3>
            <span className="text-xl font-bold" style={{ color: "#6F4E37" }}>
              {item.price}
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B2E2B" }}>
            {item.description}
          </p>
          <AddToCartButton item={item} className="w-full" />
        </div>
      </CardContent>
    </Card>
  )
}
