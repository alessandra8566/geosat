'use client'

import { useEffect, useState } from 'react'
import { BREAKPOINTS } from '../constant'

const useIsMobile = (breakpoint: number = BREAKPOINTS.sm) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof globalThis === 'undefined') return

    const mediaQueryList = globalThis.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const handleMediaQueryChange = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches)

    // Initial check
    handleMediaQueryChange(mediaQueryList)
    mediaQueryList.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange)
    }
  }, [breakpoint])
  return isMobile
}

export default useIsMobile
