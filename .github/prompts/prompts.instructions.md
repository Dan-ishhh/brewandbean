# Effective Prompting Guide for Brew & Bean Project

## Project Context Setting

### Base Template

```
I'm working on the Brew & Bean coffee shop website project. [specific context]

Tech stack:
- Next.js
- React Context for state management
- shadcn/ui components
- Local storage for persistence

I need help with [specific task]
```

### Feature-Specific Templates

1. **Menu Management:**

```
I'm working on the menu system in Brew & Bean. The relevant files are:
- components/menu/[component].tsx
- types/menu.ts
- pages/menu.tsx

Current implementation: [describe]
Need to: [describe task - e.g., add search/filter, item customization, nutritional info]
Requirements: [categories: Coffee/Food/Pastries, item badges, customization options]
```

2. **Shopping Cart:**

```
I'm working with the cart functionality in Brew & Bean. The relevant files are:
- components/cart/[component].tsx
- contexts/cart-context.tsx

Current implementation: [describe]
Need to: [describe task]
Cart persistence: using "brewbean-cart" localStorage key
```

3. **Table Reservation:**

```
I'm working on the table reservation system in Brew & Bean. The relevant files are:
- components/reservation/[component].tsx
- contexts/reservation-context.tsx

Business rules:
- Table capacities: 2-8 people
- Time slots: 9:00-20:30 (30-minute intervals)
- Persistence: "tableReservations" localStorage key

Current behavior: [describe]
Desired behavior: [describe]
```

4. **Internationalization:**

```
I'm working on multi-language support in Brew & Bean. The relevant files are:
- contexts/language-context.tsx
- contexts/translation-context.tsx
- lib/lang-en.ts / lib/lang-hi.ts

Languages: English (en), Hindi (hi)
Current implementation: [describe]
Need to: [describe translation task]
```

5. **Theme/Styling:**

```
I'm working on the UI in Brew & Bean. The project uses:
- Light theme: #6F4E37 (coffee brown), #F5F5DC (beige)
- Dark theme: #222 (background), #e6b800 (accent)
- Mobile-first with sm: breakpoint
- shadcn/ui components

Need help with: [describe styling task]
Accessibility requirements: [ARIA, keyboard nav, screen reader, color contrast]
```

6. **Performance Optimization:**

```
I'm working on performance improvements in Brew & Bean. Current setup:
- Next.js Image optimization
- Dynamic imports for heavy components
- Code splitting patterns from pages/index.tsx

Need to: [describe optimization task]
Target: [bundle size, loading speed, component lazy loading]
```

## Best Practices for Prompts

### DO Include

1. Component Context:

   ```
   Working in [component].tsx which handles [specific functionality]
   Parent component: [parent]
   Using contexts: [relevant contexts]
   ```

2. State Management Details:

   ```
   Using [context] for state
   Current reducer actions: [relevant actions]
   Data persistence: [localStorage key if applicable]
   ```

3. UI/UX Requirements:
   ```
   - Mobile/desktop considerations
   - Theme compatibility needs
   - Accessibility requirements
   - Animation/transition expectations
   ```

### DON'T Include

1. Vague requirements like "make it better"
2. Requests that bypass established patterns
3. Generic React questions without project context
4. Requests for external library integration without discussion

## Task-Specific Prompting

### 1. New Feature Development

```
I need to add [feature] to Brew & Bean.
Requirements:
- Functionality: [describe]
- UI/UX: [describe with theme compatibility]
- State management: [specify context and reducer pattern]
- Integration points: [existing components/contexts]
- Business rules: [table capacities, time slots, menu categories if applicable]
- Accessibility: [ARIA, keyboard nav, screen reader requirements]
- Performance: [lazy loading, dynamic imports if heavy component]

Should follow existing patterns in [similar feature] for consistency.
Context provider hierarchy: [specify where in CartProvider → GlobalModalProvider → ReservationProvider → ThemeProvider → LanguageProvider → TranslationProvider]
```

### 2. Bug Fixes

```
There's an issue in [component] where:
- Current behavior: [describe]
- Expected behavior: [describe]
- Related components: [list with file paths]
- State/context involved: [specify which context and actions]
- Browser/device: [if relevant for responsive issues]
- Theme: [light/dark theme specific if applicable]
- Language: [English/Hindi if i18n related]

Relevant code location: [file path with line numbers if known]
Error messages: [console errors, localStorage issues, etc.]
```

### 3. Menu & Catalog Management

```
Working on menu functionality in [component]:
- Menu categories: [Coffee, Food, Pastries]
- Item features needed: [customization, badges, nutritional info]
- Search/filter requirements: [describe]
- Integration with cart: [add to cart flow]
- Display patterns: [grid, list, cards]
```

### 4. Internationalization Updates

```
Need to add/update translations in Brew & Bean:
- Languages: English (en), Hindi (hi)
- Translation files: lib/lang-[lang].ts
- Components affected: [list]
- New translation keys needed: [describe]
- Context switching: [if language switching behavior changes]
```

### 5. Performance & Security

```
Working on [performance/security] improvements:
- Current issue: [describe performance bottleneck or security concern]
- Target optimization: [bundle size, loading speed, input validation]
- Next.js features to use: [Image, dynamic imports, etc.]
- Security requirements: [input sanitization, XSS prevention, data validation]
```

### 6. Testing & Quality

```
Need to add/update tests for [feature]:
- Test type: [unit, integration, accessibility]
- Framework: Jest + React Testing Library
- Components to test: [list]
- User interactions: [clicks, form submissions, state changes]
- Context/state testing: [reducer actions, localStorage persistence]
```

### 2. Bug Fixes

```
There's an issue in [component] where:
- Current behavior: [describe]
- Expected behavior: [describe]
- Related components: [list]
- State/context involved: [describe]

Relevant code location: [file path]
```

### 2. Styling Updates

```
Need to update styling in [component]:
- Current theme compatibility: [light/dark theme issues]
- Responsive behavior needed: [mobile-first, sm: breakpoint]
- shadcn/ui components used: [list specific components]
- Animation requirements: [transitions, hover states]
- Accessibility considerations: [color contrast, focus states, ARIA]
- Custom CSS vs Tailwind: [which approach needed]
```

### 3. State Management

```
Working with [context] and need to:
- Add new action: [describe with reducer pattern]
- Update state structure: [describe changes while maintaining type safety]
- Handle persistence: [localStorage key and data structure]
- Maintain existing patterns from: [reference similar implementation]
- Provider hierarchy impact: [if changes affect provider order]
```

### 4. Component Architecture

```
Need to create/modify [component] in Brew & Bean:
- Feature area: [menu, cart, reservation, ui]
- Parent/child relationships: [component hierarchy]
- Props interface: [describe expected props with TypeScript]
- State management: [local state vs context usage]
- Reusability: [if component should be in /ui for reuse]
- Dynamic imports: [if component is heavy and needs lazy loading]
```

## Examples of Good Prompts

### 1. Menu Feature Addition:

```
Need to add search functionality to the menu page.
- Integration with existing menu components in components/menu/
- Should filter Coffee, Food, and Pastries categories
- Use existing shadcn/ui Input component for consistency
- Maintain theme compatibility (light/dark)
- Support both English and Hindi search terms
- Follow responsive patterns from existing menu layout
```

### 2. Cart Enhancement:

```
Need to add quantity adjustment buttons to cart items in cart-sidebar.tsx:
- Should integrate with existing cart-context reducer actions
- Follow same styling patterns as add-to-cart-button.tsx
- Maintain "brewbean-cart" localStorage persistence
- Support touch interactions for mobile
- Include loading states during quantity updates
```

### 3. Reservation Bug Fix:

```
Table reservation modal closes when clicking date inputs.
File: components/reservation/reservation-modal.tsx
- Should only close on backdrop click, not input interactions
- Needs to maintain existing theme/styling patterns
- Should follow same event propagation pattern as cart-sidebar
- Must preserve booking form state during interactions
- Test both light/dark themes and mobile responsiveness
```

### 4. Internationalization Update:

```
Need to add Hindi translations for new reservation confirmation messages:
- Add keys to lib/lang-hi.ts following existing patterns
- Update components/reservation/confirmation-modal.tsx to use new keys
- Ensure proper text direction and formatting for Hindi
- Test language switching preserves reservation state
- Maintain consistent tone with existing Hindi translations
```

### 5. Performance Optimization:

```
Menu page loads slowly due to large image assets:
- Implement Next.js Image optimization for menu item photos
- Add dynamic imports for heavy menu components following pages/index.tsx patterns
- Consider lazy loading for menu categories below the fold
- Maintain existing loading skeleton patterns from menu-item-skeleton.tsx
- Ensure optimization doesn't break existing cart integration
```

### 6. State Enhancement:

```
Need to add order history tracking to cart context:
- Extend cart-context.tsx with new reducer actions
- Follow existing reducer patterns and type safety
- Use new localStorage key "brewbean-order-history"
- Integrate with existing cart completion flow
- Maintain backward compatibility with current cart state
- Consider data cleanup/limits for localStorage size
```

## Common Pitfalls to Avoid

### 1. Unclear Context:

- ❌ "The modal isn't working"
- ✅ "The reservation modal in components/reservation/table-map.tsx isn't opening when table is clicked"

### 2. Missing Business Requirements:

- ❌ "Add a new feature to the cart"
- ✅ "Add quantity adjustment to cart items, supporting the existing customization options (size, temperature, etc.) following cart-sidebar.tsx patterns"

### 3. Ignoring Project Architecture:

- ❌ "Change how state works"
- ✅ "Extend cart-context.tsx to include new actions for order history, following existing reducer patterns and maintaining the CartProvider → GlobalModalProvider hierarchy"

### 4. Missing Performance Considerations:

- ❌ "Add a new page with lots of images"
- ✅ "Add gallery page with Next.js Image optimization and dynamic imports, following the lazy loading patterns from pages/index.tsx"

### 5. Overlooking Internationalization:

- ❌ "Add success message to booking"
- ✅ "Add success message to reservation confirmation, including translation keys for both English and Hindi in lib/lang-\*.ts files"

### 6. Missing Accessibility Context:

- ❌ "Style this button better"
- ✅ "Update button styling in reservation-modal.tsx ensuring ARIA attributes, keyboard navigation, and color contrast compliance for both themes"

### 7. Vague Security/Validation Needs:

- ❌ "Add form validation"
- ✅ "Add email and phone validation to reservation form with real-time feedback, sanitizing inputs and showing user-friendly error messages via toast"

## Advanced Prompting Techniques

### 1. Multi-Feature Integration:

```
Need to integrate menu search with cart functionality:
- Components: components/menu/* + components/cart/*
- State: menu filtering + cart-context integration
- UX: search results should maintain "Add to Cart" functionality
- Performance: search should not re-render cart sidebar
- Accessibility: search should announce results count to screen readers
```

### 2. Cross-Platform Considerations:

```
Implementing touch gestures for table selection on mobile:
- Component: components/reservation/table-map.tsx
- Desktop: maintain existing click interactions
- Mobile: add touch gestures while preserving accessibility
- State: ensure touch interactions work with reservation-context
- Testing: verify on various mobile devices and screen readers
```

### 3. Future-Proofing Requests:

```
Adding customer preferences that could support future account system:
- Current: localStorage-based preferences
- Architecture: design for easy migration to user accounts later
- Scope: theme, language, dietary restrictions, favorite items
- Integration: work with existing contexts without breaking changes
- Migration path: clear upgrade path when user accounts are added
```

Remember to:

- Reference specific file paths and component names
- Include business logic constraints (table capacities, time slots, menu categories)
- Specify context provider hierarchy impacts
- Mention theme, language, and accessibility requirements
- Consider performance implications (lazy loading, bundle size)
- Include localStorage keys and data persistence patterns
- Note integration points with existing features
- Specify testing and validation requirements
