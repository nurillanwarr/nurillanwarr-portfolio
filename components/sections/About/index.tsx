"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"
import { DrawingSheet } from "@/components/shared/DrawingSheet"
import { AboutHeaderStrip } from "./AboutHeaderStrip"
import { AboutStudioStamp } from "./AboutStudioStamp"
import { AboutManifesto } from "./AboutManifesto"
import { AboutMetrics } from "./AboutMetrics"
import { AboutMarquee } from "./AboutMarquee"
import { AboutFooterStrip } from "./AboutFooterStrip"

/**
 * Komponen Utama AboutSection Terpadu (Opsi A — Gabungan Intro + About)
 * Menyatukan seluruh sub-komponen di dalam lembar DrawingSheet varian "editorial":
 * - Giant Background Watermark ("ABOUT" / "TENTANG") tepat di tengah dan berukuran masif
 * - AboutHeaderStrip: Baris anotasi spesifikasi CAD atas
 * - AboutStudioStamp: Stempel arsitektur kolom kiri yang meluncur turun mengikuti scroll
 * - AboutManifesto: Teks manifesto utama (sorotan serif italic tembaga + GSAP word reveal + tombol CTA)
 * - AboutMetrics: 4 spesifikasi ringkas dalam bar kartu kompak
 * - AboutMarquee: Pita berjalan keahlian teknis tanpa ujung
 * - AboutFooterStrip: Baris penanda lembar bawah
 */
export const AboutSection: React.FC = () => {
  const t = useTranslations("about")
  const sectionRef = useRef<HTMLDivElement>(null)
  const watermarkTextRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (!watermarkTextRef.current || !sectionRef.current) return

      // Parallax halus untuk Watermark tipografi raksasa
      gsap.fromTo(
        watermarkTextRef.current,
        { y: -28 },
        {
          y: 28,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <DrawingSheet id="about" variant="second" className="mt-8 md:mt-12">
      <div
        ref={sectionRef}
        className="relative overflow-hidden px-5 pt-7 pb-6 md:px-8 md:pt-10 md:pb-8 lg:px-12"
      >
        {/* Lapisan Latar Belakang: Tipografi Watermark Raksasa ("ABOUT" / "TENTANG") */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none"
        >
          <span
            ref={watermarkTextRef}
            className="inline-block font-sans text-[28vw] font-extrabold leading-none tracking-[-0.06em] text-[#1C1C1A]/[0.055] blur-[1.5px] will-change-transform md:text-[23vw] lg:text-[310px]"
          >
            {t("watermark")}
          </span>
        </div>

        {/* 1. Baris Header Spesifikasi CAD */}
        <AboutHeaderStrip />

        {/* 2. Stempel Studio Kiri (Mengikuti Scroll) + Manifesto Utama Kanan */}
        <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <AboutStudioStamp />
          <AboutManifesto />
        </div>

        {/* 3. Bar Spesifikasi Ringkas (Compact CAD Spec Strip) */}
        <div className="relative z-10">
          <AboutMetrics />
        </div>

        {/* 4. Pita Berjalan (Marquee) Keahlian Teknis */}
        <AboutMarquee />

        {/* 5. Baris Footer Spesifikasi CAD */}
        <AboutFooterStrip />
      </div>
    </DrawingSheet>
  )
}

export default AboutSection
