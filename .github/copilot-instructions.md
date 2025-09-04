# AI Coding Instructions for Brew & Bean

## Project Overview

Brew & Bean is a Next.js-based coffee shop and restaurant website with key features:

- Table reservations system
- Shopping cart functionality
- Menu management
- Dark/light theme support
- Multi-language support

## Architecture & Data Flow

### Context Providers

The app uses React Context for state management, wrapped in this hierarchy (see `providers.tsx`):

```
CartProvider
└── GlobalModalProvider
    └── ReservationProvider
        └── ThemeProvider
            └── LanguageProvider
                └── TranslationProvider
```

### Key Components Structure

- `/components`
  - `/cart` - Cart functionality (sidebar, modals)
  - `/menu` - Menu display components
  - `/reservation` - Table booking system
  - `/ui` - Reusable UI components using shadcn/ui

### State Management Patterns

1. Each major feature has its own context:

   - `cart-context.tsx`: Shopping cart state with localStorage persistence
   - `reservation-context.tsx`: Table booking state with localStorage persistence
   - `language-context.tsx` & `translation-context.tsx`: i18n management

2. Reducer Pattern Example (see `reservation-context.tsx`):

```tsx
type ReservationAction =
  | { type: "SET_TABLES"; payload: Table[] }
  | {
      type: "BOOK_TABLE";
      payload: { tableId: number; reservation: Partial<Table> };
    };
// ... other actions
```

## Key Features & Implementation Notes

### Table Reservation System

- Table data structure defined in `reservation-context.tsx`
- Visual table map with interactive booking UI
- Booking workflow: Select table → Fill form → Confirmation
- Availability tracking and persistence

### Shopping Cart

- Persisted in localStorage as "brewbean-cart"
- Supports item customization (e.g., pizza toppings, drink options)
- Sidebar implementation with animations

### UI/UX Conventions

1. Colors & Theming:

   - Light theme: Primary colors #6F4E37 (coffee brown), #F5F5DC (beige)
   - Dark theme: #222 (background), #e6b800 (accent)

2. Layout Components:
   - Modal pattern using `stopPropagation()` to prevent backdrop clicks
   - Responsive design with sm: breakpoint patterns

## Common Development Tasks

### Adding a New Feature

1. Create context if needed (see existing contexts as templates)
2. Add provider to hierarchy in `providers.tsx`
3. Implement UI components in appropriate `/components` subdirectory
4. Use shadcn/ui components for consistent styling

### State Updates

- Use context dispatch functions for state changes
- Implement localStorage persistence in context providers if needed
- Follow existing patterns for optimistic updates

### Component Development Guidelines

1. Use "use client" directive for components with client-side features
2. Follow existing patterns for dark/light theme support
3. Implement responsive designs using sm: breakpoint
4. Use dynamic imports for heavy components (see `pages/index.tsx`)

## Testing & Debugging

- Check localStorage for cart and reservation persistence
- Verify theme transitions
- Test responsive layouts at sm breakpoint
- Ensure modal backdrops prevent propagation

## Performance Considerations

- Use dynamic imports for heavy components
- Implement proper React.memo and useMemo where needed
- Follow existing code splitting patterns from `pages/index.tsx`
