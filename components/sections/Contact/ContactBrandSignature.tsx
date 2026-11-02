"use client"

import React from "react"
import { CONTACT_METADATA } from "./constants"

/**
 * Komponen ContactBrandSignature
 * Menampilkan identitas visual arsitektural studio bergaya Oda Arkitekter:
 * - Anotasi garis ukur atas: "3 LETTERS · FULLSTACK AI · EST. 2021"
 * - Tipografi raksasa monolitik "N28"
 * - Koordinat geografis & lokasi studio (Surakarta, ID)
 */
export const ContactBrandSignature: React.FC = () => {
  return (
    <div className="relative">
      {/* Top Header Annotation with Framing Lines */}
      <div className="relative flex items-center justify-between gap-4">
        <div className="h-px flex-1 bg-[#1C1C1A]/20" />
        <p className="font-mono text-[11px] font-medium tracking-[0.25em] text-[#6B6964] uppercase sm:text-xs">
          3 LETTERS · FULLSTACK AI · EST. 2021
        </p>
        <div className="h-px flex-1 bg-[#1C1C1A]/20" />
      </div>

      {/* Giant Architectural Wordmark & Coordinates */}
      <div className="relative my-4 flex flex-col justify-between overflow-hidden md:my-8 lg:flex-row lg:items-end">
        {/* Giant Monolithic Wordmark "N28" */}
        <h1 className="select-none font-serif text-[26vw] font-bold leading-[0.8] tracking-tighter text-[#1C1C1A] transition-colors lg:text-[22vw]">
          N28
        </h1>

        {/* Architectural Coordinates & Location Stamp */}
        <div className="mt-4 flex flex-col items-start gap-1 font-mono text-xs tracking-wider text-[#6B6964] lg:mb-4 lg:items-end lg:text-right">
          <span className="font-semibold text-[#1C1C1A] uppercase">
            ARCHITECTURAL SOFTWARE &amp; APPLIED AI
          </span>
          <span className="text-[#3D3B36] uppercase">
            {CONTACT_METADATA.location}
          </span>
          <span className="text-[#8C5E38] font-medium">
            {CONTACT_METADATA.coordinates}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactBrandSignature
