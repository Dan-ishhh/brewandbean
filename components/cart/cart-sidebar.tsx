"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Minus, Trash2, ShoppingBag, Thermometer, Snowflake } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useEffect } from "react"

export function CartSidebar() {
  const { state, dispatch } = useCart()

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: "CLOSE_CART" })
      }
    }

    if (state.isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [state.isOpen, dispatch])

  if (!state.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={() => dispatch({ type: "CLOSE_CART" })}
      />

      {/* Sidebar */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md shadow-2xl z-50 transform transition-transform"
        style={{ backgroundColor: "#FFF8F0" }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "#F5F5DC" }}>
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6" style={{ color: "#6F4E37" }} />
              <h2 className="text-xl font-bold" style={{ color: "#4B2E2B" }}>
                Your Order
              </h2>
              {state.itemCount > 0 && (
                <Badge className="border-0" style={{ backgroundColor: "#F5F5DC", color: "#4B2E2B" }}>
                  {state.itemCount} {state.itemCount === 1 ? "item" : "items"}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="rounded-full p-2"
              style={{ ":hover": { backgroundColor: "#F5F5DC" } }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              <X className="h-5 w-5" style={{ color: "#4B2E2B" }} />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 mx-auto mb-4" style={{ color: "#F5F5DC" }} />
                <h3 className="text-lg font-medium mb-2" style={{ color: "#4B2E2B" }}>
                  Your cart is empty
                </h3>
                <p className="mb-6" style={{ color: "#6F4E37" }}>
                  Add some delicious items to get started!
                </p>
                <Button
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                  className="text-white rounded-full px-6 border-0"
                  style={{ backgroundColor: "#6F4E37" }}
                >
                  Browse Menu
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item, index) => (
                  <Card
                    key={`${item.id}-${index}`}
                    className="border"
                    style={{ borderColor: "#F5F5DC", backgroundColor: "#FFF8F0" }}
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image || "/placeholder.svg?height=64&width=64&query=food item"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=64&width=64"
                          }}
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1" style={{ color: "#4B2E2B" }}>
                            {item.name}
                          </h3>

                          {/* Temperature Option */}
                          {item.options?.temperature && (
                            <div className="flex items-center gap-1 mb-1">
                              {item.options.temperature === "hot" ? (
                                <Thermometer className="h-3 w-3 text-red-500" />
                              ) : (
                                <Snowflake className="h-3 w-3 text-blue-500" />
                              )}
                              <span className="text-xs capitalize" style={{ color: "#6F4E37" }}>
                                {item.options.temperature}
                              </span>
                            </div>
                          )}

                          <p className="text-sm mb-2" style={{ color: "#6F4E37" }}>
                            ${item.price.toFixed(2)} each
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: { id: item.id, quantity: item.quantity - 1 },
                                  })
                                }
                                className="h-8 w-8 p-0 rounded-full"
                                style={{ borderColor: "#F5F5DC", color: "#4B2E2B" }}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="font-medium min-w-[2rem] text-center" style={{ color: "#4B2E2B" }}>
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: { id: item.id, quantity: item.quantity + 1 },
                                  })
                                }
                                className="h-8 w-8 p-0 rounded-full"
                                style={{ borderColor: "#F5F5DC", color: "#4B2E2B" }}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="font-semibold" style={{ color: "#4B2E2B" }}>
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                                className="h-8 w-8 p-0 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-6 space-y-4" style={{ borderColor: "#F5F5DC" }}>
              {/* Total */}
              <div className="flex justify-between items-center text-lg font-bold">
                <span style={{ color: "#4B2E2B" }}>Total:</span>
                <span style={{ color: "#6F4E37" }}>${state.total.toFixed(2)}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all border-0"
                  style={{ backgroundColor: "#6F4E37" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#4B2E2B")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#6F4E37")}
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full py-3 rounded-full bg-transparent"
                  style={{ borderColor: "#F5F5DC", color: "#4B2E2B" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#F5F5DC")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  Clear Cart
                </Button>
              </div>

              {/* Pickup Info */}
              <div className="text-center text-sm pt-2" style={{ color: "#6F4E37" }}>
                <p>🕐 Ready for pickup in 10-15 minutes</p>
                <p>📍 123 Coffee Street, Downtown District</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
