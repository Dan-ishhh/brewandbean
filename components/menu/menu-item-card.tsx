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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="border-0 hover:shadow-2xl transition-all duration-500 group overflow-hidden rounded-2xl transform hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up"
      style={{ backgroundColor: "#FFF8F0" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={imageError ? "/placeholder.svg?height=240&width=320" : item.image}
            alt={item.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            onError={() => setImageError(true)}
            loading="lazy"
          />

          {/* Overlay gradient on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />

          <Badge
            className={`absolute top-4 left-4 ${item.badgeColor} border-0 px-3 py-1 text-xs font-medium transition-all duration-300 transform ${isHovered ? "scale-110" : "scale-100"}`}
          >
            {item.badge}
          </Badge>

          {(item.hot || item.iced) && (
            <div
              className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 transform ${isHovered ? "scale-110" : "scale-100"}`}
            >
              {item.hot && (
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center animate-pulse-gentle">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              )}
              {item.iced && (
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center animate-pulse-gentle">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-6 transition-all duration-300" style={{ backgroundColor: "#FFF8F0" }}>
          <div className="flex justify-between items-start mb-3">
            <h3
              className={`text-lg font-bold transition-all duration-300 ${isHovered ? "text-opacity-80" : ""}`}
              style={{ color: "#4B2E2B" }}
            >
              {item.name}
            </h3>
            <span
              className={`text-xl font-bold transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
              style={{ color: "#6F4E37" }}
            >
              {item.price}
            </span>
          </div>

          <p
            className={`text-sm leading-relaxed mb-4 transition-all duration-300 ${isHovered ? "text-opacity-80" : ""}`}
            style={{ color: "#4B2E2B" }}
          >
            {item.description}
          </p>

          <div
            className={`transition-all duration-300 transform ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90"}`}
          >
            <AddToCartButton item={item} className="w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
