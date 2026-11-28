"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

/**
 * Komponen AboutHeaderStrip
 * Menampilkan bilah anotasi atas bergaya blueprint CAD untuk Section 02 — About:
 * - Garis pembatas CAD animasi yang ditarik memanjang saat di-scroll ke viewport
 * - Indeks seksi, label spesifikasi, tag kualifikasi UMS & Dicoding, serta kode lembar A-102
 */
export const AboutHeaderStrip: React.FC = () => {
  const t = useTranslations("about")
  const tags: string[] = t.raw("tags") || ["UMS", "INFORMATICS", "DICODING ALUMNI"]

  return (
    <div className="relative z-10 mb-8 pb-3.5 font-mono text-[11px] tracking-[0.14em] uppercase text-[#1C1C1A]/75">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#A3724B]">{t("sectionIndex")}</span>
          <span>{t("sectionLabel")}</span>
        </div>

        <div className="hidden items-center gap-2 text-[10px] text-[#736E65] md:flex">
          {tags.map((tag, idx) => (
            <React.Fragment key={tag}>
              {idx > 0 && <span className="text-[#A3724B]">•</span>}
              <span>{tag}</span>
            </React.Fragment>
          ))}
        </div>

        <div>
          <span className="text-[10.5px] font-medium text-[#736E65]">
            {t("sheetCode")}
          </span>
        </div>
      </div>

      {/* Garis Pembatas Horisontal CAD yang Ditarik Memanjang Saat Masuk Layar */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="absolute bottom-0 inset-x-0 h-px bg-[#1C1C1A]/20"
      />
    </div>
  )
}

export default AboutHeaderStrip
