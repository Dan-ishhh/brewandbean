"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Check, Thermometer, Snowflake } from "lucide-react"
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

  // Reset state when modal opens/closes
  useState(() => {
    if (isOpen) {
      setSelectedTemperature(null)
      setQuantity(1)
      setIsAdding(false)
    }
  })

  if (!isOpen) return null

  const hasTemperatureOptions = item.hot || item.iced
  const canAddToCart = !hasTemperatureOptions || selectedTemperature !== null

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
          options: hasTemperatureOptions
            ? {
                temperature: selectedTemperature!,
              }
            : undefined,
        },
      })
    }

    // Show success state briefly
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Open cart briefly to show the item was added
    dispatch({ type: "OPEN_CART" })
    setTimeout(() => dispatch({ type: "CLOSE_CART" }), 1500)

    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Header */}
            <div className="relative">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
              {item.badge && (
                <Badge className={`absolute top-4 left-4 ${item.badgeColor} border-0 px-3 py-1 text-xs font-medium`}>
                  {item.badge}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full p-2 bg-white/90 hover:bg-white shadow-md"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Item Info */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-xl font-bold text-orange-600">{item.price}</span>
                </div>
                {item.description && <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>}
              </div>

              {/* Temperature Selection */}
              {hasTemperatureOptions && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Choose Temperature</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {item.hot && (
                      <button
                        onClick={() => setSelectedTemperature("hot")}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedTemperature === "hot"
                            ? "border-red-500 bg-red-50 text-red-700"
                            : "border-gray-200 hover:border-red-300 hover:bg-red-50/50"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Thermometer className="h-6 w-6" />
                          <span className="font-medium">Hot</span>
                        </div>
                      </button>
                    )}
                    {item.iced && (
                      <button
                        onClick={() => setSelectedTemperature("iced")}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedTemperature === "iced"
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Snowflake className="h-6 w-6" />
                          <span className="font-medium">Iced</span>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Quantity Selection */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Quantity</h4>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0 rounded-full"
                    disabled={quantity <= 1}
                  >
                    <Plus className="h-4 w-4 rotate-45" />
                  </Button>
                  <span className="font-bold text-xl text-gray-800 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0 rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-orange-50 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Total:</span>
                  <span className="font-bold text-xl text-orange-600">
                    ${(Number.parseFloat(item.price.replace("$", "")) * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={!canAddToCart || isAdding}
                className={`w-full py-4 rounded-full shadow-lg hover:shadow-xl transition-all group ${
                  isAdding ? "bg-green-500 hover:bg-green-600" : "bg-orange-500 hover:bg-orange-600"
                } text-white`}
              >
                {isAdding ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Add to Cart
                    {quantity > 1 && ` (${quantity})`}
                  </>
                )}
              </Button>

              {/* Temperature Selection Reminder */}
              {hasTemperatureOptions && !selectedTemperature && (
                <p className="text-center text-sm text-gray-500">Please select a temperature option above</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
