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

1. Table Reservation:

```
I'm working on the table reservation system in Brew & Bean. The relevant files are:
- components/reservation/[component].tsx
- contexts/reservation-context.tsx

Current behavior: [describe]
Desired behavior: [describe]
```

2. Shopping Cart:

```
I'm working with the cart functionality in Brew & Bean. The relevant files are:
- components/cart/[component].tsx
- contexts/cart-context.tsx

Current implementation: [describe]
Need to: [describe task]
```

3. Theme/Styling:

```
I'm working on the UI in Brew & Bean. The project uses:
- Light theme: #6F4E37 (coffee brown), #F5F5DC (beige)
- Dark theme: #222 (background), #e6b800 (accent)
- Mobile-first with sm: breakpoint

Need help with: [describe styling task]
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
- UI/UX: [describe]
- State management: [describe]
- Integration points: [describe]

Should follow existing patterns in [similar feature] for consistency.
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

### 3. Styling Updates

```
Need to update styling in [component]:
- Current theme compatibility: [describe]
- Responsive behavior needed: [describe]
- Animation requirements: [describe]
- Accessibility considerations: [describe]
```

### 4. State Management

```
Working with [context] and need to:
- Add new action: [describe]
- Update state structure: [describe]
- Handle persistence: [describe]
- Maintain existing patterns from: [example]
```

## Examples of Good Prompts

1. Feature Addition:

```
Need to add a drink customization modal to the menu items.
- Similar to existing pizza customization in cart-sidebar.tsx
- Should use same theme/styling patterns
- Needs to integrate with cart context
- Must support both light/dark themes
```

2. Bug Fix:

```
Table reservation modal closes when clicking inputs.
File: components/reservation/reservation-modal.tsx
- Should only close on backdrop click
- Needs to maintain existing theme/styling
- Should follow same pattern as cart-sidebar
```

3. State Update:

```
Need to add order history tracking to cart context:
- Similar to table reservation persistence
- Use localStorage
- Follow existing reducer pattern
- Maintain type safety
```

## Common Pitfalls to Avoid

1. Unclear Context:

   - ❌ "The modal isn't working"
   - ✅ "The reservation modal in table-map.tsx isn't opening when clicked"

2. Missing Requirements:

   - ❌ "Add a new feature to the cart"
   - ✅ "Add quantity adjustment to cart items, following the existing cart-sidebar.tsx patterns"

3. Inconsistent Patterns:
   - ❌ "Change how state works"
   - ✅ "Extend cart-context to include new actions for order history, following existing reducer patterns"

Remember to:

- Reference existing code patterns
- Specify file paths and component names
- Include relevant context providers
- Mention theme/responsive requirements
- Note persistence needs
- Consider accessibility impact
