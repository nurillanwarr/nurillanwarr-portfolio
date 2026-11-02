"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Komponen BackToTop
 * Menampilkan tombol mengambang bergaya arsitektural di sudut kanan bawah
 * yang muncul setelah halaman digulir > 300px, dan menggunakan Lenis smooth scroll
 * untuk meluncur halus kembali ke puncak halaman.
 *
 * @returns {JSX.Element} Tombol Back to Top
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const scrollToTop = () => {
    const lenis = typeof window !== "undefined" ? window.__lenis : null
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.25,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back To Top"
      className={cn(
        "group fixed right-5 bottom-6 z-40 md:right-8 md:bottom-8",
        "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full",
        "border border-[#B7835A] bg-[#B7835A] text-[#F5F2EB] shadow-[0_6px_20px_rgba(28,28,26,0.18)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[#8C5E38] hover:bg-[#8C5E38] active:scale-95",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-6 scale-75 opacity-0"
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  )
}
