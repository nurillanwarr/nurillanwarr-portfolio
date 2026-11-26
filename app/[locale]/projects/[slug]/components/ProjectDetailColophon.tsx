"use client"

import React from "react"
import { Link } from "@/i18n/navigation"
import { useTranslations, useLocale } from "next-intl"

interface ProjectDetailColophonProps {
  locale?: string
}

/**
 * Komponen ProjectDetailColophon (Bagian 3 — Footer Identitas & Kontak Nuril Anwar)
 * Menampilkan footer kolofon bergaya blueprint dengan palet kertas vellum portofolio:
 * - Garis ukur horizontal dengan tanda miring (/) di kedua ujung
 * - Tipografi studio ("N28") beserta identitas Universitas Muhammadiyah Surakarta
 * - Tabel Kolofon 12-Kotak (2 baris x 6 kolom) dwibahasa (EN & ID)
 */
export const ProjectDetailColophon: React.FC<ProjectDetailColophonProps> = ({
  locale: localeProp,
}) => {
  const t = useTranslations("projects")
  const hookLocale = useLocale()
  const locale = localeProp || hookLocale || "en"
  const isId = locale === "id"

  return (
    <footer className="mt-20 md:mt-28">
      {/* Tombol Back to Projects Penutup */}
      <div className="mb-14 flex justify-center">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-3 rounded-full border border-[#1C1C1A]/20 bg-[#FAF6F0] px-6 py-3 font-mono text-xs font-semibold tracking-wider text-[#1C1C1A] uppercase transition-all duration-300 hover:border-[#8C5E38] hover:bg-[#8C5E38] hover:text-[#FAF8F5] hover:shadow-lg active:scale-95 shadow-2xs"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1C1C1A]/10 text-[#1C1C1A] transition-all duration-300 group-hover:bg-white group-hover:text-[#8C5E38] group-hover:-translate-x-1">
            ←
          </span>
          <span>{t("backToProjects")}</span>
        </Link>
      </div>

      {/* Garis Dimensi Atas dengan Tanda Slash (/) di Ujung Kiri & Kanan */}
      <div className="relative flex items-center justify-center">
        <div className="relative h-[1px] flex-1 bg-[#1C1C1A]/20">
          <span className="absolute -top-1.5 left-0 h-3 w-[1.2px] rotate-35 bg-[#1C1C1A]/40" />
        </div>
        <span className="px-4 font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#736E65]">
          NURIL ANWAR · {isId ? "PENGEMBANG FULL-STACK & APPLIED AI" : "FULL-STACK & APPLIED AI DEVELOPER"} · UMS
        </span>
        <div className="relative h-[1px] flex-1 bg-[#1C1C1A]/20">
          <span className="absolute -top-1.5 right-0 h-3 w-[1.2px] rotate-35 bg-[#1C1C1A]/40" />
        </div>
      </div>

      {/* Tipografi Raksasa Studio + Identitas Surakarta di Kanan Bawah */}
      <div className="mt-6 mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="font-sans text-[24vw] font-bold leading-[0.8] tracking-[-0.06em] text-[#1C1C1A] select-none md:text-[20vw] lg:text-[260px]">
          N28
        </div>

        <div className="font-mono text-[10.5px] leading-relaxed tracking-[0.12em] uppercase text-[#55534E] md:pb-3 md:text-right">
          <div>{isId ? "PENGEMBANG WEB, MOBILE & APPLIED AI" : "FULL-STACK WEB, MOBILE & AI ENGINEER"}</div>
          <div>{isId ? "SURAKARTA, JAWA TENGAH" : "SURAKARTA, CENTRAL JAVA"}</div>
          <div>{isId ? "UNIVERSITAS MUHAMMADIYAH SURAKARTA" : "MUHAMMADIYAH UNIVERSITY OF SURAKARTA"}</div>
        </div>
      </div>

      {/* Tabel Kolofon Blueprint 12-Kotak (2 Baris x 6 Kolom) */}
      <div className="grid grid-cols-2 border-t border-l border-[#1C1C1A]/20 bg-[#FAF6F0] md:grid-cols-6 rounded-2xl overflow-hidden shadow-sm">
        {/* Baris 1 */}
        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "PENGEMBANG" : "DEVELOPER"}
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm font-medium text-[#1C1C1A]">
            <span className="inline-flex h-5 w-5 items-center justify-center border border-[#1C1C1A]/30 bg-[#EBE3D7] font-mono text-[9px] text-[#1C1C1A]">
              NA
            </span>
            <span>Nuril Anwar</span>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "PENDIDIKAN" : "EDUCATION"}
          </div>
          <div className="mt-2 text-xs leading-relaxed text-[#3D3A35]">
            {isId ? "Teknik Informatika" : "Informatics Engineering"}
            <br />
            {isId ? "UMS Surakarta (2023–Sekarang)" : "UMS Surakarta (2023–Present)"}
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "KONTAK" : "CONTACT"}
          </div>
          <div className="mt-2 space-y-1 text-xs text-[#3D3A35]">
            <a
              href="mailto:nurillanwarr.2005@gmail.com"
              className="block truncate hover:text-[#8C5E38] hover:underline"
            >
              nurillanwarr.2005@gmail.com
            </a>
            <div className="font-mono text-[11px] text-[#736E65]">
              +62 895-3647-82871
            </div>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "FOKUS UTAMA" : "CORE FOCUS"}
          </div>
          <div className="mt-2 font-mono text-xs text-[#3D3A35]">
            Web · Mobile · LLM
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            BOOTCAMP
          </div>
          <div className="mt-2 font-mono text-xs text-[#3D3A35]">
            Dicoding Full-Stack
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "LOKASI" : "LOCATION"}
          </div>
          <div className="mt-2 font-mono text-xs text-[#3D3A35]">
            Surakarta, Indonesia
          </div>
        </div>

        {/* Baris 2 */}
        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "HUKUM" : "LEGAL"}
          </div>
          <div className="mt-2 font-mono text-[11px] text-[#55534E]">
            &copy; 2026 M. Nuril Anwar
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "INDEKS" : "INDEX"}
          </div>
          <div className="mt-2 flex flex-col gap-1 font-mono text-xs text-[#55534E]">
            <Link href="/" className="hover:text-[#1C1C1A]">
              01 {isId ? "Beranda" : "Home"}
            </Link>
            <Link href="/#projects" className="hover:text-[#1C1C1A]">
              03 {isId ? "Proyek" : "Projects"}
            </Link>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "SOSIAL" : "SOCIAL"}
          </div>
          <div className="mt-2 flex flex-col gap-1 font-mono text-xs text-[#55534E]">
            <a
              href="https://github.com/nurillanwarr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1C1C1A]"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/nurillanwarr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1C1C1A]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            RESUME
          </div>
          <div className="mt-2 font-mono text-xs">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C5E38] hover:text-[#A3724B] hover:underline font-semibold"
            >
              {isId ? "Unduh PDF ↗" : "Download PDF ↗"}
            </a>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            STATUS
          </div>
          <div className="mt-2 flex items-center gap-1.5 font-mono text-xs text-[#8C5E38]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8C5E38] animate-pulse" />
            <span>{isId ? "Tersedia Bekerja" : "Open for Work"}</span>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            {isId ? "REVISI" : "REVISION"}
          </div>
          <div className="mt-2 font-mono text-xs text-[#736E65]">
            v2.6 · {isId ? "Produksi" : "Production"}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ProjectDetailColophon
