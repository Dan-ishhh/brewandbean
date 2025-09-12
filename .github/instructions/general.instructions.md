---
applyTo: "**"
---

# General Instructions for Brew & Bean Development

## Project Structure & Architecture

### Directory Organization

```
/components     - React components organized by feature
  /cart         - Shopping cart related components
  /menu         - Menu display components
  /reservation  - Table booking components
  /ui           - Shared UI components (shadcn/ui based)
/contexts       - React context providers
/pages          - Next.js pages
/public         - Static assets and images
/styles         - Global styles (Tailwind CSS)
/types          - TypeScript type definitions
/lib            - Utilities and translation files
/hooks          - Custom React hooks
```

### Context Provider Hierarchy

Follow this exact hierarchy in `providers.tsx`:

```
CartProvider
└── GlobalModalProvider
    └── ReservationProvider
        └── ThemeProvider
            └── LanguageProvider
                └── TranslationProvider
```

### Key Design Principles

1. Feature-based organization
2. Context-driven state management with reducer patterns
3. Component reusability with shadcn/ui
4. Progressive enhancement
5. Mobile-first responsive design
6. Performance optimization with dynamic imports
7. Accessibility and internationalization first

## Development Standards

### Code Organization

1. File Naming:

   - React components: PascalCase (e.g., `TableMap.tsx`)
   - Contexts: kebab-case (e.g., `cart-context.tsx`)
   - Utilities: kebab-case (e.g., `use-mobile.tsx`)

2. Component Structure:

   ```tsx
   "use client";
   import /* dependencies */ "...";

   export function ComponentName() {
     // hooks
     // state
     // handlers
     // effects
     // render
   }
   ```

### State Management

1. Context Usage:

   - Create context in `/contexts`
   - Define types for state and actions
   - Implement reducer pattern for complex state
   - Add provider to hierarchy in `providers.tsx`
   - Follow established context patterns from existing providers

2. Data Persistence:

   - Use localStorage for client-side data
   - Standard localStorage keys:
     - `"brewbean-cart"` - Shopping cart items
     - `"tableReservations"` - Table booking data
     - Theme and language preferences
   - Follow existing persistence patterns
   - Implement proper error handling and fallbacks

3. Business Logic Constants:
   - Table capacities: 2-8 people
   - Reservation time slots: 9:00-20:30 (30-minute intervals)
   - Menu categories: Coffee, Food, Pastries
   - Supported languages: English (en), Hindi (hi)

### Styling Guidelines

1. Theme Colors:

   ```css
   /* Light Theme */
   --primary: #6f4e37; /* Coffee Brown */
   --secondary: #f5f5dc; /* Beige */

   /* Dark Theme */
   --primary-dark: #222;
   --accent-dark: #e6b800;
   ```

2. Responsive Design:
   - Mobile-first approach
   - Use `sm:` breakpoint for tablet/desktop
   - Follow existing responsive patterns

### Component Best Practices

1. Client Components:

   - Add "use client" directive for components with client-side features
   - Use dynamic imports for heavy components (see `pages/index.tsx`)
   - Implement proper loading states and skeletons

2. Performance:

   - Optimize images with Next.js Image component
   - Implement proper code splitting
   - Use React.memo and useMemo where beneficial
   - Follow existing lazy loading patterns from `pages/index.tsx`
   - Tree-shakeable ESM imports
   - Component lazy loading for modals and sidebars

3. Accessibility:

   - Use semantic HTML elements
   - Implement ARIA attributes for interactive elements
   - Ensure keyboard navigation support
   - Maintain color contrast compliance
   - Screen reader compatibility
   - Focus management in modals

4. Internationalization:
   - Use TranslationProvider for all user-facing text
   - Add translation keys to appropriate lang files (`lib/lang-*.ts`)
   - Test all supported languages (English, Hindi)
   - Ensure RTL/LTR text direction support

### Error Handling

1. Form Validation:

   - Required field validation for booking forms
   - Input format checking (email, phone, etc.)
   - User-friendly error messages with toast notifications
   - Real-time validation for better UX

2. State/Context Errors:

   - Implement error boundaries for context providers
   - Handle localStorage failures gracefully
   - Show user-friendly error messages
   - Log errors for debugging but don't expose technical details

3. Next.js Specific:
   - Handle client/server component boundaries
   - Manage hydration mismatches
   - Error pages for 404/500 scenarios

### Security Considerations

1. Input Validation:

   - Sanitize all user inputs
   - Validate form data before processing
   - Prevent XSS attacks in dynamic content

2. Data Handling:

   - Secure localStorage data handling
   - Validate data types and structures
   - Handle malformed data gracefully

3. Component Security:
   - Prevent event propagation issues in modals
   - Secure state updates and context manipulation
   - Validate props and state shapes

## Testing Guidelines

1. Component Testing:

   - Test user interactions
   - Verify state updates
   - Check responsive behavior
   - Validate theme switching

2. Feature Testing:
   - Test reservation flow
   - Verify cart operations
   - Check language switching
   - Validate data persistence

## Development Workflow

1. New Features:

   - Add components in feature directory
   - Create/update contexts if needed
   - Implement UI following existing patterns
   - Add proper error handling
   - Test thoroughly

2. Bug Fixes:

   - Verify issue reproduction
   - Check related components
   - Test fix thoroughly
   - Update tests if needed

3. Code Review Focus:
   - Feature completeness
   - Code organization
   - Performance implications
   - Accessibility compliance
   - Error handling
   - Test coverage

## Key Integration Points

1. Theme System:

   - Wrap components in ThemeProvider
   - Use theme-aware styling
   - Test both light and dark themes

2. Language Support:

   - Use TranslationProvider for all text
   - Add translations in lang files (`lib/lang-en.ts`, `lib/lang-hi.ts`)
   - Test all supported languages

3. State Management:
   - Use appropriate context (Cart, Reservation, etc.)
   - Follow reducer pattern for complex state
   - Implement localStorage persistence
   - Handle errors gracefully

## Performance Optimization Guidelines

1. Next.js Features:

   - Use Next.js Image component for all images
   - Implement proper code splitting with dynamic imports
   - Optimize fonts and static assets
   - Use Vercel Analytics and Speed Insights

2. React Optimization:

   - Component lazy loading for modals and heavy components
   - Tree-shakeable imports
   - Proper dependency arrays in useEffect/useMemo
   - Minimize re-renders with React.memo

3. Bundle Optimization:
   - Monitor bundle size and analyze
   - Split large components and contexts
   - Use proper import strategies

## Future Enhancement Considerations

When adding new features, consider:

- Online payment integration patterns
- Order history implementation
- Customer account system
- Staff dashboard architecture
- Kitchen display system
- Loyalty program integration
- Mobile app compatibility
- Advanced analytics integration

Remember:

- Follow existing patterns from successful components
- Maintain code organization and consistency
- Consider performance impact of new features
- Ensure accessibility compliance
- Test thoroughly across all supported features
- Document complex business logic and integration points
