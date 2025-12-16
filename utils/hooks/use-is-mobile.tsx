"use client"

import { useEffect, useState } from 'react'

const SMALL_MOBILE_BREAKPOINT = Number(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-small-mobile').trim() || 393)

const useIsMobile = (breakpoint: number = SMALL_MOBILE_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint)
    const mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`)
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