"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import { HERO_PORTRAIT } from "./constants"

const springConfig = {
  stiffness: 260,
  damping: 26,
  mass: 0.7,
}

/**
 * Komponen Tape
 * Menampilkan elemen visual selotip kertas perekat di sudut bingkai foto:
 * - Efek blur latar belakang halus dengan bayangan tipis
 * - Posisi absolut dengan rotasi dinamis untuk memperkuat estetika lembar kerja fisik
 *
 * @param {{ className: string }} props - Kelas CSS Tailwind tambahan untuk penempatan dan orientasi sudut
 * @returns {JSX.Element} Elemen dekorasi selotip kertas
 */
const Tape: React.FC<{ className: string }> = ({ className }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute z-30 h-6 w-20 bg-[#E4DCCB]/85 shadow-[0_1px_2px_rgba(28,28,26,0.14)] backdrop-blur-[1px] ${className}`}
  />
)

/**
 * Komponen HeroPortrait
 * Menampilkan kartu foto profil interaktif bergaya sketsa/lembar kerja arsitektur:
 * - Efek kemiringan 3D (3D tilt & perspective) berbasis fisika pegas (spring animation) yang mengikuti koordinat kursor mouse
 * - Efek pencahayaan/kilau radial dinamis (glare sheen) saat pointer digerakkan di atas kartu
 * - Bingkai foto dengan selotip perekat (Tape) dan tekstur kertas sekunder (/paper-texture-2.jpg)
 * - Dukungan fallback placeholder jika gambar belum tersedia atau gagal dimuat
 * - Anotasi teknis (rasio skala 1:1, nomor figur gambar, peran, dan indikator status ketersediaan kerja berkedip)
 * - Penonaktifan otomatis animasi interaktif jika preferensi pengguna mengaktifkan reduced motion atau pada perangkat sentuh (touchscreen)
 *
 * @returns {JSX.Element} Elemen kartu potret foto profil interaktif
 */
export const HeroPortrait: React.FC = () => {
  const [hasError, setHasError] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const p = HERO_PORTRAIT
  const hasImage = Boolean(p.src && p.src.trim() !== "" && !hasError)

  const cursorX = useMotionValue(50)
  const cursorY = useMotionValue(50)
  const rotateXTarget = useMotionValue(0)
  const rotateYTarget = useMotionValue(0)
  const scaleTarget = useMotionValue(1)
  const shadowAlphaTarget = useMotionValue(0.12)
  const pressureTarget = useMotionValue(0)

  const rotateX = useSpring(rotateXTarget, springConfig)
  const rotateY = useSpring(rotateYTarget, springConfig)
  const scale = useSpring(scaleTarget, springConfig)
  const shadowAlpha = useSpring(shadowAlphaTarget, springConfig)
  const pressure = useSpring(pressureTarget, springConfig)

  const glareAlpha = useTransform(pressure, [0, 1], [0, 0.18])
  const cardShadow = useMotionTemplate`0 22px 48px rgba(28, 28, 26, ${shadowAlpha})`
  const pressureGlare = useMotionTemplate`radial-gradient(circle at ${cursorX}% ${cursorY}%, rgba(255, 252, 245, ${glareAlpha}) 0%, rgba(255, 252, 245, 0.04) 22%, transparent 48%)`

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    function resetCard() {
      rotateXTarget.set(0)
      rotateYTarget.set(0)
      scaleTarget.set(1)
      shadowAlphaTarget.set(0.12)
      pressureTarget.set(0)
      cursorX.set(50)
      cursorY.set(50)
    }

    if (
      prefersReducedMotion ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      resetCard()
      return
    }

    function handleMouseMove(event: MouseEvent) {
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
      const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1)
      const offsetX = x - 0.5
      const offsetY = y - 0.5

      cursorX.set(x * 100)
      cursorY.set(y * 100)
      rotateXTarget.set(offsetY * -8)
      rotateYTarget.set(offsetX * 8)
      scaleTarget.set(0.988)
      shadowAlphaTarget.set(0.18)
      pressureTarget.set(1)
    }

    function handleMouseEnter() {
      scaleTarget.set(0.992)
      shadowAlphaTarget.set(0.16)
      pressureTarget.set(0.7)
    }

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", resetCard)
    card.addEventListener("mousemove", handleMouseMove)

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", resetCard)
      card.removeEventListener("mousemove", handleMouseMove)
    }
  }, [
    cursorX,
    cursorY,
    prefersReducedMotion,
    pressureTarget,
    rotateXTarget,
    rotateYTarget,
    scaleTarget,
    shadowAlphaTarget,
  ])

  return (
    <div className="relative mx-auto w-full max-w-[340px] [perspective:1200px] sm:max-w-[370px] lg:mr-0">
      {/* Label anotasi atas */}
      <div className="mb-2.5 flex items-center gap-3 font-mono text-[10.5px] tracking-[0.14em] text-[#55534E] uppercase">
        <span>{p.fig}</span>
        <span className="h-px flex-1 bg-[#1C1C1A]/30" />
        <span>1:1</span>
      </div>

      {/* Lembar kertas kedua (/paper-texture-2.jpg) dengan efek 3D tilt */}
      <motion.div
        ref={cardRef}
        style={{
          boxShadow: cardShadow,
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative rotate-[1.2deg] border border-[#1C1C1A]/25 p-3 will-change-transform md:p-3.5"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/paper-texture-2.jpg')" }}
        />
        <Tape className="-top-3 left-6 -rotate-6" />
        <Tape className="-top-3 right-6 rotate-6" />

        {/* Bingkai foto */}
        <div className="relative aspect-[4/4.2] overflow-hidden border border-[#1C1C1A] bg-[#EAE6DC]">
          {hasImage ? (
            <Image
              src={p.src}
              alt={p.alt}
              fill
              priority
              sizes="(min-width: 1024px) 460px, 90vw"
              onError={() => setHasError(true)}
              className="object-cover grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
            />
          ) : (
            <div className="oda-mm-grid absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
              <span className="text-[72px] leading-none font-semibold tracking-tight text-[#1C1C1A]/80">
                N
              </span>
              <span className="font-mono text-[10px] tracking-[0.14em] text-[#6B6964] uppercase">
                Letakkan foto di /public/profile.jpg
              </span>
            </div>
          )}

          {/* Efek kilau halus mengikuti kursor */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            style={{ background: pressureGlare }}
          />
        </div>

        {/* Keterangan bawah foto */}
        <div className="relative mt-3 flex items-end justify-between gap-4 font-mono">
          <div>
            <p className="text-[13px] font-medium text-[#1C1C1A]">{p.name}</p>
            <p className="mt-0.5 text-[10.5px] tracking-[0.12em] text-[#6B6964] uppercase">
              {p.role}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10.5px] tracking-[0.1em] text-[#1C1C1A] uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B7835A]" />
            {p.status}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroPortrait
