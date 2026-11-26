"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

/**
 * Komponen AboutMetrics (Versi Compact CAD Spec Strip)
 * Menampilkan 4 spesifikasi inti dalam format bar tabel arsitektur yang ringkas,
 * dengan dukungan multi-bahasa next-intl.
 */
export const AboutMetrics: React.FC = () => {
  const t = useTranslations("about.metrics")
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (!gridRef.current) return

      const items = gridRef.current.querySelectorAll(".metric-card")

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
          },
        }
      )
    }, gridRef)

    return () => ctx.revert()
  }, [])

  const metricsData = [
    {
      label: t("origin.label"),
      value: t("origin.value"),
      desc: t("origin.desc"),
    },
    {
      label: t("core.label"),
      value: t("core.value"),
      desc: t("core.desc"),
    },
    {
      label: t("ai.label"),
      value: t("ai.value"),
      desc: t("ai.desc"),
    },
    {
      label: t("credential.label"),
      value: t("credential.value"),
      desc: t("credential.desc"),
    },
  ]

  return (
    <div
      ref={gridRef}
      className="mt-8 grid grid-cols-2 gap-3 border-t border-[#1C1C1A]/15 pt-5 md:grid-cols-4 md:gap-4"
    >
      {metricsData.map((item, idx) => (
        <div
          key={idx}
          className="metric-card group relative flex items-center justify-between rounded-lg border border-[#1C1C1A]/12 bg-[#EBE3D7]/55 px-3.5 py-2.5 transition-colors duration-300 hover:border-[#A3724B]/60 hover:bg-[#F5F2EB]"
        >
          <div className="min-w-0">
            {/* Label Kategori Kecil */}
            <div className="flex items-center gap-1.5 font-mono text-[9px] font-semibold tracking-[0.14em] uppercase text-[#A3724B]">
              <span>{"//"}</span>
              <span className="truncate">{item.label}</span>
            </div>

            {/* Nilai Ringkas 1 Baris */}
            <div className="mt-0.5 truncate text-sm font-medium tracking-tight text-[#1C1C1A] md:text-base">
              {item.value}
            </div>

            {/* Keterangan Detail */}
            <div className="truncate font-mono text-[9px] tracking-wide text-[#736E65] uppercase">
              {item.desc}
            </div>
          </div>

          <span className="ml-2 shrink-0 font-mono text-[10px] text-[#1C1C1A]/25 transition-colors group-hover:text-[#A3724B]">
            0{idx + 1}
          </span>
        </div>
      ))}
    </div>
  )
}

export default AboutMetrics
