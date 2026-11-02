import React from "react"
import { ABOUT_CONTENT } from "./constants"

/**
 * Komponen AboutHeaderStrip
 * Menampilkan bilah anotasi atas bergaya blueprint CAD untuk Section 02 — About
 */
export const AboutHeaderStrip: React.FC = () => {
  return (
    <div className="relative z-10 mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#1C1C1A]/20 pb-3.5 font-mono text-[11px] tracking-[0.14em] uppercase text-[#1C1C1A]/75">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-[#A3724B]">{ABOUT_CONTENT.num}</span>
        <span>{ABOUT_CONTENT.label}</span>
      </div>

      <div className="hidden items-center gap-2 text-[10px] text-[#736E65] md:flex">
        {ABOUT_CONTENT.tags.map((tag, idx) => (
          <React.Fragment key={tag}>
            {idx > 0 && <span className="text-[#A3724B]">•</span>}
            <span>{tag}</span>
          </React.Fragment>
        ))}
      </div>

      <div>
        <span className="text-[10.5px] font-medium text-[#736E65]">
          {ABOUT_CONTENT.sheetCode}
        </span>
      </div>
    </div>
  )
}

export default AboutHeaderStrip
