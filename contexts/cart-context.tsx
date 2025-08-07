"use client"
import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  category: string
  quantity: number
  options?: {
    temperature?: "hot" | "iced"
    size?: "small" | "medium" | "large"
    milk?: "regular" | "oat" | "almond" | "soy"
    extras?: string[]
  }
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  isOpen: boolean
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: number | { id: number; options?: { temperature?: "hot" | "iced" } } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  isOpen: false,
}

function generateCartItemId(item: Omit<CartItem, "quantity">): string {
  // Create unique ID based on item properties and options
  const baseId = item.id.toString()
  const temperature = item.options?.temperature || ""
  const size = item.options?.size || ""
  const milk = item.options?.milk || ""
  const extras = item.options?.extras?.join(",") || ""

  return `${baseId}-${temperature}-${size}-${milk}-${extras}`
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemId = generateCartItemId(action.payload)
      const existingItem = state.items.find((item) => generateCartItemId(item) === itemId)

      let newItems: CartItem[]
      if (existingItem) {
        newItems = state.items.map((item) =>
          generateCartItemId(item) === itemId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }]
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        ...state,
        items: newItems,
        total,
        itemCount,
      }
    }

    case "REMOVE_ITEM": {
      let newItems: CartItem[];
      if (
        typeof action.payload === "object" &&
        action.payload !== null &&
        "id" in action.payload
      ) {
        const payload = action.payload as { id: number; options?: { temperature?: "hot" | "iced" } };
        newItems = state.items.map((item) => {
          if (
            item.id === payload.id &&
            item.options?.temperature === payload.options?.temperature
          ) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        }).filter(Boolean) as CartItem[];
      } else {
        newItems = state.items.map((item) => {
          if (item.id === action.payload) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        }).filter(Boolean) as CartItem[];
      }
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      return {
        ...state,
        items: newItems,
        total,
        itemCount,
      };
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.id === action.payload.id ? { ...item, quantity: Math.max(0, action.payload.quantity) } : item,
        )
        .filter((item) => item.quantity > 0)

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        ...state,
        items: newItems,
        total,
        itemCount,
      }
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        total: 0,
        itemCount: 0,
      }

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      }

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      }

    default:
      return state
  }
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("brewbean-cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        parsedCart.items.forEach((item: CartItem) => {
          const { quantity, ...rest } = item;
          for (let i = 0; i < item.quantity; i++) {
            dispatch({ type: "ADD_ITEM", payload: rest })
          }
        })
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("brewbean-cart", JSON.stringify(state))
  }, [state])

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
