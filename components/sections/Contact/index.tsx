"use client"

import React from "react"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { ContactGithubActivity } from "./ContactGithubActivity"
import { ContactUnifiedColophon } from "./ContactUnifiedColophon"
import { CONTACT_METADATA } from "./constants"

/**
 * Komponen ContactSection
 * Menggabungkan fitur interaktif terbaik dari portofolio Iqmal dan Oda Arkitekter menjadi SATU alur terpadu:
 * - Bagian 1 (04.A): Coding Activity & 365-day GitHub Contributions telemetry (@nurillanwarr)
 * - Bagian 2 (04.B & Colophon): Kolaborasi harmonis antara:
 *     * Live Ticking WIB Clock (Surakarta, ID)
 *     * Headline monumental "LET'S WORK TOGETHER" & interactive copy email pill + CV download
 *     * Monolithic typography wordmark "N28" & geographic coordinates
 *     * 12-cell Blueprint Colophon Table lengkap (dengan retro 8-bit mascot, indeks, kontak, legal, & return to top)
 */
export const ContactSection: React.FC = () => {
  return (
    <SectionContainer id="contact" className="relative pt-12 pb-24 md:pt-16 md:pb-32">
      {/* Blueprint Header Band */}
      <div className="mb-12 flex flex-col justify-between gap-2 border-b border-[#1C1C1A]/20 pb-4 md:flex-row md:items-baseline">
        <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.22em] text-[#8C5E38] uppercase">
          <span className="font-bold">({CONTACT_METADATA.num})</span>
          <span>{CONTACT_METADATA.sectionLabel}</span>
        </div>
        <div className="font-mono text-[11px] tracking-wider text-[#6B6964] uppercase">
          FULLSTACK ENGINEERING · APPLIED AI · SHEET {CONTACT_METADATA.sheetCode}
        </div>
      </div>

      {/* Bagian 1: GitHub Coding Activity Telemetry */}
      <ContactGithubActivity />

      {/* Bagian 2: Unified Contact & Architectural Colophon */}
      <ContactUnifiedColophon />
    </SectionContainer>
  )
}

export { ContactCta } from "./ContactCta"
export { ContactBrandSignature } from "./ContactBrandSignature"
export { ContactColophonTable } from "./ContactColophonTable"
export { ContactUnifiedColophon } from "./ContactUnifiedColophon"
export { ContactGithubActivity } from "./ContactGithubActivity"
export { CONTACT_METADATA, CONTACT_CONTENT } from "./constants"

export default ContactSection
