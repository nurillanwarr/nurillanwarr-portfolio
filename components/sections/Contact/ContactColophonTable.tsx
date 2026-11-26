"use client"

import React from "react"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { CONTACT_METADATA } from "./constants"

/**
 * Komponen ContactColophonTable
 * Menampilkan tabel kolofon arsitektur 12-kotak (2 baris x 6 kolom):
 * - Baris 1: Office (Mascot 8-bit), Studio, Contact, Sheet, Scale, Revision
 * - Baris 2: Legal, Index, Elsewhere, Drawn, Checked, Return (Scroll back to top)
 */
export const ContactColophonTable: React.FC = () => {
  const t = useTranslations("contact.colophon")
  const tNav = useTranslations("navbar.nav")

  // Smooth scroll to top via Lenis (atau window.scrollTo fallback)
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.5 })
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="overflow-hidden border border-[#1C1C1A]/25 bg-[#FAF6F0]/90 backdrop-blur-sm shadow-xs">
      {/* ROW 1 */}
      <div className="grid grid-cols-2 divide-x divide-[#1C1C1A]/20 border-b border-[#1C1C1A]/20 sm:grid-cols-3 lg:grid-cols-6">
        {/* Cell 1: OFFICE (featuring Retro 8-bit Pixel Mascot!) */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("office")}
          </span>
          <div className="mt-3 flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#8C5E38]">
              {/* Retro 8-bit Invader Mascot Glyph */}
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M5 1h6v2H5V1zm-2 2h2v2H3V3zm10 0h-2v2h2V3zM1 5h2v2H1V5zm14 0h-2v2h2V5zM1 7h14v4H1V7zm2 4h2v2H3v-2zm8 0h2v2h-2v-2zm-6 2h2v2H5v-2zm4 0h2v2H9v-2z" />
              </svg>
            </span>
            <span className="font-sans text-sm font-semibold text-[#1C1C1A]">
              {CONTACT_METADATA.office}
            </span>
          </div>
        </div>

        {/* Cell 2: STUDIO */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("studio")}
          </span>
          <div className="mt-3 font-mono text-xs text-[#3D3B36]">
            <p>{CONTACT_METADATA.studio}</p>
            <p className="text-[#6B6964]">{t("location")}</p>
          </div>
        </div>

        {/* Cell 3: CONTACT */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("contact")}
          </span>
          <div className="mt-3 font-mono text-xs text-[#3D3B36]">
            <a
              href={`mailto:${CONTACT_METADATA.email}`}
              className="text-[#8C5E38] hover:underline"
            >
              {CONTACT_METADATA.email}
            </a>
            <p className="mt-0.5 text-[#6B6964]">{CONTACT_METADATA.phone}</p>
          </div>
        </div>

        {/* Cell 4: SHEET */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("sheet")}
          </span>
          <p className="mt-3 font-mono text-xs font-semibold text-[#1C1C1A]">
            {CONTACT_METADATA.sheetCode}
          </p>
        </div>

        {/* Cell 5: SCALE */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("scale")}
          </span>
          <p className="mt-3 font-mono text-xs text-[#3D3B36]">
            {CONTACT_METADATA.scale}
          </p>
        </div>

        {/* Cell 6: REVISION */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("revision")}
          </span>
          <p className="mt-3 font-mono text-xs text-[#3D3B36]">
            {CONTACT_METADATA.revision}
          </p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-2 divide-x divide-[#1C1C1A]/20 sm:grid-cols-3 lg:grid-cols-6">
        {/* Cell 7: LEGAL */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("legal")}
          </span>
          <div className="mt-3 font-mono text-[11px] leading-relaxed text-[#6B6964]">
            <p>{t("legal")}</p>
            <p className="mt-0.5 text-[10px] text-[#8F8B82]">
              {CONTACT_METADATA.legalNote}
            </p>
          </div>
        </div>

        {/* Cell 8: INDEX */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("index")}
          </span>
          <div className="mt-3 flex flex-col gap-1 font-mono text-xs text-[#3D3B36]">
            <Link href="/#about" className="hover:text-[#8C5E38] hover:underline">
              01 {tNav("about")}
            </Link>
            <Link
              href="/#projects"
              className="hover:text-[#8C5E38] hover:underline"
            >
              02 {tNav("projects")}
            </Link>
            <Link
              href="/#process"
              className="hover:text-[#8C5E38] hover:underline"
            >
              03 {tNav("process")}
            </Link>
            <Link
              href="/#contact"
              className="hover:text-[#8C5E38] hover:underline"
            >
              04 {tNav("contact")}
            </Link>
          </div>
        </div>

        {/* Cell 9: ELSEWHERE */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("elsewhere")}
          </span>
          <div className="mt-3 flex flex-col gap-1 font-mono text-xs text-[#3D3B36]">
            <a
              href={CONTACT_METADATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C5E38] hover:underline"
            >
              GitHub ↗
            </a>
            <a
              href={CONTACT_METADATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C5E38] hover:underline"
            >
              LinkedIn ↗
            </a>
            <a
              href={CONTACT_METADATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C5E38] hover:underline"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Cell 10: DRAWN */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("drawn")}
          </span>
          <p className="mt-3 font-mono text-xs font-semibold text-[#1C1C1A]">
            {CONTACT_METADATA.drawnBy}
          </p>
        </div>

        {/* Cell 11: CHECKED */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            {t("checked")}
          </span>
          <p className="mt-3 font-mono text-xs font-semibold text-[#1C1C1A]">
            {CONTACT_METADATA.checkedBy}
          </p>
        </div>

        {/* Cell 12: RETURN TO TOP */}
        <div className="flex flex-col justify-between p-4 sm:p-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#8C5E38] uppercase">
            RETURN
          </span>
          <button
            type="button"
            onClick={handleScrollToTop}
            className="group mt-3 flex items-center gap-1.5 font-mono text-xs font-semibold text-[#1C1C1A] transition-colors hover:text-[#8C5E38] cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
            <span>{t("returnTop")}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactColophonTable
