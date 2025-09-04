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
  /ui           - Shared UI components
/contexts       - React context providers
/pages          - Next.js pages
/public         - Static assets
/styles         - Global styles
```

### Key Design Principles

1. Feature-based organization
2. Context-driven state management
3. Component reusability
4. Progressive enhancement
5. Responsive design

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
   - Implement reducer pattern
   - Add provider to hierarchy in `providers.tsx`

2. Data Persistence:
   - Use localStorage for client-side data
   - Follow existing persistence patterns
   - Implement proper error handling

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

   - Add "use client" directive
   - Use dynamic imports for heavy components
   - Implement proper loading states

2. Performance:

   - Optimize images
   - Implement proper code splitting
   - Use React.memo where beneficial
   - Follow existing lazy loading patterns

3. Accessibility:
   - Use semantic HTML
   - Implement ARIA attributes
   - Ensure keyboard navigation
   - Maintain color contrast

### Error Handling

1. Form Validation:

   - Required field validation
   - Input format checking
   - User-friendly error messages

2. API/State Errors:
   - Implement error boundaries
   - Show user-friendly messages
   - Log errors appropriately

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
   - Test both themes

2. Language Support:

   - Use TranslationProvider
   - Add translations in lang files
   - Test all supported languages

3. State Management:
   - Use appropriate context
   - Follow reducer pattern
   - Implement persistence
   - Handle errors gracefully

Remember:

- Follow existing patterns
- Maintain code organization
- Consider performance
- Ensure accessibility
- Test thoroughly
