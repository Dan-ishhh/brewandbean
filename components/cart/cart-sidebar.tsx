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
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-800">Your Order</h2>
              {state.itemCount > 0 && (
                <Badge className="bg-orange-100 text-orange-700">
                  {state.itemCount} {state.itemCount === 1 ? "item" : "items"}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-500 mb-2">Your cart is empty</h3>
                <p className="text-gray-400 mb-6">Add some delicious items to get started!</p>
                <Button
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
                >
                  Browse Menu
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item, index) => (
                  <Card key={`${item.id}-${index}`} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>

                          {/* Temperature Option */}
                          {item.options?.temperature && (
                            <div className="flex items-center gap-1 mb-1">
                              {item.options.temperature === "hot" ? (
                                <Thermometer className="h-3 w-3 text-red-500" />
                              ) : (
                                <Snowflake className="h-3 w-3 text-blue-500" />
                              )}
                              <span className="text-xs text-gray-600 capitalize">{item.options.temperature}</span>
                            </div>
                          )}

                          <p className="text-sm text-gray-600 mb-2">${item.price.toFixed(2)} each</p>

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
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="font-medium text-gray-800 min-w-[2rem] text-center">
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
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-800">
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
            <div className="border-t border-gray-200 p-6 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-orange-600">${state.total.toFixed(2)}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-full"
                >
                  Clear Cart
                </Button>
              </div>

              {/* Pickup Info */}
              <div className="text-center text-sm text-gray-500 pt-2">
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
