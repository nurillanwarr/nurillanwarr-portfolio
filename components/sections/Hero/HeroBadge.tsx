"use client"

import React from "react"
import { useTranslations } from "next-intl"

/**
 * Komponen HeroBadge
 * Menampilkan stempel penomoran gambar kerja arsitektur di bagian paling atas Hero:
 * - Kotak kode penomoran lembar (misal: "A-101") dengan tipografi monospaced
 * - Keterangan nama, peran profesional, dan lokasi domisili dalam huruf kapital
 */
export const HeroBadge: React.FC = () => {
  const t = useTranslations("hero")

  return (
    <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-[#55534E] uppercase">
      <span className="rounded-[3px] border border-[#1C1C1A] bg-[#F8F6F1]/70 px-2 py-[3px] text-[#1C1C1A]">
        A-101
      </span>
      <span>{t("badge")}</span>
    </div>
  )
}

export default HeroBadge
