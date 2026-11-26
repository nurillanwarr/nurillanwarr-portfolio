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
import { useTranslations } from "next-intl"
import { HERO_PORTRAIT } from "./constants"

const springConfig = {
  stiffness: 260,
  damping: 26,
  mass: 0.7,
}

/**
 * Komponen Tape
 * Menampilkan elemen visual selotip kertas perekat di sudut bingkai foto
 */
const Tape: React.FC<{ className: string }> = ({ className }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute z-30 h-6 w-20 bg-[#E4DCCB]/85 shadow-[0_1px_2px_rgba(28,28,26,0.14)] backdrop-blur-[1px] ${className}`}
  />
)

/**
 * Komponen HeroPortrait
 * Menampilkan kartu foto profil interaktif bergaya sketsa/lembar kerja arsitektur
 */
export const HeroPortrait: React.FC = () => {
  const t = useTranslations("hero.portrait")
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

  const rotateX = useSpring(rotateXTarget, springConfig)
  const rotateY = useSpring(rotateYTarget, springConfig)
  const scale = useSpring(scaleTarget, springConfig)

  const glareX = useTransform(rotateY, [-10, 10], [80, 20])
  const glareY = useTransform(rotateX, [-10, 10], [20, 80])
  const pressureGlare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 65%)`

  const shadowX = useTransform(rotateY, [-10, 10], [18, -18])
  const shadowY = useTransform(rotateX, [-10, 10], [-14, 24])
  const cardShadow = useMotionTemplate`${shadowX}px ${shadowY}px 36px rgba(28, 28, 26, 0.16)`

  useEffect(() => {
    if (prefersReducedMotion) return

    const card = cardRef.current
    if (!card) return

    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const clampedX = Math.max(0, Math.min(rect.width, x))
      const clampedY = Math.max(0, Math.min(rect.height, y))

      cursorX.set((clampedX / rect.width) * 100)
      cursorY.set((clampedY / rect.height) * 100)

      const normX = clampedX / rect.width - 0.5
      const normY = clampedY / rect.height - 0.5

      rotateYTarget.set(normX * 12)
      rotateXTarget.set(-normY * 12)
    }

    const handleMouseEnter = () => {
      scaleTarget.set(1.025)
    }

    const handleMouseLeave = () => {
      scaleTarget.set(1)
      rotateXTarget.set(0)
      rotateYTarget.set(0)
      cursorX.set(50)
      cursorY.set(50)
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [
    cursorX,
    cursorY,
    prefersReducedMotion,
    rotateXTarget,
    rotateYTarget,
    scaleTarget,
  ])

  return (
    <div className="relative mx-auto w-full max-w-[420px] select-none [perspective:1200px]">
      {/* Garis Ukur CAD Pojok Kanan Atas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-5 right-0 flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#736E65]"
      >
        <span>1:1</span>
        <span className="h-[1px] w-8 bg-[#1C1C1A]/30" />
        <span>{t("fig")}</span>
      </div>

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
                {t("photoPrompt")}
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
            <p className="text-[13px] font-medium text-[#1C1C1A]">{t("name")}</p>
            <p className="mt-0.5 text-[10.5px] tracking-[0.12em] text-[#6B6964] uppercase">
              {t("role")}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10.5px] tracking-[0.1em] text-[#1C1C1A] uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B7835A]" />
            {t("status")}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroPortrait
