"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { SKILL_ITEMS } from "./constants"

/**
 * Komponen AboutMarquee
 * Menampilkan pita berjalan tanpa ujung (infinite ticker marquee) berisi keahlian & teknologi utama
 * di bagian bawah seksi About terpadu.
 */
export const AboutMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeTrackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!marqueeTrackRef.current) return

      gsap.to(marqueeTrackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative z-10 -mx-5 mt-12 overflow-hidden border-y border-[#1C1C1A]/20 bg-[#1C1C1A]/[0.04] py-3.5 md:-mx-8 lg:-mx-12"
    >
      {/* Gradasi pemudar tepi kiri & kanan menyatu dengan warna vellum #F2ECE1 */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F2ECE1] to-transparent md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F2ECE1] to-transparent md:w-20" />

      <div
        ref={marqueeTrackRef}
        className="flex w-max items-center whitespace-nowrap will-change-transform"
      >
        {[...SKILL_ITEMS, ...SKILL_ITEMS].map((skill, idx) => (
          <div key={idx} className="flex items-center">
            <span className="mx-3 inline-block font-mono text-xs font-medium tracking-[0.12em] uppercase text-[#1C1C1A] md:mx-5 md:text-sm">
              {skill}
            </span>
            <span className="text-[#A3724B] opacity-60">❖</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutMarquee
