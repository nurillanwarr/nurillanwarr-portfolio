"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { HERO_SOCIALS, HERO_STACK } from "./constants"

/**
 * Komponen HeroFooterStrip
 * Menampilkan bilah footer pembatas di bagian bawah seksi Hero:
 * - Tautan media sosial eksternal (GitHub, LinkedIn, Instagram) dengan indikator panah serong
 * - Daftar lencana pil teknologi utama (Next.js, TypeScript, Tailwind, GSAP, React)
 * - Penunjuk arah navigasi gulir (Scroll indicator) dengan animasi pantulan panah ke bawah (bounce)
 */
export const HeroFooterStrip: React.FC = () => {
  const t = useTranslations("hero.footer")

  return (
    <div className="mt-7 flex flex-col gap-4 border-t border-[#1C1C1A]/25 pt-4 md:flex-row md:items-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-5 font-mono text-[11px] tracking-[0.12em] uppercase">
        {HERO_SOCIALS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#55534E] underline-offset-4 transition-colors hover:text-[#1C1C1A] hover:underline"
            >
              {s.label} ↗
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap items-center gap-2 font-mono text-[10.5px] tracking-[0.1em] text-[#1C1C1A] uppercase">
        {HERO_STACK.map((t) => (
          <li key={t} className="rounded-full border border-[#1C1C1A]/30 px-2.5 py-1">
            {t}
          </li>
        ))}
      </ul>

      <a
        href="#about"
        className="hidden items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] text-[#55534E] uppercase hover:text-[#1C1C1A] md:inline-flex"
      >
        {t("scroll")} <span className="animate-bounce">↓</span>
      </a>
    </div>
  )
}

export default HeroFooterStrip
