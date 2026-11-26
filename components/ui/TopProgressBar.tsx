"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

/**
 * TopProgressBar (Status Bar Navigasi & Pergantian Halaman ala Alvalens)
 * - Muncul di tepi paling atas layar (fixed top-0) dengan nuansa warna tembaga arsitektural (#8C5E38 & #B7835A).
 * - Memberikan indikator progress bergerak presisi saat terjadi navigasi rute atau pergantian bahasa.
 * - Memiliki efek 'peg' (glowing head) ala NProgress Alvalens.
 */
export const TopProgressBar: React.FC = () => {
  const pathname = usePathname()
  const [progress, setProgress] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  // Pantau event kustom pergantian rute atau pergantian bahasa
  useEffect(() => {
    let timer1: NodeJS.Timeout
    let timer2: NodeJS.Timeout
    let timer3: NodeJS.Timeout
    let timerDone: NodeJS.Timeout

    const startBar = () => {
      setIsVisible(true)
      setProgress(15)

      timer1 = setTimeout(() => setProgress(45), 100)
      timer2 = setTimeout(() => setProgress(75), 250)
      timer3 = setTimeout(() => setProgress(90), 450)
    }

    const finishBar = () => {
      setProgress(100)
      timerDone = setTimeout(() => {
        setIsVisible(false)
        setProgress(0)
      }, 300)
    }

    window.addEventListener("route-change-start", startBar)
    window.addEventListener("route-change-end", finishBar)
    window.addEventListener("language-switch-start", startBar)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timerDone)
      window.removeEventListener("route-change-start", startBar)
      window.removeEventListener("route-change-end", finishBar)
      window.removeEventListener("language-switch-start", startBar)
    }
  }, [])

  // Saat pathname berubah, selesaikan progress bar
  useEffect(() => {
    setProgress(100)
    const t = setTimeout(() => {
      setIsVisible(false)
      setProgress(0)
    }, 250)
    return () => clearTimeout(t)
  }, [pathname])

  if (!isVisible && progress === 0) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 right-0 z-[999999] h-[3px] overflow-hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-[#B7835A] via-[#8C5E38] to-[#1C1C1A] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px rgba(140, 94, 56, 0.7), 0 0 4px rgba(183, 131, 90, 0.9)",
        }}
      >
        {/* Glowing Head ala NProgress Alvalens */}
        <div className="absolute right-0 top-0 h-full w-24 -rotate-3 shadow-[0_0_12px_#B7835A,0_0_6px_#8C5E38] opacity-100" />
      </div>
    </div>
  )
}

export default TopProgressBar
