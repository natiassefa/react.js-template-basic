/**
 * Examples of using the useMobile hook
 *
 * This file demonstrates various ways to use the useMobile hook
 * for responsive design in your React components.
 */

import { useMobile } from './useMobile'

// Example 1: Basic mobile detection
export function Example1_BasicUsage() {
  const { isMobile, isDesktop } = useMobile()

  return (
    <div>
      {isMobile && <p>You are viewing this on a mobile device</p>}
      {isDesktop && <p>You are viewing this on a desktop device</p>}
    </div>
  )
}

// Example 2: Conditional rendering based on screen size
export function Example2_ConditionalRendering() {
  const { isMobile, isTablet, isDesktop } = useMobile()

  return (
    <nav>
      {isMobile && <MobileMenu />}
      {isTablet && <TabletMenu />}
      {isDesktop && <DesktopMenu />}
    </nav>
  )
}

// Example 3: Using breakpoint helpers
export function Example3_BreakpointHelpers() {
  const { isAbove, isBelow } = useMobile()

  return (
    <div>
      {/* Show on large screens and above (1024px+) */}
      {isAbove('lg') && <AdvancedFeatures />}

      {/* Show only on small screens (below 640px) */}
      {isBelow('sm') && <SimplifiedView />}

      {/* Show on medium and above (768px+) */}
      {isAbove('md') && <TabletAndDesktopContent />}
    </div>
  )
}

// Example 4: Dynamic styling based on viewport
export function Example4_DynamicStyling() {
  const { isMobile, width } = useMobile()

  const containerStyles = {
    padding: isMobile ? '16px' : '32px',
    maxWidth: width < 768 ? '100%' : '1200px'
  }

  return (
    <div style={containerStyles}>
      <h1 style={{ fontSize: isMobile ? '24px' : '48px' }}>
        Responsive Heading
      </h1>
    </div>
  )
}

// Example 5: Getting viewport dimensions
export function Example5_ViewportDimensions() {
  const { width, height } = useMobile()

  return (
    <div>
      <p>Viewport width: {width}px</p>
      <p>Viewport height: {height}px</p>
    </div>
  )
}

// Example 6: Complex responsive logic
export function Example6_ComplexLogic() {
  const { isMobile, isSmallMobile, width, isAbove } = useMobile()

  const columns = () => {
    if (isSmallMobile) return 1
    if (isMobile) return 2
    if (width < 1280) return 3
    return 4
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns()}, 1fr)`,
        gap: isMobile ? '8px' : '16px'
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div key={item}>Item {item}</div>
      ))}
    </div>
  )
}

// Example 7: Combining with Tailwind CSS
export function Example7_WithTailwind() {
  const { isMobile } = useMobile()

  return (
    <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-8'}`}>
      {/* You can still use Tailwind responsive classes */}
      <h1 className="text-2xl sm:text-4xl lg:text-6xl">
        Responsive with both approaches
      </h1>

      {/* But use the hook when you need conditional rendering */}
      {isMobile ? (
        <MobileComponent />
      ) : (
        <DesktopComponent />
      )}
    </div>
  )
}

// Example 8: Lazy loading based on viewport
export function Example8_LazyLoading() {
  const { isDesktop } = useMobile()

  return (
    <div>
      <h2>Main Content</h2>

      {/* Only load heavy component on desktop */}
      {isDesktop && <HeavyDataVisualization />}

      {/* Show lightweight alternative on mobile */}
      {!isDesktop && <SimplifiedChart />}
    </div>
  )
}

// Mock components for examples
function MobileMenu() { return <div>Mobile Menu</div> }
function TabletMenu() { return <div>Tablet Menu</div> }
function DesktopMenu() { return <div>Desktop Menu</div> }
function AdvancedFeatures() { return <div>Advanced Features</div> }
function SimplifiedView() { return <div>Simplified View</div> }
function TabletAndDesktopContent() { return <div>Tablet and Desktop Content</div> }
function MobileComponent() { return <div>Mobile Component</div> }
function DesktopComponent() { return <div>Desktop Component</div> }
function HeavyDataVisualization() { return <div>Heavy Data Visualization</div> }
function SimplifiedChart() { return <div>Simplified Chart</div> }
