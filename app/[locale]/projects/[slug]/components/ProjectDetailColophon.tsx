import React from "react"
import { Link } from "@/i18n/navigation"

/**
 * Komponen ProjectDetailColophon (Bagian 3 — Footer Identitas & Kontak Nuril Anwar)
 * Menampilkan footer kolofon bergaya blueprint dengan palet kertas vellum portofolio:
 * - Garis ukur horizontal dengan tanda miring (/) di kedua ujung
 * - Tipografi studio ("N28") beserta identitas Universitas Muhammadiyah Surakarta
 * - Tabel Kolofon 12-Kotak (2 baris x 6 kolom) berisi email, telepon, GitHub, LinkedIn, & Resume PDF
 */
export const ProjectDetailColophon: React.FC = () => {
  return (
    <footer className="mt-20 md:mt-28">
      {/* Garis Dimensi Atas dengan Tanda Slash (/) di Ujung Kiri & Kanan */}
      <div className="relative flex items-center justify-center">
        <div className="relative h-[1px] flex-1 bg-[#1C1C1A]/20">
          <span className="absolute -top-1.5 left-0 h-3 w-[1.2px] rotate-35 bg-[#1C1C1A]/40" />
        </div>
        <span className="px-4 font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#736E65]">
          NURIL ANWAR · FULL-STACK &amp; APPLIED AI DEVELOPER · UMS
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
          <div>FULL-STACK WEB, MOBILE &amp; AI ENGINEER</div>
          <div>SURAKARTA, CENTRAL JAVA</div>
          <div>UNIVERSITAS MUHAMMADIYAH SURAKARTA</div>
        </div>
      </div>

      {/* Tabel Kolofon Blueprint 12-Kotak (2 Baris x 6 Kolom) */}
      <div className="grid grid-cols-2 border-t border-l border-[#1C1C1A]/20 bg-[#FAF6F0] md:grid-cols-6 rounded-2xl overflow-hidden shadow-sm">
        {/* Baris 1 */}
        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            DEVELOPER
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
            EDUCATION
          </div>
          <div className="mt-2 text-xs leading-relaxed text-[#3D3A35]">
            Informatics Engineering
            <br />
            UMS Surakarta (2023–Now)
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            CONTACT
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
            CORE FOCUS
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
            LOCATION
          </div>
          <div className="mt-2 font-mono text-xs text-[#3D3A35]">
            Surakarta, Indonesia
          </div>
        </div>

        {/* Baris 2 */}
        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            LEGAL
          </div>
          <div className="mt-2 font-mono text-[11px] text-[#55534E]">
            &copy; 2026 M. Nuril Anwar
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            INDEX
          </div>
          <div className="mt-2 flex flex-col gap-1 font-mono text-xs text-[#55534E]">
            <Link href="/" className="hover:text-[#1C1C1A]">
              01 Home
            </Link>
            <Link href="/#projects" className="hover:text-[#1C1C1A]">
              03 Projects
            </Link>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            SOCIAL
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
              Download PDF ↗
            </a>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            STATUS
          </div>
          <div className="mt-2 flex items-center gap-1.5 font-mono text-xs text-[#8C5E38]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8C5E38] animate-pulse" />
            <span>Open for Work</span>
          </div>
        </div>

        <div className="border-r border-b border-[#1C1C1A]/20 p-3.5 md:p-4">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
            REVISION
          </div>
          <div className="mt-2 font-mono text-xs text-[#736E65]">
            v2.6 · Production
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ProjectDetailColophon
