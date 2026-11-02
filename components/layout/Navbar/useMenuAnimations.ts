import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import React, { useCallback, useRef, useState } from "react"
import { NavbarProps } from "./types"

gsap.registerPlugin(useGSAP)

/**
 * Hook useMenuAnimations
 * Mengelola rangkaian animasi GSAP untuk interaksi drawer menu navigasi mobile:
 * - Mengontrol animasi morphing ikon burger (=) menjadi tanda silang (×) secara presisi
 * - Menangani animasi timeline pembukaan tirai transisi (prelayers) dan slide masuk panel navigasi
 * - Menjalankan efek stagger bertingkat untuk teks label menu, nomor indeks arsitektur, dan tautan sosial media
 * - Menyediakan handler interaksi buka, tutup, alih (toggle), dan klik item navigasi
 *
 * @param {NavbarProps & { openRef: React.MutableRefObject<boolean>; setOpen: React.Dispatch<React.SetStateAction<boolean>> }} props Konfigurasi navbar beserta kontrol status open
 * @returns Objek berisi kumpulan referensi elemen DOM animasi, state teks tombol, dan fungsi pengendali menu
 */
export function useMenuAnimations(
  props: NavbarProps & {
    openRef: React.MutableRefObject<boolean>
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
) {
  const {
    position = "right",
    menuButtonColor = "#1C1C1A",
    openMenuButtonColor = "#F2EFE8",
    changeMenuColorOnOpen = true,
    onMenuOpen,
    onMenuClose,
    openRef,
    setOpen,
  } = props

  const rootRef = useRef<HTMLDivElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const preLayersRef = useRef<HTMLDivElement | null>(null)
  const preLayerElsRef = useRef<HTMLElement[]>([])
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null)

  const plusHRef = useRef<HTMLSpanElement | null>(null)
  const plusVRef = useRef<HTMLSpanElement | null>(null)
  const iconRef = useRef<HTMLSpanElement | null>(null)

  const textInnerRef = useRef<HTMLSpanElement | null>(null)
  const textWrapRef = useRef<HTMLSpanElement | null>(null)
  const [textLines, setTextLines] = useState<string[]>(["Menu", "Close"])

  const openTlRef = useRef<gsap.core.Timeline | null>(null)
  const closeTweenRef = useRef<gsap.core.Tween | null>(null)
  const spinTweenRef = useRef<gsap.core.Timeline | null>(null)
  const colorTweenRef = useRef<gsap.core.Tween | null>(null)
  const itemEntranceTweenRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null)

  useGSAP(
    () => {
      const panel = panelRef.current
      const preContainer = preLayersRef.current

      const barTop = plusHRef.current
      const barBottom = plusVRef.current

      if (!panel || !barTop || !barBottom) return

      let preLayers: HTMLElement[] = []
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer")) as HTMLElement[]
      }
      preLayerElsRef.current = preLayers

      const offscreen = position === "left" ? -100 : 100
      gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1, visibility: "visible" })
      if (preContainer) {
        gsap.set(preContainer, { xPercent: 0, opacity: 1, visibility: "visible" })
      }

      const barsTop = rootRef.current?.querySelectorAll(".sm-bar-top")
      const barsBottom = rootRef.current?.querySelectorAll(".sm-bar-bottom")

      // Initial state: Two parallel horizontal lines (=)
      if (barsTop?.length) gsap.set(barsTop, { transformOrigin: "50% 50%", y: -3.5, rotate: 0 })
      if (barsBottom?.length) gsap.set(barsBottom, { transformOrigin: "50% 50%", y: 3.5, rotate: 0 })

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor })
    },
    {
      dependencies: [menuButtonColor, position],
      scope: rootRef,
      revertOnUpdate: true,
    }
  )

  const buildOpenTimeLine = useCallback(() => {
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return null

    openTlRef.current?.kill()
    if (closeTweenRef.current) {
      closeTweenRef.current.kill()
      closeTweenRef.current = null
    }
    itemEntranceTweenRef.current?.kill()

    const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel")) as HTMLElement[]
    const numberEls = Array.from(
      panel.querySelectorAll(".sm-panel-itemNum")
    ) as HTMLElement[]
    const socialTitle = panel.querySelector(".sm-socials-title") as HTMLElement | null
    const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link")) as HTMLElement[]

    const offscreen = position === "left" ? -100 : 100
    const layerStates = layers.map((el) => ({ el, start: offscreen }))
    const panelStart = offscreen

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
    if (numberEls.length) gsap.set(numberEls, { opacity: 0, x: -8 })
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start },
        { xPercent: 0, duration: 0.5, ease: "power4.out" },
        i * 0.07
      )
    })

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0)
    const panelDuration = 0.65

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: "power4.out" },
      panelInsertTime
    )

    if (itemEls.length) {
      const itemsStartRatio = 0.15
      const itemStart = panelInsertTime + panelDuration + itemsStartRatio

      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" },
        },
        itemStart
      )

      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            opacity: 1,
            x: 0,
            stagger: { each: 0.08, from: "start" },
          },
          itemStart + 0.1
        )
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4

      if (socialTitle) {
        tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: "power2.out" }, socialsStart)
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
          },
          socialsStart + 0.05
        )
      }
    }

    openTlRef.current = tl
    return tl
  }, [position])

  const openMenu = useCallback(() => {
    if (openRef.current) return
    openRef.current = true
    setOpen(true)
    onMenuOpen?.()

    // Animasi Icon: Dua garis sejajar (=) morph halus menjadi silang (×) seiring drawer masuk
    spinTweenRef.current?.kill()
    spinTweenRef.current = gsap.timeline()
    const barsTop = rootRef.current?.querySelectorAll(".sm-bar-top")
    const barsBottom = rootRef.current?.querySelectorAll(".sm-bar-bottom")
    if (barsTop?.length && barsBottom?.length) {
      spinTweenRef.current
        .to(barsTop, { y: 0, rotate: 45, duration: 0.65, ease: "power3.inOut" }, 0)
        .to(barsBottom, { y: 0, rotate: -45, duration: 0.65, ease: "power3.inOut" }, 0)
    }

    // Ganti Warna Tombol bila diatur
    if (changeMenuColorOnOpen && toggleBtnRef.current) {
      colorTweenRef.current?.kill()
      colorTweenRef.current = gsap.to(toggleBtnRef.current, {
        color: openMenuButtonColor,
        duration: 0.5,
        ease: "power2.inOut",
      })
    }

    const tl = buildOpenTimeLine()
    tl?.play(0)
  }, [
    buildOpenTimeLine,
    changeMenuColorOnOpen,
    onMenuOpen,
    openMenuButtonColor,
    openRef,
    setOpen,
  ])

  const closeMenu = useCallback(() => {
    if (!openRef.current) return
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return

    openTlRef.current?.kill()

    // Animasi Icon: Silang (×) kembali perlahan ke dua garis sejajar (=) selaras dengan keluarnya drawer
    spinTweenRef.current?.kill()
    spinTweenRef.current = gsap.timeline()
    const barsTop = rootRef.current?.querySelectorAll(".sm-bar-top")
    const barsBottom = rootRef.current?.querySelectorAll(".sm-bar-bottom")
    if (barsTop?.length && barsBottom?.length) {
      spinTweenRef.current
        .to(barsTop, { y: -3.5, rotate: 0, duration: 0.7, delay: 0.1, ease: "power3.inOut" }, 0)
        .to(barsBottom, { y: 3.5, rotate: 0, duration: 0.7, delay: 0.1, ease: "power3.inOut" }, 0)
    }

    // Kembalikan Warna Tombol selaras saat drawer keluar
    if (changeMenuColorOnOpen && toggleBtnRef.current) {
      colorTweenRef.current?.kill()
      colorTweenRef.current = gsap.to(toggleBtnRef.current, {
        color: menuButtonColor,
        duration: 0.6,
        delay: 0.15,
        ease: "power2.inOut",
      })
    }

    const offscreen = position === "left" ? -100 : 100
    const allEls = [panel, ...layers]

    closeTweenRef.current?.kill()
    closeTweenRef.current = gsap.to(allEls, {
      xPercent: offscreen,
      duration: 0.6,
      ease: "power3.inOut",
      stagger: { each: 0.05, from: "start" },
      onComplete: () => {
        openRef.current = false
        setOpen(false)
        onMenuClose?.()
      },
    })
  }, [
    changeMenuColorOnOpen,
    menuButtonColor,
    onMenuClose,
    openRef,
    position,
    setOpen,
  ])

  const toggleMenu = useCallback(() => {
    if (openRef.current) {
      closeMenu()
    } else {
      openMenu()
    }
  }, [closeMenu, openMenu, openRef])

  const handleItemClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
      closeMenu()

      if (!link || !link.includes("#")) return

      const hashIndex = link.indexOf("#")
      const hash = link.substring(hashIndex)
      const targetId = decodeURIComponent(hash.replace(/^#/, ""))

      if (!targetId) return

      // Cek apakah saat ini berada di halaman home (/) atau (/[locale])
      if (typeof window !== "undefined") {
        const normalizePath = (p: string) => p.replace(/\/+$/, "") || "/"
        const currentPath = normalizePath(window.location.pathname)
        const isHome = /^\/([a-zA-Z-]{2,5})?$/.test(currentPath)

        if (isHome) {
          const targetEl = document.getElementById(targetId)
          if (targetEl) {
            event.preventDefault()
            window.history.pushState(
              null,
              "",
              `${window.location.pathname.replace(/\/+$/, "")}${hash}`
            )

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
        }
      }
    },
    [closeMenu]
  )

  return {
    rootRef,
    panelRef,
    preLayersRef,
    toggleBtnRef,
    plusHRef,
    plusVRef,
    iconRef,
    textInnerRef,
    textWrapRef,
    textLines,
    setTextLines,
    openMenu,
    closeMenu,
    toggleMenu,
    handleItemClick,
  }
}
