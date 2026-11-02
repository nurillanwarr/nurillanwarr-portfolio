"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { Link } from "@/i18n/navigation"
import { DrawingSheet } from "@/components/shared/DrawingSheet"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

/**
 * Komponen AboutHero
 * Menampilkan bagian pembuka (Hero) pada halaman khusus Tentang Saya (/about):
 * - Staggered entrance animation berbasis Framer Motion (blur-to-sharp + slide up)
 * - Efek 3D Tilt & Perspective berbasis fisika pegas (useSpring) saat kursor bergerak di atas kartu foto
 * - Tombol Scroll Down interaktif dengan animasi rotasi dan pantulan halus
 *
 * @returns {JSX.Element} Elemen seksi Hero halaman About
 */
export default function AboutHero() {
  const cardRef = useRef<HTMLDivElement>(null)

  const rotateXTarget = useMotionValue(0)
  const rotateYTarget = useMotionValue(0)
  const scaleTarget = useMotionValue(1)

  const springConfig = { stiffness: 240, damping: 24, mass: 0.7 }
  const rotateX = useSpring(rotateXTarget, springConfig)
  const rotateY = useSpring(rotateYTarget, springConfig)
  const scale = useSpring(scaleTarget, springConfig)

  const glareX = useTransform(rotateY, [-10, 10], [80, 20])
  const glareY = useTransform(rotateX, [-10, 10], [20, 80])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateXTarget.set(-py * 12)
    rotateYTarget.set(px * 12)
    scaleTarget.set(1.02)
  }

  const handlePointerLeave = () => {
    rotateXTarget.set(0)
    rotateYTarget.set(0)
    scaleTarget.set(1)
  }

  const handleScrollDown = () => {
    const nextEl = document.getElementById("who-am-i")
    const lenis = typeof window !== "undefined" ? window.__lenis : null
    if (nextEl) {
      if (lenis) {
        lenis.scrollTo(nextEl, { offset: -88, duration: 1.2 })
      } else {
        nextEl.scrollIntoView({ behavior: "smooth" })
      }
    } else if (lenis) {
      lenis.scrollTo(window.innerHeight * 0.85, { duration: 1.2 })
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" })
    }
  }

  return (
    <DrawingSheet id="about-hero" className="mt-3 md:mt-4">
      <div className="px-5 pt-5 pb-8 md:px-8 md:pt-6 md:pb-12 lg:px-10">
        {/* Top Bar Navigasi & Stempel Gambar Kerja CAD */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#1C1C1A]/15 pb-4 font-mono text-[11px] tracking-[0.16em] uppercase text-[#736E65]"
        >
          <Link
            href="/#about"
            className="group inline-flex items-center gap-2 rounded-full border border-[#1C1C1A]/25 bg-[#F5F2EB] px-4 py-1.5 text-[10.5px] font-medium text-[#1C1C1A] transition-all duration-300 hover:border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-[#FAF8F5]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>BACK TO OVERVIEW</span>
          </Link>

          <div className="hidden sm:block text-[10px] text-[#736E65]/80">
            DOSSIER // BIOGRAPHY &amp; CREDENTIALS
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block border border-[#1C1C1A] bg-[#FAF8F5] px-2 py-0.5 font-semibold text-[#1C1C1A]">
              A-201
            </span>
            <span className="hidden md:inline">NURIL ANWAR — ARCHIVE</span>
          </div>
        </motion.div>

        {/* Konten Utama Hero 2-Kolom (Gaya Alvalens + Staggered Motion) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Kolom Kiri: Teks Judul, Garis Tembaga, & Tombol Scroll */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div
              variants={itemVariants}
              className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-[#736E65]"
            >
              <span className="font-semibold text-[#A3724B]">(01)</span>
              <span>PERSONAL DOSSIER</span>
              <span className="text-[#A3724B]">•</span>
              <span>SURAKARTA, ID</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3rem,6.2vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.04em] text-[#1C1C1A]"
            >
              About{" "}
              <span className="font-serif italic font-normal text-[#A3724B]">
                Me
              </span>
              <span className="text-[#B7835A]">.</span>
            </motion.h1>

            {/* Garis Aksen Tembaga yang Memanjang */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex items-center gap-2"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2.5px] w-20 origin-left bg-[#A3724B]"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] w-12 origin-left bg-[#1C1C1A]/25"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg leading-relaxed text-[#44423D] md:text-xl"
            >
              A brief introduction to my journey as a{" "}
              <span className="font-medium text-[#1C1C1A] underline decoration-[#A3724B]/60 decoration-wavy underline-offset-4">
                Full-Stack &amp; Applied AI Developer
              </span>{" "}
              — bridging clean interface engineering with intelligent system integration.
            </motion.p>

            {/* Tombol Scroll Down */}
            <motion.div variants={itemVariants} className="mt-8">
              <motion.button
                type="button"
                onClick={handleScrollDown}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex cursor-pointer items-center gap-4 rounded-full bg-[#1C1C1A] py-2 pr-2 pl-6 text-[14px] font-medium text-[#F2EFE8] transition-colors duration-300 hover:bg-[#8C5E38] hover:shadow-md"
              >
                <span className="font-mono text-xs uppercase tracking-wider">
                  Scroll For Dossier
                </span>
                <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#F2EFE8] text-[#1C1C1A]">
                  {/* Panah Baru yang Meluncur Masuk dari Atas ke Tengah Saat Hover */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="absolute h-4 w-4 -translate-y-7 opacity-0 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>

                  {/* Panah Utama yang Meluncur Turun Keluar Saat Hover */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 translate-y-0 opacity-100 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-7 group-hover:opacity-0"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Foto Potret 3D Tilt Interaktif */}
          <div
            className="flex justify-center lg:col-span-5 lg:justify-end"
            style={{ perspective: "1100px" }}
          >
            <motion.div
              ref={cardRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              initial={{ opacity: 0, scale: 0.88, rotate: 2, y: 30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                rotateX,
                rotateY,
                scale,
                transformStyle: "preserve-3d",
              }}
              className="group relative w-full max-w-[380px] border border-[#1C1C1A]/30 bg-[#F4EFE6] p-3.5 shadow-[0_14px_34px_rgba(28,28,26,0.12)]"
            >
              {/* Selotip Kertas Arsitektur di Atas */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 left-8 z-20 h-6 w-20 -rotate-3 bg-[#E4DCCB]/85 shadow-xs"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 right-8 z-20 h-6 w-20 rotate-2 bg-[#E4DCCB]/85 shadow-xs"
              />

              <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-[#736E65]">
                <span>FIG. 01 — SUBJECT</span>
                <span>SCALE 1:1</span>
              </div>

              {/* Bingkai Gambar dengan Efek Grayscale -> Color */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#1C1C1A]/20 bg-[#E5DEC9]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(28,28,26,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,28,26,0.12) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <Image
                  src="/profile.jpg"
                  alt="Nuril Anwar"
                  fill
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="font-serif text-6xl italic text-[#A3724B]"
                  >
                    N
                  </motion.span>
                  <span className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#736E65]">
                    NURIL ANWAR • PORTRAIT
                  </span>
                </div>

                {/* Efek Glare Halus Mengikuti Kursor */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-25"
                  style={{
                    background: useTransform(
                      [glareX, glareY],
                      ([x, y]) =>
                        `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.8), transparent 60%)`
                    ),
                  }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-[#55534E]">
                <span className="font-semibold text-[#1C1C1A]">NURIL ANWAR</span>
                <span className="flex items-center gap-1.5 text-[#A3724B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                  AVAILABLE FOR WORK
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </DrawingSheet>
  )
}
