"use client"

import React, { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

declare global {
  interface Window {
    __lenis?: Lenis | null
  }
}

/**
 * Properti untuk komponen SmoothScroll
 */
interface SmoothScrollProps {
  /** Elemen anak yang akan dirender di dalam pembungkus smooth scroll */
  children: React.ReactNode
}

/**
 * Komponen SmoothScroll
 * Menyediakan pengalaman pengguliran halus (smooth scrolling) berbasis Lenis dan GSAP ScrollTrigger:
 * - Menginisialisasi Lenis instance untuk seluruh navigasi halaman dan menyinkronkannya dengan GSAP ticker
 * - Menangani intersepsi klik anchor hash internal (`#about`, `/#projects`, dll.) agar meluncur mulus dengan offset navbar fixed (-88px)
 * - Menggulir halaman secara halus ke elemen hash tujuan saat berpindah antar rute (misal dari `/about` kembali ke `/#contact`)
 * - Mematuhi preferensi aksesibilitas `prefers-reduced-motion: reduce`
 *
 * @param {SmoothScrollProps} props Properti komponen yang berisi elemen children
 * @returns {JSX.Element} Elemen fragment pembungkus konten anak
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      return
    }

    let lenis: Lenis | null = null
    let cancelled = false

    const updateLenis = (time: number) => {
      lenis?.raf(time * 1000)
    }

    const scrollToHashElement = (hash: string, immediate = false) => {
      if (!hash || hash === "#") return
      const targetId = decodeURIComponent(hash.replace(/^#/, ""))
      const targetEl = document.getElementById(targetId)
      if (!targetEl) return

      const navbarOffset = -88

      if (lenis) {
        lenis.scrollTo(targetEl, {
          offset: navbarOffset,
          duration: immediate ? 0 : 1.25,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      } else {
        const top =
          targetEl.getBoundingClientRect().top + window.scrollY + navbarOffset
        window.scrollTo({
          top,
          behavior: immediate ? "auto" : "smooth",
        })
      }
    }

    // Intersepsi klik pada tautan anchor (#section atau /locale#section) di halaman yang sama
    const handleAnchorClick = (e: MouseEvent) => {
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return
      }

      const target = e.target
      if (!(target instanceof Element)) return

      const anchor = target.closest("a")
      if (!anchor) return

      const rawHref = anchor.getAttribute("href")
      if (!rawHref || !rawHref.includes("#")) return

      try {
        const url = new URL(rawHref, window.location.href)
        if (url.origin !== window.location.origin || !url.hash) return

        // Normalisasi pathname untuk mengecek apakah masih di halaman yang sama
        const normalizePath = (p: string) => p.replace(/\/+$/, "") || "/"
        const currentPath = normalizePath(window.location.pathname)
        const destPath = normalizePath(url.pathname)

        // Cocokkan jika sama persis atau jika link berupa "/#section" saat berada di "/en" / "/id" / "/zh"
        const isLocaleHome = /^\/(en|id|zh)?$/.test(currentPath)
        const isDestLocaleHome = /^\/(en|id|zh)?$/.test(destPath)
        const isSamePage =
          currentPath === destPath || (isLocaleHome && isDestLocaleHome)

        if (!isSamePage) return

        const targetId = decodeURIComponent(url.hash.slice(1))
        const targetEl = document.getElementById(targetId)
        if (!targetEl) return

        e.preventDefault()
        e.stopPropagation()
        window.history.pushState(
          null,
          "",
          `${window.location.pathname.replace(/\/+$/, "")}${url.hash}`
        )
        scrollToHashElement(url.hash, false)
      } catch {
        // Abaikan jika href tidak valid
      }
    }

    function setupLenis() {
      try {
        if (cancelled) return

        lenis = new Lenis({
          duration: 1.15,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.95,
          touchMultiplier: 1.5,
        })

        window.__lenis = lenis

        lenis.on("scroll", ScrollTrigger.update)
        gsap.ticker.add(updateLenis)
        gsap.ticker.lagSmoothing(0)

        // Jika halaman dibuka langsung dengan hash (misal /en#projects), gulir halus ke target
        if (typeof window !== "undefined" && window.location.hash) {
          setTimeout(() => {
            scrollToHashElement(window.location.hash, false)
          }, 150)
        }
      } catch (err) {
        console.warn("Lenis smooth scroll failed to initialize, using native scroll:", err)
      }
    }

    setupLenis()
    document.addEventListener("click", handleAnchorClick, { capture: true })

    return () => {
      cancelled = true
      document.removeEventListener("click", handleAnchorClick, { capture: true })
      gsap.ticker.remove(updateLenis)
      lenis?.destroy()
      window.__lenis = null
    }
  }, [])

  // Tangani perpindahan rute (misalnya dari /about kembali ke /#about atau ke halaman baru)
  useEffect(() => {
    if (window.location.hash) {
      const targetId = decodeURIComponent(window.location.hash.slice(1))
      const timer = setTimeout(() => {
        const targetEl = document.getElementById(targetId)
        if (targetEl) {
          const lenis = window.__lenis
          if (lenis) {
            lenis.scrollTo(targetEl, {
              offset: -88,
              duration: 1.25,
              easing: (t: number) =>
                Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            })
          } else {
            const top =
              targetEl.getBoundingClientRect().top + window.scrollY - 88
            window.scrollTo({
              top,
              behavior: "smooth",
            })
          }
        }
        ScrollTrigger.refresh()
      }, 150)
      return () => clearTimeout(timer)
    } else {
      const lenis = window.__lenis
      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
      const timer = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return <>{children}</>
}
