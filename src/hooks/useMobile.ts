import { useState, useEffect } from 'react'

/**
 * Breakpoint configuration matching TailwindCSS defaults
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

export type Breakpoint = keyof typeof BREAKPOINTS

/**
 * Hook return type containing responsive state information
 */
export interface UseMobileReturn {
  /** True if screen width is below 768px (mobile/tablet) */
  isMobile: boolean
  /** True if screen width is below 640px (small mobile) */
  isSmallMobile: boolean
  /** True if screen width is between 768px and 1023px (tablet) */
  isTablet: boolean
  /** True if screen width is 1024px or above (desktop) */
  isDesktop: boolean
  /** Current screen width in pixels */
  width: number
  /** Current screen height in pixels */
  height: number
  /** Check if current width is above a specific breakpoint */
  isAbove: (breakpoint: Breakpoint) => boolean
  /** Check if current width is below a specific breakpoint */
  isBelow: (breakpoint: Breakpoint) => boolean
}

/**
 * Custom hook to detect mobile/tablet/desktop viewport sizes and provide responsive utilities
 *
 * @returns {UseMobileReturn} Object containing responsive state and utility functions
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { isMobile, isTablet, isDesktop, width } = useMobile()
 *
 *   return (
 *     <div>
 *       {isMobile && <MobileNav />}
 *       {isDesktop && <DesktopNav />}
 *       <p>Current width: {width}px</p>
 *     </div>
 *   )
 * }
 * ```
 */
export function useMobile(): UseMobileReturn {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  useEffect(() => {
    // Handler to update state when window is resized
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler immediately to set initial size
    handleResize()

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { width, height } = windowSize

  // Responsive breakpoint helpers
  const isAbove = (breakpoint: Breakpoint): boolean => {
    return width >= BREAKPOINTS[breakpoint]
  }

  const isBelow = (breakpoint: Breakpoint): boolean => {
    return width < BREAKPOINTS[breakpoint]
  }

  return {
    isMobile: width < BREAKPOINTS.md, // Below 768px
    isSmallMobile: width < BREAKPOINTS.sm, // Below 640px
    isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg, // 768px - 1023px
    isDesktop: width >= BREAKPOINTS.lg, // 1024px and above
    width,
    height,
    isAbove,
    isBelow
  }
}
