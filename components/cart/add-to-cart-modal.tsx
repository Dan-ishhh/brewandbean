"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Check, Thermometer, Snowflake, Minus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

interface AddToCartModalProps {
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
  isOpen: boolean
  onClose: () => void
}

export function AddToCartModal({ item, isOpen, onClose }: AddToCartModalProps) {
  const { dispatch } = useCart()
  const [selectedTemperature, setSelectedTemperature] = useState<"hot" | "iced" | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Handle modal visibility with animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      setSelectedTemperature(null)
      setQuantity(1)
      setIsAdding(false)
      document.body.style.overflow = "hidden"
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      document.body.style.overflow = "unset"
      return () => clearTimeout(timer)
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isVisible) return null

  const hasTemperatureOptions = item.hot && item.iced
  const canAddToCart = selectedTemperature !== null

  const handleAddToCart = async () => {
    if (!canAddToCart) return

    setIsAdding(true)
    const price = Number.parseFloat(item.price.replace("$", ""))

    // Add each quantity as separate dispatch calls to handle quantity properly
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: item.id,
          name: item.name,
          price,
          image: item.image || "/placeholder.svg",
          category: item.category,
          options: {
            temperature: selectedTemperature!,
          },
        },
      })
    }

    // Show success state briefly
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Open cart briefly to show the item was added
    dispatch({ type: "OPEN_CART" })
    setTimeout(() => dispatch({ type: "CLOSE_CART" }), 2000)

    onClose()
  }

  return (
    <>
      {/* Backdrop with fade animation */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isOpen ? "bg-opacity-50" : "bg-opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal with scale animation */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card
          className={`w-full max-w-md shadow-2xl border-0 rounded-2xl overflow-hidden transform transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          style={{ backgroundColor: "#FFF8F0" }}
        >
          <CardContent className="p-0">
            {/* Header with image and close button */}
            <div className="relative overflow-hidden">
              <img
                src={item.image || "/placeholder.svg?height=192&width=384&query=food item"}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=192&width=384"
                }}
              />
              {item.badge && (
                <Badge
                  className={`absolute top-4 left-4 border-0 px-3 py-1 text-xs font-medium animate-fade-in-scale`}
                  style={{
                    backgroundColor: item.badgeColor?.includes("red") ? "#FAF3E0" : "#F5F5DC",
                    color: "#4B2E2B",
                  }}
                >
                  {item.badge}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full p-2 bg-white/90 hover:bg-white shadow-md transform hover:scale-110 hover:rotate-90 transition-all duration-300"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content with staggered animations */}
            <div className="p-6 space-y-6" style={{ backgroundColor: "#FFF8F0" }}>
              {/* Item Info */}
              <div className="animate-fade-in-up">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold transition-colors duration-300" style={{ color: "#4B2E2B" }}>
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold animate-pulse-gentle" style={{ color: "#6F4E37" }}>
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: "#4B2E2B" }}>
                    {item.description}
                  </p>
                )}
              </div>

              {/* Temperature Selection with hover animations */}
              {hasTemperatureOptions && (
                <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                  <h4 className="font-semibold mb-3" style={{ color: "#4B2E2B" }}>
                    Choose Temperature
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedTemperature("hot")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                        selectedTemperature === "hot" ? "animate-bounce-in" : ""
                      }`}
                      style={{
                        borderColor: selectedTemperature === "hot" ? "#6F4E37" : "#F5F5DC",
                        backgroundColor: selectedTemperature === "hot" ? "#FAF3E0" : "transparent",
                      }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Thermometer
                          className={`h-6 w-6 transition-all duration-300 ${selectedTemperature === "hot" ? "animate-pulse text-red-500" : ""}`}
                        />
                        <span className="font-medium">Hot</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setSelectedTemperature("iced")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                        selectedTemperature === "iced" ? "animate-bounce-in" : ""
                      }`}
                      style={{
                        borderColor: selectedTemperature === "iced" ? "#6F4E37" : "#F5F5DC",
                        backgroundColor: selectedTemperature === "iced" ? "#FAF3E0" : "transparent",
                      }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Snowflake
                          className={`h-6 w-6 transition-all duration-300 ${selectedTemperature === "iced" ? "animate-pulse text-blue-500" : ""}`}
                        />
                        <span className="font-medium">Iced</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Quantity Selection with smooth animations */}
              <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <h4 className="font-semibold mb-3" style={{ color: "#4B2E2B" }}>
                  Quantity
                </h4>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0 rounded-full transform hover:scale-110 active:scale-95 transition-all duration-200"
                    disabled={quantity <= 1}
                    style={{ borderColor: "#F5F5DC", color: "#4B2E2B" }}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span
                    className="font-bold text-xl min-w-[3rem] text-center transition-all duration-300"
                    style={{ color: "#4B2E2B" }}
                  >
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0 rounded-full transform hover:scale-110 active:scale-95 transition-all duration-200"
                    style={{ borderColor: "#F5F5DC", color: "#4B2E2B" }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Total Price with emphasis */}
              <div
                className="rounded-xl p-4 animate-fade-in-up"
                style={{ backgroundColor: "#FAF3E0", animationDelay: "300ms" }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium" style={{ color: "#4B2E2B" }}>
                    Total:
                  </span>
                  <span className="font-bold text-xl animate-pulse-gentle" style={{ color: "#6F4E37" }}>
                    ${(Number.parseFloat(item.price.replace("$", "")) * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button with success animation */}
              <Button
                onClick={handleAddToCart}
                disabled={!canAddToCart || isAdding}
                className={`w-full py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-white border-0 transform hover:scale-105 active:scale-95 ${
                  isAdding ? "animate-pulse-gentle" : ""
                }`}
                style={{ backgroundColor: isAdding ? "#32CD32" : "#6F4E37" }}
                onMouseEnter={(e) => !isAdding && (e.target.style.backgroundColor = "#4B2E2B")}
                onMouseLeave={(e) => !isAdding && (e.target.style.backgroundColor = "#6F4E37")}
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

              {/* Temperature Selection Reminder */}
              {hasTemperatureOptions && !selectedTemperature && (
                <p className="text-center text-sm animate-fade-in-up" style={{ color: "#6F4E37" }}>
                  Please select a temperature option above
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
