# Responsive Design Guide

This template includes a comprehensive responsive design system using the `useMobile` hook and TailwindCSS.

## useMobile Hook

The `useMobile` hook is a custom React hook that provides responsive utilities for detecting viewport sizes and managing responsive behavior.

### Import

```tsx
import { useMobile } from 'hooks'
```

### API Reference

#### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `isMobile` | `boolean` | `true` if viewport width is below 768px |
| `isSmallMobile` | `boolean` | `true` if viewport width is below 640px |
| `isTablet` | `boolean` | `true` if viewport width is between 768px and 1023px |
| `isDesktop` | `boolean` | `true` if viewport width is 1024px or above |
| `width` | `number` | Current viewport width in pixels |
| `height` | `number` | Current viewport height in pixels |
| `isAbove(breakpoint)` | `(breakpoint: Breakpoint) => boolean` | Check if width is above a breakpoint |
| `isBelow(breakpoint)` | `(breakpoint: Breakpoint) => boolean` | Check if width is below a breakpoint |

#### Breakpoints

The hook uses TailwindCSS default breakpoints:

| Breakpoint | Value | Description |
|------------|-------|-------------|
| `sm` | 640px | Small devices |
| `md` | 768px | Medium devices (tablets) |
| `lg` | 1024px | Large devices (laptops) |
| `xl` | 1280px | Extra large devices |
| `2xl` | 1536px | 2X large devices |

### Basic Usage

```tsx
import { useMobile } from 'hooks'

function MyComponent() {
  const { isMobile, isDesktop } = useMobile()

  return (
    <div>
      {isMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </div>
  )
}
```

### Advanced Usage

#### Using Breakpoint Helpers

```tsx
function MyComponent() {
  const { isAbove, isBelow } = useMobile()

  return (
    <div>
      {/* Show only on large screens and above */}
      {isAbove('lg') && <AdvancedFeatures />}

      {/* Show only on small screens */}
      {isBelow('sm') && <SimplifiedView />}
    </div>
  )
}
```

#### Getting Viewport Dimensions

```tsx
function MyComponent() {
  const { width, height } = useMobile()

  return (
    <div>
      <p>Viewport: {width}px × {height}px</p>
    </div>
  )
}
```

## Component Examples

### Avatar Component

The Avatar component supports responsive sizing:

```tsx
import Avatar from 'components/Avatar'

// Fixed size (default behavior)
<Avatar size="large" src="/path/to/image.jpg" />

// Responsive size (scales down on mobile)
<Avatar size="large" src="/path/to/image.jpg" responsive />
```

**Responsive Sizing Behavior:**

| Size | Desktop | Mobile |
|------|---------|--------|
| `small` | 40px | 32px |
| `medium` | 48px | 40px |
| `large` | 56px | 48px |

### Header Component

The Header component automatically switches between desktop navigation and mobile hamburger menu:

- **Desktop (≥768px)**: Horizontal navigation bar with inline links
- **Mobile (<768px)**: Hamburger menu button that opens a slide-down menu

```tsx
import Header from 'components/Header'

<Header />
```

### Footer Component

The Footer component adapts its layout based on screen size:

- **Desktop**: Grid layout with multiple columns side-by-side
- **Mobile**: Stacked vertical layout for better readability

```tsx
import Footer from 'components/Footer'

<Footer />
```

## Best Practices

### 1. Mobile-First Approach

Always start with mobile layout and progressively enhance for larger screens:

```tsx
// Good
<div className="px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// Bad (desktop-first)
<div className="px-8 sm:px-6 lg:px-4">
  {/* Content */}
</div>
```

### 2. Use TailwindCSS for Static Responsive Design

Use TailwindCSS responsive classes when the layout can be handled with CSS:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Grid items */}
</div>
```

### 3. Use useMobile Hook for Conditional Rendering

Use the `useMobile` hook when you need to:
- Render different components based on screen size
- Conditionally load heavy resources
- Implement complex responsive logic that CSS alone can't handle

```tsx
function MyComponent() {
  const { isDesktop } = useMobile()

  return (
    <div>
      {isDesktop ? (
        <ComplexDataTable />
      ) : (
        <SimplifiedCardView />
      )}
    </div>
  )
}
```

### 4. Performance Optimization

Avoid rendering heavy components on mobile:

```tsx
function MyComponent() {
  const { isDesktop } = useMobile()

  return (
    <div>
      {/* Only load heavy image gallery on desktop */}
      {isDesktop && <ImageGallery />}
    </div>
  )
}
```

### 5. Touch-Friendly Design

Ensure interactive elements have adequate size on mobile:

```tsx
// Good - Button has larger padding on mobile
<button className="px-6 py-3 sm:px-4 sm:py-2">
  Click me
</button>
```

## Testing Responsive Design

### Browser DevTools

1. Open Chrome/Firefox DevTools (F12)
2. Click the "Toggle device toolbar" button (or press Ctrl+Shift+M / Cmd+Shift+M)
3. Select different device presets or set custom dimensions

### Recommended Test Sizes

| Device | Width | Test Case |
|--------|-------|-----------|
| iPhone SE | 375px | Small mobile |
| iPhone 12/13 | 390px | Standard mobile |
| iPad | 768px | Tablet portrait |
| iPad Pro | 1024px | Tablet landscape |
| Laptop | 1440px | Desktop |
| Desktop | 1920px | Large desktop |

## Troubleshooting

### Hook doesn't update on resize

The hook uses `window.addEventListener('resize')` which should work automatically. If you're experiencing issues:

1. Check that the component using the hook is mounted
2. Ensure you're not in SSR context (the hook handles this with `typeof window !== 'undefined'`)

### Performance issues

If you notice performance issues with the resize listener:

1. Consider debouncing the resize event (can be added to the hook)
2. Minimize the number of components using the hook simultaneously
3. Use TailwindCSS responsive classes for simple layout changes instead

## Migration from Existing Code

If you have existing responsive code, here's how to migrate:

### Before (using only TailwindCSS)
```tsx
<div className="hidden md:block">
  <DesktopComponent />
</div>
<div className="block md:hidden">
  <MobileComponent />
</div>
```

### After (using useMobile hook)
```tsx
const { isMobile } = useMobile()

{isMobile ? <MobileComponent /> : <DesktopComponent />}
```

**Benefits:**
- Cleaner JSX
- Better TypeScript support
- Can conditionally import/load components
- More flexible conditional logic
