"use client"

import { useEffect, useState } from 'react'

const SMALL_MOBILE_BREAKPOINT = Number(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-small-mobile').trim() || 393)

const useIsMobile = (breakpoint: number = SMALL_MOBILE_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof globalThis === "undefined") return

    const checkMobile = () => setIsMobile(globalThis.innerWidth < breakpoint)
    const mediaQueryList = globalThis.matchMedia(`(max-width: ${breakpoint}px)`)
    const handleMediaQueryChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    // Initial check
    checkMobile()
    mediaQueryList.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange)
    }
  }, [breakpoint])
  return isMobile
}

export default useIsMobile